/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import LabButton from '../../../all-components/LabButton';

const navigate = useNavigate();

class CatClickNavigate extends Component {
  constructor(props) {
    super(props);
    const { path } = this.props;
    CatClickNavigate.handleOnclick = CatClickNavigate.handleOnclick.bind(
      this,
      path,
    );
  }

  static handleOnclick(path) {
    navigate(path);
  }

  render() {
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
          aria-label={
            "Cat clicked! Please click the 'next' button to continue."
          }
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
          onClick={CatClickNavigate.handleOnclick}
          onFocus={(e) => textToSpeech(e, 'Next')}
          label={'Next'}
        />
      </div>
    );
  }
}

export default CatClickNavigate;
