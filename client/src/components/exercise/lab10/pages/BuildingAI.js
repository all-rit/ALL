import React, { Fragment, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Simulation from "../components/Simulation";
import {
  EXERCISE_PLAYING,
  MIN_USER_ATTEMPTS,
} from "../../../../constants/lab10";
import { navigate } from "@reach/router";

const BuildingAI = (props) => {
  const [limitReached, setLimitReach] = useState(false);

  /**
   * Update lab state onMount
   */
  useEffect(() => {
    props.actions.updateState(EXERCISE_PLAYING);
    props.actions.disableSimulationCover();
    props.actions.disableUserInput();
    props.actions.idleSimulation();
  }, []);

  /**
   * Update state if the minimum amount user attempts has been reached
   */
  useEffect(() => {
    if (props.userAttempts >= MIN_USER_ATTEMPTS && !limitReached) {
      setLimitReach(true);
    }
  }, [props.userAttempts]);

  /**
   * Redirect the user to the following page
   */
  const handleContinue = () => {
    return navigate("/Lab10/Exercise/BuildingAI/Repair");
  };

  return (
    <div>
      <h1 className={"tw-title tw-text-left"}> Building the AI</h1>
      <div>
        {limitReached ? (
          <Fragment>
            <p className={"tw-body-text tw-my-6"}>
              Notice how nothing happened? The object did not move at all.
              <br />
              Fix this by adding some code that will allow you to move the
              object.
            </p>
            <div>
              <p className={"tw-sub-title tw-text-[1.35rem] tw-font-bold"}>
                Objective: Proceed to the next part of this exercise.
              </p>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p className={"tw-body-text tw-my-6"}>
              Below is the neural network you will be constructing and training
              throughout this exercise. The moving object will need to be
              trained to avoid falling shapes, but before we can reach this
              point, we need to start small and incrementally build the neural
              network. You will start by training the moving object to avoid the
              falling shapes.
            </p>
            <div>
              <p className={"tw-sub-title tw-text-[1.35rem] tw-font-bold"}>
                Objective: Start by moving the object using the on-screen
                buttons or your keyboard. Notice something wrong?
              </p>
            </div>
          </Fragment>
        )}
      </div>
      <Simulation />
      {limitReached && (
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
  const { userAttempts } = state.exercise10;
  return { userAttempts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

BuildingAI.propTypes = {
  actions: PropTypes.object,
  userAttempts: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildingAI);
