import React, { useState } from "react";
import RepairService from "../../../../services/lab7/RepairService";
import { POPUP_DELAY, POPUP_MESSAGES } from "../../../../constants/lab7";
import { useLab7StateContext } from "src/reducers/lab7/Lab7Context";
import { evaluate } from "mathjs";
import { FILE_FORMAT_VALIDATION } from "src/constants/lab7/index";

/**
 * Represents a Code component.
 * @component
 */
const Code = () => {
  const [timeout, setTimeout] = useState(null);
  const { actions, state } = useLab7StateContext();
  const { componentName } = useState("AICodeRepair");

  /**
   * Validates the reward value.
   * @returns {Object} The validation result containing the value, error, and passed status.
   */
  const validateRewardValue = () => {
    let value,
      error = null;

    if (!state.rewardValue.includes("file.sensitivityLevel")) {
      error = POPUP_MESSAGES.FILE_SENS_NOT_INCLUDED;
    } else {
      try {
        value = evaluate(state.rewardValue, FILE_FORMAT_VALIDATION);
        if (typeof value !== "number")
          error = POPUP_MESSAGES.INVALID_EXPRESSION;
      } catch (e) {
        switch (e.data?.category) {
          case "wrongType":
            error = POPUP_MESSAGES.INVALID_EXPRESSION;
            break;
          default:
            error = e.message;
        }
      }
    }

    const result = {
      value: state.rewardValue,
      error,
      passed: !error,
    };
    if (!result.passed) actions.updateRepairError(result.error);
    return result;
  };

  /**
   * Validates the cost value.
   * @returns {Object} The validation result object.
   * @property {string} value - The cost value being validated.
   * @property {string|null} error - The error message, if any.
   * @property {boolean} passed - Indicates if the validation passed or not.
   */
  const validateCostValue = () => {
    let value,
      error = null;

    if (!state.costValue.includes("threatLvl")) {
      error = POPUP_MESSAGES.THREAT_LVL_NOT_INCLUDED;
    } else {
      try {
        value = evaluate(state.costValue, FILE_FORMAT_VALIDATION);
        if (typeof value !== "number")
          error = POPUP_MESSAGES.INVALID_EXPRESSION;
        else if (value === 0) error = POPUP_MESSAGES.ZERO_DIVISION;
      } catch (e) {
        switch (e.data?.category) {
          case "wrongType":
            error = POPUP_MESSAGES.INVALID_EXPRESSION;
            break;
          default:
            error = e.message;
        }
      }
    }

    const result = {
      value: state.costValue,
      error,
      passed: !error,
    };
    if (!result.passed) actions.updateRepairError(result.error);
    else actions.updateRepairError(null);
    return result;
  };

  /**
   * Sets the popup message and clears the previous message.
   * @param {string} message - The new popup message.
   */
  const setPopupMessage = (message) => {
    actions.updatePopup(message);
    clearPopupMessage();
  };

  /**
   * Clears the popup message and resets the repair error.
   */
  const clearPopupMessage = () => {
    clearTimeout(timeout);
    setTimeout(() => {
      actions.updatePopup("");
      actions.updateRepairError(null);
    }, POPUP_DELAY);
  };

  /**
   * Handles the change event for the reward value input.
   * @param {Event} e - The change event object.
   */
  const handleRewardValueChange = (e) => {
    actions.updateRewardValue(e.target.value);
  };

  /**
   * Handles the change event for the cost value input.
   * @param {Event} e - The change event object.
   */
  const handleCostValueChange = (e) => {
    actions.updateCostValue(e.target.value);
  };

  /**
   * Validates the repair by checking the cost and reward values.
   * If there are errors, updates the error messages and undoes the repair changes.
   * If there are no errors, submits the repair, updates the repair ID, and closes the repair.
   * @returns {void}
   */
  const validateRepair = () => {
    const cost = validateCostValue();
    const reward = validateRewardValue();

    if (!reward.passed || !cost.passed) {
      if (!reward.passed && !cost.passed) {
        actions.updateRewardError(reward.error);
        actions.updateCostError(cost.error);
      } else if (!reward.passed) {
        actions.updateRewardError(reward.error);
        actions.updateCostError(null);
      } else {
        actions.updateRewardError(null);
        actions.updateCostError(cost.error);
      }
      actions.undoRepairChanges();
      setPopupMessage("Errors in Repair. Please fix.");
    } else {
      const [rewardValue, costValue] = [reward.value, cost.value];
      RepairService.submitRepair(
        componentName,
        JSON.stringify({ rewardValue, costValue })
      )
        .then((response) =>
          response.ok ? response.json().then((json) => json.repairId) : null
        )
        .then((repairId) => actions.setRepairId(repairId));
      actions.updateRewardError(null);
      actions.updateCostError(null);
      actions.updateRepairEquation(rewardValue, costValue);
      actions.closeRepair();
      setPopupMessage(POPUP_MESSAGES.SUCCESS);
    }
  };

  return (
    <div className="code_editor">
      <div className="code_editor__content">
        <div className="code_editor__files">
          {/* AutoSysAI.js */}
          <div className="code_editor__file code_editor__file--active">
            AutoSysAI.js
          </div>
        </div>

        {/* import React, Component from react */}
        <div className="code_editor__code">
          <div className="code_editor__line">
            <span className="code_editor__line--purple">import&nbsp;</span>
            <span className="code_editor__line--blue">React</span>
            <span className="code_editor__line--gold">,&nbsp;</span>
            <span className="code_editor__line--gold">&#123;</span>
            <span className="code_editor__line--blue">
              &nbsp;Component&nbsp;
            </span>
            <span className="code_editor__line--gold">&#125;&nbsp;</span>
            <span className="code_editor__line--purple">from&nbsp;</span>
            <span className="code_editor__line--orange">
              &lsquo;react&lsquo;
            </span>
            <span className="code_editor__line--gold">;</span>
          </div>

          <div className="code_editor__line">&nbsp;</div>

          {/* function AutoSysAI() */}
          <div className="code_editor__line">
            <span className="code_editor__line--blue">function&nbsp;</span>
            <span className="code_editor__line--green">AutoSysAI&nbsp;</span>
            <span className="code_editor__line--blue">() &#123;</span>
          </div>

          {/* makeDecision() */}
          <div className="code_editor__line">
            {/* AI function comment */}
            <span className="code_editor__line--darkgreen">
              &#47;&#47; Here is where you will update the equation to improve
              the AI&lsquo;s accuracy
            </span>
          </div>
          <div className="code_editor__line">
            {/* AI function comment */}
            <span className="code_editor__line--darkgreen">
              &#47;&#47; Feel free to add other math operations to improve its
              accuracy
            </span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;</span>
            <span className="code_editor__line--yellow">
              function makeDecision
            </span>
            <span className="code_editor__line--purple">(</span>
            <span className="code_editor__line--blue">&nbsp;file</span>
            <span className="code_editor__line--white">&nbsp;,</span>
            <span className="code_editor__line--blue">
              &nbsp;threatLvl&nbsp;
            </span>
            <span className="code_editor__line--purple">) &#123;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--darkgreen">
              enter &lsquo;file.sensitivityLevel&lsquo; into the first input{" "}
            </span>
          </div>
          <div className="code_editor__line code_editor__line-background--light">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className={"code_editor__line--purple"}>const </span>
            <span className={""}>rewardValue</span>
            <span className={"code_editor__line--purple"}> = </span>
            <input
              name="rewardvalue"
              type="text"
              className={`${
                state.rewardError ? "form-error-input" : ""
              } tw-w-96`}
              defaultValue={state.rewardValue}
              onChange={handleRewardValueChange}
              required
              title="must enter file.sensitivityLevel"
            />
            <span>;</span>
          </div>
          {state.rewardError && (
            <div className="code_editor__line">
              <span className={"form-error"}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {state.rewardError}
              </span>
            </div>
          )}
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--darkgreen">
              enter &lsquo;threatLvl&lsquo; into the second input
            </span>
          </div>
          <div className="code_editor__line code_editor__line-background--light">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className={"code_editor__line--purple"}>const </span>
            <span className={""}>costValue</span>
            <span className={"code_editor__line--purple"}> = </span>
            <input
              name="costvalue"
              type="text"
              className={`${state.costError ? "form-error-input" : ""} tw-w-96`}
              defaultValue={state.costValue}
              onChange={handleCostValueChange}
              required
              title="must enter threatLvl"
            />
            <span>;</span>
          </div>
          {state.costError && (
            <div className="code_editor__line">
              <span className={"form-error"}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {state.costError}
              </span>
            </div>
          )}
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className={"code_editor__line--purple"}>const </span>
            <span>utility</span>
            <span className={"code_editor__line--purple"}> = </span>
            <span>
              rewardValue <span className={"code_editor__line--purple"}>/</span>{" "}
              costValue;
            </span>
          </div>
          {/* return() */}
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--purple">return </span>
            <span>utility;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;</span>
            <span className="code_editor__line--purple">&#125;</span>
          </div>

          <div className="code_editor__line">
            <span className="code_editor__line--gold">&#125;</span>
          </div>

          {/* export default AutoSysAI */}
          <div className="code_editor__line">
            <span className="code_editor__line--purple">export&nbsp;</span>
            <span className="code_editor__line--purple">default&nbsp;</span>
            <span className="code_editor__line--blue">AutoSysAI</span>
            <span>;</span>
          </div>
        </div>
      </div>
      <button
        onClick={validateRepair}
        type="submit"
        className="button button--green button--block"
      >
        Update
      </button>
    </div>
  );
};
export default Code;
