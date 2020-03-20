import React, { Component } from "react";
import logo from "./img/accessCycle.png";
import About from "./components/body/about";
import Game from "./components/body/game";
import Reading from "./components/body/reading";
import Video from "./components/body/video";
import Quiz from "./components/body/quiz";
import Change from "./components/footer/change";
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
          <nav
              class="navbar navbar-expand-lg navbar-dark fixed-top"
              id="mainNav"
              style={{ backgroundColor: "#484848", height: "12%", fontSize: "90%" }}
          >
            <div class="container">
              <img
                  src={logo}
                  style={{
                    paddingRight: "20px",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    marginTop: "-10px"
                  }}
                  alt="Computing Accessibility"
              ></img>
              <a class="navbar-brand js-scroll-trigger" href="http://all.rit.edu">
                Accessibility Learning Labs
              </a>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                  <li class="nav-item">
                    <a
                        class="nav-link js-scroll-trigger"
                        href="http://all.rit.edu"
                        alt="Home page"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                        class="nav-link js-scroll-trigger"
                        onClick={this.handleAbout}
                        href="#about"
                        alt="About Section"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                        class="nav-link js-scroll-trigger"
                        onClick={this.handleReading}
                        href="#reading"
                        alt="Reading"
                    >
                      Reading
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                        class="nav-link js-scroll-trigger"
                        onClick={this.handleGame}
                        href="#game"
                        alt="Game"
                    >
                      Game
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                        class="nav-link js-scroll-trigger"
                        onClick={this.handleVideo}
                        href="#video"
                        alt="Videos"
                    >
                      Video
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                        class="nav-link js-scroll-trigger"
                        onClick={this.handleQuiz}
                        href="#quiz"
                        alt="Quiz"
                    >
                      Quiz
                    </a>
                  </li>
                </ul>
              </div>
              <Google />
            </div>
          </nav>

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
            <footer class="footer">
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
