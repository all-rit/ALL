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
    getExerciseState(state, props.state) === "EXERCISE_IDLE" || body !== 2;

  useEffect(() => {
    console.log(display);
  }, []);

  return (
    <div className={"xs:tw-mt-0 md:tw-mt-3 tw-mb-3 tw-z-10"}>
      {display && (
        <div className={`tw-w-full tw-flex tw-justify-center`}>
          <div
            className={`tw-flex ${body !== 0 ? "tw-justify-between" : "tw-justify-end"} tw-w-full tw-ml-6 tw-mr-[10%]`}
            style={{ display: display ? "flex" : "none" }}
          >
            {body > 0 && (
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
                className="btn tw-cursor-pointer tw-w-32 tw-h-16 tw-bg-white tw-font-medium tw-rounded-none tw-rounded-tr-md tw-border-solid tw-border-l-0 tw-border-b-0 tw-border-r-8 tw-border-t-8 tw-border-labBlue tw-items-center tw-justify-center"
                onClick={navigateHome}
                style={{
                  display: display ? "1" : "0",
                }}
              >
                Home
              </button>
            ) : (
              <button
                className={`${body === 4 && !quizCompleted ? "tw-hidden" : "tw-block"} btn tw-cursor-pointer tw-w-32 tw-h-16 tw-bg-white tw-font-medium tw-rounded-none tw-rounded-tr-md tw-border-solid tw-border-l-0 tw-border-b-0 tw-border-r-8 tw-border-t-8 tw-border-labBlue`}
                onClick={() => handleOnClick(body + 1)}
                style={{
                  opacity: display ? "1" : "0",
                }}
                disabled={body === 4}
              >
                NEXT
              </button>
            )}
          </div>
        </div>
      )}
      {!display && (
        <p className="tw-mb-[2rem] tw-mt-5 tw-body-text tw-font-bold tw-text-center">
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
