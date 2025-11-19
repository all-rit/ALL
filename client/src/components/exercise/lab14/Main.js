import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab14";
import ExerciseStateContext from "./Lab14Context";

// lab imported dependencies;
import Superposition from "./pages/Superposition";
import Entanglement from "./pages/Entanglement";
import CaesarIntro from "./pages/CaesarIntro";
import CaesarEncryption from "./pages/CaesarEncryption";
import CaesarDecryption from "./pages/CaesarDecryption";
import RSAEncryption from "./pages/RSAEncryption";
import RSADecryption from "./pages/RSADecryption";
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

  const [caesarBaseMessage, setCaesarBaseMessage] = useState("");
  const [caesarEncryptedMessage, setCaesarEncryptedMessage] = useState("");
  const [rsaBaseMessage, setRsaBaseMessage] = useState("");
  const [rsaEncryptedMessage, setRsaEncryptedMessage] = useState("");

  return (
    <div className="bottomSpace tw-overflow-y-scroll tw-p-6">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
          caesarBaseMessage,
          setCaesarBaseMessage,
          caesarEncryptedMessage,
          setCaesarEncryptedMessage,
          rsaBaseMessage,
          setRsaBaseMessage,
          rsaEncryptedMessage,
          setRsaEncryptedMessage,
        }}
      >
        <Router className="app">
          <Superposition default path="/" />
          <Entanglement path="/Entanglement" />
          <CaesarIntro path="/CaesarIntro" />
          <CaesarEncryption path="/CaesarEncryption" />
          <CaesarDecryption path="/CaesarDecryption" />
          <RSAEncryption path="/RSAEncryption" />
          <RSADecryption path="/RSADecryption" />
          <Conclusion path="/Conclusion" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};
export default Main;
