import React, { Component } from "react";
import { AppBar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import burgerImage from "../../assets/images/b.png";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import {GAME_PLAYING} from "../../constants";

class ProblemDiscoveryFixedExperience extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/ProblemExplanation");
  }
    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_PLAYING);
    }
  render() {
    const textToSpeech = (e, text) => {
      let synth = window.speechSynthesis;
      synth.cancel();
      let utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };
    
    const imgStyle = {
      width: "128px",
      height: "128px",
      border: "1px solid black",
      tabIndex: "0"
    };
    
    return (
      <div>
          <AppBar position="static" className = "appBar">
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography
                  variant={"h4"}
                  aria-label={"Discover the problem"}
                  tabIndex={"0"}
                  gutterBottom
                  onFocus={(e) => textToSpeech(e, "Repaired version of previous page.")}
                >
                  Repaired Version of Previous Page
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <br />
        <Typography
          variant={"subtitle1"}
          aria-label={"Subtitle Instructions"}
          gutterBottom
          tabindex={"0"}
          onFocus={(e) => textToSpeech(e, "The accessibility issues have been repaired here. All images say what their contents are as such like 'cat', 'burger' and 'car' etc. and not 'image of cat', 'image of burger', 'image of car' etc. . Try using your screenreader now.")}
        >
          The accessibility issues have been repaired here. All images say what
          their contents are as such like 'cat', 'burger' and 'car' etc. and not
          'image of cat', 'image of burger', 'image of car' etc. . Try using
          your screenreader now.
        </Typography>
        <br />
        <input
          style={imgStyle}
          type={"image"}
          src={catImage}
          alt={"cat"}
          tabIndex={"0"}
          onFocus={(e) => textToSpeech(e, "cat")}
        />
        <br />
        <input
          style={imgStyle}
          type={"image"}
          src={carImage}
          alt={"car"}
          tabIndex={"0"}
          onFocus={(e) => textToSpeech(e, "car")}
        />
        <br />
        <input
          style={imgStyle}
          type={"image"}
          src={burgerImage}
          alt={"burger"}
          tabIndex={"0"}
          onFocus={(e) => textToSpeech(e, "burger")}
        />
        <br />
        <Button variant={"text"} aria-label={"Ok"} onFocus={(e) => textToSpeech(e, "ok")}>
          Ok
        </Button>
        <Button variant={"text"} aria-label={"Cancel"} onFocus={(e) => textToSpeech(e, "cancel")}>
          Cancel
        </Button>
        <br />
        <Button
          href="#"
          onClick={this.handleSubmit}
          variant={"contained"}
          className = "btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton"
          onFocus={(e) => textToSpeech(e, "Next")}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default ProblemDiscoveryFixedExperience;
