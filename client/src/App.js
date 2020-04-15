import React, { Component } from "react";
import logo from "./img/accessCycle.png";
import About from "./components/body/about";
import Game from "./components/body/game";
import Reading from "./components/body/reading";
import Video from "./components/body/video";
import Quiz from "./components/body/quiz";
import Change from "./components/footer/change";
import Header from "./components/header/header"
import { Google } from "./components/header/buttons/google";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/agency.min.css";
import "./css/style.css";

const section = {
  0: <About />,
  1: <Reading />,
  2: <Game />,
  3: <Video />,
  4: <Quiz />
};

class App extends Component {
  state = { count: 0 };

  componentWillMount() {
    console.log(window.location.href);
    let x = window.location.href;
    x = x.split('/').pop();
    switch (x) {
      case "about":
        this.setState({count: 0});
        break;
      case "reading":
        this.setState({count: 1});
        break;
      case "game":
        this.setState({count: 2});
        break;
      case "video":
        this.setState({count: 3});
        break;
      case "quiz":
        this.setState({count: 4});
        break;
    }
  }


  handleIncrement = () => {
    if (this.state.count < 4) {
      this.setState({
        count: this.state.count + 1,
        message: null
      });
    } else {
      this.setState({
        message: "This is the final page"
      });
    }
  };

  handleDecrement = () => {
    if (this.state.count) {
      this.setState({
        count: this.state.count - 1,
        message: null
      });
    } else {
      this.setState({
        message: "This is the first page"
      });
    }
  };

  handleAbout = () => {
    this.setState({
      count: 0,
      message: null
    });
  };

  handleReading = () => {
    this.setState({
      count: 1,
      message: null
    });
  };


  handleGame = () => {
    this.setState({
      count: 2,
      message: null
    });
  };

  handleVideo = () => {
    this.setState({
      count: 3,
      message: null
    });
  };

  handleQuiz = () => {
    this.setState({
      count: 4,
      message: null
    });
  };

  disappearNext = () => {
    if (this.state.count >= 4) {
      return true;
    } else {
      return false;
    }
  };

  disappearBack = () => {
    if (this.state.count <= 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (

         <div>
           <Header count={this.state.count} handleQuiz={this.handleQuiz} handleAbout={this.handleAbout} handleHome={this.handleHome} handleReading={this.handleReading} handleGame={this.handleGame} handleVideo={this.handleVideo}  />

         <div>{section[this.state.count]}</div>

          <div class="container">
            <button
                className="btn btn-second btn-xl text-uppercase js-scroll-trigger back "
                onClick={this.handleDecrement}
                disabled={this.disappearBack() ? "disabled" : false}
            >
              back
            </button>
            <button
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger next"
                onClick={this.handleIncrement}
                disabled={this.disappearNext() ? "disabled" : false}
            >
              next
            </button>
            <footer >
              <div class="btn-change">
                <Change />
              </div>
              <div class="btn-information">
                These buttons are disabled so as to not interfere with the
                accessibility-related portions of the lab.
              </div>
            </footer>
          </div>
           </div>
    );
  }
}

export default App;
