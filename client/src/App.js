import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";

import { default as About } from "./components/body/About";
import { default as Reading } from "./components/body/Reading/Reading";

import { default as Reinforcement } from "./components/body/Reinforcement";

import { Sections } from "./constants/index";
import { default as ExerciseLab1 } from "./components/exercise/lab1/Main";
import { default as ExerciseLab2 } from "./components/exercise/lab2/Main";
import { default as ExerciseLab3 } from "./components/exercise/lab3/Main";
import { default as ExerciseLab4 } from "./components/exercise/lab4/Main";
import { default as ExerciseLab5 } from "./components/exercise/lab5/Main";
import { default as ExerciseLab6 } from "./components/exercise/lab6/Main";
import { default as ExerciseLab7 } from "./components/exercise/lab7/Main";
import { default as ExerciseLab8 } from "./components/exercise/lab8/Main";
import { default as ExerciseLab9 } from "./components/exercise/lab9/Main";
import { default as ExerciseLab10 } from "./components/exercise/lab10/Main";
import { default as ExerciseLab11 } from "./components/exercise/lab11/Main";

import { default as LandingPageBody } from "./components/body/landingpage/index";
import { default as SiteMap } from "./components/body/landingpage/sitemap";
import { default as Error } from "./components/body/landingpage/error";
import { default as Profile } from "./components/body/profilepage/Profile";
import { default as Imagine } from "./components/imagine23/Main";

import { default as Quiz } from "./components/quiz/components/QuizHandler";
import { stateChange } from "./helpers/Redirect";
import Change from "./components/footer/footer";
import Header from "./components/header/header";
import { actions as appActions } from "./reducers/lab1/AppReducer";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "./reducers/MainReducer";
import BodyHeader from "./components/header/BodyHeader";
import "./assets/stylesheets/main.scss";
import { Router } from "@reach/router";
import { connect } from "react-redux";
import { globalHistory } from "@reach/router";
import Educators from "./components/body/educators";
import EducatorsContent from "./components/body/educators/EducatorsContent";
const parse = require("url-parse");
import useMainStateContext from "./reducers/MainContext";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...appActions, ...mainActions }, dispatch),
  };
};

function initializeReactGA() {
  if (process.env.NODE_ENV === "production") {
    const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

const App = () => {
  useEffect(() => {
    // const { actions } = props;
    actions.login();
    const location = parse(window.location.href);
    stateChange(actions, location.pathname);
    globalHistory.listen((location) => {
      stateChange(actions, location.location.pathname);
    });
  }, []);
  const context = useMainStateContext();
  const { state, actions } = context;
  const lab = state.main.lab;
  const body = state.main.body;
  const [quizCompleted, setQuizCompleted] = useState(false);

  initializeReactGA();
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <div className={"mainBody" + (lab !== 0 ? " container" : "")}>
          {lab !== 0 && (
            <BodyHeader body={Sections[lab][body].name} labID={lab} />
          )}
          <div className="appBody">
            <Router basepath={process.env.PUBLIC_URL} className="app">
              <LandingPageBody path="/" />
              <SiteMap path="/SiteMap" />
              <Profile path="/Profile" user={state.main.user} />
              <Error actions={actions} default />
              <Imagine path="/Imagine/*" user={state.main.user} />

              <About path={`/Lab${lab}/`} user={state.main.user} labID={lab} />
              <About
                path={`/Lab${lab}/About`}
                user={state.main.user}
                labID={lab}
              />

              <Reading
                path={`/Lab${lab}/Reading`}
                user={state.main.user}
                labID={lab}
              />

              {/* Educators Section */}
              <Educators path="/Educators" user={state.main.user} />
              <EducatorsContent path={"/Educators/Content"} />

              {/* Exercises */}
              <ExerciseLab1 path="/Lab1/Exercise" user={state.main.user} />
              <ExerciseLab2 path="/Lab2/Exercise" user={state.main.user} />
              <ExerciseLab3 path="/Lab3/Exercise/*" user={state.main.user} />
              <ExerciseLab4 path="/Lab4/Exercise/*" user={state.main.user} />
              <ExerciseLab5 path="/Lab5/Exercise/*" user={state.main.user} />
              <ExerciseLab6 path="/Lab6/Exercise/*" user={state.main.user} />
              <ExerciseLab7 path="/Lab7/Exercise/*" user={state.main.user} />
              <ExerciseLab8 path="/Lab8/Exercise/*" user={state.main.user} />
              <ExerciseLab9 path="/Lab9/Exercise/*" user={state.main.user} />
              <ExerciseLab10 path="/Lab10/Exercise/*" user={state.main.user} />
              <ExerciseLab11 path="/Lab11/Exercise/*" user={state.main.user} />

              <Reinforcement
                path={`/Lab${lab}/Reinforcement`}
                user={state.main.user}
                labID={lab}
              />

              <Quiz
                path={`/Lab${lab}/Quiz`}
                labId={lab}
                user={state.main.user}
                isFinalQuiz={true}
                hideCertificate={false}
                quizCompleted={quizCompleted}
                setQuizCompleted={setQuizCompleted}
              />
            </Router>
          </div>
        </div>
        <Change
          context={context}
          quizCompleted={quizCompleted}
          setQuizCompleted={setQuizCompleted}
        />
      </div>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
