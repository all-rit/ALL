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
      timeout: null,
    };
  }

  validateRewardValue() {
    const { rewardValue, actions } = this.props;
    let value,
      error = null;

    if (!rewardValue.includes("file.sensitivityLevel")) {
      error = POPUP_MESSAGES.FILE_SENS_NOT_INCLUDED;
    } else {
      try {
        value = evaluate(rewardValue, FILE_FORMAT_VALIDATION);
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
      value: rewardValue,
      error,
      passed: !error,
    };
    if (!result.passed) actions.updateRepairError(result.error);
    return result;
  }

  validateCostValue() {
    const { costValue, actions } = this.props;
    let value,
      error = null;

    if (!costValue.includes("threatLvl")) {
      error = POPUP_MESSAGES.THREAT_LVL_NOT_INCLUDED;
    } else {
      try {
        value = evaluate(costValue, FILE_FORMAT_VALIDATION);
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
      value: costValue,
      error,
      passed: !error,
    };
    if (!result.passed) actions.updateRepairError(result.error);
    else actions.updateRepairError(null);
    return result;
  }

  async validateRepair() {
    const { actions } = this.props;
    const cost = this.validateCostValue();
    const reward = this.validateRewardValue();

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
      this.setPopupMessage("Errors in Repair. Please fix.");
    } else {
      const [rewardValue, costValue] = [reward.value, cost.value];
      RepairService.submitRepair(
        this.state.componentName,
        JSON.stringify({ rewardValue, costValue })
      )
        .then((response) =>
          response.ok ? response.json().then((json) => json.repairId) : null
        )
        .then((repairId) => actions.setRepairId(repairId));
      actions.updateRewardError(null);
      actions.updateCostError(null);
      actions.updateRepairEquation(rewardValue, costValue);
      this.setPopupMessage(POPUP_MESSAGES.SUCCESS);
    }
  }

  setPopupMessage(message) {
    const { actions } = this.props;
    actions.updatePopup(message);
    this.clearPopupMessage();
  }

  clearPopupMessage() {
    const { actions } = this.props;
    clearTimeout(this.state.timeout);
    this.setState({
      timeout: setTimeout(() => {
        actions.updatePopup("");
        actions.updateRepairError(null);
      }, POPUP_DELAY),
    });
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
    const { rewardValue, costValue, rewardError, costError } = this.props;
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
                className={`${rewardError ? "form-error-input" : ""}`}
                defaultValue={rewardValue}
                onChange={this.handleRewardValueChange.bind(this)}
                required
                title="must enter file.sensitivityLevel"
              />
              <span>;</span>
            </div>
            {rewardError && (
              <div className="code_editor__line">
                <span className={"form-error"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {rewardError}
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
                className={costError ? "form-error-input" : ""}
                defaultValue={costValue}
                onChange={this.handleCostValueChange.bind(this)}
                required
                title="must enter threatLvl"
              />
              <span>;</span>
            </div>
            {costError && (
              <div className="code_editor__line">
                <span className={"form-error"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {costError}
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
                rewardValue{" "}
                <span className={"code_editor__line--purple"}>/</span>{" "}
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
          onClick={this.validateRepair.bind(this)}
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
  const { rewardValue, costValue, repairError, rewardError, costError } =
    state.repair7;
  return { rewardValue, costValue, repairError, rewardError, costError };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...repairActions, ...appActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Code);
