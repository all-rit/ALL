/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
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
import UpdateID from "./pages/UpdateID";
const { nanoid } = require("nanoid");

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
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    if (user?.userid) {
      let userSession = sessionStorage.getItem(user?.userid);
      console.log(userSession);
      if (!userSession) {
        let newID = nanoid(6).toUpperCase();
        sessionStorage.setItem(user?.userid, newID);
        setUserID(newID);
      } else {
        setUserID(userSession);
      }
    }
  }, [user]);

  // sessionStorage.removeItem("key");
  // sessionStorage.clear();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase tw-text-right">
              {"ID#" + userID}
            </h2>
          </div>
        </div>
      </div>
      <div className="bottomSpace">
        <Router className="app">
          <UpdateID
            default
            path="/UpdateID"
            actions={actions}
            state={state}
            setUserID={setUserID}
            user={user}
          />
          <LandingPage
            path="/ExperientialStart"
            actions={actions}
            state={state}
            userID={userID}
          />
          <MainInstructions
            path="/ExperientialInstructions"
            actions={actions}
            state={state}
            userID={userID}
          />
          <ExerciseLab2
            path="/ExperientialExercise"
            actions={actions}
            state={state}
            isImagine
            userID={userID}
          />
          <ExpressionStart
            path="/ExpressionStart"
            actions={actions}
            state={state}
            userID={userID}
            setCount={setCount}
          />
          <ExpressionExercise
            path="/ExpressionExercise"
            actions={actions}
            state={state}
            setCount={setCount}
            count={count}
            userID={userID}
          />
          <ExpressionScore
            path="/ExpressionScore"
            actions={actions}
            state={state}
            count={count}
            userID={userID}
          />
          <ExerciseEnd
            path="/ExperientialExerciseEnd"
            actions={actions}
            state={state}
            isExperiential
            userID={userID}
          />
          <ExerciseEnd
            path="/ExpressionExerciseEnd"
            actions={actions}
            state={state}
            isExperiential={false}
            userID={userID}
          />
        </Router>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
