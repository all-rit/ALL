/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab3/index";

class AdvancedExercise extends Component {
  handleSubmit() {
    navigate("/Lab3/Exercise/AdvancedInstructions");
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }
  render() {
    return (
      <div>
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Grid justifyContent="center" container spacing={10}>
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
          onClick={this.handleSubmit}
          variant={"contained"}
          aria-label={"Start Exercise"}
          className="btn btn-second btn-xl text-uppercase  leftButton"
        >
          Start Exercise
        </Button>
      </div>
    );
  }
}

export default AdvancedExercise;
