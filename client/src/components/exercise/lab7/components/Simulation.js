/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import _ from "lodash";
import ExerciseService from "../../../../services/lab7/ExerciseService";
import UserLabService from "../../../../services/UserLabService";
import "../../../../assets/stylesheets/components/Simulation.scss";

import {
  AI_CORRECT,
  AI_INCORRECT,
  DELAY_TIME,
  EXERCISE_ENDED,
  EXERCISE_IDLE,
  EXERCISE_PLAYING,
  FILE_INCORRECT,
  FILE_INTRUSION,
  FILE_PROTECTED,
  LAB_ID,
  LOCKED_FILE,
  MESSAGES,
  OPEN_FILE,
  READ_TIME,
  SCORE_MAP,
  THREAT_LEVEL_TEXT,
  THREAT_MAX,
} from "../../../../constants/lab7";
import { navigate } from "@reach/router";
import { files } from "./data/files";
import Countdown from "react-countdown-now";
import ProgressBar from "./ProgressBar";
import File from "./File";

class Simulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      countdownComponent: null,
      counter: -1,
    };
  }

  startSimulation() {
    const { handlers } = this.props;
    this.startRound();
    handlers.updateState(EXERCISE_PLAYING);
  }

  startRound() {
    const { data, handlers, user } = this.props;
    if (data.roundNumber < 10) {
      const threatLvl = this.randomizeThreat();
      handlers.startNewRound();
      const files = this.generateFileList(threatLvl);
      this.setState({ files, counter: 0 });
      handlers.addResults({ files, threatLvl });
    } else {
      UserLabService.complete_exercise(LAB_ID);
      if (user?.firstname !== null && user !== null) {
        UserLabService.user_complete_exercise(user.userid, LAB_ID);
      }
      ExerciseService.updateEndExerciseScore(data.score);
      navigate("/Lab7/Exercise/SimulationSummary");
    }
  }

  randomizeThreat() {
    const { handlers } = this.props;
    const threatLvl = Math.floor(Math.random() * THREAT_MAX) + 1;
    handlers.updateThreatLevel(threatLvl);
    return threatLvl;
  }

  generateFileList = (threatLvl) => {
    return _.sampleSize(files, 5).map((file) => {
      const utility = threatLvl / file.sensitivityLevel;
      const decision = utility >= 1 ? LOCKED_FILE : OPEN_FILE;
      return {
        ...file,
        decision,
        result: this.evaluateAIDecision(file, decision, threatLvl),
      };
    });
  };

  evaluateAIDecision = (file, decision, threatLvl) => {
    const { sensitivityLevel } = file;
    let expected;
    switch (threatLvl) {
      case 1:
        expected = sensitivityLevel === 1 ? LOCKED_FILE : OPEN_FILE;
        break;
      case 2:
        expected =
          sensitivityLevel === 2 || sensitivityLevel === 3
            ? LOCKED_FILE
            : OPEN_FILE;
        break;
      case 3:
        expected =
          sensitivityLevel === 4 || sensitivityLevel === 5
            ? LOCKED_FILE
            : OPEN_FILE;
        break;
    }
    if (decision !== expected)
      return expected === OPEN_FILE && decision === LOCKED_FILE
        ? FILE_INCORRECT
        : FILE_INTRUSION;
    return FILE_PROTECTED;
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    /* Counter was incremented */
    if (prevState.counter !== this.state.counter) {
      /* Counter is within range of being incremented again */
      if (this.state.counter < this.state.files.length) {
        const { handlers } = this.props;
        const { counter, files } = this.state;
        switch (files[counter].result) {
          case FILE_PROTECTED:
            this.handleProtected();
            break;
          case FILE_INTRUSION:
            this.handleIntrusion();
            break;
          case FILE_INCORRECT:
            this.handleIncorrect();
            break;
          default:
            break;
        }
        handlers.incrementScore(SCORE_MAP[files[counter].result]);
      } else {
        this.handlePerfectScore();
        this.startRound();
      }
    }
  };

  handlePerfectScore = () => {
    const { files } = this.state;
    const filteredFiles = files.filter(
      (file) => file.result === FILE_PROTECTED
    );
    //if (filteredFiles.length === files.length) {
    //}
  };

  handleProtected = () => {
    const { handlers } = this.props;
    const { counter, files } = this.state;
    files[counter].report = AI_CORRECT;
    this.setState({ files });
    handlers.incrementProtected();
    this.incrementCounter();
  };

  handleIntrusion = () => {
    const { handlers } = this.props;
    const { counter, files } = this.state;
    files[counter].report = AI_INCORRECT;
    files[counter].message = MESSAGES[files[counter].content];
    this.setState({
      files,
      countdownComponent: (
        <Countdown
          date={Date.now() + READ_TIME}
          renderer={this.countdownRenderCallback}
        />
      ),
    });
    handlers.incrementIntrusions();
    setTimeout(() => this.setState({ countdownComponent: null }), READ_TIME);
    this.incrementCounter(READ_TIME);
  };

  handleIncorrect = () => {
    const { handlers } = this.props;
    const { counter, files } = this.state;
    files[counter].report = AI_INCORRECT;
    this.setState({ files });
    handlers.incrementIncorrect();
    this.incrementCounter();
  };

  incrementCounter = (delay = DELAY_TIME) => {
    setTimeout(() => this.setState({ counter: this.state.counter + 1 }), delay);
  };

  countdownRenderCallback = ({ seconds, completed }) => {
    const { counter, files } = this.state;
    const { content } = files[counter];
    if (completed) return <></>;
    else return <ProgressBar text={MESSAGES[content]} seconds={seconds} />;
  };

  render() {
    const { data } = this.props;
    return (
      <div className="simulation">
        {data.state === EXERCISE_IDLE && (
          <>
            <h2 className={"bold"}>
              Click the Start button to begin the simulation
            </h2>
            <button
              className="btn btn-primary text-black btn-xl text-uppercase mt-3"
              onClick={() => this.startSimulation()}
              key="start"
            >
              Start
            </button>
          </>
        )}
        {data.state === EXERCISE_PLAYING && (
          <>
            {/* Header */}
            <div className={"tw-flex tw-justify-between"}>
              {/* Round Tracker */}
              <div>
                <h4 className="tw-font-bold">Round {data.roundNumber} of 10</h4>
              </div>
              {/* Status Report */}
              <div className={"tw-flex tw-text-xl tw-m-[20px]"}>
                <ul className={"tw-text-left tw-font-bold"}>
                  <li>Intrusions:</li>
                  <li>Protected (TP):</li>
                  <li>Incorrect (FP):</li>
                  <li>Total Score:</li>
                </ul>
                <ul className={"tw-text-right tw-ml-6"}>
                  <li>{data.intrusions}</li>
                  <li>{data.protected}</li>
                  <li>{data.incorrect}</li>
                  <li>{data.score}</li>
                </ul>
              </div>
            </div>
            {/* Body */}
            <div>
              {/* Threat Message */}
              <div
                className={
                  "tw-flex tw-items-center tw-justify-center tw-w-full"
                }
              >
                <h1 className={"tw-font-bold tw-absolute tw-m-0 -tw-mt-16"}>
                  {THREAT_LEVEL_TEXT[data.threatLvl]} threat detected!
                </h1>
              </div>
              {/* File Display */}
              {/* Idea: Utilize callback function to slowly display each file and their result */}
              {/* Halt the display process if one is incorrect, resume once 30s has passed */}
              <div className={"tw-flex tw-justify-around tw-mt-16"}>
                {this.state.files.map((file, index) => (
                  <File key={index} data={file} />
                ))}
              </div>
              {/* Countdown component w/ message */}
              {/* When countdown component is not null, it will be rendered */}
              {this.state.countdownComponent}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Simulation;
