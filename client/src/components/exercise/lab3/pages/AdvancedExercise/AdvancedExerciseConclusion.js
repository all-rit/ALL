import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { navigate } from "@reach/router";
import {EXERCISE_IDLE, LAB_ID} from "../../../../../constants/lab3/index";
import UserLabService from "../../../../../services/UserLabService";
class AdvancedExerciseConclusion extends Component {
  handleSubmit() {
    navigate("/Lab3/Exercise");
  }
    componentDidMount() {
        const { actions,user} = this.props;
        actions.updateState(EXERCISE_IDLE);
        UserLabService.complete_exercise(LAB_ID);
        if(user!==null){
					UserLabService.user_complete_exercise(user.userid,LAB_ID)
				}
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

export default AdvancedExerciseConclusion;

