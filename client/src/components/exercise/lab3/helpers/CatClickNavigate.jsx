/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LabButton from '@all-components/LabButton';

const CatClickNavigate = ({ path }) => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate(path);
  };

  const textToSpeech = (e, text) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  };

  return (
    <div id={'catClickMessage'}>
      <p
        className={'tw-body-text tw-text-white tw-text-center'}
        aria-label={"Cat clicked! Please click the 'next' button to continue."}
        onFocus={(e) =>
          textToSpeech(
            e,
            'Cat clicked! Please click the next button to continue.',
          )
        }
      >
        Cat clicked! Please click the 'next' button to continue.
      </p>
      <br />
      <LabButton
        onClick={handleOnclick}
        onFocus={(e) => textToSpeech(e, 'Next')}
        label={'Next'}
      />
    </div>
  );
};

export default CatClickNavigate;
