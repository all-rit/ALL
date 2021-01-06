import React, {Component} from "react";
import Home from "./components/body/landingpage";
import About from "./components/body/lab1/about";
import Game from "./components/body/lab1/game";
import Reading from "./components/body/lab1/reading";
import Video from "./components/body/lab1/video";
import Quiz from "./components/body/lab1/quiz";
import Change from "./components/footer/footer";
import Header from "./components/header/header"
//import "./assets/stylesheets/components/css/agency.min.css";
//import "./assets/stylesheets/components/css/style.css";
import "./assets/stylesheets/components/App.scss"
import {actions as appActions} from './reducers/lab1/AppReducer';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {actions as mainActions} from "./reducers/MainReducer";


export const Sections = [
  {
    name: "About",
    value: <Home />
  },
  {
    name: "Reading",
    value: <Reading />
  },
  {
    name: "Game",
    value: <Game />
  },
  {
    name: "Video",
    value: <Video />
  },
  {
    name: "Quiz",
    value: <Quiz />
  },
]


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
    x = x.split('/').pop();
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
    }
  }


  render() {
    const {state} = this.props;
    return (
      <div>
        <Header />
        <div className = "appBody">
          {Sections[state.app.body].value}
        </div>
        <Change />
      </div>
    );
  }
}
export default connect(
    mapStateToProps, mapDispatchToProps)(App);
