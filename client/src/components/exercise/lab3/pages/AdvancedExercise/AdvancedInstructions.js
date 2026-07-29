/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab3/index";

class AdvancedInstructions extends Component {
  handleSubmit() {
    navigate("/Lab3/Exercise/ProblemDiscovery");
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }
  render() {
    const textToSpeech = (e, text) => {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };

    return (
      <div className={"tw-p-10"}>
        <h2 className={"tw-title tw-text-left"}>
          {" "}
          Instructions for Advanced Activity{" "}
        </h2>
        <br />
        <div>
          <p
            className={"tw-body-text tw-font-medium tw-text-left"}
            aria-label={
              "Instructions for Advanced Activity" +
              "You will have to learn about accessibility by performing a task which will involve finding the accessibility issues in a page." +
              "Please make sure you are using Google Chrome." +
              "For the following activity, please ensure that you have volume enabled on your device." +
              "Click on the button below to test the functionality of the screen reader."
            }
          >
            You will have to learn about accessibility by performing a task
            which will involve finding the accessibility issues in a page.
            Please make sure you are using
            <a
              className={"tw-text-primary-blue"}
              target="_blank"
              href={"https://www.google.com/chrome/"}
              rel="noreferrer"
            >
              {" "}
              Google Chrome.{" "}
            </a>
            For the following activity, please ensure that you have volume
            enabled on your device.
            <br />
            <br />
            Click on the button below to test the functionality of the screen
            reader.
          </p>
          <br />
          <div className={"tw-flex tw-gap-4 tw-w-full tw-justify-center"}>
            <button
              className="btn tw-shadow-md tw-bg-secondary-gray tw-w-1/6 tw-h-[4rem] text-uppercase hover:tw-bg-primary-yellow hover:tw-shadow-lg"
              key="repair"
              aria-label={"Test"}
              onClick={(e) => textToSpeech(e, "Test")}
            >
              Test
            </button>
            <button
              onClick={this.handleSubmit}
              className="btn tw-shadow-md tw-bg-secondary-gray tw-w-1/6 tw-h-[4rem] text-uppercase hover:tw-bg-primary-yellow hover:tw-shadow-lg"
              aria-label={"Next"}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvancedInstructions;
