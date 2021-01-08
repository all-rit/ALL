import React, {Component} from "react";
import {default as ReadingLab1} from "./components/body/lab1/reading";
import {default as AboutLab1} from "./components/body/lab1/about";
import {default as GameLab1} from "./components/body/lab1/game";
import {default as VideoLab1} from "./components/body/lab1/video";
import {default as QuizLab1} from "./components/body/lab1/quiz";

import Change from "./components/footer/footer";
import Header from "./components/header/header"
import "./assets/stylesheets/components/css/agency.min.css";
import "./assets/stylesheets/components/css/style.css";
import {actions as appActions} from './reducers/lab1/AppReducer';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {actions as mainActions} from "./reducers/MainReducer";


export const Sections = {
  0: {
    name: "LandingPage",
    0: {
      name: "Main",
      value: ""
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
      value: <QuizLab1/>
    }
  }

}


const mapStateToProps = (state) => {
  return {
    // General
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...appActions, ...mainActions}, dispatch)
  };
};


class App extends Component {
    state = {count: 0};
   componentDidMount() {
        const {actions} = this.props;
        actions.login();
    }
  UNSAFE_componentWillMount() {
    const {actions} = this.props;
    let x = window.location.href;
    x = x.split('/').pop().toLowerCase();
    switch (x) {
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
      default:
        break;
    }
    x = x.split('/').pop().toLowerCase();
    switch (x) {
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
        break;
    }
  }


  render() {
    const {state} = this.props;
    return (
      <div>
        <Header />
        <div className = "appBody">
          {Sections[state.main.lab][state.main.body].value}
        </div>
        <Change />
      </div>
    );
  }
}
export default connect(
    mapStateToProps, mapDispatchToProps)(App);
