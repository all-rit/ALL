import { Component } from "react";

/**
 * Component for the timer used to penalize
 */
class Timer extends Component{

    //State for timer information
    constructor(props){
        super(props)
        const {seconds} = this.props;
        this.state = {secondsLeft: seconds};
    }

    //Renderer for system

    //Randomly generates a number for the timer??
    compenentDidMount() {
        this.interval = setInterval (
            () => this.setState({ secondsLeft: this.state.secondsLeft - 1}, ()=>this.checkExpired()),
            1000
        );
    }

    //checkExpired()
    checkExpired(){
        if( this.state.secondsLeft === 0){//=== equal value and equal type
            this.props.timerDone();
            clearInterval(this.interval);
        }
    }
    //
    componentWillUnmount() {//this is to cleanup
        clearInterval(this.interval);
    }
        
    /**
     * invoked after component is inserted into the tree
     * set state
     */
    
    //render()

    render() {
        return (
            <div>
                <div className="timer">
                    <div><b>Seconds Until Penalty is Lifted</b></div>
                    <div className="timer__window">
                        0 : {this.state.secondsLeft < 60 ? "0": ""}{this.state.secondsLeft}
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;//this allows a single object to be exported??
