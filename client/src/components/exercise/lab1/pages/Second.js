import React from "react";

/**
 * Renders the second round of the exercise.
 *
 * @returns {JSX.Element} The JSX element representing the second round of the exercise.
 */
const Second = () => {
  return (
    <div className="playthrough">
      <div className="playthrough__title">Good work!</div>
      <div className="playthrough__content">
        <p className="playthrough__sentence">
          Your first round of the exercise may have been a breeze for you if you
          depended on the audio cues. However,{" "}
          <b>users with hearing loss cannot hear the audio cues</b>, which makes
          the exercise more difficult.
        </p>

        <hr />

        <p className="playthrough__sentence">
          Let’s play the exercise another time, but without the audio cue to
          indicate when there&apos;s a hint.{" "}
          <b>
            This will simulate a deaf or hard-of-hearing user&apos;s experience.
          </b>{" "}
          The same rules from the first round still apply. Click the &apos;Next
          Play&apos; button when you&apos;re ready to continue.
        </p>
      </div>
    </div>
  );
};

export default Second;
