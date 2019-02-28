import React, { Component } from 'react';
import './Playthrough.css';

class ThirdPlaythrough extends Component {
  render() {
    return (
      <div className="playthrough">
        <div className="playthrough__title">Third Playthrough</div>
        <div className="playthrough__content">
          <p>You should have noticed that your second playthrough is harder with audio turned off. Your score should be lower compared to your score in your first playthrough</p>

          <p>This is typically how Deaf/Hard of Hearing users experience when applications use sound to cue something.</p>

          <p>To help improve the game, there is now a "Repair" button next to the "How to Play?" button.</p>

          <p>
            Generally, the developers utilize alternative approaches for audio cues by adding more information
            such as additional messages or/and visual changes.
          </p>

          <p>After fixing the main issue within the game, go proceed and click the "Start" button! Your score will improve!</p>
        </div>
      </div>
    );
  }
}

export default ThirdPlaythrough;
