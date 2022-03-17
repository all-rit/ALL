import React, { Component } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../shared/PageServiceTimer";
import { simTime, readTime } from "../../../../../constants/lab7";

class AISimulation extends Component {
    constructor(props) {
        super(props);
        this.state = { readTimerDone: false, componentName: "AISimulation" };
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
                <p>AI Simulation</p>
            </div>
        )
    }
}
export default AISimulation;