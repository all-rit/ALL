/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab3/index";

class AdvancedInstructions extends Component {
  handleSubmit() {
    navigate("/Lab3/Exercise/ProblemDiscovery");
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }
  render() {
    const textToSpeech = (e, text) => {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };

    const paperStyle = {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "20px",
      marginBottom: "20px",
    };

    return (
      <div>
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Grid justifyContent="center" container spacing={10}>
              <Grid item>
                <Typography
                  aria-label={"Advanced Instructions"}
                  variant={"h4"}
                  gutterBottom
                >
                  Instructions for Advanced Activity
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Paper style={paperStyle}>
          <Typography
            aria-label={
              "Instructions for Advanced Activity" +
              "You will have to learn about accessibility by performing a task which will involve finding the accessibility issues in a page." +
              "Please make sure you are using Google Chrome." +
              "For the following activity, please ensure that you have volume enabled on your device." +
              "Click on the button below to test the functionality of the screen reader."
            }
            variant={"h6"}
            gutterBottom
            tabIndex={"0"}
          >
            You will have to learn about accessibility by performing a task
            which will involve finding the accessibility issues in a page.
            Please make sure you are using
            <Link
              component={Link}
              target="_blank"
              href={"https://www.google.com/chrome/"}
            >
              {" "}
              Google Chrome.{" "}
            </Link>
            For the following activity, please ensure that you have volume
            enabled on your device.
            <br />
            <br />
            Click on the button below to test the functionality of the screen
            reader.
            <br />
            <br />
            <div className="container text-center">
              <button
                className="btn btn-second btn-xl text-uppercase  mx-auto"
                key="repair"
                aria-label={"Test"}
                onClick={(e) => textToSpeech(e, "Test")}
              >
                Test
              </button>
            </div>
          </Typography>
          <br />
        </Paper>
        <Button
          href="#"
          onClick={this.handleSubmit}
          variant={"contained"}
          className="btn btn-second btn-xl text-uppercase  leftButton"
        >
          Next
        </Button>
      </div>
    );
  }
}

export default AdvancedInstructions;
