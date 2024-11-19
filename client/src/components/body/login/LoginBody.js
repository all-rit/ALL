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
    <div
      className={
        "tw-flex tw-flex-col tw-align-middle tw-h-full tw-justify-center"
      }
    >
      <div className="xs:tw-text-md tw-font-poppins sm:tw-text-3xl md:lg:tw-text-5xl tw-title-styling-name tw-text-primary-blue tw-flex tw-flex-row tw-justify-center tw-align-middle">
        Welcome
      </div>
      <div
        className={
          "tw-font-calibri tw-w-full tw-flex tw-flex-row tw-justify-center"
        }
      >
        <p
          className={
            "sm:md:lg:tw-w-1/2 xs:tw-w-full sm:md:lg:tw-text-xs xs:tw-text-[0.75rem] tw-m-5"
          }
        >
          {" "}
          Continue with Google to complete labs, assign labs as an educator, and
          keep track of scores.{" "}
        </p>
      </div>

      <div
        className={
          "tw-font-calibri tw-w-full tw-flex tw-flex-row tw-justify-center tw-align-middle"
        }
      >
        <p
          className={
            "tw-w-1/2 tw-mt-5 tw-text-xs tw-flex tw-flex-row tw-justify-center xs:tw-text-[0.75rem]"
          }
        >
          {" "}
          Sign Up or Log In{" "}
        </p>
      </div>
      <div className="tw-flex tw-flex-row tw-justify-center tw-align-middle xs:tw-w-full">
        <LoginButton enabled={loginEnabled} />
      </div>
    </div>
  );
};

LoginBody.propTypes = {
  state: PropTypes.shape({}),
};

export default LoginBody;
