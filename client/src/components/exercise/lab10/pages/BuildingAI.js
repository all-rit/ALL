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
import KeyboardGuide from "../components/KeyboardGuide";
import { navigate } from "@reach/router";
import useScroll from "../../../../use-hooks/useScroll";

const BuildingAI = (props) => {
  useScroll();
  const [limitReached, setLimitReach] = useState(false);

  /**
   * Update lab state onMount
   */
  useEffect(() => {
    props.actions.updateState(EXERCISE_PLAYING);
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
   * @returns {Promise} navigate promise
   */
  const handleContinue = () => {
    return navigate("/Lab10/Exercise/BuildingAI/Repair");
  };

  return (
    <div>
      <div>
        {limitReached ? (
          <Fragment>
            <p className={"playthrough__sentence"}>
              Notice how nothing occurred? The object did not move at all.
              <br />
              Fix this by adding some code that will allow you to move the
              object.
            </p>
            <div>
              <p className={"tw-text-xl tw-font-bold"}>
                Proceed to the next part of this exercise.
              </p>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p className={"playthrough__sentence"}>
              Below is the neural network you will be constructing and training
              throughout this exercise. The moving object will need to be
              trained to avoid falling shapes, but before we can reach this
              point, we need to start small and incrementally build the neural
              network. You will start by training the moving object to avoid the
              falling shapes.
            </p>
            <div>
              <p className={"tw-text-xl tw-font-bold"}>
                Start by moving the object using the on-screen buttons or your
                keyboard.
              </p>
            </div>
          </Fragment>
        )}
      </div>
      <Simulation />
      {limitReached ? (
        <div className={"tw-mt-6 tw-flex tw-justify-end"}>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      ) : (
        <KeyboardGuide />
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
