import React from "react";
import { navigate } from "@reach/router";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useScroll from "../../../../use-hooks/useScroll";

const BuildingAIRepair = (props) => {
  useScroll();

  /**
   * Redirect the user to the following page
   * @returns {Promise} navigate promise
   */
  const handleContinue = () => {
    props.actions.resetUserAttempts();
    return navigate("/Lab10/Exercise/TrainingAI");
  };

  return (
    <div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase"
        onClick={handleContinue}
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

BuildingAIRepair.propTypes = {
  actions: PropTypes.object,
};

export default connect(null, mapDispatchToProps)(BuildingAIRepair);
