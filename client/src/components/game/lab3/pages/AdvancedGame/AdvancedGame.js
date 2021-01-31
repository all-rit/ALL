import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import {GAME_PLAYING} from "../../../../../constants/lab3/index";

class AdvancedGame extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/AdvancedInstructions");
  }
    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_PLAYING);
    }
  render() {
    return (
      <div>
          <AppBar position="static" className = "appBar">
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography
                  aria-label={"Advanced Game"}
                  variant={"h4"}
                  gutterBottom
                >
                  Advanced Game
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
          the Understandable accessibility principle. The game consists of
          performing some tasks. Click Start game to begin!
        </Typography>
        <br />
        <Button
          href="#"
          onClick={this.handleSubmit}
          variant={"contained"}
          aria-label={"Start Game"}
          className = "btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton"
        >
          Start Game
        </Button>
      </div>
    );
  }
}

export default AdvancedGame;
