/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";

class Second extends Component {
  render() {
    return (
      <div className="playthrough tw-p-3">
        <div className="tw-title tw-text-left">Round 1 Complete</div>
        <div className="playthrough__content">
          <p className="tw-body-text tw-py-6">
            Your first round of the exercise may have been a breeze for you if
            you depended on the audio cues. However,{" "}
            <b>users with hearing loss cannot hear the audio cues</b>, which
            makes the exercise more difficult.
          </p>
          <p className="tw-body-text tw-pb-6">
            Let’s play the exercise another time, but without the audio cue to
            indicate when there's a hint.{" "}
            <b>
              This will simulate a deaf or hard-of-hearing user’s experience.
            </b>{" "}
            The same rules from the first round still apply. Click the 'Next
            Play' button when you’re ready to continue.
          </p>
        </div>
      </div>
    );
  }
}

export default Second;
