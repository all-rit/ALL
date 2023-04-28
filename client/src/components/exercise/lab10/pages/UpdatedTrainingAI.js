import React from "react";
import Simulation from "../components/Simulation";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import {
    SIMULATION_ENDED,
    SIMULATION_IDLE,
    SIMULATION_STARTED,
} from "../../../../constants/lab10";

/**
   * Redirect the user to the AIBias code block
   */
const handleContinue = () => {
    return navigate("/Lab10/Exercise/AIBias");
};

const UpdatedTraining = (props) => {
    return (
        <div>
            {props.simulationStatus === SIMULATION_IDLE && (
                <div>
                    <p className={"playthrough__sentence"}>
                        The simulation has been updated to distribute the biases equally, resulting
                        in a fairer AI compared to previous simulations.
                        To observe the difference, please try the simulation again.
                    </p>
                    <div>
                        <p className={"tw-text-xl tw-font-bold"}>
                            Click <i>Start</i> to commence the training exercise.
                        </p>
                    </div>
                </div>
            )}
            {props.simulationStatus === SIMULATION_STARTED && (
                <div>
                    <div>
                        <p className={"tw-text-xl tw-font-bold"}>
                            Avoid the falling shapes.
                        </p>
                    </div>
                </div>
            )}
            {props.simulationStatus === SIMULATION_ENDED && (
                <div>
                    <div>
                        <p className={"tw-text-xl tw-font-bold"}>
                            Proceed to the next part of this exercise.
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

UpdatedTraining.propTypes = {
    userAttempts: PropTypes.number,
    trainingDuration: PropTypes.number,
    simulationStatus: PropTypes.string,
    actions: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdatedTraining);
