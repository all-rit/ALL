/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, {Component} from "react";
import {navigate} from "@reach/router";
import Collapsible from "../../components/Collapsible";
import {roundData} from "../../../../../constants/lab7";

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
        const {state: {exercise7}} = this.props;
        return (
            <div>
                <h2 className={"tw-font-bold"}>Simulation Summary</h2>
                <div>
                    <div
                        className={"tw-flex tw-items-center tw-justify-center tw-gap-32 tw-p-6 tw-bg-[#EBE8E8] tw-mt-6 tw-shadow-xl"}>
                        <div>
                            <p className={"tw-font-bold tw-text-2xl"}>Total Score: {exercise7.score}</p>
                        </div>
                        <div className={"tw-border-l-0 tw-border-solid tw-h-[125px]"}/>
                        <div className={"tw-flex tw-text-left tw-text-2xl"}>
                            <ul className={"tw-text-left tw-font-bold"}>
                                <li>Intrusions:</li>
                                <li>Protected (TP):</li>
                                <li>Incorrect (FP):</li>
                            </ul>
                            <ul className={"tw-text-right tw-font-bold tw-ml-6"}>
                                <li>{exercise7.intrusions}</li>
                                <li>{exercise7.protected}</li>
                                <li>{exercise7.incorrect}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"tw-mt-12 tw-space-y-3"}>
                        {roundData.map(({title, content}) => (
                            <Collapsible key={title} title={title} content={content}/>
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
