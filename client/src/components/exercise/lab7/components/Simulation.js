import React, { useEffect, useState } from "react";
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
  NO_DELAY,
  OPEN_FILE,
  READ_TIME,
  ROUND_LIMIT,
  SCORE_MAP,
  THREAT_LEVEL_TEXT,
  THREAT_MAX,
} from "../../../../constants/lab7";
import { navigate } from "@reach/router";
import { generateList } from "./data/files";
import File from "./File";
import RepairService from "../../../../services/lab7/RepairService";
import MessageModal from "./MessageModal";
import { useLab7StateContext } from "src/reducers/lab7/Lab7Context";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * Represents a simulation component.
 * @returns {JSX.Element} The simulation component.
 */
const Simulation = () => {
  const { state, actions } = useLab7StateContext();
  const { roundNumber, intrusions, incorrect, score, protectedNum } = state;
  const { state: mainState, actions: mainActions } = useMainStateContext();
  const { user } = mainState.main;

  const [files, setFiles] = useState([]);
  const [counter, setCounter] = useState(-1);

  useEffect(() => {
    mainActions.updateUserState(EXERCISE_PLAYING);
    startSimulation();
  }, []);

  useEffect(() => {
    if (counter >= 0) {
      console.log(state);
      if (counter < files.length) {
        switch (files[counter].result) {
          case FILE_PROTECTED:
            handleProtected();
            break;
          case FILE_INTRUSION:
            handleIntrusion();
            break;
          case FILE_INCORRECT:
            handleIncorrect();
            break;
          default:
            break;
        }
        actions.incrementScore(SCORE_MAP[files[counter].result]);
      } else {
        const result = handlePerfectScore();
        setTimeout(
          () => startRound(),
          result ? READ_TIME + DELAY_TIME : NO_DELAY
        );
      }
    }
  }, [counter]); // Only re-run the effect if counter changes

  /**
   * Starts the simulation.
   */
  const startSimulation = () => {
    startRound();
  };

  /**
   * Starts a new round of the simulation.
   */
  const startRound = () => {
    if (roundNumber < ROUND_LIMIT) {
      const threatLvl = randomizeThreat();
      actions.startNewRound();
      const fileList = generateFileList(threatLvl);
      setFiles(fileList);
      setTimeout(() => setCounter(0), DELAY_TIME);
      actions.addResults({ files: fileList, threatLvl });
    } else {
      UserLabService.complete_exercise(LAB_ID);
      if (user?.firstname !== null && user !== null) {
        UserLabService.user_complete_exercise(user.userid, LAB_ID);
      }
      if (state.repairId !== null)
        RepairService.updateReport(state.repairId, formatReport());
      navigate("/Lab7/Exercise/SimulationSummary");
    }
  };

  /**
   * Formats the report based on the results.
   * @returns {Array} An array of objects containing threat level, number of intrusions, number of protected files, and number of incorrect files.
   */
  const formatReport = () => {
    return state.results.map(({ threatLvl, files }) => {
      return {
        threatLvl,
        intrusions: files.filter((file) => file.result === FILE_INTRUSION)
          .length,
        protectedNum: files.filter((file) => file.result === FILE_PROTECTED)
          .length,
        incorrect: files.filter((file) => file.result === FILE_INCORRECT)
          .length,
      };
    });
  };

  /**
   * Generates a random threat level and updates it using the actions.updateThreatLevel function.
   * @returns {number} The generated threat level.
   */
  const randomizeThreat = () => {
    const threatLvl = Math.floor(Math.random() * THREAT_MAX) + 1;
    actions.updateThreatLevel(threatLvl);
    return threatLvl;
  };

  /**
   * Makes a decision based on the threat level and file.
   * @param {number} threatLvl - The threat level.
   * @param {string} file - The file.
   * @returns {*} The result of the decision.
   */
  const makeDecision = (threatLvl, file) => {
    const makeDecisionFunction =
      actions.makeDecision ?? defaultMakeDecision.bind(this);
    return makeDecisionFunction(threatLvl, file);
  };

  /**
   * Makes a decision based on the threat level and file sensitivity level.
   * @param {number} threatLvl - The threat level.
   * @param {object} file - The file object.
   * @returns {string} - The decision (LOCKED_FILE or OPEN_FILE).
   */
  const defaultMakeDecision = (threatLvl, file) => {
    return threatLvl >= file.sensitivityLevel ? LOCKED_FILE : OPEN_FILE;
  };

  /**
   * Generates a list of files with their corresponding decisions and results based on the threat level.
   * @param {number} threatLvl - The threat level.
   * @returns {Array} - The list of files with decisions and results.
   */
  const generateFileList = (threatLvl) => {
    return generateList().map((file) => {
      const decision = makeDecision(threatLvl, file);
      return {
        ...file,
        decision,
        result: evaluateAIDecision(file, decision, threatLvl),
      };
    });
  };

  /**
   * Evaluates the AI decision based on the file, decision, and threat level.
   * @param {Object} file - The file object containing the sensitivity level.
   * @param {string} decision - The decision made by the AI.
   * @param {number} threatLvl - The threat level.
   * @returns {string} - The evaluation result.
   */
  const evaluateAIDecision = (file, decision, threatLvl) => {
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

  /**
   * Handles the countdown component.
   *
   * @param {Array} files - The files to be set.
   * @param {string} message - The message to be set.
   * @param {number} [delay=DELAY_TIME] - The delay time in milliseconds.
   */
  const handleCountdownComponent = (files, message, delay = DELAY_TIME) => {
    setFiles(files);

    setTimeout(() => {
      actions.setMessage(message);
      actions.setModal(true);
    }, delay);

    setTimeout(() => {
      actions.setModal(false);
    }, READ_TIME + delay);
  };

  /**
   * Handles the logic for determining if the score is perfect.
   * @returns {boolean} Returns true if the score is perfect, otherwise false.
   */
  const handlePerfectScore = () => {
    const filteredFiles = files.filter(
      (file) => file.result === FILE_PROTECTED,
    );
    if (filteredFiles.length === files.length) {
      actions.incrementScore(SCORE_MAP.PERFECT_SCORE);
      handleCountdownComponent(files, MESSAGES.Perfect, NO_DELAY);
      return true;
    }
    return false;
  };

  /**
   * Handles the protected action.
   */
  const handleProtected = () => {
    files[counter].report = AI_CORRECT;
    setFiles(files);
    actions.incrementProtected();
    incrementCounter();
  };

  /**
   * Handles an intrusion event.
   */
  const handleIntrusion = () => {
    files[counter].report = AI_INCORRECT;
    files[counter].message = MESSAGES[files[counter].content];
    actions.incrementIntrusions();
    handleCountdownComponent(files, files[counter].message);
    incrementCounter(READ_TIME + DELAY_TIME + DELAY_TIME);
  };

  /**
   * Handles the incorrect action in the simulation.
   */
  const handleIncorrect = () => {
    files[counter].report = AI_INCORRECT;
    setFiles(files);
    actions.incrementIncorrect();
    incrementCounter();
  };

  /**
   * Increments the counter by 1 after a specified delay.
   * @param {number} [delay=DELAY_TIME] - The delay in milliseconds before incrementing the counter.
   */
  const incrementCounter = (delay = DELAY_TIME) => {
    setTimeout(() => setCounter(counter + 1), delay);
  };

  return (
    <>
      <MessageModal />
      <div className="">
        {/* Header */}
        <div className={"tw-flex tw-justify-between"}>
          {/* Round Tracker */}
          <div>
            <h4 className="tw-font-bold">
              Round {roundNumber} of {ROUND_LIMIT}
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
              <li>{intrusions}</li>
              <li>{protectedNum}</li>
              <li>{incorrect}</li>
              <li>{score}</li>
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
              {THREAT_LEVEL_TEXT[state.threatLvl]} threat detected!
            </h1>
          </div>
          {/* File Display */}
          <div className={"tw-flex tw-justify-around tw-mt-16"}>
            {files.map((file, index) => (
              <File key={index} data={file} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Simulation;
