import React, { Component } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../shared/PageServiceTimer";
import Score from "../../components/Score";
import Collapsible from "../../components/Collapsible";
import { roundData } from "../../../../../constants/lab7";

class SimulationSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "SimSummary"
        };
    }

    // should appear if AI improved (Updated)
    handleUpdate() {
        navigate("/Lab7/Exercise/AICodeRepair");
    }

    // should appear after first sim (1) and lead to Code Repair
    // should appear after AI improved/updated and lead to Alteration Start
    handleContinue() {
        navigate("/Lab7/Exercise/BadAIExplanation");
    }

    render() {
        const { actions } = this.props;

        return (

            <div>
                <p className="playthrough__sentence">
                    Simulation Summary
                </p>

                <div >
                    <div className="scores">
                        <Score/>
                    </div>
                    
                    <div className="collapsible">
                        {roundData.map(({title, content}) =>(
                            <Collapsible title={title} content={content} />
                        ))}
                    </div>
                </div>

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