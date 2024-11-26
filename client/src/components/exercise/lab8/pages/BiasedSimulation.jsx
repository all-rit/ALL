import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import "../../../../assets/stylesheets/components/Witch.css";
import ChatRoom from "../components/ChatRoom";
import { getMessages } from "../../../../constants/lab8/messages";
import { useLocation } from "@reach/router";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";
import LabButton from "../../../all-components/LabButton";

const BiasedSimulation = () => {
  const { actions } = useMainStateContext();

  const [canContinue, setCanContinue] = useState(false);

  const messageLocation = useLocation();

  const { updatedMessages, repairState } = messageLocation.state;

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleModerationComplete = () => {
    setCanContinue(true);
  };

  const handleContinue = () => {
    // submit user's choice to keep or remove each message to backend via exercise service
    // ExerciseService. ...
    navigate("/Lab8/Exercise/BiasDiscovery");
  };

  return (
    <div className="tw-py-6">
      <div className="exercise-frame tw-w-full tw-aspect-video">
        {repairState ? (
          // Render updatedMessages if repairState is true
          <ChatRoom
            moderationCompleteCallback={handleModerationComplete}
            selectMessages={getMessages}
            messages={updatedMessages} // Pass updatedMessages
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
        <div className="tw-sub-title-styling-name tw-p-4 tw-rounded-lg">
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
