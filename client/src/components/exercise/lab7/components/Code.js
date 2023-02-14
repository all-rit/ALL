/* eslint-disable react/prop-types */
import React, { Component } from "react";
import RepairService from "../../../../services/lab7/RepairService";
import { bindActionCreators } from "redux";
import { actions as repairActions } from "../../../../reducers/lab7/RepairReducer";
import { actions as appActions } from "../../../../reducers/lab7/AppReducer";
import { connect } from "react-redux";
import {
  FILE_FORMAT_VALIDATION,
  POPUP_DELAY,
  POPUP_MESSAGES,
} from "../../../../constants/lab7";
import { evaluate } from "mathjs";

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "AICodeRepair",
    };
  }

  validateRewardValue() {
    const { rewardValue, actions } = this.props;
    let value,
      error = null;

    try {
      value = evaluate(rewardValue, FILE_FORMAT_VALIDATION);
      if (typeof value !== "number") error = POPUP_MESSAGES.INVALID_EXPRESSION;
    } catch (e) {
      switch (e.data?.category) {
        case "wrongType":
          error = POPUP_MESSAGES.INVALID_EXPRESSION;
          break;
        default:
          error = e.message;
      }
    }

    const result = {
      value: rewardValue,
      error: `[Reward Value] ${error}`,
      passed: !error,
    };
    if (!result.passed) actions.updateRepairError(result.error);
    return result;
  }

  validateCostValue() {
    const { costValue, actions } = this.props;
    let value,
      error = null;

    try {
      value = evaluate(costValue, FILE_FORMAT_VALIDATION);
      if (typeof value !== "number") error = POPUP_MESSAGES.INVALID_EXPRESSION;
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

    const result = {
      value: costValue,
      error: `[Cost Value] ${error}`,
      passed: !error,
    };
    if (!result.passed) actions.updateRepairError(result.error);
    return result;
  }

  testValidateRepair() {
    const { actions } = this.props;
    const cost = this.validateCostValue();
    const reward = this.validateRewardValue();

    if (!cost.passed || !reward.passed) {
      const message = !reward.passed ? reward.error : cost.error;
      actions.undoRepairChanges();
      this.setPopupMessage(message);
    } else {
      actions.updateRepairEquation(reward.value, cost.value);
      this.setPopupMessage(POPUP_MESSAGES.SUCCESS);
    }
  }

  setPopupMessage(message) {
    const { actions } = this.props;
    actions.updatePopup(message);
    setTimeout(() => {
      actions.updatePopup("");
      actions.updateRepairError(null);
    }, POPUP_DELAY);
  }

  handleSubmit(repairError) {
    const { actions, rewardValue, costValue } = this.props;
    if (!repairError) {
      const repair = JSON.stringify({ rewardValue, costValue });
      RepairService.submitRepair(this.state.componentName, repair);
      actions.updatePopup("The repairs have been made.");
    } else {
      actions.updatePopup("Errors in Repair. Please fix");
    }
    actions.updateRepairEquation(rewardValue, costValue);
    actions.closeRepair();
    setTimeout(() => {
      actions.updatePopup("");
    }, 6000);
  }

  handleRewardValueChange(e) {
    const { actions } = this.props;
    actions.updateRewardValue(e.target.value);
  }

  handleCostValueChange(e) {
    const { actions } = this.props;
    actions.updateCostValue(e.target.value);
  }

  render() {
    const { rewardValue, costValue } = this.props;
    return (
      <div className="code_editor">
        <div className="code_editor__content">
          <div className="code_editor__files">
            {/* AutoSysAI.js */}
            <div className="code_editor__file code_editor__file--active">
              AutoSysAI.js
            </div>
            {/* psuedocode */}
            {/* <div className="code_editor__file code_editor__file--inactive">
									Psuedocode
								</div> */}
          </div>

          <div className="code_editor__code">
            <div className="code_editor__line">
              {/* AI file description comment */}
              <span className="code_editor__line--darkgreen">
                &#47;&#47; This is where you can change the equation that the AI
                makes decisions with to improve its accuracy.
              </span>
            </div>

            {/* import React, Component from react */}
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

            {/* class AutoSysAI extends Component*/}
            <div className="code_editor__line">
              <span className="code_editor__line--blue">class&nbsp;</span>
              <span className="code_editor__line--green">AutoSysAI&nbsp;</span>
              <span className="code_editor__line--blue">extends&nbsp;</span>
              <span className="code_editor__line--green">Component&nbsp;</span>
              <span className="code_editor__line--gold">&#123;</span>
            </div>

            {/* makeDecision(){ */}
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;</span>
              <span className="code_editor__line--yellow">makeDecision</span>
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
              <span className="code_editor__line--blue">file</span>
              <span className="code_editor__line--white">.</span>
              <span className="code_editor__line--yellow">changeAccess()</span>
              <span className="code_editor__line--white">;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                enter &lsquo;file.sensitivityLevel&lsquo; into the first input{" "}
              </span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                enter &lsquo;threatLvl&lsquo; into the second input
              </span>
            </div>

            {/* return() */}
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--purple">return </span>
              <span className="code_editor__line--white">( </span>
              <input
                name="rewardvalue"
                type="text"
                className={`htmlinput ${rewardValue ? "form-error-input" : ""}`}
                defaultValue={rewardValue}
                onChange={this.handleRewardValueChange.bind(this)}
                required
                title="must enter file.getSensitivityLvl"
              />
              <span className="code_editor__line--white"> / </span>
              <input
                name="costvalue"
                type="text"
                className={`htmlinput ${costValue ? "form-error-input" : ""}`}
                defaultValue={costValue}
                onChange={this.handleCostValueChange.bind(this)}
                required
                title="must enter threatLvl"
              />
              <span className="code_editor__line--white"> )</span>
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
          onClick={this.testValidateRepair.bind(this)}
          type="submit"
          className="button button--green button--block"
        >
          Update
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { rewardValue, costValue, repairError } = state.repair7;
  return { rewardValue, costValue, repairError };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...repairActions, ...appActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Code);
