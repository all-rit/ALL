/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { EXERCISE_PLAYING, LAB_ID } from '../../../../../constants/lab3/index';
import { PageService } from '../../../../../services/PageService';
class ViewFix extends Component {
  constructor(props) {
    super(props);
    ViewFix.navOnClick = ViewFix.navOnClick.bind(this);
    this.state = {
      aria1: 'Ok button',
      aria2: 'Cancel button',
      render: '',
      secondsElapsed: 0,
    };
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  static navOnClick() {
    const name = 'ViewFix';
    PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
    navigate('/Lab3/Exercise/ProblemFix');
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    if (window.location.state) {
      this.setState({
        aria1: window.location.state.aria1.replace(/<[^>]*>?/gm, ''),
        aria2: window.location.state.aria2.replace(/<[^>]*>?/gm, ''),
      });
    }
    this.interval = setInterval(
      () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
      1000,
    );
  }

  render() {
    const textToSpeech = (e, text) => {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };

    return (
      <div className={'tw-p-10'}>
        <h2
          className={'tw-title tw-text-left'}
          aria-label={'Title'}
          onFocus={(e) => textToSpeech(e, 'Test Fix')}
        >
          Test Repair
        </h2>
        <br />
        <p
          className={'tw-body-text tw-font-medium tw-text-left'}
          aria-label={'Subtitle Instructions'}
          onFocus={(e) => textToSpeech(e, 'Is your page now more accessible?')}
        >
          Is your page now more accessible?
        </p>
        <br />
        <p
          className={'tw-body-text tw-font-medium tw-text-left'}
          aria-label={'Body Instructions'}
          onFocus={(e) =>
            textToSpeech(
              e,
              'If you have updated the buttons with the appropriate ' +
                'aria-labels then you have succeeded. They can now be effectively described by screenreaders.',
            )
          }
        >
          If you have updated the buttons with the appropriate aria-labels then
          you have succeeded. They can now be effectively described by
          screenreaders.
        </p>
        <br />
        <div
          className={
            'tw-flex tw-flex-row tw-gap-x-4 tw-w-full tw-justify-center'
          }
        >
          <button
            className={
              'btn btn-md tw-w-[15%] tw-shadow-md tw-bg-primary-blue tw-text-white hover:tw-shadow-lg'
            }
            aria-label={this.state.aria1}
            onFocus={(e) => textToSpeech(e, this.state.aria1)}
          >
            Ok
          </button>
          <button
            className={
              'btn btn-md tw-w-[15%] tw-shadow-md tw-bg-primary-blue tw-text-white hover:tw-shadow-lg'
            }
            aria-label={this.state.aria2}
            onFocus={(e) => textToSpeech(e, this.state.aria2)}
          >
            Cancel
          </button>
        </div>
        <br />
        <br />
        <button
          className={
            'btn btn-xl tw-shadow-md tw-bg-secondary-gray tw-m-3 hover:tw-bg-primary-yellow hover:tw-shadow-lg'
          }
          onClick={ViewFix.navOnClick}
          onFocus={(e) => textToSpeech(e, 'Next')}
        >
          Next
        </button>
      </div>
    );
  }
}

export default ViewFix;
