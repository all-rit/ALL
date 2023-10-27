import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Simulation from "../components/Simulation";
import {
  EXERCISE_PLAYING,
  SIMULATION_ENDED,
  SIMULATION_IDLE,
  SIMULATION_STARTED,
} from "../../../../constants/lab10";
import useScroll from "../../../../use-hooks/useScroll";
import { navigate } from "@reach/router";

const UpdatedTrainingAI = (props) => {
  useScroll();

  useEffect(() => {
    props.actions.updateState(EXERCISE_PLAYING);
    props.actions.idleSimulation();
  }, []);

  useEffect(() => {
    switch (props.simulationStatus) {
      case SIMULATION_IDLE:
        props.actions.enableSimulationCover();
        props.actions.disableUserInput();
        break;
      case SIMULATION_STARTED:
        props.actions.enableUserInput();
        props.actions.disableSimulationCover();
        break;
    }
  }, [props.simulationStatus]);

  /**
   * Redirect the user to the following page
   * @returns {Promise} navigate promise
   */
  const handleContinue = () => {
    return navigate("/Lab10/Exercise/AISimulation");
  };

  return (
    <div>
      {props.simulationStatus === SIMULATION_IDLE && (
        <div>
          <p className={"playthrough__sentence"}>
            With the updated duration time, re-run the simulation and collect
            more data for the neural network.
          </p>
          <div>
            <p className={"tw-text-xl tw-font-bold"}>
              Objective: Click <i>Start</i> to commence the training exercise.
            </p>
          </div>
        </div>
      )}
      {props.simulationStatus === SIMULATION_STARTED && (
        <div>
          <div>
            <p className={"tw-text-xl tw-font-bold"}>
              Objective: Avoid the falling shapes.
            </p>
          </div>
        </div>
      )}
      {props.simulationStatus === SIMULATION_ENDED && (
        <div>
          <div>
            <p className={"tw-text-xl tw-font-bold"}>
              Objective: Proceed to the next part of this exercise.
            </p>
          </div>
        </div>
      )}
      <Simulation />
      {props.simulationStatus === SIMULATION_ENDED && (
        <div className={"tw-mt-6 tw-flex tw-justify-end"}>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { userAttempts, trainingDuration, simulationStatus } = state.exercise10;
  return {
    userAttempts,
    trainingDuration,
    simulationStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

UpdatedTrainingAI.propTypes = {
  userAttempts: PropTypes.number,
  trainingDuration: PropTypes.number,
  simulationStatus: PropTypes.string,
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatedTrainingAI);
