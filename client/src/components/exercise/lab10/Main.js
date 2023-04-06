/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import { actions as exerciseActions } from "../../../reducers/lab10/ExerciseReducer";
import { bindActionCreators } from "redux";
import ExerciseStart from "./pages/ExerciseStart";
import ExerciseEnd from "./pages/ExerciseEnd";
import BuildingAICodeBlock from "./pages/BuildingAICodeBlock";
import TrainingAICodeBlock from "./pages/TrainingAICodeBlock";

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

class Main extends Component {
  render() {
    const { actions, state, user } = this.props;
    return (
      <div className="bottomSpace">
        <Router className="app">
          <ExerciseStart default path="/" actions={actions} />
          <BuildingAICodeBlock
            default
            path="/BuildingAICodeBlock"
            actions={actions}
            state={state}
            user={user}
          />
          <TrainingAICodeBlock
            path="/TrainingAICodeBlock"
            actions={actions}
            state={state}
            user={user}
          />

          <ExerciseEnd
            path="/ExerciseEnd"
            actions={actions}
            state={state}
            user={user}
          />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
