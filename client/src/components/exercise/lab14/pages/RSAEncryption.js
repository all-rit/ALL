import { React, useState, useContext } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import ExerciseStateContext from "../Lab14Context";
import Encryption from "../components/Encryption";
import LabButton from "../../../all-components/LabButton";

const InputComponent = ({ shiftValue, setShiftValue, fillPercent }) => (
  <div className="tw-flex-1 tw-relative tw-flex tw-flex-col tw-items-center">
    <span className="tw-font-semibold">Bit: Key length Generator</span>
    <div className="tw-flex tw-justify-between tw-w-full">
      <span className="tw-font-semibold">{15}</span>
      <span className="tw-font-semibold">{2048}</span>
    </div>

    <input
      type="range"
      min={15}
      max={2048}
      onChange={(e) => setShiftValue(Number(e.target.value))}
      value={shiftValue}
      className="tw-w-full tw-h-3 tw-appearance-none tw-cursor-pointer tw-rounded-none tw-outline-none"
      style={{
        background: `linear-gradient(to right, black ${fillPercent}%, #e5e7eb ${fillPercent}%)`,
      }}
    />

    {/* Button Style */}
    <style>
      {`
       input[type="range"]::-webkit-slider-thumb {
         appearance: none;
         height: 16px;
         width: 16px;
         border-radius: 50%;
         background: black;
         cursor: pointer;
       }
       input[type="range"]::-moz-range-thumb {
         height: 16px;
         width: 16px;
         border-radius: 50%;
         background: black;
         cursor: pointer;
       }
     `}
    </style>

    {/* Shift Bubble */}
    <div
      className="tw-absolute tw--top-8 tw-bg-black tw-text-white tw-text-xs tw-px-2 tw-py-1 tw-rounded"
      style={{
        left: `calc(${((shiftValue - 15) / (2048 - 15)) * 100}% - 12px)`,
        pointerEvents: "none",
      }}
    >
      {shiftValue}
    </div>
  </div>
);

InputComponent.propTypes = {
  shiftValue: PropTypes.number,
  setShiftValue: PropTypes.func,
  fillPercent: PropTypes.number,
};

