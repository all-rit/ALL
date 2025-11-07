import { React } from "react";
import { navigate } from "@reach/router";

// import Encryption from "../components/Encryption";

const RSAEncryption = () => {
  const handleContinue = () => {
    navigate("/Lab14/Exercise/RSADecryption");
  };

  // const encrypt = () => {
  //   // encryption function here
  // };

  return (
    <div>
      RSA Encryption
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

export default RSAEncryption;
