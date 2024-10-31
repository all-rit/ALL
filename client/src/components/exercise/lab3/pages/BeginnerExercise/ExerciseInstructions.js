/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab3/index";

class ExerciseInstructions extends Component {
  handleSubmit() {
    navigate("/Lab3/Exercise/UserUpdatedExercise");
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
        <h2
          className={"tw-title-styling-name tw-text-left tw-mb-10"}
          aria-label={"Instructions"}
        >
          Instructions{" "}
        </h2>
        <div>
          <p
            aria-label="You clicked on an image. However, without the ability to see, it may
            be difficult to decipher what these images represent. Please make
            sure you are using. For the following activity, please ensure that you have volume
            enabled on your device. Click on the button below to test the functionality of the screen
            reader."
            className={
              "tw-body-styling-name tw-font-medium tw-text-left tw-w-11/12"
            }
          >
            You clicked on an image. However, without the ability to see, it may
            be difficult to decipher what these images represent. Please make
            sure you are using
            <a
              target="_blank"
              href={"https://www.google.com/chrome/"}
              rel="noreferrer"
              className={"tw-text-primary-blue"}
            >
              {" "}
              Google Chrome.{" "}
            </a>
            For the following activity, please ensure that you have volume
            enabled on your device.
            <br />
            <br />
            Click on the <strong> Test </strong> button below to test the
            functionality of the screen reader, or the <strong> Next </strong>{" "}
            button to move on.
          </p>
          <br />
          <div className={"tw-flex tw-gap-4 tw-w-full tw-justify-center"}>
            <button
              className="btn btn-second tw-w-1/6 tw-h-[4rem] text-uppercase"
              key="repair"
              aria-label={"Test"}
              onClick={(e) => textToSpeech(e, "Test")}
            >
              Test
            </button>
            <button
              onClick={this.handleSubmit}
              className="btn btn-primary tw-w-1/6 tw-h-[4rem] text-uppercase"
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

export default ExerciseInstructions;
