/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { navigate } from "@reach/router";

class CatClickNavigate extends Component {
  constructor(props) {
    super(props);
    const { path } = this.props;
    CatClickNavigate.handleOnclick = CatClickNavigate.handleOnclick.bind(
      this,
      path,
    );
  }

  static handleOnclick(path) {
    navigate(path);
  }

  render() {
    const textToSpeech = (e, text) => {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };

    return (
      <div id={"catClickMessage"}>
        <p
          className={"tw-body-styling-name tw-text-white tw-font-medium"}
          aria-label={
            "Cat clicked! Please click the 'next' button to continue."
          }
          onFocus={(e) =>
            textToSpeech(
              e,
              "Cat clicked! Please click the next button to continue.",
            )
          }
        >
          Cat clicked! Please click the 'next' button to continue.
        </p>
        <br />
        <button
          onClick={CatClickNavigate.handleOnclick}
          className="btn btn-primary tw-w-1/6 tw-h-[4rem] text-uppercase"
          onFocus={(e) => textToSpeech(e, "Next")}
        >
          Next
        </button>
      </div>
    );
  }
}

export default CatClickNavigate;
