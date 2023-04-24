/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */

import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import { navigate } from "@reach/router";
// import { navigate } from "@reach/router";

import "../../../../assets/stylesheets/components/Witch.css";
import { EXERCISE_PLAYING } from "../../../../constants/lab8";

import ChatRoom from "../components/ChatRoom";
// import ExerciseService from "../../../../services/lab8/ExerciseService";
import { selectMessagesAiBias } from "../selectMessagesFns";

const BiasedSimulation = (props) => {
  const { actions } = props;

  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  const handleModerationComplete = () => {
    setCanContinue(true);
  };

  const handleContinue = () => {
    // submit choices to backend via exercise service
    // ExerciseService. ...
    navigate("/Lab8/Exercise/BiasDiscovery");
  };

  return (
    <div className="">
      <div
        className="exercise-frame tw-w-full tw-aspect-video"
        // style={{ opacity: 0.5 }}
      >
        <ChatRoom
          moderationCompleteCallback={handleModerationComplete}
          selectMessages={selectMessagesAiBias}
        />
        {/* right now the div contains a background image */}
      </div>

      {canContinue && (
        <div className="tw-text-[#408a28] tw-text-[18px]">
          <b>All messages have been moderated, please click `continue`.</b>
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(BiasedSimulation);
