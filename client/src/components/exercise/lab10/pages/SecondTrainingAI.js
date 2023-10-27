import React, { useEffect } from "react";
import useScroll from "../../../../use-hooks/useScroll";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  EXERCISE_PLAYING,
  SIMULATION_ENDED,
  SIMULATION_IDLE,
  SIMULATION_STARTED,
} from "../../../../constants/lab10";
import Simulation from "../components/Simulation";
import { navigate } from "@reach/router";

const SecondTrainingAI = (props) => {
  useScroll();

  /**
   * Executed on mount
   */
  useEffect(() => {
    props.actions.updateState(EXERCISE_PLAYING);
    props.actions.enableSimulationCover();
    props.actions.idleSimulation();
    props.actions.enableCollectWeights();
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
   */
  const handleContinue = () => {
    return navigate("/Lab10/Exercise/GeneratedData");
  };

  return (
    <div>
      {props.simulationStatus === SIMULATION_IDLE && (
        <div>
          <p className={"playthrough__sentence"}>
            Clearly, the AI had a bias towards a specific color. While the
            context of the bias is within a simulation game, unwanted bias can
            be problematic because it can lead to unfair discrimination in a
            system, resulting in the reduction of trust towards AI.
          </p>
          <p className={"playthrough__sentence"}>
            Attempt to eliminate this bias by establishing an equal distribution
            of weights among the colored shapes. In other words, ensure all
            colored shapes are hit an equal number of times. This will
            inherently eliminate the bias.
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
              Objective: Eliminate bias by hitting all colored shapes an equal
              number of times.
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
  const { simulationStatus } = state.exercise10;
  return {
    simulationStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

SecondTrainingAI.propTypes = {
  simulationStatus: PropTypes.string,
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondTrainingAI);
