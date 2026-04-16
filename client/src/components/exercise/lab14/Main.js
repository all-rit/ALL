import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab14";
import ExerciseStateContext from "./Lab14Context";

// lab imported dependencies;
import ExerciseIntro from "./pages/ExerciseIntro";
import Superposition from "./pages/Superposition";
import Entanglement from "./pages/Entanglement";
import ExerciseTransition from "./pages/ExerciseTransition";
import CaesarIntro from "./pages/CaesarIntro";
import CaesarEncryption from "./pages/CaesarEncryption";
import CaesarDecryption from "./pages/CaesarDecryption";
import VigenereIntro from "./pages/VigenereIntro";
import VigenereEncryption from "./pages/VigenereEncryption";
import VigenereDecryption from "./pages/VigenereDecryption";
import RSAIntro from "./pages/RSAIntro";
import RSAEncryption from "./pages/RSAEncryption";
import RSADecryption from "./pages/RSADecryption";
import Conclusion from "./pages/Conclusion";
import ScrollWrapper from "src/use-hooks/scrollWrapper";

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
  const [caesarShiftAmount, setCaesarShiftAmount] = useState(0);
  const [vigenereBaseMessage, setVigenereBaseMessage] = useState("");
  const [vigenereKey, setVigenereKey] = useState("");
  const [vigenereEncryptedMessage, setVigenereEncryptedMessage] = useState("");
  const [rsaBaseMessage, setRsaBaseMessage] = useState("");
  const [rsaEncryptedMessage, setRsaEncryptedMessage] = useState("");
  const [rsaShiftValue, setRsaShiftValue] = useState(1024);

  return (
    <div className="bottomSpace tw-p-6">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
          caesarBaseMessage,
          setCaesarBaseMessage,
          caesarEncryptedMessage,
          setCaesarEncryptedMessage,
          caesarShiftAmount,
          setCaesarShiftAmount,
          vigenereBaseMessage,
          setVigenereBaseMessage,
          vigenereKey,
          setVigenereKey,
          vigenereEncryptedMessage,
          setVigenereEncryptedMessage,
          rsaBaseMessage,
          setRsaBaseMessage,
          rsaEncryptedMessage,
          setRsaEncryptedMessage,
          rsaShiftValue,
          setRsaShiftValue,
        }}
      >
        <Router className="app">
          <ScrollWrapper path="/">
            <ExerciseIntro default path="/" />
            <Superposition path="/Superposition" />
            <Entanglement path="/Entanglement" />
            <ExerciseTransition path="/Transition" />

            {/* Caesar Cipher */}
            <CaesarIntro path="/CaesarIntro" />
            <CaesarEncryption path="/CaesarEncryption" />
            <CaesarDecryption path="/CaesarDecryption" />

            {/* Vigenère Cipher */}
            <VigenereIntro path="/VigenereIntro" />
            <VigenereEncryption path="/VigenereEncryption" />
            <VigenereDecryption path="/VigenereDecryption" />

            {/* RSA Cipher */}
            <RSAIntro path="/RSAIntro" />
            <RSAEncryption path="/RSAEncryption" />
            <RSADecryption path="/RSADecryption" />

            <Conclusion path="/Conclusion" />
          </ScrollWrapper>
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};
export default Main;
