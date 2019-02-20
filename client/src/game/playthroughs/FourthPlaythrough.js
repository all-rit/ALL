import React, { Component } from 'react';
import './Playthrough.css';

class FourthPlaythrough extends Component {
  render() {
    return (
      <div className="playthrough">
        <div className="playthrough__title">Conclusion</div>
        <div className="playthrough__content">
          <p>Thank you for playing our game!</p>

          <p>Hopefully we provided a good learning experience for you.</p>

          <p>Feel free keep using the game, tweaking with code editor, or take a walk outside!</p>
        </div>
      </div>
    );
  }
}

export default FourthPlaythrough;
