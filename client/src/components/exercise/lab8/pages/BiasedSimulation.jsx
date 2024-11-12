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

      {canContinue && (
        <div className="tw-text-[#408a28] tw-text-[18px] tw-py-4">
          <b>
            All messages have been moderated! Please click the
            &quot;Continue&quot; button.
          </b>
        </div>
      )}
      <LabButton
        onClick={handleContinue}
        disabled={!canContinue}
        label={"Continue"}
      />
    </div>
  );
};

export default BiasedSimulation;
