import React, {Component} from "react";
import ReactGA from 'react-ga';

import {default as AboutLab1} from "./components/body/lab1/about";
import {default as ReadingLab1} from "./components/body/lab1/reading";
import {default as ExerciseLab1} from "./components/exercise/lab1/Main";
import {default as ReinforcementLab1} from "./components/body/lab1/reinforcement";
import {Sections} from './constants/index';

import {default as AboutLab2} from "./components/body/lab2/about";
import {default as ReadingLab2} from "./components/body/lab2/reading";
import {default as ExerciseLab2} from "./components/exercise/lab2/Main";
import {default as ReinforcementLab2} from "./components/body/lab2/reinforcement";

import {default as AboutLab3} from "./components/body/lab3/about";
import {default as ReadingLab3} from "./components/body/lab3/reading";
import {default as ExerciseLab3} from "./components/exercise/lab3/Main";
import {default as ReinforcementLab3} from "./components/body/lab3/reinforcement";

import {default as AboutLab4} from "./components/body/lab4/about";
import {default as ExerciseLab4} from "./components/exercise/lab4/Main";
import {default as ReadingLab4} from "./components/body/lab4/reading";
import {default as ReinforcementLab4} from "./components/body/lab4/reinforcement";
import {default as AboutLab5} from "./components/body/lab5/about";
import {default as ReadingLab5} from "./components/body/lab5/reading";
import {default as ExerciseLab5} from "./components/exercise/lab5/Main";
import {default as ReinforcementLab5} from "./components/body/lab5/reinforcement";
import {default as LandingPageBody} from "./components/body/landingpage/index";
import {default as SiteMap} from "./components/body/landingpage/sitemap";
import {default as Error} from "./components/body/landingpage/error";

import {default as Quiz} from "./components/quiz/App";
import {stateChange} from "./helpers/Redirect";
import Change from "./components/footer/footer";
import Header from "./components/header/header"
import {actions as appActions} from './reducers/lab1/AppReducer';
import {bindActionCreators} from 'redux';
import {actions as mainActions} from "./reducers/MainReducer";
import BodyHeader from "./components/header/BodyHeader";
import "./assets/stylesheets/main.scss";
import { Router} from "@reach/router";
import {connect} from "react-redux";
import { globalHistory } from '@reach/router';
var parse = require('url-parse');

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...appActions, ...mainActions}, dispatch)
  };
};

function initializeReactGA() {
    if (process.env.NODE_ENV === 'production') {
        const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
        ReactGA.initialize(TRACKING_ID);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}

class App extends Component {
   componentDidMount() {
        const {actions} = this.props;
        actions.login();
        const location= parse(window.location.href);
        stateChange(actions,location.pathname);
        globalHistory.listen((location) => {
            stateChange(actions, location.location.pathname);
        });
    }

  render() {
    const {state,actions} = this.props;
    const lab = state.main.lab;
    const body = state.main.body;
    initializeReactGA();
    return (
      <div>
        <Header />
        <div className = {"mainBody" + (lab !== 0 ? " container":"")}>
          {lab !== 0 &&
            <BodyHeader body={Sections[lab][body].name} lab={Sections[lab].name}/>
          }
          <div className="appBody">
            <Router basepath={process.env.PUBLIC_URL} className="app" >
              <LandingPageBody path="/" />
              <SiteMap path="/SiteMap" />
              <Error actions={actions} default />
              <AboutLab1 path="/Lab1/"/>
              <AboutLab2 path="/Lab2/"/>
              <AboutLab3 path="/Lab3/"/>
              <AboutLab4 path="/Lab4/"/>
              <AboutLab5 path="/Lab5/"/>
              <AboutLab1 path="/Lab1/About"/>
              <AboutLab2 path="/Lab2/About"/>
              <AboutLab3 path="/Lab3/About"/>
              <AboutLab4 path="/Lab4/About"/>
              <AboutLab5 path="/Lab5/About"/>

              <ReadingLab1 path="/Lab1/Reading"/>
              <ReadingLab2 path="/Lab2/Reading"/>
              <ReadingLab3 path="/Lab3/Reading"/>
              <ReadingLab4 path="/Lab4/Reading"/>
              <ReadingLab5 path="/Lab5/Reading"/>

              <ExerciseLab1 path="/Lab1/Exercise" />
              <ExerciseLab2 path="/Lab2/Exercise" />
              <ExerciseLab3 path="/Lab3/Exercise/*" />
              <ExerciseLab4 path="/Lab4/Exercise/*" />
              <ExerciseLab5 path="/Lab5/Exercise/*" />

              <ReinforcementLab1 path="/Lab1/Reinforcement" />
              <ReinforcementLab2 path="/Lab2/Reinforcement" />
              <ReinforcementLab3 path="/Lab3/Reinforcement" />
              <ReinforcementLab4 path="/Lab4/Reinforcement" />
              <ReinforcementLab5 path="/Lab5/Reinforcement" />


              <Quiz path={`/Lab${lab}/Quiz`}/>
            </Router>
          </div>
        </div>
        <Change/>
      </div>
    );
  }
}
export default connect(
    mapStateToProps, mapDispatchToProps)(App);
