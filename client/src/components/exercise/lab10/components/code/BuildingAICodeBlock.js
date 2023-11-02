import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { actions as repairActions } from "../../../../../reducers/lab10/RepairReducer";
import { actions as exerciseActions } from "../../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import {
  EXERCISE_PLAYING,
  POPUP_DELAY,
  POPUP_MESSAGES,
} from "../../../../../constants/lab10";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "../../../../../assets/stylesheets/components/CodeBlock.css";
import PropTypes from "prop-types";

class BuildingAICodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "BuildingAICodeBlock",
      timeout: null,
    };
  }

  static propTypes = {
    actions: PropTypes.object,
    leftValue: PropTypes.string,
    rightValue: PropTypes.string,
    repairError: PropTypes.bool,
    changesApplied: PropTypes.bool,
    leftError: PropTypes.string,
    rightError: PropTypes.string,
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }

  validateRepair() {
    const { actions } = this.props;
    const leftValuePassed = this.validateMoveLeftValue();
    const rightValuePassed = this.validateMoveRightValue();

    if (!leftValuePassed || !rightValuePassed) {
      actions.updateRepairError(true);
      if (!leftValuePassed && !rightValuePassed) {
        actions.updateRightError("Must enter 'ArrowRight'");
        actions.updateLeftError("Must  enter 'ArrowLeft'");
      } else if (!leftValuePassed) {
        actions.updateRightError(null);
        actions.updateLeftError("Must enter 'ArrowLeft'");
      } else if (!rightValuePassed) {
        actions.updateRightError("Must enter 'ArrowRight'");
        actions.updateLeftError(null);
      }
      actions.updateChangesApplied(false);
    } else {
      actions.updateLeftError(null);
      actions.updateRightError(null);
      actions.updateChangesApplied(true);
      actions.closeRepair();
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

  validateMoveLeftValue() {
    const { actions, leftValue } = this.props;
    if (!leftValue.includes("ArrowLeft")) {
      actions.updateRepairError(true);
      if (leftValue.length === 0) {
        this.setPopupMessage(POPUP_MESSAGES.ARROW_LEFT_NOT_INCLUDED);
      } else if (leftValue.length > 0) {
        this.setPopupMessage(POPUP_MESSAGES.ARROW_LEFT_WRONG);
      }
      return false;
    } else {
      actions.updateRepairError(false);
      return true;
    }
  }

  validateMoveRightValue() {
    const { actions, rightValue } = this.props;

    if (!rightValue.includes("ArrowRight")) {
      actions.updateRepairError(true);
      if (rightValue.length === 0) {
        this.setPopupMessage(POPUP_MESSAGES.ARROW_RIGHT_NOT_INCLUDED);
      } else if (rightValue.length > 0) {
        this.setPopupMessage(POPUP_MESSAGES.ARROW_RIGHT_WRONG);
      }
      return false;
    } else {
      actions.updateRepairError(false);
      return true;
    }
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
    const { leftValue, rightValue, leftError, rightError } = this.props;
    return (
      <div className="code_editor">
        <div className="code_editor__content">
          <div className="code_editor__files">
            {/* MovingObject.js */}
            <div className="code_editor__file code_editor__file--active">
              MovingObject.js
            </div>
          </div>

          <div className="code_editor__code">
            <div className="code_editor__line">
              <span className="code_editor__line--purple">import&nbsp;</span>
              <span className="code_editor__line--blue">React</span>
              <span className="code_editor__line--gold">,&nbsp;</span>
              <span className="code_editor__line--gold">&#123;</span>
              <span className="code_editor__line--blue">
                {" "}
                useState, useEffect{" "}
              </span>
              <span className="code_editor__line--gold">&#125;&nbsp;</span>
              <span className="code_editor__line--purple">from&nbsp;</span>
              <span className="code_editor__line--orange">
                &lsquo;react&lsquo;
              </span>
              <span className="code_editor__line--gold">;</span>
            </div>

            {/* moveUser() */}
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
              <span className="code_editor__line--purple">export const </span>
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

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>

            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--yellow">useEffect</span>
              <span className={""}>(() </span>
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
              <span>{'"'}</span>
              <input
                name="leftValue"
                type="text"
                value={leftValue}
                onChange={this.handleLeftValueChange.bind(this)}
                className={`${leftError ? "form-error-input" : ""} tw-w-96`}
                required
                title="Must enter 'ArrowLeft'"
              />
              <span>{'"'}</span>
              <span>) &#123;</span>
            </div>

            {leftError && (
              <div className="code_editor__line">
                <span className={"form-error"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {leftError}
                </span>
              </div>
            )}

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
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={""}>&#125; </span>
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
              <span className={"code_editor__line--purple"}>else if </span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">event</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">code</span>
              <span className={""}> === </span>
              <span>{'"'}</span>
              <input
                className={`${rightError ? "form-error-input" : ""} tw-w-96`}
                name="rightValue"
                type="text"
                value={rightValue}
                onChange={this.handleRightValueChange.bind(this)}
                required
                title="Must enter 'ArrowRight'"
              />
              <span>{'"'}</span>
              <span>) &#123;</span>
            </div>

            {rightError && (
              <div className="code_editor__line">
                <span className={"form-error"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  {rightError}
                </span>
              </div>
            )}

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
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={""}>&#125;;</span>
            </div>
            <div className="code_editor__line">
              <span className={"form-error"}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--purple">return </span>
              <span className={""}>() =&gt; &#123;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--gold">document</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">
                removeEventListener
              </span>
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
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="">&#125;;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="">&#125;;</span>
            </div>

            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="">&#125;;</span>
            </div>

            <div className="code_editor__line">
              <span className="code_editor__line--purple">&#125;</span>
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
  const { repairError, leftValue, rightValue, leftError, rightError } =
    state.repair10;
  return { repairError, leftValue, rightValue, leftError, rightError };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...repairActions, ...exerciseActions },
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingAICodeBlock);
