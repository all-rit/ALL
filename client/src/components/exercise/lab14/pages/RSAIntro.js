import React from "react";
import { navigate } from "@reach/router";

const RSAIntro = () => {
  const handleContinue = () => {
    navigate("/Lab14/Exercise/RSAEncryption");
  };

  return (
    <div className="center-div">
      <h1 className={"tw-title tw-text-left"}>The RSA Encryption Algorithm</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          Rivest Shamir Adleman, also known as RSA, is a well-known public-key
          or asymmetric cryptographic algorithm. It protects sensitive data
          through encryption and decryption using a private and public key pair.
          The encryption method first appeared in 1977 and is widely used for
          secure data transmission. You have probably been using RSA encryption
          when sending emails, making online purchases, and even using web
          browsers such as the one you&apos;re viewing this page on!
        </p>
        <p className="tw-body-text tw-text-left tw-py-6">
          RSA works by generating two large prime numbers and multiplying them
          together to create a modulus that then creates a public key and a
          private key. The public key is used for encryption and is known to
          everyone, while the private key is used for decryption and must be
          kept secret by the receiver
        </p>
        <p className="tw-body-text tw-text-left">
          The reason RSA is so secure is because of it reliance on the
          mathematical properties of large prime numbers. Factoring the product
          of two large prime numbers is significantly harder with current
          computers, however this can all be changed with the introduction of
          quantum computers in the future!
        </p>
      </div>
      <div className="tw-body-text tw-text-center tw-pb-6">
        Click the <strong>Start</strong> button to begin the exercise!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default RSAIntro;
