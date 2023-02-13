/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { navigate } from "@reach/router";
import Collapsible from "../../components/Collapsible";

class SimulationSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "SimSummary",
    };
  }

  handleContinue() {
    const {
      state: {
        exercise7: { redirectURL },
      },
    } = this.props;
    navigate(`/Lab7/Exercise/${redirectURL}`);
  }

  handleBack() {
    navigate(`/Lab7/Exercise/AICodeRepair`);
  }

  render() {
    const {
      state: { exercise7, repair7 },
    } = this.props;
    return (
      <div>
        <h2 className={"tw-font-bold"}>Simulation Summary</h2>
        <div>
          <div
            className={
              "tw-flex tw-items-center tw-justify-center tw-gap-32 tw-py-6 tw-bg-[#EBE8E8] tw-mt-6 tw-shadow-xl"
            }
          >
            <div>
              <p className={"tw-font-bold tw-text-2xl"}>
                Total Score: {exercise7.score}
              </p>
            </div>
            <div className={"tw-border-l-0 tw-border-solid tw-h-[125px]"} />
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
          <div className={"tw-mt-12 tw-space-y-6"}>
            {exercise7.results.map((result, index) => (
              <Collapsible key={index} result={result} index={index} />
            ))}
          </div>
        </div>
        <div className={"tw-mt-12"}>
          {repair7.changesApplied && (
            <button
              className="btn btn-second text-black btn-xl text-uppercase leftButton"
              onClick={this.handleBack.bind(this)}
              key="repair"
            >
              Try a new equation
            </button>
          )}
          <button
            className="btn btn-primary text-black btn-xl text-uppercase"
            onClick={this.handleContinue.bind(this)}
            key="continue"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default SimulationSummary;
