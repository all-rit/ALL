import { React, useState, useContext } from "react";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab14Context";
import Decryption from "../components/Decryption";
import LabButton from "../../../all-components/LabButton";

const RSADecryption = () => {
  const [error, setError] = useState(false);
  const [classicAttempts, setClassicAttempts] = useState(0);
  const [classicBoxElements, setClassicBoxElements] = useState([]);
  const [quantumAttempts, setQuantumAttempts] = useState(0);
  const [quantumBoxElements, setQuantumBoxElements] = useState([]);
  const [decryptionCompleted, setDecryptionCompleted] = useState(false);

  const {
    rsaBaseMessage,
    rsaEncryptedMessage,
    rsaBitAmount,
    rsaPrivateKey,
    setRsaEncryptedMessage,
  } = useContext(ExerciseStateContext);

  const handleContinue = () => {
    if (decryptionCompleted) {
      navigate("/Lab14/Exercise/Conclusion");
    } else {
      setError(true);
    }
  };

  function calculateTime() {
    const classicAttempts = Math.pow(2, rsaBitAmount / 2);
    const quantumAttempts = Math.floor(Math.random() * 3) + 1; //The number of gates increase not number of attempts

    return [classicAttempts, quantumAttempts];
  }

  function modPow(base, exponent, modulus) {
    let result = 1n;
    base = base % modulus;

    while (exponent > 0n) {
      if (exponent % 2n === 1n) {
        result = (result * base) % modulus;
      }
      base = (base * base) % modulus;
      exponent /= 2n;
    }

    return result;
  }

  function integerToString(num) {
    let result = "";
    while (num > 0n) {
      const charCode = Number(num & 255n); // last byte
      result = String.fromCharCode(charCode) + result;
      num >>= 8n;
    }
    return result;
  }

  const decrypt = () => {
    const [classic, quantum] = calculateTime();
    setClassicAttempts(180); //Hard Coded this because any larger number cause it to not show up
    setQuantumAttempts(quantum);

    setClassicBoxElements([{ text: "Total Attempts", binary: [classic] }]);

    setQuantumBoxElements([{ text: "Total Attempts", binary: [quantum] }]);

    setDecryptionCompleted(true);
    const [n, d] = rsaPrivateKey;
    let decrypt = modPow(BigInt(rsaEncryptedMessage), d, n);
    decrypt = integerToString(decrypt);
    setRsaEncryptedMessage(decrypt);
  };

  return (
    <div>
      <h1 className="flex justify-start tw-title tw-text-left">
        RSA Decryption
      </h1>
      <p className="tw-body-text tw-text-left tw-py-4">
        Below, you will see the encrypted message from the previous section. Use
        the RSA decryption function to decrypt the message back to its original
        form, and observe the number of attempts the classic and quantum
        decryption take to decrypt the message!
      </p>
      <p className="tw-body-text tw-text-left tw-py-2">
        The chart in the middle tell how many attempts each version took to
        decrypt At the very bottom, you will see a graph that visualizes the
        number of attempts taken by both classic and quantum methods to decrypt
        the message. Notice how at high shift values, quantum decryption
        requires fewer time due to its ability to process multiple possibilities
        simultaneously. This is superposition in action!
      </p>

      <Decryption
        encryptedMessage={rsaEncryptedMessage}
        baseMessage={rsaBaseMessage}
        decryptionFunction={decrypt}
        classicAttempts={classicAttempts}
        classicBoxElements={classicBoxElements}
        quantumAttempts={quantumAttempts}
        quantumBoxElements={quantumBoxElements}
      />

      <h1 className="flex justify-start tw-title tw-text-left tw-py-8 ">
        Quantum Cryptography: Theory vs. Reality
      </h1>
      <p>
        The attempt counts shown above are theoretical estimates based on
        established cryptography research. While quantum computers may need to
        repeat an algorithm a small number of times, the number of attempts
        remains very low and does not increase with key size, unlike classical
        attacks. In theory, quantum computers could break RSA encryption much
        faster using Shor’s algorithm. In practice, however, today’s quantum
        computers are not powerful enough to break the large RSA keys used on
        the internet. So far, quantum devices have only broken very small,
        simplified RSA examples due to the high cost, instability, and
        difficulty of scaling quantum hardware. As a result, despite its
        theoretical vulnerability, RSA encryption remains secure with current
        technology.
      </p>

      <div className="tw-mt-10">
        <LabButton onClick={handleContinue} label={"Next"} />
      </div>

      <p
        className={`${error ? "tw-visible" : "tw-invisible"} tw-text-red-600 tw-italic`}
      >
        Error: Please decrypt the message to continue
      </p>
    </div>
  );
};

export default RSADecryption;
