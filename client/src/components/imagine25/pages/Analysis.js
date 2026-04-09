import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import ImagineService from "src/services/ImagineService";
import TeammateVideo from "../components/TeammateVideo";
import AnalysisMessage from "../components/AnalysisMessage";
import GameOutcome from "../components/GameOutcome";
import { navigate } from "@reach/router";
import { Chat } from "src/components/all-components/imagine-components/Chat";

const Analysis = () => {
  const [teammateId, setTeammateId] = useState(null);
  const [showScores, setShowScores] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);
  const [teammateChatShown, setTeammateChatShown] = useState(false);
  const [responded, setResponded] = useState(false);

  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const handleNext = async () => {
    const isUnderAge = sessionStorage.getItem("isUnderAge");

    if (isUnderAge === "true") {
      navigate("/Imagine2025/Done");
    } else if (teammateChatShown && responded) {
      navigate("/Imagine2025/PostSurvey");
    } else {
      setTeammateChatShown(true);
    }
  };

  const onSubmitResponse = async (response) => {
    await ImagineService.updateTeammateChat2025(
      sessionStorage.getItem("userID"),
      response,
    );
    setResponded(true);
  };

  useEffect(() => {
    const fetchTeammateID = async () => {
      const id = await ImagineService.getTeammate(
        sessionStorage.getItem("userID"),
        25,
      );
      setTeammateId(id);
    };

    const fetchContent = async () => {
      // yoink that user data
      const user = await ImagineService.getUserByID(
        sessionStorage.getItem("userID"),
        25,
      );

      // pastel yellow and blue annoyingly are stored in their key forms and need to be re-converted to a readable form
      const colorMap = {
        Gray02: "Gray",
        Black: "Black",
        Blue03: "Blue",
      };

      const titles = {
        experiential: "Analysis Error (analysis.js:44)",
        expression: "Analysis Error (analysis.js:45)",
        control: "Win Recorded",
      };

      // using map instead of "code smell" switch statment ft - Professor Bobby (st.Jaques or something like that)
      const messages = {
        experiential:
          "Parsing error #343: Cannot Process Player User's \"" +
          colorMap[user.avatar.clotheColor].toLowerCase() +
          '" shirt. Your points cannot be added due to error. Your team has been disqualified.',
        expression:
          "Parsing error #343: Cannot Process Teammate User's  \"" +
          colorMap[user.teammateAvatar.clotheColor].toLowerCase() +
          "\" shirt. Your teammate's points cannot be added due to error. Your team has been disqualified.",
        control:
          "Congrats on winning! You may collect a prize after completing the post survey for being so awesome sauce.",
      };

      const error = {
        experiential: true,
        expression: true,
        control: false,
      };

      setTitle(titles[user.section] || titles["control"]);
      setMessage(messages[user.section] || messages["control"]);
      setError(error[user.section] || error["control"]);
    };

    fetchTeammateID();
    fetchContent();
  }, []);

  return (
    <div>
      {/* Game Outcome */}
      <div className={showScores ? "" : "tw-hidden"}>
        <GameOutcome />
      </div>

      {/* Video feed */}
      <div className={showScores ? "tw-hidden" : ""}>
        <div className="tw-w-[50%] tw-aspect-video tw-mx-auto">
          <TeammateVideo teammateId={teammateId} messageShown={true} />
          <p>
            Teammate live from: <b>Buffalo, NY</b>
          </p>
        </div>
      </div>

      {/* Content below video feed */}
      <div className="tw-w-[50%] tw-mx-auto">
        {teammateChatShown ? (
          <Chat
            onSubmit={onSubmitResponse}
            width="600"
            height="175"
            teammateMessage="Testing 123!"
          />
        ) : (
          <AnalysisMessage
            title={title}
            message={message}
            error={error}
            acknowledged={acknowledged}
            setAcknowledged={setAcknowledged}
          />
        )}
      </div>

      {/* Show Scores button */}
      <Button
        className="tw-absolute tw-left-10 tw-bottom-40 tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
        tw-border-[0.4rem] tw-border-r-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black"
        onClick={() => setShowScores((prev) => !prev)}
      >
        Show Scores
      </Button>

      {/* Next button */}
      <Button
        className="tw-absolute tw-right-10 tw-bottom-40 tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[8rem] tw-h-[3rem]
        tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black"
        onClick={handleNext}
        disabled={!acknowledged || (teammateChatShown && !responded)}
      >
        Next
      </Button>

      {/* Possible errors below the Next button */}
      {!acknowledged ? (
        <p className="tw-w-[12rem] tw-absolute tw-right-10 tw-bottom-20 tw-body-text tw-text-right tw-text-error">
          Please acknowledge the message to proceed.
        </p>
      ) : (
        ""
      )}
      {teammateChatShown && !responded ? (
        <p className="tw-w-[12rem] tw-absolute tw-right-10 tw-bottom-20 tw-body-text tw-text-right tw-text-error">
          Please respond to your teammate&apos;s question to proceed.
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Analysis;
