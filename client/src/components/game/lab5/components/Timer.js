import React, { Component } from 'react';
import Modal from './Modal';
class Timer extends Component {
    constructor(props) {
        super(props);
        const {seconds} = this.props;
        this.state = {secondsLeft: seconds, showModal: false};
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({ secondsLeft: this.state.secondsLeft - 1 }, ()=>this.checkExpired()),
            1000
        );
    }
    checkExpired(){
        if( this.state.secondsLeft === 0){
            this.setState({showModal: true})
            clearInterval(this.interval);

        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {link} = this.props;
        return (
            <div>
                <div className="timer">
                    <div><b>Seconds Left:</b> </div>
                    <div className="timer__window">
                        0 : {this.state.secondsLeft <10 ? "0": ""}{this.state.secondsLeft}
                    </div>
                </div>
                {this.state.showModal &&
                    <Modal buttonLabel={"Continue"} message={"Time Has Expired! Click Continue to Proceed"} title={"Timer"} link={link}/>
                }
            </div>
    );
    }
}

export default Timer;
