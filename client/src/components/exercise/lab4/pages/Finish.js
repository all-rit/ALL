import React, { Fragment, useEffect } from "react";
import { navigate } from "@reach/router";
import { LAB_ID } from "../../../../constants/lab4";
import UserLabService from "../../../../services/UserLabService";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";

const Finish = () => {
  const { actions, state } = useMainStateContext();

  const handleSubmit = () => {
    navigate("/Lab4/Exercise");
  };

  useEffect(() => {
    UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      UserLabService.user_complete_exercise(state.main.user.userid, LAB_ID);
    }
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  return (
    <Fragment>
      <div>
        <AppBar position="static" className="appBar tw-items-center">
          <Toolbar>
            <h4 className="flex-boxes tw-flex ">
              Congratulations! You have successfully completed the Dexterity
              Exercise!
            </h4>
          </Toolbar>
        </AppBar>
        <br />
        <h4 className="flex-boxes">
          Click the button below to restart the exercise.
        </h4>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleSubmit}
          key="start"
        >
          Return to Exercise Start
        </button>
      </div>
    </Fragment>
  );
};

export default Finish;
