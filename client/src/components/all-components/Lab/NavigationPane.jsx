import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import useMainStateContext from "../../../reducers/MainContext";
import handleRedirect from "../../../helpers/Redirect";
import getExerciseState from "../../../helpers/GetReducer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../../reducers/MainReducer";
import { EXERCISE_IN_PROGRESS } from "../../../constants/notifications";
import LabFooter from "../../footer/LabFooter";

const sections = [
  {
    title: "About",
    subTitle: "Learn about the lab",
    section: 0,
  },
  {
    title: "Reading",
    subTitle: "Understand key concepts",
    section: 1,
  },
  {
    title: "Exercise",
    subTitle: "Try a hands-on exercise",
    section: 2,
  },
  {
    title: "Reinforcement",
    subTitle: "Keep practicing",
    section: 3,
  },
  {
    title: "Quiz",
    subTitle: "Test your knowledge",
    section: 4,
  },
];

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

/**
 * NavigationPane component for in-lab navigation.
 * @param props defined props passed into the component
 */
const NavigationPane = (props) => {
  const { state, actions } = useMainStateContext();
  const currentSection = state.main.body;

  const handleOnClick = (section) => {
    if (
      getExerciseState(state, props.state) !== "EXERCISE_IDLE" &&
      currentSection === 2
    ) {
      document.querySelector("a").addEventListener("click", function (e) {
        e.preventDefault();
      });
      actions.showSnackbar(EXERCISE_IN_PROGRESS);
    } else {
      handleRedirect(actions, state.main.lab, section);
    }
  };

  return (
    <div
      className={
        "tw-flex tw-flex-col tw-gap-y-3 tw-text-left xs:tw-hidden md:tw-flex tw-max-w-[20rem]"
      }
    >
      <div
        className={
          "tw-py-6 tw-px-4 tw-border-solid tw-bg-white tw-border-primary-blue tw-border-8 tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg tw-z-10 tw-rounded-bl-lg tw-max-h-[10rem] tw-shadow-md"
        }
      >
        <h1 className={"tw-title tw-text-xl"}>{props.title} </h1>
      </div>
      <div
        className={
          "tw-py-3 tw-border-solid tw-border-primary-yellow tw-bg-white tw-border-8 tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg tw-z-10 tw-rounded-bl-lg tw-shadow-md"
        }
      >
        <div className={"tw-flex tw-flex-col tw-gap-y-3"}>
          <h4 className={"tw-font-poppins tw-font-bold tw-m-0 tw-pl-4"}>
            Table of Contents
          </h4>
          <div className={"tw-flex tw-flex-col tw-gap-y-3"}>
            {sections.map(({ title, subTitle, section }) => {
              return (
                <a
                  key={title}
                  href={"#"}
                  onClick={() => handleOnClick(section)}
                  className={
                    "tw-flex tw-flex-col tw-items-start tw-leading-none tw-no-underline tw-body-text hover:tw-underline hover:tw-decoration-primary-blue hover:tw-decoration-2"
                  }
                >
                  <p
                    className={twMerge(
                      "tw-font-semibold tw-body-text tw-px-4 ",
                      currentSection === section ? "tw-bg-primary-yellow" : "",
                    )}
                  >
                    {title}
                  </p>
                  <p
                    className={
                      "tw-pl-4 tw-body-text md:tw-text-sm lg:tw-text-[16px]"
                    }
                  >
                    {subTitle}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {props.labID !== 0 && (
        <LabFooter
          context={props.context}
          quizCompleted={props.quizCompleted}
          setQuizCompleted={props.setQuizCompleted}
          isImagine={props.isImagine}
        />
      )}
    </div>
  );
};

NavigationPane.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.object,
  context: PropTypes.shape({}),
  quizCompleted: PropTypes.bool,
  setQuizCompleted: PropTypes.func,
  isImagine: PropTypes.bool,
  labID: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationPane);
