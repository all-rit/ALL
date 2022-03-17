import React, { Component } from "react";
import { navigate } from "@reach/router";

class AISimulationStart extends Component {
    constructor(props) {
        super(props);
        this.state = { readTimerDone: false, componentName: "AISimulationStart" };
    }
    handleStart(){
        navigate("/Lab7/Exercise/AISimulation")
    }

    readTimerDone() {
        this.setState({ readTimerDone: true })
    }

    render() {
        const { actions } = this.props;
        return (
            <div>
                <p>AI Simulation Page</p>

                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={this.handleStart}
                    key="start"
                >
                    Start
                </button>
            </div>
        )
    }
}
export default AISimulationStart;