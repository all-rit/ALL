import React, { Component } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../shared/PageServiceTimer";
import Simulation from "../../components/Simulation";

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
                <Simulation></Simulation>
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