import React, {Component} from "react";
import {default as ReadingLab1} from "./components/body/lab1/reading";
import {default as AboutLab1} from "./components/body/lab1/about";
import {default as GameLab1} from "./components/game/lab1/Main";
import {default as VideoLab1} from "./components/body/lab1/video";
import {default as LandingPageBody} from "./components/body/landingpage/index";
import {default as SiteMap} from "./components/body/landingpage/sitemap";
import {default as Quiz} from "./components/quiz/App";
import Change from "./components/footer/footer";
import Header from "./components/header/header"
import {actions as appActions} from './reducers/lab1/AppReducer';
import {bindActionCreators} from 'redux';
import {actions as mainActions} from "./reducers/MainReducer";
import BodyHeader from "./components/header/BodyHeader";
import "./assets/stylesheets/main.scss";
import { Router , Redirect} from "@reach/router";
import {connect} from "react-redux";
var parse = require('url-parse');

export const Sections = {
  0: {
    name: "LandingPage",
    0: {
      name: "",
      value: <LandingPageBody/>
    },
    1: {
      name: "SiteMap",
      value: <SiteMap/>
    }
  },
  1:{
      name: "Lab1",
    0:{
      name: "About",
      value: <AboutLab1/>
    },
    1:{
      name: "Reading",
      value: <ReadingLab1/>
    },
    2:{
      name: "Game",
      value: <GameLab1/>
    },
    3:{
      name: "Video",
      value: <VideoLab1/>
    },
    4:{
      name: "Quiz",
      value: <Quiz/> //this is named Quiz because every lab uses the same component
    }
  }
}


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
  constructor(props) {
    super(props);
    this.setLabBody = this.setLabBody.bind(this);
  }
   componentDidMount() {
        const {actions} = this.props;
        actions.login();
        this.setLabBody();
    }
   setLabBody(location = null) {
    const {actions} = this.props;
    let parsed = location ? location: parse(window.location.href);
    parsed = parsed.pathname.split('/');
    const bodies = ["about", "reading", "game", "video", "quiz", "sitemap"]
    const labs = ["lab1", "lab2", "lab3", "lab4", "homepage"]
    let lab="";
    let body="";
    parsed.filter(string => {
      bodies.forEach(word => {
          if (string.toLowerCase() === word && body===""){
            body = word;
          }

      })
      labs.forEach(word => {
          if (string.toLowerCase() === word && lab===""){
            lab = word;
          }

      })
      return "";
    });
    switch (lab) {
      case "lab1":
        actions.setLab(1);
        break;
      case "lab2":
        actions.setLab(2);
        break;
      case "lab3":
        actions.setLab(3);
        break;
      case "lab4":
        actions.setLab(4);
        break;
      case "":
        actions.setLab(0);
        break;
      default:
        actions.setLab(0);
        break;
    }
    switch (body) {
      case "about":
        actions.setBody(0);
        break;
      case "reading":
        actions.setBody(1);
        break;
      case "game":
        actions.setBody(2);
        break;
      case "video":
        actions.setBody(3);
        break;
      case "quiz":
        actions.setBody(4);
        break;
      case "sitemap":
        actions.setBody(1);
        break;
      default:
        actions.setBody(0);
        break;
    }
  }


  render() {
    const {state} = this.props;
    const lab = state.main.lab;
    const body = state.main.body;
    return (
      <div>
        <Header />
        <div className = {"mainBody" + (lab!== 0? " container":"")}>
          {lab !== 0 &&
          <BodyHeader body={Sections[lab][body].name} lab={Sections[lab].name}/>
          }
          <div className="appBody">
            <Router basepath={process.env.PUBLIC_URL} className="app" >
              <LandingPageBody path="/"/>
              <SiteMap path="/SiteMap" />
              <AboutLab1 path="/Lab1/About"/>
              {/*<Redirect to="/"/>*/}
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
