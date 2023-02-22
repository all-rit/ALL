/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import { MathComponent } from "mathjax-react";
import { EXERCISE_PLAYING } from "../../../../../constants/lab7";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../../reducers/lab7/ExerciseReducer";
import { connect } from "react-redux";

class AlterationStart extends Component {
  constructor(props) {
    super(props);
    this.state = { componentName: "AlterationStart" };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }

  handleStart() {
    navigate("/Lab7/Exercise/AlterationQuiz");
  }

  render() {
    return (
      <Fragment>
        <div className="center-div">
          <div className="guidance margin-bottom-2">
            <p className="playthrough__sentence">
              In this part of the exercise, you will be looking at different
              versions of the utility equation that you edited in the last
              activity.
            </p>
            <div>
              <p className="playthrough__sentence">
                In machine learning, a <b>utility equation</b> is used to assign
                values to certain actions that the AI system can take. A
                simplified version of a utility equation can be written as:
              </p>
              <MathComponent
                tex={String.raw`Utility = \frac{Reward\;Value}{Cost\;Value}`}
              />
              <p className="playthrough__sentence">
                The goal of a <b>utility equation</b> is to get more reward,
                despite the cost or higher utility.
              </p>
            </div>
            <p className="playthrough__sentence">
              To assess your understanding and grasp of the material, you will
              be given the original utility equation that was provided and a new
              equation. You will then be asked to compare them and their impact
              on the autonomous system.
            </p>
          </div>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={this.handleStart}
            key="continue"
          >
            Continue
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AlterationStart);
