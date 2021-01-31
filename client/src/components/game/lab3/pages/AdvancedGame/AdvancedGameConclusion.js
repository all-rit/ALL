import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { navigate } from "@reach/router";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import {GAME_IDLE} from "../../constants";
class AdvancedGameConclusion extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/");
  }
    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_IDLE);
    }
  render() {
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
        <br />
        <Typography variant={"body1"}>
          You have successfully completed the activity! Click on the home button
          to return to the main page
        </Typography>
        <br />
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

export default AdvancedGameConclusion;

