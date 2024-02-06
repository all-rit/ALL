import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AppBar, Typography, Link } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * Renders the instructions for the advanced activity.
 * This component includes a speech synthesis functionality and a button to test the screen reader.
 * It also updates the user state when mounted and navigates to the next page on button click.
 */
const AdvancedInstructions = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleSubmit = () => {
    navigate("/Lab3/Exercise/ProblemDiscovery");
  };

  /**
   * Speaks the given text using the browser's speech synthesis API.
   * @param {Event} e - The event object.
   * @param {string} text - The text to be spoken.
   */
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
          <Grid justify="center" container spacing={10}>
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
        onClick={handleSubmit}
        variant={"contained"}
        className="btn btn-second btn-xl text-uppercase  leftButton"
      >
        Next
      </Button>
    </div>
  );
};

export default AdvancedInstructions;
