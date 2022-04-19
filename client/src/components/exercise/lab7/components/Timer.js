import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        const { seconds } = this.props;
        this.state = { secondsLeft: seconds };
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({ secondsLeft: this.state.secondsLeft - 1 }, () => this.checkExpired()),
            1000
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
        const { visible, time } = this.props;
        const countdownStyle = {
            width: this.calculatePercentage(time).toString() + '%'
        };
        if (!visible) return null;

        return (
            <div className="roundTimer">
                <div className="roundCountdown" style={countdownStyle}>
                </div>
            </div>
        );
    }
}

export default Timer;
