import { React, useState } from "react";
import { navigate } from "@reach/router";
import Encryption from "../components/Encryption";

const RSAEncryption = () => {
  const [baseMessage, setBaseMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const handleContinue = () => {
    navigate("/Lab14/Exercise/RSADecryption");
  };

  const encrypt = () => {
    const encryptedString = "fart fart fart";

    setEncryptedMessage(encryptedString);
    return encryptedString;
  };

  return (
    <div>
      RSA Encryption
      <Encryption
        encryptionFunction={encrypt}
        encryptedMessage={encryptedMessage}
        baseMessage={baseMessage}
        setBaseMessage={setBaseMessage}
        minSlider={0} // TODO: Change
        maxSlider={25} // TODO: Change
      />
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default RSAEncryption;
