/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, { useState } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import { bindActionCreators } from "redux";
import LandingPage from "./pages/landingPage";
import MainInstructions from "./pages/mainInstructions";

import { default as ExerciseLab2 } from "../exercise/lab2/Main";
import ExpressionStart from "./pages/ExpressionStart";
import ExpressionExercise from "./pages/ExpressionExercise";
import ExpressionScore from "./pages/ExpressionScore";
import ExerciseEnd from "./pages/ExerciseEnd";

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

const Main = (props) => {
  const { actions, state, user } = props;
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase tw-text-right">
              {"ID#" + user?.userid}
            </h2>
          </div>
        </div>
      </div>
      <div className="bottomSpace">
        <Router className="app">
          <LandingPage
            default
            path="/ExperientialStart"
            actions={actions}
            state={state}
            user={user}
          />
          <MainInstructions
            path="/ExperientialInstructions"
            actions={actions}
            state={state}
            user={user}
          />
          <ExerciseLab2
            path="/ExperientialExercise"
            actions={actions}
            state={state}
            user={user}
            isImagine
          />
          <ExpressionStart
            path="/ExpressionStart"
            actions={actions}
            state={state}
            user={user}
          />
          <ExpressionExercise
            path="/ExpressionExercise"
            actions={actions}
            state={state}
            user={user}
            setCount={setCount}
            count={count}
          />
          <ExpressionScore
            path="/ExpressionScore"
            actions={actions}
            state={state}
            user={user}
            count={count}
          />
          <ExerciseEnd
            path="/ExprientialExerciseEnd"
            actions={actions}
            state={state}
            user={user}
            isExperiential
          />
          <ExerciseEnd
            path="/ExpressionExerciseEnd"
            actions={actions}
            state={state}
            user={user}
            isExperiential={false}
          />
        </Router>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
