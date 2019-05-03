import React, { Component } from 'react';

class FirstPlaythrough extends Component {
  render() {
    return (
      <div className="playthrough">
        <div className="playthrough__title">Welcome!</div>
        <div className="playthrough__content">
          <p className="playthrough__sentence">
            Be prepared! You are about to play a game involving <b>four boxes</b>.
          </p>

          <ul className="playthrough__list">
            <li>One of the boxes will contain <b>a treasure</b>.</li>
            <li>You will have to <b>guess which</b>.</li>
            <li>Stuck? Use the hint box! The hint box <b>is not guaranteed</b> to have a hint inside.</li>
            <li>You will get <b>an audio cue</b> indiciating a hint has popped up.</li>
            <li>You will have <b>a limited amount of time</b> so try to get a high score as you can!</li>
          </ul>

          <p className="playthrough__sentence">
            For more information, click on the "How to Play?" button.
          </p>

          <hr />

          <p className="playthrough__sentence">
            If you're feeling lucky, feel free to click the "Start" button to proceed!
          </p>
        </div>
      </div>
    );
  }
}

export default FirstPlaythrough;
