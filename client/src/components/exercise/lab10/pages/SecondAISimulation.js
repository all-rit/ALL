import useScroll from "src/use-hooks/useScroll";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import {
  EXERCISE_PLAYING,
  SIMULATION_ENDED,
  SIMULATION_IDLE,
  SIMULATION_STARTED,
} from "../../../../constants/lab10";
import { navigate } from "@reach/router";
import Simulation from "../components/Simulation";

const SecondAISimulation = (props) => {
  useScroll();

  /**
   * Update lab state onMount
   */
  useEffect(() => {
    props.actions.updateState(EXERCISE_PLAYING);
    props.actions.idleSimulation();
    props.actions.disableCollectWeights();
  }, []);

  /**
   * Enable/Disable properties based on the SIMULATION state
   */
  useEffect(() => {
    switch (props.simulationStatus) {
      case SIMULATION_IDLE:
        props.actions.disableUserInput();
        props.actions.enableSimulationCover();
        break;
      case SIMULATION_STARTED:
        props.actions.enableAI();
        props.actions.disableCollectWeights();
        break;
      case SIMULATION_ENDED:
        props.actions.disableAI();
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
            With the newly generated data, view how the AI performs! Remember,
            compared to humans, computers are very quick at calculating and
            solving complex problems. You will notice the AI&apos;s response to
            be very quick!
          </p>
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

SecondAISimulation.propTypes = {
  simulationStatus: PropTypes.string,
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondAISimulation);
