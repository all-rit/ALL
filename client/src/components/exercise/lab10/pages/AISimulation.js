import React from "react";
import Simulation from "../components/Simulation";
import { useEffect } from "react";
import { EXERCISE_PLAYING } from "../../../../constants/lab10";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AISimulation = (props) => {
  /**
   * Executed on mount
   */
  useEffect(() => {
    props.actions.updateState(EXERCISE_PLAYING);
    props.actions.idleSimulation(true);
    props.actions.enableAI();
  }, []);

  return (
    <div>
      <Simulation />
    </div>
  );
};

const mapStateToProps = () => {
  // const { userAttempts, trainingDuration, simulationStatus } = state.exercise10;
  // return {
  //     userAttempts,
  //     trainingDuration,
  //     simulationStatus,
  // };
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

AISimulation.propTypes = {
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AISimulation);
