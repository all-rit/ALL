import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExerciseTransition = () => {
  const handleContinue = () => {
    navigate('/Lab14/Exercise/CaesarIntro');
  };

  return (
    <div className="center-div">
      <h1 className={'tw-title tw-text-left'}>Activity Start</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-4">
          Now that you have reviewed the basics of quantum computing, you will
          be working with some of the most well-known encryption methods:
          Caesar, Vigenère, and RSA ciphers. Using what you have learned, you
          will encrypt and decrypt messages using these ciphers. Get ready to
          apply your knowledge of superposition and entanglement to the world of
          cryptography!
        </p>
        <p className="tw-body-text tw-text-left tw-py-2"></p>
      </div>
      <div className="tw-body-text tw-text-center tw-pb-6">
        Click the <strong>Start Activity</strong> button to move on!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Start Activity
        </button>
      </div>
    </div>
  );
};

export default ExerciseTransition;
