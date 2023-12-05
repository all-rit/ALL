import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { EXERCISE_IDLE, LAB_ID } from "src/constants/lab9/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as exerciseActions } from "../../../../reducers/lab9/ExerciseReducer";
import UserLabService from "src/services/UserLabService";

import PropTypes from "prop-types";

const Conclusion = (props) => {
  const { actions, user } = props;

  const handleFinish = () => {
    // navigate to the reinforcement section
    actions.updateState(EXERCISE_IDLE);
    navigate("/Lab9/Reinforcement");
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
  };

  useEffect(() => {
    actions.updateState(EXERCISE_IDLE);
  }, []);

  return (
    <>
      <div className="center-div">
        <h2 className="playthrough__title">You Did It!</h2>
        <div className="playthrough__sentence">
          You have completed the exercise for the Accessible to Localization
          Lab. Your takeaways from this exercise should include:
        </div>
        <div className="playthrough__sentence">
          1. Recognize the importance of accessible software for non-English
          speakers.
        </div>
        <div className="playthrough__sentence">
          2. Consider all cultures and locales when designing accessible
          software.
        </div>
        <div className="playthrough__sentence">
          3. Consider all aspects of software during the localization process,
          including color, text, images, and more.
        </div>
      </div>
      <br />
      <div className="playthrough__sentence">
        Click the &#39;Continue&#39; button to continue to the Reinforcement
        section of the lab.
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleFinish}
        key="start"
      >
        Continue
      </button>
    </>
  );
};

Conclusion.propTypes = {
  actions: PropTypes.string,
  user: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Conclusion);
