/* eslint-disable react/prop-types */

import React, { Component } from "react";
import _ from "lodash";
import ExerciseService from "../../../../services/lab7/ExerciseService";
import UserLabService from "../../../../services/UserLabService";
import "../../../../assets/stylesheets/components/Simulation.scss";

import {
  AI_CORRECT,
  AI_INCORRECT,
  DELAY_TIME,
  FILE_INCORRECT,
  FILE_INTRUSION,
  FILE_PROTECTED,
  LAB_ID,
  LOCKED_FILE,
  MESSAGES,
  OPEN_FILE,
  READ_TIME,
  ROUND_LIMIT,
  SCORE_MAP,
  THREAT_LEVEL_TEXT,
  THREAT_MAX,
} from "../../../../constants/lab7";
import { navigate } from "@reach/router";
import { files } from "./data/files";
import Countdown from "react-countdown-now";
import ProgressBar from "./ProgressBar";
import File from "./File";
import { connect } from "react-redux";

class Simulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      message: "",
      countdownComponent: null,
      counter: -1,
    };
  }

  componentDidMount() {
    this.startSimulation();
  }

  startSimulation() {
    this.startRound();
  }

  /**
   * Logic handling the transition of rounds.
   *
   * As long as we have not reached the round limit, calculate a random threat level,
   * update the round number, generate a new list of files, update the states accordingly, and
   * store them for the summary report.
   *
   * Otherwise, transition to the simulation summary.
   */
  startRound() {
    const { data, handlers, user } = this.props;
    if (data.roundNumber < ROUND_LIMIT) {
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

  /**
   * Calculates a random threat level for the round updates the state.
   *
   * @returns {number} random threat level
   */
  randomizeThreat() {
    const { handlers } = this.props;
    const threatLvl = Math.floor(Math.random() * THREAT_MAX) + 1;
    handlers.updateThreatLevel(threatLvl);
    return threatLvl;
  }

  makeDecision(threatLvl, file) {
    const makeDecisionFunction =
      this.props.makeDecision ?? this.defaultMakeDecision.bind(this);
    return makeDecisionFunction(threatLvl, file);
  }

  defaultMakeDecision(threatLvl, file) {
    const utility = threatLvl / file.sensitivityLevel;
    return utility >= 1 ? LOCKED_FILE : OPEN_FILE;
  }

  /**
   * Generate a list of random files from existing data.
   *
   * The utility and AIs decision is calculated. Results are added to the file object and the
   * file object is added to the list of files.
   *
   * @param threatLvl pre-calculated threat level of the round
   * @returns {(*&{result: string, decision: string})[]} a list of file objects
   */
  generateFileList(threatLvl) {
    return _.sampleSize(files, 5).map((file) => {
      const decision = this.makeDecision(threatLvl, file);
      return {
        ...file,
        decision,
        result: this.evaluateAIDecision(file, decision, threatLvl),
      };
    });
  }

  /**
   * Evaluates the AIs decision-making based on the utility equation.
   *
   * @param file current file being evaluated
   * @param decision AIs decision based on utility
   * @param threatLvl pre-calculated threat level of the round
   * @returns {string|string} `FILE_PROTECTED` | `FILE_INCORRECT` | `FILE_INTRUSION`
   */
  evaluateAIDecision(file, decision, threatLvl) {
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
  }

  /**
   * React method that is invoked whenever a state/prop is updated.
   *
   * @param prevProps values of props prior to update
   * @param prevState values of states prior to update
   * @param snapshot required for method signature
   */
  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
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
        /* End of round */
        const result = this.handlePerfectScore();
        setTimeout(() => this.startRound(), result ? READ_TIME : 0);
      }
    }
  }

  /**
   * Updates `files` and `countdownComponent` states. Invoked for when a message
   * needs to be displayed with progress bar.
   *
   * @param files array of file objects
   * @param message text to be displayed
   */
  handleCountdownComponent(files, message) {
    this.setState({
      files,
      message,
      countdownComponent: (
        <Countdown
          date={Date.now() + READ_TIME}
          renderer={this.countdownRenderCallback.bind(this)}
        />
      ),
    });
    /* Unmount countdownComponent and message after read time */
    setTimeout(
      () => this.setState({ countdownComponent: null, message: "" }),
      READ_TIME
    );
  }

  /**
   * Logic to award bonus points if all files for a round were correctly protected.
   *
   * @returns {boolean} whether the files of a round were perfectly protected
   */
  handlePerfectScore() {
    const { files } = this.state;
    const { handlers } = this.props;
    const filteredFiles = files.filter(
      (file) => file.result === FILE_PROTECTED
    );
    if (filteredFiles.length === files.length) {
      handlers.incrementScore(SCORE_MAP.PERFECT_SCORE);
      this.handleCountdownComponent(files, MESSAGES.Perfect);
      return true;
    }
    return false;
  }

  /**
   * Logic for when a file was correctly protected.
   */
  handleProtected() {
    const { handlers } = this.props;
    const { counter, files } = this.state;
    files[counter].report = AI_CORRECT;
    this.setState({ files });
    handlers.incrementProtected();
    this.incrementCounter();
  }

  /**
   * Logic for when the AIs decision-making resulted in an intrusion.
   */
  handleIntrusion() {
    const { handlers } = this.props;
    const { counter, files } = this.state;
    files[counter].report = AI_INCORRECT;
    files[counter].message = MESSAGES[files[counter].content];
    handlers.incrementIntrusions();
    this.handleCountdownComponent(files, files[counter].message);
    this.incrementCounter(READ_TIME);
  }

  /**
   * Logic for when the AIs decision-making was incorrect.
   */
  handleIncorrect() {
    const { handlers } = this.props;
    const { counter, files } = this.state;
    files[counter].report = AI_INCORRECT;
    this.setState({ files });
    handlers.incrementIncorrect();
    this.incrementCounter();
  }

  /**
   * Updates the pointer to the file array with a delay.
   *
   * @param delay specified ms delay for updating the counter
   */
  incrementCounter(delay = DELAY_TIME) {
    setTimeout(() => this.setState({ counter: this.state.counter + 1 }), delay);
  }

  /**
   * Callback method for a countdown. Used for progress bar.
   *
   * @param seconds time left on the countdown
   * @param completed whether the countdown is complete
   * @returns {JSX.Element} progress bar component
   */
  countdownRenderCallback({ seconds, completed }) {
    const { message } = this.state;
    if (completed) return <></>;
    else return <ProgressBar text={message} seconds={seconds} />;
  }

  render() {
    const { data } = this.props;
    return (
      <div className="simulation tw-mt-12">
        {/* Header */}
        <div className={"tw-flex tw-justify-between"}>
          {/* Round Tracker */}
          <div>
            <h4 className="tw-font-bold">
              Round {data.roundNumber} of {ROUND_LIMIT}
            </h4>
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
            className={"tw-flex tw-items-center tw-justify-center tw-w-full"}
          >
            <h1 className={"tw-font-bold tw-absolute tw-m-0 -tw-mt-16"}>
              {THREAT_LEVEL_TEXT[data.threatLvl]} threat detected!
            </h1>
          </div>
          {/* File Display */}
          <div className={"tw-flex tw-justify-around tw-mt-16"}>
            {this.state.files.map((file, index) => (
              <File key={index} data={file} />
            ))}
          </div>
          {/* Countdown component w/ message */}
          {/* When countdown component is not null, it will be rendered */}
          {this.state.countdownComponent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { makeDecision } = state.repair7;
  return { makeDecision };
};

export default connect(mapStateToProps)(Simulation);
