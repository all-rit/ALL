import React, { Component } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../shared/PageServiceTimer";

class SimulationSummary extends Component {
    constructor(props) {
        super(props);
        this.state = { componentName: "SimSummary", phase: "1" };
    }

    // should appear if AI improved (Updated)
    handleUpdate() {
        navigate("/Lab7/Exercise/AICodeRepair");
    }

    // should appear after first sim (1) and lead to Code Repair
    // should appear after AI improved/updated and lead to Alteration Start
    handleContinue() {
        navigate("/Lab7/Exercise/ImproveAIStart");
    }

    render() {
        const { actions } = this.props;

        return (

            <div>
                <p className="playthrough__sentence">
                    Simulation Summary
                </p>

                <button
                    className="btn btn-primary text-black btn-xl text-uppercase"
                    onClick={this.handleUpdate}
                    key="update"
                >
                    Update
                </button>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase"
                    onClick={this.handleContinue}
                    key="continue"
                >
                    Continue
                </button>
            </div>
        )
    }
}

export default SimulationSummary;