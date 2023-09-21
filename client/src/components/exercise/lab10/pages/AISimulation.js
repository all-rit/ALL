import React from "react";
import Simulation from "../components/Simulation";
import { useEffect } from "react";
import {
  EXERCISE_PLAYING,
  SIMULATION_ENDED,
  SIMULATION_IDLE,
  SIMULATION_STARTED,
} from "../../../../constants/lab10";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

const AISimulation = (props) => {
  /**
   * Executed on mount
   */
  useEffect(() => {
    props.actions.updateState(EXERCISE_PLAYING);
    props.actions.idleSimulation(true);
    props.actions.enableAI();
  }, []);

  /**
   * Redirect the user to the following page
   * @returns {Promise} navigate promise
   */
  const handleContinue = () => {
    return navigate("/Lab10/Exercise/TrainingAI/Repair");
  };

  return (
    <div>
      {props.simulationStatus === SIMULATION_IDLE && (
        <div>
          <p className={"playthrough__sentence"}>Something here</p>
          <div>
            <p className={"tw-text-xl tw-font-bold"}>
              Objective: Click <i>Start</i> to commence the AI Simulation.
            </p>
          </div>
        </div>
      )}
      {props.simulationStatus === SIMULATION_STARTED && (
        <div>
          <div>
            <p className={"tw-text-xl tw-font-bold"}>
              Objective: Observe the AI Simulation.
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
  const { trainingDuration, simulationStatus, ai } = state.exercise10;
  return {
    trainingDuration,
    simulationStatus,
    ai,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

AISimulation.propTypes = {
  actions: PropTypes.object,
  trainingDuration: PropTypes.number,
  simulationStatus: PropTypes.string,
  ai: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(AISimulation);
