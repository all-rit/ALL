import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { navigate } from "@reach/router";
import { LAB_ID } from "../../../../../constants/lab3/index";
import UserLabService from "../../../../../services/UserLabService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";

/**
 * Renders the conclusion component for the advanced exercise.
 *
 * @returns {JSX.Element} The rendered conclusion component.
 */
const AdvancedExerciseConclusion = () => {
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

  return (
    <div>
      <AppBar position="static" className="appBar">
        <h4 className="flex-boxes ">
          Congratulations! You have succesfully completed the Screen Readers
          Exercise!
        </h4>
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
  );
};

export default AdvancedExerciseConclusion;
