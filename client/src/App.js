/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import ReactGA from "react-ga";

import { default as About } from "./components/body/About";
import { default as Reading } from "./components/body/Reading/Reading";

import { default as Reinforcement } from "./components/body/Reinforcement";

import { default as ExerciseLab1 } from "./components/exercise/lab1/Main";
import { Sections } from "./constants/index";

import { default as ExerciseLab2 } from "./components/exercise/lab2/Main";

import { default as ExerciseLab3 } from "./components/exercise/lab3/Main";

import { default as ExerciseLab4 } from "./components/exercise/lab4/Main";

import { default as ExerciseLab5 } from "./components/exercise/lab5/Main";

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
const parse = require("url-parse");

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

class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.login();
    const location = parse(window.location.href);
    stateChange(actions, location.pathname);
    globalHistory.listen((location) => {
      stateChange(actions, location.location.pathname);
    });
  }

  render() {
    const { state, actions } = this.props;
    const lab = state.main.lab;
    const body = state.main.body;
    // look into index.js in constants
    initializeReactGA();
    return (
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

              {/* <Imagine
                path="/ImagineExperiential/*"
                user={state.main.user}
              />

              <Imagine
                path="/ImagineExpression/*"
                user={state.main.user}
              /> */}

              <Imagine path="/Imagine/*" user={state.main.user} />
              {/* <Imagine
                path="/Imagine2/*"
                user={state.main.user}
                biasType={"user"}
                linkNum={2}
              />
              <Imagine
                path="/Imagine3/*"
                user={state.main.user}
                biasType={"team"}
                linkNum={3}
              /> */}

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

              <ExerciseLab1 path="/Lab1/Exercise" user={state.main.user} />
              <ExerciseLab2 path="/Lab2/Exercise" user={state.main.user} />
              <ExerciseLab3 path="/Lab3/Exercise/*" user={state.main.user} />
              <ExerciseLab4 path="/Lab4/Exercise/*" user={state.main.user} />
              <ExerciseLab5 path="/Lab5/Exercise/*" user={state.main.user} />

              <Reinforcement
                path={`/Lab${lab}/Reinforcement`}
                user={state.main.user}
                labID={lab}
              />

              <Quiz
                path={`/Lab${lab}/Quiz`}
                labId={lab}
                user={state.main.user}
              />
            </Router>
          </div>
        </div>
        <Change />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
