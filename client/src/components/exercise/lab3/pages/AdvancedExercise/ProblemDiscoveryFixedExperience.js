/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
// link to image: https://pixabay.com/vectors/cat-pet-animal-kitty-kitten-cute-6484941/
// license: https://pixabay.com/service/license/
import catImage from "../../../../../assets/images/lab3/exercise/cat.svg";
// link to image: https://pixabay.com/vectors/taxi-cab-car-vehicle-47204/
// license: https://pixabay.com/service/license/
import carImage from "../../../../../assets/images/lab3/exercise/car.svg";
// link to image: https://pixabay.com/vectors/hamburger-cheeseburger-fast-food-31775/
// license: https://pixabay.com/service/license/
import burgerImage from "../../../../../assets/images/lab3/exercise/hamburger.svg";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING, LAB_ID } from "../../../../../constants/lab3/index";
import { PageService } from "../../../../../services/PageService";

class ProblemDiscoveryFixedExperience extends Component {
  handleSubmit() {
    const name = "ProblemDiscoveryFixed";
    PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
    navigate("/Lab3/Exercise/ProblemExplanation");
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    this.interval = setInterval(
      () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
      1000,
    );
  }
  constructor(props) {
    super(props);
    this.state = { render: "", secondsElapsed: 0 };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const textToSpeech = (e, text) => {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };

    const imgStyle = {
      width: "13rem",
      height: "13rem",
      tabIndex: "0",
      backgroundColor: "#EFEFEF",
      verticalAlign: "middle",
      padding: "5px",
      borderRadius: "10px",
    };

    return (
      <div>
        <h2
          className={"tw-title tw-text-left"}
          aria-label={"Discover the problem"}
          tabIndex={"0"}
          onFocus={(e) => textToSpeech(e, "Repaired version of previous page.")}
        >
          Repaired Version of Previous Page
        </h2>

        <br />
        <p
          className={"tw-body-text tw-font-medium tw-text-left"}
          aria-label={"Subtitle Instructions"}
          onFocus={(e) =>
            textToSpeech(
              e,
              "The accessibility issues have been repaired here. All images say what their contents are as such like 'cat', 'burger' and 'car' etc. and not 'image of cat', 'image of burger', 'image of car' etc. . Try using your screenreader now.",
            )
          }
        >
          The accessibility issues have been repaired here. All images say what
          their contents are as such like 'cat', 'burger' and 'car' etc. and not
          'image of cat', 'image of burger', 'image of car' etc. . Try using
          your screenreader now.
        </p>
        <br />
        <div
          className={
            "tw-flex tw-flex-row tw-gap-x-6 tw-w-full tw-justify-center tw-py-10"
          }
        >
          <input
            style={imgStyle}
            type={"image"}
            src={catImage}
            alt={"cat"}
            tabIndex={"0"}
            onFocus={(e) => textToSpeech(e, "cat")}
          />
          <input
            style={imgStyle}
            type={"image"}
            src={carImage}
            alt={"car"}
            tabIndex={"0"}
            onFocus={(e) => textToSpeech(e, "car")}
          />
          <input
            style={imgStyle}
            type={"image"}
            src={burgerImage}
            alt={"burger"}
            tabIndex={"0"}
            onFocus={(e) => textToSpeech(e, "burger")}
          />
        </div>
        <div className={"tw-flex tw-flex-row tw-gap-x-6 tw-justify-center"}>
          <button
            className={
              "btn btn-md tw-w-[12%] tw-shadow-md tw-bg-primary-blue tw-text-white"
            }
            onFocus={(e) => textToSpeech(e, "ok button")}
          >
            Ok
          </button>
          <button
            className={
              "btn btn-md tw-w-[12%] tw-shadow-md tw-bg-primary-blue tw-text-white"
            }
            onFocus={(e) => textToSpeech(e, "cancel button")}
          >
            Cancel
          </button>
        </div>
        <br />
        <button
          onClick={this.handleSubmit.bind(this)}
          className={
            "btn btn-xl tw-shadow-md tw-bg-secondary-gray tw-m-3 hover:tw-bg-primary-yellow hover:tw-shadow-lg"
          }
          onFocus={(e) => textToSpeech(e, "Next")}
        >
          Next
        </button>
      </div>
    );
  }
}

export default ProblemDiscoveryFixedExperience;
