import React, { useState } from "react";
import { navigate } from "@reach/router";
import Timer from "../../components/Timer";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import {
  time,
  minFont,
  maxFont,
  defaultFont,
} from "../../../../../constants/lab5";
import useLab5StateContext from "src/reducers/lab5/Lab5Context";

/**
 * Renders a component for Dementia Accessible page layout.
 *
 * @returns {JSX.Element} The DementiaAccessible component.
 */
const DementiaAccessible = () => {
  const [timerDone, setTimerDone] = useState(false);
  const componentName = "DementiaAccessible";

  const handleNav = () => {
    navigate("/Lab5/Exercise/DementiaAccessibleKnowledgeCheck");
  };

  const timerDoneCallback = () => {
    setTimerDone(true);
  };

  const { actions, state } = useLab5StateContext();
  let fontsize = parseInt(state.fontvalue);
  fontsize =
    fontsize <= maxFont && fontsize >= minFont ? fontsize : defaultFont;
  let fontfamily = state.fontfamilyvalue;
  fontfamily =
    fontfamily === "arial" || fontfamily === "roboto" ? fontfamily : "roboto";
  const style = { fontSize: fontsize, fontFamily: fontfamily };

  return (
    <div style={style}>
      <div className="cognitive_instructions" style={style}>
        Read the following information about Dementia from w3.org
      </div>
      <div className="cognitive_information" style={style}>
        {!timerDone ? (
          <div>
            <div className="heading">1.0 Dementia</div>
            <div>
              Dementia is defined as a severe loss of cognitive abilities that
              disrupts daily life
            </div>
            <div className="subheading">1.0.1 Symptoms</div>
            <div style={style}>Common symptoms are:</div>
            <ul>
              <li>Difficulty remembering information</li>
              <li>Difficulty with organizing thoughts</li>
              <li>Difficulty working within time limits</li>
              <li>
                Visual processing difficulties, which can affect the ability to
                recognize places
              </li>
            </ul>
            <div className="subheading">
              1.0.2 Content optimized for this group
            </div>
            <div>Content made for people with dementia tends to have:</div>
            <ul>
              <li>Large, clear buttons with simple graphics and text</li>
              <li>Limited features</li>
              <li>Clear, step-by-step instructions</li>
              <li>Rapid and direct feedback</li>
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
      <PageServiceTimer actions={actions} name={componentName} />
    </div>
  );
};

export default DementiaAccessible;
