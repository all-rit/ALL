/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";

class First extends Component {
  render() {
    return (
      <div className="tw-p-3">
        <h1 className={"tw-title tw-text-left"}> Exercise Start </h1>
        <div className="playthrough__content">
          <ul className="tw-body-text tw-text-left">
            <li className={"tw-py-6"}>
              <b>Four small boxes</b> will be presented on your screen. One of
              the four boxes contains a treasure, and it's your job to{" "}
              <b>guess which box.</b>
            </li>
            <li>
              A <b>large hint box</b> will also be presented on your screen.
              Sometimes a hint will be available that will reveal which of the
              four boxes has the treasure.{" "}
              <b>Hints are only available when you hear an audio cue.</b> If you
              click on the hint box and there is a hint, it will reveal which
              box has the treasure. However, if you click on the hint box and
              there is no hint, the boxes will be 'locked' for 1.5 seconds
              before you can select again. Beware,{" "}
              <b>opening the hint box costs 25 points!</b>
            </li>
            <li className={"tw-py-6"}>
              <b>Time is limited</b> for each round. The quicker you find the
              box with the treasure, the more points you will get.
            </li>

            <ul className="tw-body-text tw-list-disc tw-px-6">
              <li>Less than 1 second = 150 points</li>
              <li>Less than 2 seconds = 125 points</li>
              <li>Less than 3 seconds = 100 points</li>
              <li>Less than 4 seconds = 75 points</li>
              <li>Less than 5 seconds = 50 points</li>
              <li>More than 5 seconds = 25 points</li>
            </ul>

            <li className={"tw-py-6"}>
              Every time you find the box with the treasure, a countdown will be
              displayed and a new round will ensue,{" "}
              <b>until the timer runs out.</b>
            </li>
          </ul>
          <p className="tw-body-text tw-text-center tw-pb-3">
            When you are ready, click the <b>Start</b> button to begin the
            exercise.
          </p>
        </div>
      </div>
    );
  }
}

export default First;
