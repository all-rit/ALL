import React, { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import ImagineService from "src/services/ImagineService";
import TeammateVideo from "../components/TeammateVideo";
import { navigate } from "@reach/router";
import DisplayDeepFake from "../components/DisplayDeepfake";
import PropTypes from "prop-types";

const ControlGroupOutcome = () => {
  return (
    <>
      <div className="tw-flex tw-flex-col tw-gap-4">
        <h4 className="tw-title tw-text-center">Congratulations!</h4>
        <h5 className="tw-text-center"> You and your teammate won the game!</h5>
        <p className="tw-text-center">
          Please continue and collect your prize!
        </p>
      </div>
    </>
  );
};

const Analysis = (props) => {
  const { teammateId, showVideo, status } = props;
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const result = await ImagineService.getGroup(
          sessionStorage.getItem("userID"),
          26,
        );
        setGroup(result);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchGroup();
  }, []);

  const fetchContent = () => {
    console.log(group);
    if (loading) return <div className="tw-py-10">Loading ..</div>;

    if (group === "control" || !group) {
      showVideo();
    }

    //using map instead of "code smell" switch statment ft - Professor Bobby (st.Jaques or something like that)
    const activity = {
      experiential: (
        <DisplayDeepFake
          teammateId={teammateId}
          isExperential={true}
          toggleAction={showVideo}
        />
      ),
      expression: (
        <DisplayDeepFake
          teammateId={teammateId}
          isExperential={false}
          toggleAction={showVideo}
        />
      ),
      control: <ControlGroupOutcome />,
    };

    return (
      <div>
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-8 tw-w-full">
          <div className="tw-w-full">
            {activity[group] || activity["control"]}
          </div>

          {(status === "groupVideo" || group === "control" || !group) && (
            <Button
              className="tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
       tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black"
              //alert model should pop up and deepfake should be shown
              onClick={handleNavigation}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    );
  };

  const handleNavigation = async () => {
    const isUnderAge = sessionStorage.getItem("isUnderAge");
    const surveyConsent = JSON.parse(
      sessionStorage.getItem("phdConsent") || "false",
    );
    if (isUnderAge === "true" || surveyConsent == false) {
      console.log("is not underage");
      console.log(isUnderAge);
      navigate("/Imagine2026/Done");
    } else {
      navigate("/Imagine2026/ReadingSection");
    }
  };

  return (
    //container aligns everything horizontally
    <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center">
      {fetchContent()}
    </div>
  );
};

Analysis.propTypes = {
  teammateId: PropTypes.number.isRequired,
  showVideo: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

const ScorePage = (props) => {
  const { onClick } = props;
  //Random score that will be generated for both teams
  const totalUserScore = Math.floor(Math.random() * 1000 + 500);

  const userScore = Math.floor(
    Math.random() * (totalUserScore * 0.6) + totalUserScore * 0.2,
  );
  const teammateScore = totalUserScore - userScore;

  /*opponent score will always be less than user score, but never less than 475
      This is done so that the game seems realistically close*/
  const totalOpponentScore = Math.floor(
    Math.random() * (totalUserScore * 0.8) + totalUserScore * 0.2,
  );

  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-full tw-p-4">
        <h3 className="tw-title text-center">Game Outcome</h3>
        <div className="tw-grid tw-grid-cols-2 tw-pt-8 tw-justify-center">
          <div className="tw-my-20 tw-body-text tw-mx-auto">
            <div className="tw-font-bold">
              Overall Team Score: {userScore + teammateScore}
            </div>
            <div>Your Score: {userScore}</div>
            <div>Your Teammate Score: {teammateScore}</div>
          </div>

          <div className="tw-my-20 tw-body-text tw-mx-auto">
            <div className="tw-font-bold ">
              Overall Opponent Score: {totalOpponentScore}
            </div>
          </div>
        </div>

        <Button
          className="tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
       tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black"
          //alert model should pop up and deepfake should be shown
          onClick={onClick}
        >
          End Game
        </Button>
      </div>
    </>
  );
};

ScorePage.propTypes = {
  onClick: PropTypes.func,
};

const Game = () => {
  const [status, setStatus] = useState("game");

  const contentSizing =
    "tw-border tw-rounded-xl tw-w-[46vw] tw-h-[39vw] tw-h-[40vw] xxl:tw-h-[600px] xxl:tw-w-[800px]";

  const iframeRef = useRef(null);

  const [seconds, setSeconds] = useState(60);

  const [teammateId, setTeammateId] = useState(1);

  //Checks the iframe ref to see if anything exists, when the iframe fully loads, immediately focus it
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const focusIframe = () => {
        iframe.focus();
      };

      iframe.addEventListener("load", focusIframe);

      return () => iframe.removeEventListener("load", focusIframe);
    }
  }, []);

  //When page loads timer starts that counts down from 60->0
  useEffect(() => {
    if (iframeRef.current) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(timer);
            setStatus("scorePage");
            return 0;
          }

          return prevSeconds - 1;
        });
      }, 100);
      return () => clearInterval(timer);
    }
  }, [iframeRef]);

  useEffect(() => {
    //for testing purposes we can change the teammate id to 1 since we have 1 video, when we have all videos we need to uncomment the code below
    // const id = Math.floor(Math.random() * 4);
    setTeammateId(1);
  }, []);

  return (
    //flex container used to center game vertically, dimensions are slightly different than content sizing for scaling purposes
    <div>
      <div
        className={
          contentSizing +
          (status == "game"
            ? "tw-justify-left tw-flex tw-items-center tw-relative tw-bg-[black]"
            : "tw-pt-[7rem]")
        }
      >
        {status == "game" && (
          <iframe
            ref={iframeRef}
            src="https://microstudio.io/Imagine2025/galaga/6GZNBHTD/"
            className={contentSizing}
          />
        )}

        {status == "scorePage" && (
          <ScorePage
            onClick={() => setStatus("analysis")}
            className={contentSizing}
          />
        )}

        {(status === "analysis" || status === "groupVideo") && (
          <Analysis
            teammateId={teammateId}
            status={status}
            showVideo={() => setStatus("groupVideo")}
          />
        )}

        {/*Not sure if tailwind can support custom styling so "timerFont" is in a css file */}
        <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white timerFont">
          <div>{seconds}</div>
        </div>
      </div>

      <TeammateVideo teammateId={teammateId} status={status} />
    </div>
  );
};

export default Game;
