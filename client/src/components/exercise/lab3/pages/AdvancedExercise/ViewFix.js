import React, { useState, useEffect } from "react";
import { AppBar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { LAB_ID } from "../../../../../constants/lab3/index";
import { PageService } from "../../../../../services/PageService";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

const ViewFix = () => {
  const { actions } = useMainStateContext();
  const [aria1, setAria1] = useState("Ok button");
  const [aria2, setAria2] = useState("Cancel button");
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    if (window.location.state) {
      setAria1(window.location.state.aria1.replace(/<[^>]*>?/gm, ""));
      setAria2(window.location.state.aria2.replace(/<[^>]*>?/gm, ""));
    }
    const interval = setInterval(() => {
      setSecondsElapsed(secondsElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [actions, secondsElapsed]);

  const navOnClick = () => {
    const name = "ViewFix";
    PageService.createPage(name, secondsElapsed, LAB_ID);
    navigate("/Lab3/Exercise/ProblemFix");
  };

  const textToSpeech = (text) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  };

  return (
    <div>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Grid justify="center" container spacing={10}>
            <Grid item>
              <Typography
                variant={"h4"}
                aria-label={"Title"}
                gutterBottom
                tabindex={"0"}
                onFocus={(e) => textToSpeech(e, "Test Fix")}
              >
                Test Repair
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <br />
      <Typography
        variant={"h6"}
        aria-label={"Subtitle Instructions"}
        gutterBottom
        tabindex={"0"}
        onFocus={(e) => textToSpeech(e, "Is your page now more accessible?")}
      >
        Is your page now more accessible?
      </Typography>
      <br />
      <Typography
        variant={"body1"}
        aria-label={"Body Instructions"}
        gutterBottom
        tabindex={"0"}
        onFocus={(e) =>
          textToSpeech(
            e,
            "If you have updated the buttons with the appropriate " +
              "aria-labels then you have succeeded. They can now be effectively described by screenreaders."
          )
        }
      >
        If you have updated the buttons with the appropriate aria-labels then
        you have succeeded. They can now be effectively described by
        screenreaders.
      </Typography>
      <br />
      <Button
        variant={"text"}
        aria-label={aria1}
        onFocus={(e) => textToSpeech(e, aria1)}
      >
        Ok
      </Button>
      <Button
        variant={"text"}
        aria-label={aria2}
        onFocus={(e) => textToSpeech(e, aria2)}
      >
        Cancel
      </Button>
      <br />
      <br />
      <Button
        variant={"contained"}
        className="btn btn-second btn-xl text-uppercase  leftButton"
        onClick={navOnClick}
        onFocus={(e) => textToSpeech(e, "Next")}
      >
        Next
      </Button>
    </div>
  );
};

export default ViewFix;
