import React from "react";

/**
 * Renders the content for the Third page of the exercise.
 *
 * @returns {JSX.Element} The JSX element representing the Third page.
 */
function Third() {
  return (
    <div className="playthrough">
      <div className="playthrough__title">Interesting...</div>
      <div className="playthrough__content">
        <p className="playthrough__sentence">
          You may have noticed that this round was <b>harder</b> without the
          audio cue, compared to the first round with the audio cue. Your score
          from this round may be <b>lower</b> than your score from the first
          round.
        </p>

        <p className="playthrough__sentence">
          <b>
            This is what users with hearing loss typically experience when
            applications use audio cues.
          </b>
        </p>

        <p className="playthrough__sentence">
          Software developers can add features for better accessibility, such as{" "}
          <b>visual cues</b> for deaf or hard-of-hearing users. To add visual
          cues and improve the exercise, click the &apos;Repair&apos; button
          next to the &apos;Next Play&apos; button.
        </p>

        <hr />

        <p className="playthrough__sentence">
          After making repairs to the exercise, click the &apos;Start with
          Repair Applied&apos; button. Your score in the next round should
          increase from this round.
        </p>
      </div>
    </div>
  );
}

export default Third;
