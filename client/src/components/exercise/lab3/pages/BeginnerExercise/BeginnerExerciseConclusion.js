import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import { LAB_ID } from "../../../../../constants/lab3";
import UserLabService from "../../../../../services/UserLabService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";

/**
 * Renders the conclusion page for the beginner exercise.
 * 
 * @returns {JSX.Element} The rendered conclusion page component.
 */
const BeginnerExerciseConclusion = () => {
  const { state, actions } = useMainStateContext();

  const handleSubmit = () => {
    navigate("/Lab3/Exercise");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
    UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      UserLabService.user_complete_exercise(state.main.user.userid, LAB_ID);
    }
  }, [actions, state.main.user]);

  const conclusionTypographyStyle = { marginTop: "20px" };

  return (
    <div>
      <AppBar position="static" className="appBar">
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
      <div style={{ textAlign: "center" }}>
        <Button
          href="#"
          onClick={handleSubmit}
          variant={"contained"}
          className="btn btn-second btn-xl text-uppercase  leftButton"
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default BeginnerExerciseConclusion;