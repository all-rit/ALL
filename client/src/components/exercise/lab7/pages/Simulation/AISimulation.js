import React, { Component } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../shared/PageServiceTimer";
import { simTime, readTime } from "../../../../../constants/lab7";

class AISimulation extends Component {
    constructor(props) {
        super(props);
        this.state = { readTimerDone: false, componentName: "AISimulation" };
    }

    handleSubmit(){
        navigate("/Lab7/Exercise/SimulationSummary");
    }

    readTimerDone() {
        this.setState({ readTimerDone: true })
    }

    render() {
        const { actions } = this.props;
        return (
            <div>
                <p className="playthrough__sentence">AI Simulation</p>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase"
                    onClick={this.handleSubmit}
                    key="continue"
                >
                    Continue
                </button>
            </div>
        )
    }
}
export default AISimulation;