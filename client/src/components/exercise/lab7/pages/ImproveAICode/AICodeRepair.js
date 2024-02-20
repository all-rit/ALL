import React, { useEffect } from "react";
import Popup from "../../../../all-components/Popup";
import { navigate } from "@reach/router";
import Code from "../../components/Code";
import {
  LOCKED_FILE,
  OPEN_FILE,
} from "../../../../../constants/lab7";
import { evaluate } from "mathjs";
import { EXERCISE_PLAYING } from "src/constants/index";
import { MathComponent } from "mathjax-react";
import useMainStateContext from "src/reducers/MainContext";
import { useLab7StateContext } from "src/reducers/lab7/Lab7Context";

/**
 * Represents the component for repairing the AI code.
 * This component allows the user to improve the accuracy of the autonomous file access system
 * by implementing a utility equation into the autonomous system.
 * The utility equation is calculated by weighing the reward of a decision and the cost of making said decision.
 *
 * @returns {JSX.Element} The AICodeRepair component.
 */
const AICodeRepair = () => {
  const { actions: mainActions } = useMainStateContext();
  const { actions, state } = useLab7StateContext();

  useEffect(() => {
    mainActions.updateUserState(EXERCISE_PLAYING);
    reset();
  }, []);

  /**
   * Resets the repair state and updates the popup message.
   */
  const reset = () => {
    actions.resetRepair();
    actions.updatePopup("");
  };

  /**
   * Handles the navigation to the Improved AI Simulation page.
   */
  const handleNav = () => {
    actions.updateMakeDecision(updateMakeDecision);
    actions.reset();
    navigate("/Lab7/Exercise/ImprovedAISimulation");
  };

  /**
   * Updates the decision for making a file locked or open based on the threat level and file.
   * @param {number} threatLvl - The threat level.
   * @param {string} file - The file to evaluate.
   * @returns {string} - The decision for the file (LOCKED_FILE or OPEN_FILE).
   */
  const updateMakeDecision = (threatLvl, file) => {
    const utility = evaluate(`(${state.rewardValue}) / (${state.costValue})`, {
      file,
      threatLvl,
    });
    return utility >= 1 ? LOCKED_FILE : OPEN_FILE;
  };

  return (
    <div>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <p className="playthrough__sentence">
            We have identified the component of the AI that is impacting its
            decision-making, let&lsquo;s take a look into the AI and see how
            it can be improved.
          </p>
          <p className="playthrough__sentence">
            In this part of the exercise, you will have the opportunity to
            improve the accuracy of the autonomous file access system.
          </p>
          <p className={"playthrough__sentence"}>
            Your goal should be to implement a utility equation into the
            autonomous system. The utility equation is calculated by weighing
            the reward of a decision and the cost of making said decision.
          </p>
          <MathComponent
            tex={String.raw`Utility=\frac{Reward\;Value}{Cost\;Value}`}
          />
        </div>
        <p className="playthrough__sentence">
          Click the &lsquo;<span className={"tw-font-bold"}>Repair</span>
          &lsquo; button to view and edit the code of the autonomous system.
        </p>
      </div>
      <Popup
        message={state.popupMessage}
        handler={actions.updatePopup}
        error={state.repairError}
      />
      <button
        className="btn btn-second btn-xl text-uppercase leftButton"
        onClick={actions.openRepair}
        key="repair"
      >
        Repair
      </button>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleNav}
        key="Next"
        disabled={!state.changesApplied}
      >
        Next
      </button>
      {state.repairVisible && <Code />}
    </div>
  );
};

export default AICodeRepair;
