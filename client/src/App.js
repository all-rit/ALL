import React, {Component} from "react";
import {default as AboutLab1} from "./components/body/lab1/about";
import {default as ReadingLab1} from "./components/body/lab1/reading";
import {default as GameLab1} from "./components/game/lab1/Main";
import {default as VideoLab1} from "./components/body/lab1/video";
import {Sections} from './constants/index';

import {default as AboutLab2} from "./components/body/lab2/about";
import {default as ReadingLab2} from "./components/body/lab2/reading";
import {default as GameLab2} from "./components/game/lab2/Main";
import {default as VideoLab2} from "./components/body/lab2/video";

import {default as AboutLab3} from "./components/body/lab3/about";
import {default as ReadingLab3} from "./components/body/lab3/reading";
import {default as GameLab3} from "./components/game/lab3/Main";
import {default as VideoLab3} from "./components/body/lab3/video";

// import {default as AboutLab4} from "./components/body/lab4/about";
// import {default as ReadingLab4} from "./components/body/lab4/reading";
// import {default as GameLab4} from "./components/game/lab4/Main";
// import {default as VideoLab4} from "./components/body/lab4/video";

import {default as LandingPageBody} from "./components/body/landingpage/index";
import {default as SiteMap} from "./components/body/landingpage/sitemap";
import {default as Quiz} from "./components/quiz/App";
import handleRedirect from "./helpers/Redirect";
import Change from "./components/footer/footer";
import Header from "./components/header/header"
import {actions as appActions} from './reducers/lab1/AppReducer';
import {bindActionCreators} from 'redux';
import {actions as mainActions} from "./reducers/MainReducer";
import BodyHeader from "./components/header/BodyHeader";
import "./assets/stylesheets/main.scss";
import { Router} from "@reach/router";
import {connect} from "react-redux";

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
        handleRedirect(actions,0,0,true);
    }

  render() {
    const {state} = this.props;
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
              <LandingPageBody path="/" default/>
              <SiteMap path="/SiteMap" />

              <AboutLab1 path="/Lab1/"/>
              <AboutLab2 path="/Lab2/"/>
              <AboutLab3 path="/Lab3/"/>
              <AboutLab1 path="/Lab1/About"/>
              <AboutLab3 path="/Lab3/About"/>
              <AboutLab2 path="/Lab2/About"/>
              {/* <AboutLab4 path="/Lab4/About"/> */}
              
              <ReadingLab1 path="/Lab1/Reading"/>
              <ReadingLab2 path="/Lab2/Reading"/>
              <ReadingLab3 path="/Lab3/Reading"/>
              {/* <ReadingLab4 path="/Lab4/Reading"/> */}

              <GameLab1 path="/Lab1/Game" />
              <GameLab2 path="/Lab2/Game" />
              <GameLab3 path="/Lab3/Game/*" />
              {/* <GameLab4 path="/Lab4/Game" /> */}
              
              <VideoLab1 path="/Lab1/Video" />
              <VideoLab2 path="/Lab2/Video" />
              <VideoLab3 path="/Lab3/Video" />
              {/* <VideoLab4 path="/Lab4/Video" /> */}

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
