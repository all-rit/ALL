import React, { useEffect } from "react";
import { navigate } from "@reach/router";

import {
  NAV_BIASED_SIMULATION,
} from "../../../../constants/lab8";

import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

const ExerciseStart = () => {
  const { actions } = useMainStateContext();
  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  const handleStart = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate(NAV_BIASED_SIMULATION);
  };

  return (
    <>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <p className="playthrough__sentence">
            In this exercise, you are taking the role of a chat moderator for a
            live stream, the streamer for which has recently taken a break and
            is away from their computer. You are testing a new moderation tool
            which uses AI to detect if a message should be removed for being
            inappropriate.{" "}
            <strong>
              Your task is to monitor the live chat and either keep or remove
              messages based on their level of appropriateness. You should take
              the AI’s recommendation into consideration for each message.
            </strong>
          </p>

          <p className="playthrough__sentence">
            Beside each chat message, you will see a recommendation from the AI,
            followed by buttons to either remove the message or keep it.
          </p>
        </div>

        <p className="playthrough__sentence">
          Click the &apos;<span className={"tw-font-bold"}>Start</span>&apos;
          button to move on to the simulation!
        </p>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleStart}
          key="start"
        >
          Start
        </button>
      </div>
    </>
  );
};

export default ExerciseStart;
