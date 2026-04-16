import React from "react";
import LoginButton from "../../header/helpers/LoginButton";
import getExerciseState from "../../../helpers/GetReducer";
import { EXERCISE_IDLE } from "../../../constants/lab1";
import useMainStateContext from "../../../reducers/MainContext";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../../reducers/MainReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

const LoginBody = (props) => {
  const { state } = useMainStateContext();
  const loginEnabled =
    state.main.lab === 99 ||
    getExerciseState(state, props.state) === EXERCISE_IDLE ||
    state.main.body !== 2 ||
    props.state.main.body !== 2;

  return (
    <div
      className={
        "tw-flex tw-flex-col tw-align-middle tw-h-full tw-justify-center"
      }
    >
      <div className="xs:tw-text-md tw-font-poppins sm:tw-text-3xl md:lg:tw-text-5xl tw-title tw-text-primary-blue tw-flex tw-flex-row tw-justify-center tw-align-middle">
        Welcome
      </div>
      <div
        className={
          "tw-font-calibri tw-w-full tw-flex tw-flex-row tw-justify-center"
        }
      >
        <p
          className={
            "sm:tw-w-1/2 xs:tw-w-full xs:tw-text-xs md:tw-body-text md:tw-text-[1.125rem] tw-leading-snug tw-text-center tw-m-5"
          }
        >
          {" "}
          Continue with Google to complete labs, assign labs as an educator, and
          keep track of scores.{" "}
        </p>
      </div>

      <div
        className={
          "tw-font-calibri tw-w-full tw-flex tw-flex-row tw-justify-center tw-align-middle tw-pb-2"
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
        <LoginButton enabled={loginEnabled} closeModal={props.closeModal} />
      </div>
    </div>
  );
};

LoginBody.propTypes = {
  state: PropTypes.shape({
    main: PropTypes.shape({
      body: PropTypes.number,
    }),
  }),
  closeModal: PropTypes.function,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBody);
