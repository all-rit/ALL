import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import useMainStateContext from "../../../reducers/MainContext";
import handleRedirect from "../../../helpers/Redirect";
import getExerciseState from "../../../helpers/GetReducer";

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

/**
 * NavigationPane component for in-lab navigation.
 * @param props defined props passed into the component
 */
const NavigationPane = (props) => {
  // TODO: Verify redirect in a lab

  const { state, actions } = useMainStateContext();
  const currentSection = state.main.body;

  const handleOnClick = (section) => {
    if (
      getExerciseState(state, props.state) !== "EXERCISE_IDLE" &&
      currentSection === 2
    ) {
      alert("The exercise is still in progress! Please complete the exercise.");
    } else {
      handleRedirect(actions, state.main.lab, section);
    }
  };

  return (
    <div
      className={
        "tw-flex tw-flex-col tw-gap-y-24 tw-max-w-[16rem] tw-text-left"
      }
    >
      <div
        className={
          "tw-py-6 tw-px-4 tw-border-solid tw-border-primary-blue tw-border-12 tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg"
        }
      >
        <h1 className={"tw-title-styling-name tw-text-2xl"}>{props.title}</h1>
      </div>
      <div
        className={
          "tw-py-9 tw-border-solid tw-border-primary-yellow tw-border-12 tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg"
        }
      >
        <div className={"tw-flex tw-flex-col tw-gap-y-6"}>
          <h2 className={"tw-sub-title-styling-name tw-font-bold tw-pl-4"}>
            Table of Contents
          </h2>
          <div className={"tw-flex tw-flex-col tw-gap-y-9"}>
            {sections.map(({ title, subTitle, section }) => {
              return (
                <a
                  key={title}
                  href={"#"}
                  onClick={() => handleOnClick(section)}
                  className={
                    "tw-flex tw-flex-col tw-items-start tw-leading-none tw-no-underline tw-text-black hover:tw-underline hover:tw-decoration-primary-blue hover:tw-decoration-2"
                  }
                >
                  <div
                    className={twMerge(
                      "tw-font-semibold tw-px-4 tw-transition-all tw-ease-in-out",
                      currentSection === section ? "tw-bg-primary-yellow" : "",
                    )}
                  >
                    {title}
                  </div>
                  <div className={"tw-pl-4 tw-font-light"}>{subTitle}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

NavigationPane.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.object,
};

export default NavigationPane;
