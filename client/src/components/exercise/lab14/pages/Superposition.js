import { React, useEffect } from "react";
import { EXERCISE_PLAYING } from "src/constants/index";
import { startExercise } from "src/reducers/lab2/actions";
import useMainStateContext from "src/reducers/MainContext";
import { navigate } from "@reach/router";

const Superposition = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/Entanglement");
  };

  return (
    <div>
      Superposition Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default Superposition;
