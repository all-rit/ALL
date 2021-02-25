import React, {Component} from "react";
import {default as AboutLab1} from "./components/body/lab1/about";
import {default as ReadingLab1} from "./components/body/lab1/reading";
import {default as GameLab1} from "./components/game/lab1/Main";
import {default as VideoLab1} from "./components/body/lab1/video";
import {Sections} from './constants/index';
// import {default as AboutLab2} from "./components/body/lab2/about";
// import {default as ReadingLab2} from "./components/body/lab2/reading";
// import {default as GameLab2} from "./components/game/lab2/Main";
// import {default as VideoLab2} from "./components/body/lab2/video";

import {default as AboutLab3} from "./components/body/lab3/about";
import {default as ReadingLab3} from "./components/body/lab3/reading";
import {default as GameLab3} from "./components/game/lab3/Main";
import {default as VideoLab3} from "./components/body/lab3/video";

// import {default as AboutLab4} from "./components/body/lab4/about";
// import {default as ReadingLab4} from "./components/body/lab4/reading";
// import {default as GameLab4} from "./components/game/lab4/Main";
// import {default as VideoLab4} from "./components/body/lab4/video";
import {default as AboutLab5} from "./components/body/lab5/about";
import {default as ReadingLab5} from "./components/body/lab5/reading";
import {default as GameLab5} from "./components/game/lab5/Main";
import {default as VideoLab5} from "./components/body/lab5/video";
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
              <AboutLab3 path="/Lab3/"/>
              <AboutLab5 path="/Lab5/"/>
              <AboutLab1 path="/Lab1/About"/>
              <AboutLab3 path="/Lab3/About"/>
              {/* <AboutLab2 path="/Lab2/About"/>
              <AboutLab4 path="/Lab4/About"/> */}
              <AboutLab5 path="/Lab5/About"/>


              <ReadingLab1 path="/Lab1/Reading"/>
              <ReadingLab3 path="/Lab3/Reading"/>
              {/* <ReadingLab2 path="/Lab2/Reading"/>
              <ReadingLab4 path="/Lab4/Reading"/> */}
              <ReadingLab5 path="/Lab5/Reading"/>

              <GameLab1 path="/Lab1/Game" />
              <GameLab3 path="/Lab3/Game/*" />
              <GameLab5 path="/Lab5/Game/*" />
              {/* <GameLab2 path="/Lab2/Game" />
              
              <GameLab4 path="/Lab4/Game" /> */}
              
              <VideoLab1 path="/Lab1/Video" />
              <VideoLab3 path="/Lab3/Video" />
              {/* <VideoLab2 path="/Lab2/Video" />
              <VideoLab4 path="/Lab4/Video" /> */}
              <VideoLab5 path="/Lab5/Video" />

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
