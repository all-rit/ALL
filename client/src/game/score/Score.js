import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
  render() {
    const { score } = this.props;

    return (
      <div className="score">
        Score: {score}
      </div>
    );
  }
}

export default Score;
