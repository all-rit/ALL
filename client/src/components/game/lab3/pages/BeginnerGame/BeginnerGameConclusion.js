import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import {GAME_IDLE, LAB_ID} from "../../../../../constants/lab3";
import UserLabService from "../../../../../services/UserLabService";
class BeginnerGameConclusion extends Component {
  handleSubmit() {
    navigate("/Lab3/Game");
  }
    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_IDLE);
        UserLabService.complete_game(LAB_ID);
    }
  render() {
    const conclusionTypographyStyle = { marginTop: "20px" };
    return (
      <div>
          <AppBar position="static" className = "appBar">
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography variant={"h4"}>Conclusion</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Typography
          variant={"h6"}
          paragraph={true}
          style={conclusionTypographyStyle}
        >
          You have successfully completed the activity! Click on the home button
          to return to the main page
        </Typography>
          <div style={{textAlign:"center"}}>
            <Button
              href="#"
              onClick={this.handleSubmit}
              variant={"contained"}
              className = "btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton"
            >
              Home
            </Button>
          </div>
      </div>
    );
  }
}

export default BeginnerGameConclusion;
