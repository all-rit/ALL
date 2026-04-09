import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actions as mainActions } from "../../reducers/MainReducer";
import { bindActionCreators } from "redux";
import handleRedirect from "../../helpers/Redirect";
import getExerciseState from "../../helpers/GetReducer";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import useMainStateContext from "../../reducers/MainContext";
import { EXERCISE_IN_PROGRESS } from "../../constants/notifications";
import { ArrowBack, ArrowForward, Home } from "@mui/icons-material";
import { Button } from "reactstrap";

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
    <div className={"tw-z-10 tw-w-full"}>
      {display && (
        <div className={`tw-w-full tw-flex tw-justify-center`}>
          <div
            className={`tw-flex ${body !== 0 ? "tw-justify-between" : "tw-justify-end"} tw-w-full tw-gap-x-1`}
            style={{ display: display ? "flex" : "none" }}
          >
            {body > 0 && (
              <Button
                className="tw-flex tw-flex-1 tw-min-w-0 tw-items-center tw-justify-center tw-cursor-pointer tw-font-medium tw-rounded-md tw-bg-white tw-text-black tw-text-[16px] tw-gap-x-1 tw-border-4 tw-border-primary-yellow tw-shadow hover:tw-bg-primary-yellow tw-w-full"
                onClick={() => handleOnClick(body - 1)}
                style={{
                  opacity: display ? "1" : "0",
                }}
              >
                <ArrowBack />
                BACK
              </Button>
            )}

            {body === 4 && quizCompleted ? (
              <Button
                href="# "
                className="tw-flex tw-flex-1 tw-min-w-0 tw-items-center tw-justify-center tw-cursor-pointer tw-font-medium tw-rounded-md tw-bg-white tw-text-black tw-text-[16px] tw-gap-x-1 tw-border-4 tw-border-primary-yellow tw-shadow hover:tw-bg-primary-yellow tw-w-full"
                onClick={navigateHome}
                style={{
                  display: display ? "1" : "0",
                }}
              >
                <Home /> Home
              </Button>
            ) : (
              <Button
                className={`${body === 4 && !quizCompleted ? "tw-hidden" : "tw-block"} tw-flex tw-flex-1 tw-min-w-0 tw-items-center tw-justify-center tw-cursor-pointer tw-font-medium tw-rounded-md tw-bg-white tw-text-black tw-text-[16px] tw-gap-x-1 tw-border-4 tw-border-primary-yellow tw-shadow hover:tw-bg-primary-yellow tw-w-full`}
                onClick={() => handleOnClick(body + 1)}
                style={{
                  opacity: display ? "1" : "0",
                }}
                disabled={body === 4}
              >
                NEXT
                <ArrowForward />
              </Button>
            )}
          </div>
        </div>
      )}
      {!display && (
        <div className={"tw-w-full tw-bg-primary-yellow tw-rounded-lg tw-p-2"}>
          <p className="tw-w-full tw-body-text tw-font-bold tw-text-center sm:tw-text-sm md:tw-leading-tight xl:tw-text-[16px]">
            The previously available navigation is disabled until the exercise
            is complete.
          </p>
        </div>
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
