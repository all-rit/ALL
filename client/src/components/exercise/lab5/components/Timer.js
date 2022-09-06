/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
class Timer extends Component {
  constructor(props) {
    super(props);
    const {seconds} = this.props;
    this.state = {secondsLeft: seconds};
  }

  componentDidMount() {
    this.interval = setInterval(
        () =>
          this.setState({secondsLeft: this.state.secondsLeft - 1}, () =>
            this.checkExpired(),
          ),
        1000,
    );
  }
  checkExpired() {
    if (this.state.secondsLeft === 0) {
      this.props.timerDone();
      clearInterval(this.interval);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className="timer">
          <div>
            <b>Seconds Left to Read:</b>{' '}
          </div>
          <div className="timer__window">
            0 : {this.state.secondsLeft < 10 ? '0' : ''}
            {this.state.secondsLeft}
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
