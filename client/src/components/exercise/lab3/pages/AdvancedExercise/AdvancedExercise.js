import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

/**
 * Represents the AdvancedExercise component.
 * This component is responsible for rendering the advanced exercise page.
 * It displays the exercise title, instructions, and a button to start the exercise.
 */
const AdvancedExercise = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleSubmit = () => {
    navigate("/Lab3/Exercise/AdvancedInstructions");
  };

  return (
    <div>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Grid justify="center" container spacing={10}>
            <Grid item>
              <Typography
                aria-label={"Advanced Exercise"}
                variant={"h4"}
                gutterBottom
              >
                Advanced Exercise
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <br />
      <Typography
        aria-label={"instructions"}
        variant={"h6"}
        paragraph={true}
        gutterBottom
      >
        The learning objective of this lab is for students to learn and apply
        the Understandable accessibility principle. The exercise consists of
        performing some tasks. Click Start exercise to begin!
      </Typography>
      <br />
      <Button
        href="#"
        onClick={handleSubmit}
        variant={"contained"}
        aria-label={"Start Exercise"}
        className="btn btn-second btn-xl text-uppercase  leftButton"
      >
        Start Exercise
      </Button>
    </div>
  );
};

export default AdvancedExercise;
