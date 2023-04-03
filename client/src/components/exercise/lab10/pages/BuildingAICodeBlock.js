import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { actions as repairActions } from "../../../../reducers/lab10/RepairReducer";
import { connect } from "react-redux";
import { POPUP_DELAY, POPUP_MESSAGES } from "../../../../constants/lab7";
import PropTypes from "prop-types";

class BuildingAICodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "BuildingAICodeBlock",
    };
  }
  static propTypes = {
    actions: PropTypes.object,
    leftValue: PropTypes.string,
    rightValue: PropTypes.string,
  };
  validateRepair() {
    const { actions } = this.props;
    const leftValue = this.validateMoveLeftValue();
    const rightValue = this.validateMoveRightValue();

    if (!leftValue.passed || !rightValue.passed) {
      actions.this.setPopupMessage(POPUP_MESSAGES.SUCCESS);
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

  validateMoveLeftValue() {
    const { leftValue } = this.props;
    let error = null;

    if (!leftValue.includes("ArrowLeft")) {
      error =
        "Invalid submission in moveLeft method. Please resubmit your answer.";
    }
    return {
      pass: error === null,
      error: error,
    };
  }
  validateMoveRightValue() {
    const { rightValue } = this.props;
    let error = null;

    if (!rightValue.includes("ArrowRight")) {
      error = "Invalid submission. Please resubmit.";
    }
    return {
      passed: error === null,
      error: error,
    };
  }

  handleLeftValueChange(e) {
    const { actions } = this.props;
    actions.updateMoveLeftValue(e.target.value);
  }

  handleRightValueChange(e) {
    const { actions } = this.props;
    actions.updateMoveRightValue(e.target.value);
  }

  render() {
    const { leftValue, rightValue } = this.props;
    return (
      <div className="code_editor">
        <div className="code_editor__content">
          <div className="code_editor__files">
            {/* AutoSysAI.js */}
            <div className="code_editor__file code_editor__file--active">
              MoveUser.js
            </div>
          </div>

          {/* import React, Component, useState, useEffect from react */}
          <div className="code_editor__code">

            {/* makeDecision(){ */}
            <div className="code_editor__line">
              {/* AI function comment */}
              <span className="code_editor__line--darkgreen">
                &#47;&#47; Here is where you will update the code to allow the
                user to move the person
              </span>
            </div>
            <div className="code_editor__line">
              {/* AI function comment */}
              <span className="code_editor__line--darkgreen">
                &#47;&#47; left and right in order to avoid the incoming falling
                balls
              </span>
            </div>
            <div className="code_editor__line">{/* AI function comment */}</div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;</span>
              <span className="code_editor__line--yellow">moveUser</span>
              <span className="code_editor__line--purple">(</span>
              <span className="code_editor__line--purple">) &#123;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>const</span>
              <span className={""}> [position, setPosition] = </span>
              <span className="code_editor__line--blue">useState</span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">0</span>
              <span className={""}>)</span>
              <span className={""}>;</span>
            </div>

            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--yellow">useEffect(</span>
              <span className={""}>() </span>
              <span className="code_editor__line--blue"> =&gt; </span>
              <span className={""}> &#123; </span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>const </span>
              <span className="code_editor__line--blue">handleKey</span>
              <span className={"tw-border-white"}> = (</span>
              <span className="code_editor__line--orange">event</span>
              <span className={""}>) =&gt; &#123;</span>
            </div>
            <div>
              <span className="code_editor__line--darkgreen">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Enter &lsquo;ArrowLeft&lsquo; into the input below{" "}
              </span>
            </div>
            <div className="code_editor__line code_editor__line-background--light">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>if </span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">event</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">code</span>
              <span className={""}> === </span>
              <input
                name="leftValue"
                type="text"
                defaultValue={leftValue}
                onChange={this.handleLeftValueChange.bind(this)}
                required
                title="must enter ArrowLeft"
              />
              <span>) &#123;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--orange">setPosition</span>
              <span className={""}> ((</span>
              <span className="code_editor__line--blue">prevPosition</span>
              <span className={""}>) =&gt; </span>
              <span className="code_editor__line--blue">prevPosition</span>
              <span className={""}> - </span>
              <span className="code_editor__line--orange">10</span>
              <span className={""}>);</span>
            </div>
            <div className="code_editor__line">
              <span className={"form-error"}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                Enter &lsquo;ArrowRight&lsquo; into the input below.
              </span>
            </div>

            <div className="code_editor__line code_editor__line-background--light">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={""}>&#125; </span>
              <span className={"code_editor__line--purple"}>else if </span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">event</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">code</span>
              <span className={""}> === </span>
              <input
                name="moveRight"
                type="text"
                defaultValue={rightValue}
                onChange={this.handleRightValueChange.bind(this)}
                required
                title="Must enter ArrowLeft"
              />
              <span>) &#123;</span>

              <div className={"code_editor__line"}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="code_editor__line--orange">setPosition</span>
                <span className={""}> ((</span>
                <span className="code_editor__line--blue">prevPosition</span>
                <span className={""}>) =&gt; </span>
                <span className="code_editor__line--blue">prevPosition</span>
                <span className={""}> + </span>
                <span className="code_editor__line--orange">10</span>
                <span className={""}>);</span>
              </div>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&#125;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&#125;;</span>
            </div>
            <div className="code_editor__line">
              <span className={"form-error"}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--gold">document</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">addEventListener</span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">
                &apos;keydown&apos;
              </span>
              <span className={""}>, </span>
              <span className="code_editor__line--blue">handleKey</span>
              <span className={""}>);</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--purple">return </span>
              <span className={""}>() =&gt; &#123;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--gold">document</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">
                removeEventListener
              </span>
              <span className={""}>(</span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">
                &apos;keydown&apos;
              </span>
              <span className={""}>, </span>
              <span className="code_editor__line--blue">handleKey</span>
              <span className={""}>);</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="">&#125;;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--purple">&#125;</span>
            </div>

            <div className="code_editor__line">
              <span className="code_editor__line--gold">&#125;</span>
            </div>

            {/* export default MoveUser */}
            <div className="code_editor__line">
              <span className="code_editor__line--purple">export&nbsp;</span>
              <span className="code_editor__line--purple">default&nbsp;</span>
              <span className="code_editor__line--blue">MoveUser</span>
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
  const { repairError, leftValue, rightValue } = state.repair10;
  return { repairError, leftValue, rightValue };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...repairActions }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingAICodeBlock);
