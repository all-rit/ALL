import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab14";
import ExerciseStateContext from "./Lab14Context";

// lab imported dependencies;
import Superposition from "./pages/Superposition";
import Entanglement from "./pages/Entanglement";
import CaesarCipher from "./pages/CaesarCipher";
import RSA from "./pages/RSA";
import ShorsAlgorithm from "./pages/ShorsAlgorithm";
import Conclusion from "./pages/Conclusion";

/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );

  return (
    <div className="bottomSpace tw-overflow-y-scroll tw-p-6">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
        }}
      >
        <Router className="app">
          <Superposition default path="/" />
          <Entanglement path="/Entanglement" />
          <CaesarCipher path="/CaesarCipher" />
          <RSA path="/RSA" />
          <ShorsAlgorithm path="/ShorsAlgorithm" />
          <Conclusion path="/Conclusion" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};
export default Main;
