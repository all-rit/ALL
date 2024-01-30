import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import Timer from "../../components/Timer";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import { time } from "../../../../../constants/lab5";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * Renders a component for dyslexia accessibility.
 *
 * @returns {JSX.Element} The DyslexiaAccessible component.
 */
const DyslexiaAccessible = () => {
  const { actions: mainActions } = useMainStateContext();

  const [timerDone, setTimerDone] = useState(false);
  const componentName = "DyslexiaAccessible";

  useEffect(() => {
    mainActions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleNav = () => {
    navigate("/Lab5/Exercise/DyslexiaAccessibleKnowledgeCheck");
  };

  const timerDoneCallback = () => {
    setTimerDone(true);
  };

  return (
    <div>
      <div className="cognitive_instructions">
        Read the following information about Dyslexia from w3.org
      </div>
      <div className="cognitive_information">
        {!timerDone ? (
          <div>
            <div className="heading">1.0 Dyslexia</div>
            <div>
              Dyslexia is a syndrome best known for its effect on the
              development of literacy and language-related skills. It does not
              imply low intelligence or poor educational potential.
            </div>
            <div className="subheading">1.0.1 Symptoms</div>
            <div>Common symptoms are:</div>
            <ul>
              <li>Slow and laborious reading</li>
              <li>Concentration fluctuates</li>
              <li>Difficulty remembering information</li>
              <li>Difficulty working within time limits</li>
            </ul>
            <div className="subheading">
              1.0.2 Content optimized for this group
            </div>
            <div>Content made for people with dyslexia tends to have:</div>
            <ul>
              <li>
                Icons to visually reinforce structure and what each section is
              </li>
              <li>Short paragraphs, short sentences</li>
              <li>Well-structured text with headings</li>
              <li>Minimalistic-navigation system</li>
            </ul>
          </div>
        ) : (
          <div className="center">Time Has Expired! Click Next to Proceed</div>
        )}
      </div>
      <div className="flex">
        <Timer seconds={time} timerDone={timerDoneCallback} />
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleNav}
          key="next"
        >
          Next
        </button>
      </div>
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default DyslexiaAccessible;
