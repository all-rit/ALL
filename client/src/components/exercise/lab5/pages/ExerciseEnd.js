import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { LAB_ID } from "../../../../constants/lab5";
import UserLabService from "../../../../services/UserLabService";
import { Forum, EmojiObjects, Timer } from "@material-ui/icons";
import { AppBar } from "@material-ui/core";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";

/**
 * Renders the ExerciseEnd component.
 * This component displays a congratulatory message and key takeaways after completing the Cognitive Impairment Exercise.
 * It also provides a button to restart the exercise.
 *
 * @returns {JSX.Element} The ExerciseEnd component.
 */
const ExerciseEnd = () => {
  const { state, actions } = useMainStateContext();
  const handleHome = () => {
    navigate("/Lab5/Exercise/ExerciseStart");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
    UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      UserLabService.user_complete_exercise(state.main.user.userid, LAB_ID);
    }
  }, [state.main.user]);

  return (
    <React.Fragment>
      <div className="center-div">
        <div className="cognitive_instructions">
          <div>
            <AppBar position="static" className="appBar">
              <h4 className="flex-boxes ">
                Congratulations! You have succesfully completed the Cognitive
                Impairment Exercise!
              </h4>
            </AppBar>
          </div>
          <h4 className="margin-bottom">Here are some key takeaways:</h4>
          <div className="flex-boxes">
            <div>
              <div className="icon">
                <EmojiObjects fontSize="large" />
              </div>
              Use proper headings and subheadings to reduce cognitive load
            </div>
            <div>
              <div className="icon">
                <Timer fontSize="large" />
              </div>
              Allow users to have enough time to read
            </div>
            <div>
              <div className="icon">
                <Forum fontSize="large" />
              </div>
              Provide clear descriptive feedback on forms
            </div>
          </div>
        </div>
        <h4 className="flex-boxes">
          Click the button below to restart the exercise.
        </h4>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleHome}
          key="start"
        >
          Return to Exercise Start
        </button>
      </div>
    </React.Fragment>
  );
};

export default ExerciseEnd;
