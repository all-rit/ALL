import React, { useContext, useEffect } from "react";
import { navigate } from "@reach/router";

import {
  CHAT_MESSAGES,
  NAV_BIASED_SIMULATION,
} from "../../../../constants/lab8";

import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";
import LabButton from "../../../all-components/LabButton";
import ExerciseStateContext from "../Lab8Context";

const ExerciseStart = () => {
  const { actions } = useMainStateContext();
  const { setRepairState, setPolaritiesCorrect, setCurrentMessages } =
    useContext(ExerciseStateContext);

  const resetContext = () => {
    setRepairState(false);
    setPolaritiesCorrect(false);
    setCurrentMessages(CHAT_MESSAGES.messages);
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
    resetContext();
  }, []);

  const handleStart = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate(NAV_BIASED_SIMULATION);
  };

  return (
    <>
      <div className="center-div tw-p-6">
        <h1 className={"tw-title tw-text-left"}>Exercise Start</h1>
        <div className="tw-my-6">
          <p className="tw-body-text">
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

          <p className="tw-body-text tw-my-6">
            Beside each chat message, you will see a recommendation from the AI,
            followed by buttons to either remove the message or keep it.
          </p>
        </div>

        <p className="tw-body-text tw-my-6">
          Click the &apos;<span className={"tw-font-bold"}>Start</span>&apos;
          button to move on to the simulation!
        </p>
        <LabButton onClick={handleStart} key="start" label={"Start"} />
      </div>
    </>
  );
};

export default ExerciseStart;
