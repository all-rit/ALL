import React, { Component } from "react";
import { AppBar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import catImage from "../../../../../assets/images/c1.svg";
import carImage from "../../../../../assets/images/c2.svg";
import burgerImage from "../../../../../assets/images/b.png";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING, LAB_ID} from "../../../../../constants/lab3/index";
import {PageService} from "../../../../../services/PageService";

class ProblemDiscovery extends Component {
  handleSubmit() {
    const name = "ProblemDiscovery"
    PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
    navigate( "/Lab3/Exercise/ProblemDiscoveryFixedExperience");
  }
    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(EXERCISE_PLAYING)
        this.interval = setInterval(
            () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
            1000
        );
    }
    constructor(props) {
        super(props);
        this.state = { render: "", secondsElapsed: 0 };
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
                  gutterBottom
                  tabIndex={"0"}
                  onFocus={(e) => textToSpeech(e, "Discover the problem")}
                >
                  Discover the Problem
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
          tabIndex={"0"}
          onFocus={(e) => textToSpeech(e, "Can you find the accessibility issues with this page? Try using your screenreader.")}
        >
          Can you find the accessibility issues with this page? Try using your
          screenreader.
        </Typography>
        <br />
        <Typography
          variant={"body1"}
          aria-label={"Body Instructions"}
          gutterBottom
          tabIndex={"0"}
          onFocus={(e) => textToSpeech(e, "Write down the problems on a notepad or any other text editor. Go ahead take a guess. Don't actually click on the Ok and Cancel buttons. They are there for the example.")}
        >
          Write down the problems on a notepad or any other text editor. Go
          ahead take a guess. Don't actually click on the Ok and Cancel buttons.
          They are there for the example.
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
          alt={"image of car"}
          tabIndex={"0"}
          onFocus={(e) => textToSpeech(e, "image of car")}
        />
        <br />
        <input
          style={imgStyle}
          type={"image"}
          src={burgerImage}
          alt={"image of burger"}
          tabIndex={"0"}
          onFocus={(e) => textToSpeech(e, "image of burger")}
        />
        <br />
        <Button variant={"text"} onFocus={(e) => textToSpeech(e, "ok button")}>Ok</Button>
        <Button variant={"text"} onFocus={(e) => textToSpeech(e, "cancel button")}>Cancel</Button>
        <br />
        <Button
          href="#"
          onClick={this.handleSubmit.bind(this)}
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

export default ProblemDiscovery;
