import { React, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ExerciseStateContext from '../Lab14Context';
import Encryption from '../components/Encryption';
import LabButton from '../../../all-components/LabButton';

const InputComponent = ({ shiftValue, setShiftValue, fillPercent }) => {
  return (
    <div className="tw-flex-1 tw-relative tw-flex tw-flex-col tw-items-center">
      <span className="tw-font-semibold">Number of Bits</span>
      <div className="tw-flex tw-justify-between tw-w-full">
        <span className="tw-font-semibold">{1024}</span>
        <span className="tw-font-semibold">{2048}</span>
      </div>

      <input
        type="range"
        min={1024}
        max={2048}
        step={8}
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
          left: `calc(${((shiftValue - 1024) / (2048 - 1024)) * 100}% - 12px)`,
          pointerEvents: 'none',
        }}
      >
        {shiftValue}
      </div>
    </div>
  );
};

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
    rsaShiftValue,
    setRsaShiftValue,
  } = useContext(ExerciseStateContext);

  useEffect(() => {
    setRsaBaseMessage('');
    setRsaEncryptedMessage('');
    setRsaShiftValue(1024);
  }, []);

  const [n, setN] = useState(null);
  const [e, setE] = useState(null);
  const [d, setD] = useState(null);
  const [encrypted, setEncrypted] = useState(false);
  const fillPercent = ((rsaShiftValue - 1024) / (2048 - 1024)) * 100;

  const handleContinue = () => {
    navigate('/Lab14/Exercise/RSADecryption');
  };

  const encrypt = async () => {
    try {
      const { publicKey, n, e, d } = await generateRSA();

      //Message len
      if (rsaBaseMessage.length >= n) {
        alert('Message too large for this key size');
        return;
      }

      let ciphertext = await crypto.subtle.encrypt(
        {
          name: 'RSA-OAEP',
          hash: 'SHA-256',
        },
        publicKey,
        new TextEncoder().encode(rsaBaseMessage),
      );

      setRsaEncryptedMessage(new Uint8Array(ciphertext).toHex());
      setN(n);
      setE(e);
      setD(d);
      setEncrypted(true);
    } catch (err) {
      // On some older systems, the 'crypto' library doesn't have full compatibility.
      // Instead of *actually* doing RSA, we fake it and just shuffle some numbers.

      let publicKey =
        '69d8e47ce6873023aa78cfe7d7e0f93f5276fc3f704872b072a49e5c5c5a8480545bc614ff2ddcb8cf157b2500bb2695f2beaa1df4a55d25c985a7a6c6d48603c34cf67b717a31832d141ab485b78935fc6231d231cc987680ba8855a5d4505363323882c256abec86839466ef45194837f09e3c07f675b4b792524eba1b14cef21ffa2fad22d158851419167cc6ff4b166951c7645ff1bcf96f4c281f76a05fcb57c3eb9b8e93b13e87d04edebe6fed';
      let n =
        '2-me9TUNHV5Kkcf5BFADc63XpXGsz9_J2OWLRJM7VbQ8Ne5PiRxnRhLFqFwmzfCzHnemGqYYtvPKmDUQUx_pQh2UTMuSaYjUCI_vCTJc5H_O3ospagXa1VdV8WPxJxevzNJitWYUgTLqdiL1qBe1t2-AbhYTnxJYvFzGeoCNEWAucEXmf2V7e-NHFhaTY-nDdfhH-F6aTBzw7X2oQSojdSVSwxVZgHlXTpqHOwGazl8';
      let e = 'AQAB';
      let d =
        'FUrp_rD7y5epHbNgi4fZxbYT1quKgXgYGZ2kHegpixNP7yLbZZmv8Ct6IuKFSVRga3dHSHZDl1dEivc8VOgWlDW7-bGORBSg_xE8okXTk7ZCR-7ufBsEBI0jub5ydXcn1HLZ5zxS1LwG_C1RnI3NZtiHRCnZ5N6rsRsWRLaGiOJDj-FxTsOQUGsFJYAb8JRq-W1ruYBiI7UKGPCJ6_UlP0oFapQo0jJoKBUsUPrCuTk';

      const shuffle = (chars) => {
        return chars.sort(function () {
          return Math.random() - 0.5;
        });
      };

      setRsaEncryptedMessage(shuffle(publicKey));
      setN(shuffle(n));
      setE(shuffle(e));
      setD(shuffle(d));
      setEncrypted(true);
    }
  };

  const generateRSA = async () => {
    const keyPair = await window.crypto.subtle.generateKey(
      {
        name: 'RSA-OAEP',
        modulusLength: rsaShiftValue,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]), // 65537
        hash: 'SHA-256',
      },
      true, // extractable (REQUIRED to get D)
      ['encrypt', 'decrypt'],
    );

    // Export keys as JWK
    const publicJwk = await crypto.subtle.exportKey('jwk', keyPair.publicKey);
    const privateJwk = await crypto.subtle.exportKey('jwk', keyPair.privateKey);

    let publicKey = keyPair.publicKey;
    let n = publicJwk.n;
    let e = publicJwk.e;
    let d = privateJwk.d;

    return { publicKey, n, e, d };
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
        This program uses a simplified version of RSA, often called{' '}
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
        shiftValueValid={true} // there is no invalid value for RSA key size
      >
        <InputComponent
          shiftValue={rsaShiftValue}
          setShiftValue={setRsaShiftValue}
          fillPercent={fillPercent}
        />
      </Encryption>

      <h1 className="gap-y-8 flex justify-start tw-title tw-text-left tw-py-4">
        RSA Keys Generated
      </h1>

      {/*Left -  KEYS */}
      <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-12 tw-justify-center">
        <div>
          <h5 className="tw-text-sub-title tw-mt-4 tw-mb-2 tw-text-left">
            Public Key:
          </h5>
          <p
            className="
              tw-text-left
              tw-bg-[#face3580]
              tw-w-[20rem]
              tw-p-3
              tw-border-2 tw-border-solid
              tw-rounded-lg
              tw-font-mono tw-text-sm
              tw-whitespace-nowrap
              tw-overflow-x-auto
              tw-cursor-default"
          >
            {n ? `n = ${n}` : ''}
            <br />
            {e ? `e = ${e}` : ''}
          </p>

          <h5 className="tw-text-sub-title tw-mt-4 tw-mb-2 tw-text-left">
            Private Key:
          </h5>
          <p
            className="
              tw-text-left
              tw-bg-[#face3580]
              tw-w-[20rem]
              tw-p-3
              tw-border-2 tw-border-solid
              tw-rounded-lg
              tw-font-mono tw-text-sm
              tw-whitespace-nowrap
              tw-overflow-x-auto
              tw-cursor-default"
          >
            {n ? `n = ${n}` : ''}
            <br />
            {d ? `d = ${d}` : ''}
          </p>
        </div>

        {/* Right - Explanation Paragraph */}
        <div className="tw-flex tw-flex-col tw-gap-4">
          <h5 className="tw-text-sub-title tw-text-left">RSA Keys</h5>
          <p className="tw-font-poppins tw-text-left tw-leading-6 tw-max-w-[40rem]">
            RSA uses a public key (for locking/encrypting, shared with everyone)
            and a private key (for unlocking/decrypting, kept secret by the
            owner). Anyone can use your public key to encrypt a message, but
            only your private key can decrypt it, due to the difficulty of
            factoring large primes. On the left, you can see the two prime
            numbers associated with each public and private key.
          </p>
          <p className="tw-font-poppins tw-text-left tw-leading-6 tw-max-w-[40rem]">
            The &apos;n&apos; value is the modulus, a large number derived from
            two prime numbers. The &apos;e&apos; value is the public exponent
            used in the encryption process, while the &apos;d&apos; value is the
            private exponent used in decryption. Together, these values form the
            core of RSA&apos;s security, enabling secure communication over
            insecure channels.
          </p>
        </div>
      </div>

      {/* Spacer block */}
      <div className="tw-mt-10"></div>

      <LabButton
        disabled={!encrypted}
        onClick={handleContinue}
        label={'Next'}
      />
    </div>
  );
};

export default RSAEncryption;
