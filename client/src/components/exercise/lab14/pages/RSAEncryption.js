import { React, useContext } from "react";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab14Context";
import Encryption from "../components/Encryption";

const RSAEncryption = () => {
  const {
    rsaBaseMessage,
    setRsaBaseMessage,
    rsaEncryptedMessage,
    setRsaEncryptedMessage,
  } = useContext(ExerciseStateContext);

  const handleContinue = () => {
    navigate("/Lab14/Exercise/RSADecryption");
  };

  const encrypt = () => {
    const encryptedString = "fart fart fart";

    setRsaEncryptedMessage(encryptedString);
    return encryptedString;
  };

  return (
    <div>
      RSA Encryption
      <Encryption
        encryptionFunction={encrypt}
        encryptedMessage={rsaEncryptedMessage}
        baseMessage={rsaBaseMessage}
        setBaseMessage={setRsaBaseMessage}
        minSlider={0} // TODO: Change
        maxSlider={25} // TODO: Change
      />
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default RSAEncryption;
