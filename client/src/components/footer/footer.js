import React, { useEffect } from "react";
import "../../assets/stylesheets/components/css/colorPicker.css";
import { connect } from "react-redux";
import { actions as mainActions } from "../../reducers/MainReducer";
import { bindActionCreators } from "redux";
import handleRedirect from "../../helpers/Redirect";
import getExerciseState from "../../helpers/GetReducer";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import useMainStateContext from "../../reducers/MainContext";
import { EXERCISE_IN_PROGRESS } from "../../constants/notifications";

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

const LabFooter = (props) => {
  const { quizCompleted, setQuizCompleted } = props;
  const navigateHome = () => {
    setQuizCompleted(false);
    navigate("/# ");
  };

  const { state, actions } = useMainStateContext();
  const lab = state.main.lab;
  const body = state.main.body;

  const handleOnClick = (section) => {
    if (
      getExerciseState(state, props.state) !== "EXERCISE_IDLE" &&
      body === 2
    ) {
      actions.showSnackbar(EXERCISE_IN_PROGRESS);
    } else {
      handleRedirect(actions, state.main.lab, section);
    }
  };
  const display =
    (getExerciseState(state, props.state) === "EXERCISE_IDLE" || body !== 2) &&
    (lab === 0 ? body !== 3 : true);

  useEffect(() => {
    console.log(display);
  }, []);

  return (
    <div className={"tw-mb-6 tw-mt-[-3rem] tw-z-10"}>
      {body !== 2 && (
        <div className={`tw-w-full tw-flex tw-justify-center`}>
          <div
            className={`tw-flex ${body !== 0 ? "tw-justify-between" : "tw-justify-end"} tw-w-3/4`}
            style={{ display: display ? "flex" : "none" }}
          >
            {body !== 0 && (
              <button
                className="btn tw-cursor-pointer tw-w-32 tw-h-16 tw-bg-white tw-font-medium tw-rounded-none tw-rounded-bl-md tw-border-solid tw-border-l-8 tw-border-b-8 tw-border-r-0 tw-border-t-0 tw-border-labYellow"
                onClick={() => handleOnClick(body - 1)}
                style={{
                  opacity: display ? "1" : "0",
                }}
              >
                BACK
              </button>
            )}

            {body === 4 && quizCompleted ? (
              <button
                href="# "
                className="btn tw-px-6 tw-h-16 tw-bg-white tw-font-medium tw-rounded-none tw-rounded-tr-md tw-border-solid tw-border-l-0 tw-border-b-0 tw-border-r-8 tw-border-t-8 tw-border-labBlue tw-text-nowrap"
                onClick={navigateHome}
                style={{
                  display: display ? "flex" : "none",
                }}
              >
                Return to Home
              </button>
            ) : (
              <button
                className="btn tw-cursor-pointer tw-w-32 tw-h-16 tw-bg-white tw-font-medium tw-rounded-none tw-rounded-tr-md tw-border-solid tw-border-l-0 tw-border-b-0 tw-border-r-8 tw-border-t-8 tw-border-labBlue"
                onClick={() => handleOnClick(body + 1)}
                style={{
                  opacity: display ? "1" : "0",
                }}
              >
                NEXT
              </button>
            )}
          </div>
        </div>
      )}
      {body === 2 && (
        <p className="tw-mb-[2rem] tw-mt-[-2rem] tw-body-text tw-font-bold tw-text-center">
          The previously available navigation is disabled until the exercise is
          complete.
        </p>
      )}
    </div>
  );
};

LabFooter.propTypes = {
  context: PropTypes.shape({}),
  state: PropTypes.shape({}),
  quizCompleted: PropTypes.bool,
  setQuizCompleted: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LabFooter);
