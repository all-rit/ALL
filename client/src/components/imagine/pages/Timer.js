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
        //length of time is going to depend on groups
    
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
                        0 : {this.state.secondsLeft < this.props.seconds ? "0": ""}{this.state.secondsLeft}
                        {/* //will take whatever fixed time in seconds */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;
