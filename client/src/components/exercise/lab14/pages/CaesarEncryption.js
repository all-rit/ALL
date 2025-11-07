import { React } from "react";
import { navigate } from "@reach/router";

// import Encryption from "../components/Encryption";

const CaesarEncryption = () => {
  const handleContinue = () => {
    navigate("/Lab14/Exercise/CaesarDecryption");
  };

  // const encrypt = () => {
  //   // encryption function here
  // };

  return (
    <div>
      Caesar Encryption
      {/* <Encryption
        encryptedMessage={"encryptedMessage"}
        baseMessage={"baseMessage"}
        decryptionFunction={decrypt}
        classicAttempts={classicAttempts}
        classicBoxElements={classicBoxElements}
        quantumAttempts={quantumAttempts}
        quantumBoxElements={quantumBoxElements}
      /> */}
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default CaesarEncryption;
