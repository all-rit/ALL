/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import { bindActionCreators } from "redux";
import LandingPage from "./pages/landingPage";
import MainInstructions from "./pages/MainInstructions";
import ExerciseLab2 from "../exercise/lab2/Main";
import ExpressionStart from "./pages/Expression/ExpressionStart";
import ExpressionExercise from "./pages/Expression/ExpressionExercise";
import ExpressionScore from "./pages/Expression/ExpressionScore";
import ExerciseEnd from "./pages/ExerciseEnd";
import StartActivity from "./pages/StartActivity";
import ExpressionMainInstructions from "./pages/Expression/ExpressionMainInstructions";
import ExpressionInstructions from "./pages/Expression/ExpressionInstructions";
import ExperientialEnd from "./pages/ExperientialEnd";

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

const Main = (props) => {
  const { actions, state } = props;
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bottomSpace">
        <Router className="app">
          <StartActivity
            default
            path="/StartActivity"
            actions={actions}
            state={state}
          />
          <LandingPage
            path="/ExperientialStart"
            actions={actions}
            state={state}
          />
          <ExpressionInstructions
            path="/ExpressionStart"
            actions={actions}
            state={state}
          />
          <MainInstructions
            path="/MainInstructions"
            actions={actions}
            state={state}
          />
          <ExpressionMainInstructions
            path="/ExpressionInstructions"
            actions={actions}
            state={state}
          />
          <ExerciseLab2
            path="/ExperientialExercise"
            actions={actions}
            state={state}
            isIntervention
          />
          <ExerciseLab2
            path="/ExpressionActivity"
            actions={actions}
            state={state}
            isIntervention
            isInterventionExpression
          />
          <ExpressionStart
            path="/ExpressionExerciseStart"
            actions={actions}
            state={state}
            setCount={setCount}
          />
          <ExpressionExercise
            path="/ExpressionExercise"
            actions={actions}
            state={state}
            setCount={setCount}
            count={count}
          />
          <ExpressionScore
            path="/ExpressionScore"
            actions={actions}
            state={state}
            count={count}
          />
          <ExerciseEnd
            path="/ExperientialExerciseEnd"
            actions={actions}
            state={state}
            isExperiential
            exerciseState={state.exercise2.exerciseState}
          />
          <ExerciseEnd
            path="/ExpressionExerciseEnd"
            actions={actions}
            state={state}
            isExperiential={false}
            exerciseState={state.exercise2.exerciseState}
          />
          <ExperientialEnd
            path="/ExperientialEnd"
            actions={actions}
            state={state}
          />
        </Router>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
