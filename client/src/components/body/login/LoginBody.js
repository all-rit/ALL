import React from "react";
import LoginButton from "../../header/helpers/LoginButton";
import getExerciseState from "../../../helpers/GetReducer";
import { EXERCISE_IDLE } from "../../../constants/lab1";
import useMainStateContext from "../../../reducers/MainContext";
import PropTypes from "prop-types";

const LoginBody = (props) => {
  const { state } = useMainStateContext();
  const loginEnabled =
    state.main.lab === 0 ||
    getExerciseState(state, props.state) === EXERCISE_IDLE ||
    state.main.body !== 2;

  return (
    <div className={"tw-flex tw-flex-col tw-justify-center tw-align-middle"}>
      <div className="tw-font-poppins tw-text-5xl tw-title-styling-name tw-text-primary-blue tw-flex tw-flex-row tw-justify-center tw-align-middle">
        Welcome
      </div>
      <div
        className={
          "tw-font-calibri tw-w-full tw-flex tw-flex-row tw-justify-center"
        }
      >
        <p className={"tw-w-1/2 tw-text-xs"}>
          {" "}
          Continue with Google to complete labs, assign labs as an educator, and
          keep track of scores.{" "}
        </p>
      </div>
      <br />
      <br />
      <br />
      <div
        className={
          "tw-font-calibri tw-w-full tw-flex tw-flex-row tw-justify-center tw-align-middle"
        }
      >
        <p
          className={
            "tw-w-1/2 tw-text-xs tw-flex tw-flex-row tw-justify-center"
          }
        >
          {" "}
          Sign Up or Log In{" "}
        </p>
      </div>
      <div className="tw-flex tw-flex-row tw-justify-center tw-align-middle">
        <LoginButton enabled={loginEnabled} />
      </div>
    </div>
  );
};

LoginBody.propTypes = {
  state: PropTypes.shape({}),
};

export default LoginBody;
