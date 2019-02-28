import React, { Component } from 'react';
import './Playthrough.css';

class FirstPlaythrough extends Component {
  render() {
    return (
      <div className="playthrough">
        <div className="playthrough__title">First Playthrough</div>
        <div className="playthrough__content">
          <p>Welcome!</p>

          <p>You are about to play a game involving four boxes.</p>

          <p>One of the boxes will contain a treasure.</p>

          <p>However, you will not know which.</p>

          <p>You will have to guess, or click on the hint box!</p>

          <p>The hint box will not always have a hint in it.</p>

          <p>You will get an audio cue indicating that a hint has popped up.</p>

          <p>To see picture instructions, click on "How to Play?" button.</p>

          <p>Otherwise, click the "Start" button to get started!</p>
        </div>
      </div>
    );
  }
}

export default FirstPlaythrough;
