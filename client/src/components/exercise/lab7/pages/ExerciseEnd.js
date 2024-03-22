import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import UserLabService from "../../../../services/UserLabService";
import { LAB_ID } from "../../../../constants/lab7";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";

/**
 * Represents the component for the exercise end page.
 * @returns {JSX.Element} The exercise end component.
 */
const ExerciseEnd = () => {
  const { state, actions } = useMainStateContext();

  const handleHome = () => {
    navigate("/Lab7/Exercise/ExerciseStart");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
    UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      UserLabService.user_complete_exercise(state.main.user.userid, LAB_ID);
    }
  }, [state.main.user]);

  return (
    <>
      <div className="center-div">
        <p className="playthrough__sentence">
          Congratulations! You&lsquo;ve finished the AI Cybersecurity Module.
        </p>
        <p className="playthrough__sentence">
          Click the &lsquo;Home&lsquo; button to return to the Exercise start
          page or click the &lsquo;Next&lsquo; button to continue onto the
          Reinforcement part of the lab.
        </p>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleHome}
          key="start"
        >
          Exercise Home
        </button>
      </div>
    </>
  );
};

export default ExerciseEnd;
