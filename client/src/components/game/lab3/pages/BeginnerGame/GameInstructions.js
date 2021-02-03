import React, { Component } from "react";
import { Button, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import { navigate } from "@reach/router";
import {GAME_PLAYING} from "../../../../../constants/lab3/index";

class GameInstructions extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/Lab3/UserUpdatedGame", {state:{updated:false}});
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
    
    const paperStyle = {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "20px"
    };
    return (
      <div>
        <AppBar position="static" className = "appBar">
          <Toolbar>
            <Typography variant={"h4"} aria-label={"Instructions"}>
              Instructions{" "}
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper style={paperStyle} tabIndex={"0"}>
          <Typography
            variant={"h6"}
            color={"inherit"}
            paragraph={true}
            aria-label={
              "You clicked on an image." +
              " However, without the ability to see, it may be\n" +
              " difficult to decipher what these images represent.\n" +
              " Please make sure you are using Google Chrome." +
              "Please click the " +
              "'next' button to experience what a similar, simple activity might look like to someone who is " +
              "blind." + 
              "For the following activity, please ensure that you have volume enabled on your device." + 
              "Click on the button below to test the functionality of the screen reader."
            }
            tabIndex={"0"}
          >
            You clicked on an image. However, without the ability to see, it may
            be difficult to decipher what these images represent. Please make
            sure you are using
            <Link component={Link} target="_blank" href={"https://www.google.com/chrome/"}>
              {" "}
              Google Chrome.{" "}
            </Link>
            For the following activity, please ensure that you have volume enabled on your device.
            <br />
            <br />
            Click on the button below to test the functionality of the screen reader.
          </Typography>
          <br />
          <div className="container text-center">
            <button 
              className="btn btn-second btn-xl text-uppercase js-scroll-trigger mx-auto"
              key="repair"
              aria-label={"Test"}
              onClick={(e) => textToSpeech(e, "Test")}
            >
              Test
            </button>
          </div>
          <br />
        </Paper>
        <br />
        <Button
          onClick={this.handleSubmit}
          variant={"contained"}
          className = "btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton"
          aria-label={"Next"}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default GameInstructions;
