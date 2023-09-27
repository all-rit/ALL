import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import { navigate } from "@reach/router";
import "../../../../assets/stylesheets/components/Witch.css";
import { EXERCISE_PLAYING } from "../../../../constants/lab8";
import ChatRoom from "../components/ChatRoom";
import { getMessages } from "../../../../constants/lab8/messages";
import { useLocation } from "@reach/router";
import PropTypes from "prop-types";

const BiasedSimulation = (props) => {
  const { actions } = props;

  const [canContinue, setCanContinue] = useState(false);

  const messageLocation = useLocation();

  const { updatedMessages, repairState } = messageLocation.state;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
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
    <div className="">
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
        <div className="tw-text-[#408a28] tw-text-[18px]">
          <b>
            All messages have been moderated! Please click the
            &quot;Continue&quot; button.
          </b>
        </div>
      )}
      <button
        className="btn btn-primary text-uppercase tw-mt-4"
        onClick={handleContinue}
        disabled={!canContinue}
      >
        Continue
      </button>
    </div>
  );
};

BiasedSimulation.propTypes = {
  actions: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(BiasedSimulation);