const RSAEncryption = () => {
  const {
    rsaBaseMessage,
    setRsaBaseMessage,
    rsaEncryptedMessage,
    setRsaEncryptedMessage,
    setRsaBitAmount,
    setrsaPrivateKey,
  } = useContext(ExerciseStateContext);

  const [shiftValue, setShiftValue] = useState(15); //Starts at 15 bc thats smallest possible RSA
  const [error, setError] = useState(false);
  const [publicKey, setPublicKey] = useState(null);
  const [privateKey, setPrivateKey] = useState(null);
  const fillPercent = ((shiftValue - 15) / (2048 - 15)) * 100;

  const handleContinue = () => {
    if (rsaEncryptedMessage) {
      navigate("/Lab14/Exercise/RSADecryption");
    } else {
      setError(true);
    }
  };

  function power(x, y, p) {
    let res = 1n;
    x = x % p;

    while (y > 0n) {
      if (y % 2n === 1n) res = (res * x) % p;

      y = y / 2n;
      x = (x * x) % p;
    }
    return res;
  }

  //Due to Bit Size this ensures that it does not overflow
  //Prevents infinity error due to large bit size
  function randomBigIntBelow(n) {
    const bits = n.toString(2).length;
    let r;
    do {
      r = BigInt(
        "0b" +
          Array.from(
            crypto.getRandomValues(new Uint8Array(Math.ceil(bits / 8))),
          )
            .map((b) => b.toString(2).padStart(8, "0"))
            .join(""),
      );
    } while (r >= n);
    return r;
  }

  function miillerTest(d, n) {
    const a = 2n + randomBigIntBelow(n - 4n);
    let x = power(a, d, n);

    if (x === 1n || x === n - 1n) return true;

    let temp = d;
    while (temp !== n - 1n) {
      x = (x * x) % n;
      temp *= 2n;

      if (x === 1n) return false;
      if (x === n - 1n) return true;
    }

    return false;
  }

  function isPrime(n, k) {
    if (n <= 1n || n === 4n) return false;
    if (n <= 3n) return true;

    let d = n - 1n;
    while (d % 2n === 0n) d /= 2n;

    for (let i = 0; i < k; i++) {
      if (!miillerTest(d, n)) return false;
    }

    return true;
  }

  function generateRandomNumber(bits) {
    const bytesNeeded = Math.ceil(bits / 8);
    const byteArray = new Uint8Array(bytesNeeded);
    crypto.getRandomValues(byteArray);

    let randomBigInt = 0n;
    for (let i = 0; i < bytesNeeded; i++) {
      randomBigInt = (randomBigInt << 8n) | BigInt(byteArray[i]);
    }

    const mask = (1n << BigInt(bits)) - 1n;
    randomBigInt &= mask;
    const result = isPrime(randomBigInt, 4);
    if (result) {
      return randomBigInt;
    }

    return generateRandomNumber(bits);
  }

  function modInverse(a, m) {
    let m0 = BigInt(m);
    let x0 = BigInt(0);
    let x1 = BigInt(1);

    if (m === 1) return 0;

    while (a > 1) {
      let q = BigInt(a / m);
      let temp = m;
      m = a % m;
      a = temp;
      temp = x0;
      x0 = x1 - q * x0;
      x1 = temp;
    }

    // Edge Case: if x1 is negative, wrap it mod m0
    if (x1 < 0) {
      x1 += m0;
    }
    return x1;
  }
  function gcd(a, b) {
    while (b !== 0n) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function generateKeys() {
    const e = 65537n;
    const one = 1n;
    let p, q, phi;

    do {
      p = generateRandomNumber(shiftValue);
      do {
        q = generateRandomNumber(shiftValue);
      } while (q === p);

      phi = (p - one) * (q - one);
    } while (gcd(e, phi) !== 1n); //Prevents public & private from being same

    const n = p * q;
    const d = modInverse(e, phi);

    return {
      publicKey: [n, e],
      privateKey: [n, d],
    };
  }

  function stringToInteger(message) {
    let result = BigInt(0);
    for (let i = 0; i < message.length; i++) {
      result = (result << BigInt(8)) + BigInt(message.charCodeAt(i));
    }
    return result;
  }

  function numericEncryption(base, exponent, modulus) {
    base = base % modulus;
    let result = 1n;
    while (exponent > 0) {
      if (exponent % 2n === 1n) {
        result = (result * base) % modulus;
      }
      base = (base * base) % modulus;
      exponent = exponent / 2n;
    }
    return result;
  }

  const encrypt = () => {
    const { publicKey, privateKey } = generateKeys();
    setPublicKey(publicKey);
    setPrivateKey(privateKey);
    setrsaPrivateKey(privateKey);
    const [n, e] = publicKey;
    const numericMessage = stringToInteger(rsaBaseMessage);
    //Message len
    if (numericMessage >= n) {
      alert("Message too large for this key size");
      return;
    }

    let ciphertext = numericEncryption(numericMessage, e, n);
    setRsaEncryptedMessage(ciphertext.toString());
    setRsaBitAmount(parseInt(shiftValue));
  };

  return (
    <div>
      <h1 className="flex justify-start tw-title tw-text-left">
        RSA Encryption
      </h1>
      <p className="tw-body-text tw-text-left tw-py-6">
        In this section, you will encrypt a message using RSA encryption. Enter
        a message and choose a bit value below, then click the
        &quot;Encrypt&quot; button to see how RSA encryption works.
      </p>

      <p className="tw-body-text tw-text-left">
        This program uses a simplified version of RSA, often called{" "}
        <em>textbook RSA</em>, to help demonstrate the basic ideas behind
        encryption. It shows how two keys and large numbers are used to protect
        messages. However, this is not the same as the RSA used on the internet.
        Real world RSA includes additional security features, such as special
        padding, secure key handling, and protections against advanced attacks.
        These features are handled by professional cryptography libraries and
        are not included here so the focus can remain on learning and
        visualization.
      </p>
      <Encryption
        encryptionFunction={encrypt}
        encryptedMessage={rsaEncryptedMessage}
        baseMessage={rsaBaseMessage}
        setBaseMessage={setRsaBaseMessage}
      >
        <InputComponent
          shiftValue={shiftValue}
          setShiftValue={setShiftValue}
          fillPercent={fillPercent}
        />
      </Encryption>

      <h1 className="gap-y-8 flex justify-start tw-title tw-text-left tw-py-4">
        RSA Keys Generated
      </h1>

      {/*Left -  KEYS */}
      <div className="tw-flex tw-flex-row tw-gap-12 tw-items-start">
        <div>
          <h5 className="tw-font-poppins tw-text-lg tw-font-semibold tw-mb-4 tw-text-left">
            Public Key:
          </h5>
          <p
            className="
          tw-flex tw-items-center
          tw-bg-[#face3580]
          tw-w-[20rem] tw-h-[4rem]
          tw-p-3
          tw-border-2 tw-border-solid
          tw-rounded-lg
          tw-font-mono tw-text-xs
          tw-whitespace-nowrap
          tw-overflow-x-auto
        "
          >
            {publicKey ? `n = ${publicKey[0]}, e = ${publicKey[1]}` : ""}
          </p>

          <h5 className="tw-font-poppins tw-text-lg tw-font-semibold tw-mb-4 tw-text-left">
            Private Key:
          </h5>
          <p
            className="
          tw-flex tw-items-center
          tw-bg-[#face3580]
          tw-w-[20rem] tw-h-[4rem]
          tw-p-3
          tw-border-2 tw-border-solid
          tw-rounded-lg
          tw-font-mono tw-text-xs
          tw-whitespace-nowrap
          tw-overflow-x-auto
        "
          >
            {privateKey ? `n = ${privateKey[0]}, d = ${privateKey[1]}` : ""}
          </p>
        </div>

        {/* Right - Explanation Paragraph */}
        <p className="tw-font-poppins tw-text-base tw-leading-6 tw-max-w-[40rem]">
          <strong>RSA Key Basics:</strong>
          <br />
          RSA uses a public key (for locking/encrypting, shared with everyone)
          and a private key (for unlocking/decrypting, kept secret by the
          owner). Anyone can use your public key to encrypt a message, but only
          your private key can decrypt it, due to the difficulty of factoring
          large primes. In the next section we will be using the private key to
          decrypt the message.
        </p>
      </div>

      <div className="tw-mt-10">
        <LabButton onClick={handleContinue} label={"Next"} />
      </div>

      <p
        className={`${error ? "tw-visible" : "tw-invisible"} tw-text-red-600 tw-italic`}
      >
        Error: Please Encrypt a valid string to continue
      </p>
    </div>
  );
};

export default RSAEncryption;
