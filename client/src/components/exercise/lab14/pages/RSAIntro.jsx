import React from 'react';
import { navigate } from 'react-router-dom';

const RSAIntro = () => {
  const handleContinue = () => {
    navigate('/Lab14/Exercise/RSAEncryption');
  };

  return (
    <div className="center-div">
      <h1 className={'tw-title tw-text-left'}>The RSA Encryption Algorithm</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-4">
          Rivest-Shamir-Adleman, also known as RSA, is a well-known public-key
          or asymmetric cryptographic algorithm. It protects sensitive data
          through encryption and decryption using a private and public key pair.
          The encryption method first appeared in 1977 and is widely used for
          secure data transmission. You have probably been using RSA encryption
          when sending emails, making online purchases, and even using web
          browsers such as the one you&apos;re viewing this page on!
        </p>
        <p className="tw-body-text tw-text-left tw-py-2">
          RSA works by generating two large prime numbers and multiplying them
          together to create a modulus that then creates a public key and a
          private key. The public key is used for encryption and is known to
          everyone, while the private key is used for decryption and must be
          kept secret by the receiver.
        </p>
        <p className="tw-body-text tw-text-left tw-py-4">
          The reason RSA is so secure is because of it&apos;s reliance on the
          mathematical properties of large prime numbers. While it&apos;s easy
          to create an encryption for RSA by multiplying two large prime
          numbers, creating the decryption for it to perfectly match this is way
          harder and can take a lot of attempts to crack if you do not know the
          original encryption method. However, this can all be changed with the
          introduction of quantum computers in the future!
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
