import React, { Component } from "react";
import { navigate } from "@reach/router";
import Simulation from "../../components/Simulation";

class AISimulationStart extends Component {
    constructor(props) {
        super(props);
        this.state = { componentName: "AISimulationStart" };
    }
    handleStart() {
        navigate("/Lab7/Exercise/AISimulation")
    }

    render() {
        const { actions } = this.props;
        return (
            <div>
                <p className="playthrough__sentence">AI Simulation Page</p>
                <Simulation/>
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