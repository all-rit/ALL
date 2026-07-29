import React, { useState, useEffect, useContext } from "react";
import { navigate } from "@reach/router";
import "../../../../assets/stylesheets/components/Witch.css";
import ChatRoom from "../components/ChatRoom";
import { getMessages } from "../../../../constants/lab8/messages";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";
import LabButton from "../../../all-components/LabButton";
import ExerciseStateContext from "../Lab8Context";

const BiasedSimulation = () => {
  const { actions } = useMainStateContext();
  const { repairState, polaritiesCorrect, currentMessages } =
    useContext(ExerciseStateContext);

  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleModerationComplete = () => {
    setCanContinue(true);
  };

  const handleContinue = () => {
    // submit user's choice to keep or remove each message to backend via exercise service
    // ExerciseService. ...
    const next = polaritiesCorrect
      ? "/Lab8/Exercise/SuccessfulAnalysis"
      : "/Lab8/Exercise/BiasDiscovery";
    navigate(next);
  };

  return (
    <div className="tw-py-6 tw-relative tw-h-[35rem]">
      <div className="exercise-frame tw-w-full tw-aspect-video">
        {repairState ? (
          // Render updatedMessages if repairState is true
          <ChatRoom
            moderationCompleteCallback={handleModerationComplete}
            selectMessages={getMessages}
            messages={currentMessages} // Pass updatedMessages
          />
        ) : (
          // Render the old messages if repairState is false
          <ChatRoom
            moderationCompleteCallback={handleModerationComplete}
            selectMessages={getMessages}
          />
        )}
      </div>
      <div
        className={`tw-rounded-lg tw-absolute tw-top-[20%] tw-right-[5%] tw-bg-white tw-w-[50%] tw-py-6 tw-flex tw-flex-col tw-justify-center tw-items-center ${!canContinue && "tw-hidden"}`}
      >
        <div className="tw-sub-title tw-p-4 tw-rounded-lg">
          <b>
            All messages have been moderated! Please click the{" "}
            <strong>Continue</strong> button.
          </b>
        </div>
        <LabButton onClick={handleContinue} label={"Continue"} />
      </div>
    </div>
  );
};

export default BiasedSimulation;
