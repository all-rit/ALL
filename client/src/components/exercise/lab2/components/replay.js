/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./exerciseStyle.css";
import LabButton from "../../../all-components/LabButton";

/*
  Class for replay screen and to allow the user to replay the exercise
*/
class Replay extends Component {
  // Constructor to hold state information
  constructor(props) {
    super(props);
    this.state = {
      scorePopup: false,
      exerciseMode: null,
    };
  }

  // Renderer for application
  render() {
    // eslint-disable-next-line
    this.state.exerciseMode = "default";

    // Handles the first click
    const clickFirst = () => {
      this.props.changeExerciseColors(this.props.colors);
      this.props.resetOption();
      this.props.enterInfoState();
    };

    const clickSecond = () => {
      this.props.changeExerciseColors(this.props.colors);
      this.props.resetOption();
      this.props.enterSecondInfoState();
    };

    const clickThird = () => {
      this.props.changeExerciseColors(this.props.colors);
      this.props.resetOption();
      this.props.enterThirdInfoState();
    };

    return (
      <div className={""}>
        <div className={"tw-m-5"}>
          <div>
            <p className=" tw-text-center tw-py-6">Results</p>
            <div
              className={"tw-rounded-lg tw-p-5 tw-body-text tw-text-[1.25rem]"}
            >
              <div
                className={
                  "tw-flex tw-flex-col tw-gap-y-3 tw-text-white tw-bg-secondary-gray tw-p-6 tw-rounded-lg"
                }
              >
                <div
                  className={`tw-p-3 tw-rounded-xl tw-flex tw-justify-between ${this.props.score > 0 ? "tw-bg-success" : "tw-bg-brightRed"}`}
                >
                  <p className=" tw-text-left">Final Score</p>
                  <p>{this.props.score}</p>
                </div>
                <div
                  className={`tw-p-3 tw-rounded-xl tw-flex tw-justify-between ${this.props.rightClick > 0 ? "tw-bg-success" : "tw-bg-brightRed"}`}
                >
                  <p className="tw-text-left">Correctly clicked circles</p>
                  <p>{this.props.rightClick}</p>
                </div>
                <div
                  className={`tw-p-3 tw-rounded-xl tw-flex tw-justify-between ${this.props.rightNoClick > 0 ? "tw-bg-success" : "tw-bg-brightRed"}`}
                >
                  <p className=" tw-text-left">Correctly not clicked circles</p>
                  <p>{this.props.rightNoClick}</p>
                </div>
                <div
                  className={`tw-p-3 tw-rounded-xl tw-flex tw-justify-between ${this.props.wrongClick === 0 ? "tw-bg-success" : "tw-bg-brightRed"}`}
                >
                  <p className=" tw-text-left">Incorrectly clicked circles</p>
                  <p>{this.props.wrongClick}</p>
                </div>
                <div
                  className={`tw-p-3 tw-rounded-xl tw-flex tw-justify-between ${this.props.wrongNoClick === 0 ? "tw-bg-success" : "tw-bg-brightRed"}`}
                >
                  <p className=" tw-text-left">Missed clicks</p>
                  <p>{this.props.wrongNoClick}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="center tw-m-5" style={{ marginLeft: "-25px" }}>
            {this.props.exercisesPlayed === 0 ? (
              <div className={"tw-mb-6"}>
                <LabButton onClick={clickFirst} label={"Continue"} />
              </div>
            ) : (
              <div className={"tw-mb-6"}>
                {this.props.exercisesPlayed === 1 ? (
                  <LabButton onClick={clickSecond} label={"Continue"} />
                ) : (
                  <div>
                    <LabButton onClick={clickThird} label={"Continue"} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Replay;
