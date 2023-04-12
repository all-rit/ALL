import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { actions as repairActions } from "../../../../reducers/lab10/RepairReducer";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import {
  EXERCISE_PLAYING,
  POPUP_DELAY,
  POPUP_MESSAGES,
} from "../../../../constants/lab10";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "../../../../assets/stylesheets/components/CodeBlock.css";
import PropTypes from "prop-types";
import Highlight from "react-highlight";

class BuildingAICodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "BuildingAICodeBlock",
      timeout: null,
      rightValue: "",
      leftValue: "",
    };
  }

  static propTypes = {
    actions: PropTypes.object,
    leftValue: PropTypes.string,
    rightValue: PropTypes.string,
    repairError: PropTypes.string,
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    const inputLeft = document.getElementById("input-left");
    const inputRight = document.getElementById("input-right");
    console.log(inputRight);
    inputLeft.addEventListener("change", (e) =>
      this.setState({ leftValue: e.currentTarget.value })
    );
    inputRight.addEventListener("change", (e) =>
      this.setState({ rightValue: e.currentTarget.value })
    );
  }

  validateRepair() {
    const { actions } = this.props;
    const leftValue = this.validateMoveLeftValue();
    const rightValue = this.validateMoveRightValue();

    if (leftValue.passed || rightValue.passed) {
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
    const { leftValue } = this.props;
    let error = null;
    console.log(this.props);

    if (leftValue.length === 0) {
      error = POPUP_MESSAGES.ARROW_LEFT_NOT_INCLUDED;
      console.log("left empty");
    }
    if (leftValue !== "ArrowLeft") {
      error = POPUP_MESSAGES.ARROW_LEFT_WRONG;
      console.log("left wrong");
    }
    return {
      pass: error === null,
      error: error,
    };
  }
  validateMoveRightValue() {
    const { rightValue } = this.props;
    let error = null;

    if (rightValue.length === 0) {
      error = POPUP_MESSAGES.ARROW_RIGHT_NOT_INCLUDED;
      console.log("right empty");
    }
    if (rightValue !== "ArrowRight") {
      error = POPUP_MESSAGES.ARROW_RIGHT_WRONG;
      console.log("right wrong");
    }
    return {
      passed: error === null,
      error: error,
    };
  }

  handleLeftValueChange(e) {
    const { actions } = this.props;
    console.log(e.target.value);
    actions.updateMoveLeftValue(e.target.value);
  }

  handleRightValueChange(e) {
    const { actions } = this.props;
    console.log(e.target.value);
    actions.updateMoveRightValue(e.target.value);
  }

  render() {
    const { leftValue, rightValue } = this.state;
    const preInput = `
import { useState, useEffect } from "react"; 
function moveUser() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
     const handleKey = (event) => {
      // Enter 'ArrowLeft' into the input below
      if (event.code === `;

    const postLeftInput = `) { 
             setPosition((prevPosition) => prevPosition - 10);
      // Enter 'ArrowRight' into the input below
      } else if (event.code === `;

    const postRightInput = `) {
             setPosition((prevPosition) => prevPosition + 10);
      }
  };        
}
export default TrainNetwork;`;

    return (
      <div>
        <div className="filenameHeader">BuildingAICodeBlock.js</div>
        <div style={{ textAlign: "left" }}>
          <Highlight>
            <pre>
              <code className="language-jsx">{preInput.trim()}</code>
              &nbsp;
              <input
                id={"input-left"}
                name={"leftValue"}
                type="text"
                className={"tw-bg-bgdark tw-text-bgwhite"}
                value={leftValue}
                required
                title={"must enter ArrowLeft"}
              />
              <code>{postLeftInput.trim()}</code>
              &nbsp;
              <input
                value={rightValue}
                id={"input-right"}
                name={"rightValue"}
                type="text"
                className={"tw-bg-bgdark tw-text-bgwhite"}
                required
                title={"must enter ArrowRight"}
              />
              <code>{postRightInput.trim()}</code>
            </pre>
          </Highlight>
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
