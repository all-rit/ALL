import React, { Component } from "react";
import { default as Quiz } from "../../../../quiz/components/QuizHandler";
import { EXERCISE_IDLE } from "../../../../../constants/lab7";
import { navigate } from "@reach/router";
import { MathComponent } from "mathjax-react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../../reducers/lab7/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AlterationQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "AlterationQuiz",
      updateStateFunc: props.actions.updateState,
    };
  }

  componentDidMount() {
    const { state } = this.props;
    if (state === EXERCISE_IDLE)
      setTimeout(() => navigate("/Lab7/Exercise/AlterationStart"));
  }

  render() {
    const { user } = this.props;
    return (
      <div className="center-div">
        <p className="playthrough__sentence">Alteration Quiz</p>
        <p className={"playthrough__sentence"}>
          How does the <b>new utility equation</b> impact the autonomous system
          compared to the <b>original utility equation</b>?
        </p>
        <div className={"tw-flex tw-flex-col playthrough__sentence"}>
          <MathComponent
            tex={String.raw`Original\;Utility\;Equation=\frac{Reward\;Value}{Cost\;Value}`}
          />
        </div>
        <Quiz
          path={`/AlterationQuiz`}
          labId={7}
          user={user}
          hideCertificate
          isFinalQuiz={false}
          submitData={() => {}}
        />
      </div>
    );
  }
}

AlterationQuiz.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { user } = state.main;
  return { user, state: state.exercise7.state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlterationQuiz);
