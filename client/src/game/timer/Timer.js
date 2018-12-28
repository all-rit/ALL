import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  updateTimer(seconds) {
    let remainingMinutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    this.setState({remainingMinutes, remainingSeconds});
  }

  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);

    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

    return minutes + ':' + seconds;
  }

  render() {
    const { seconds } = this.props;

    return (
      <div className="timer">
        {this.format(seconds)}
      </div>
    );
  }
}

export default Timer;
