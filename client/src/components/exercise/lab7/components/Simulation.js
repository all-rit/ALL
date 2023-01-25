/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, {Component} from "react";
import _ from "lodash";
import ExerciseService from '../../../../services/lab7/ExerciseService';
import UserLabService from "../../../../services/UserLabService";
import '../../../../assets/stylesheets/components/Simulation.scss';

import {
    AI_CORRECT,
    AI_INCORRECT,
    DELAY_TIME,
    EXERCISE_ENDED,
    EXERCISE_IDLE,
    EXERCISE_PLAYING,
    LAB_ID,
    LOCKED_FILE,
    READ_TIME,
    THREAT_LEVEL_TEXT,
    THREAT_MAX
} from "../../../../constants/lab7";
import {navigate} from "@reach/router";
import {fileMockData} from "./mockData/fileMockData";
import OPEN from '../../../../assets/images/lab7/unlock.png';
import LOCKED from '../../../../assets/images/lab7/lock.png';
import Countdown from "react-countdown-now";
import Message from "./Message";

class Simulation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: this.generateFileList(),
            countdownComponent: null,
            counter: 0
        }
    }

    startRound() {
        const {data, handlers, user} = this.props;
        if (data.roundNumber + 1 <= 10) {
            this.randomizeThreat();
            handlers.startNewRound();
            setTimeout(() => {
                this.setState({counter: 1});
            }, DELAY_TIME);
            if (data.roundNumber !== 0) {
                this.setState({files: this.generateFileList()});
            }
        } else {
            handlers.updateState(EXERCISE_ENDED);
            UserLabService.complete_exercise(LAB_ID);
            if (user?.firstname !== null && user !== null) {
                UserLabService.user_complete_exercise(user.userid, LAB_ID)
            }
            ExerciseService.updateEndExerciseScore(data.score);
            navigate("/Lab7/Exercise/SimulationSummary");
        }
    }

    startSimulation() {
        const {handlers} = this.props;
        handlers.updateState(EXERCISE_PLAYING);
        this.startRound();
    }

    resetExercise() {
        const {data, handlers} = this.props;

        clearInterval(this.delayTimer);
        clearInterval(this.readTimer);

        handlers.addResult({
            score: data.score,
            intrusions: data.intrusions,
            protected: data.protected,
            incorrect: data.incorrect,
            aiResult: data.aiResult
        })
        handlers.reset();
    }

    validateAI(choice) {
        const {data, handlers} = this.props;
        const correct = choice === data.correctChoice;

        let score = data.score;
        if (correct) {
            score = score + this.calculateScore(correct);
            handlers.updateAIResults(choice);
            handlers.incrementProtected()
        } else {
            score = score - this.calculateScore(correct);
            handlers.updateAIResults(choice);
            //needs to account for if intrusion or incorrect
        }
        ExerciseService.createChoice(score, data.file, choice, correct);
    }

    calculateScore(outcome) {
        const {data} = this.props;
        let score = 0;
        //needs to account for if intrusion or incorrect
        if (outcome) {
            score = 10;
        } else {
            score = 5;
        }
        this.setState({score: data.score + score})
    }

    randomizeThreat() {
        const {handlers} = this.props;
        const threatLvl = Math.floor(Math.random() * THREAT_MAX) + 1;
        handlers.updateThreatLevel(threatLvl);
    }

    makeCorrectDecision(fileSensitivityLvl, threatLvl) {
        return (fileSensitivityLvl / threatLvl);
    }

    makeDecision(fileSensitivityLvl, threatLvl) {
        return (fileSensitivityLvl * 2 / threatLvl);
    }

    generateFileList = () => {
        const {data} = this.props;
        return _.sampleSize(fileMockData, 5).map((file) => {
            return ({
                ...file,
                expectedUtility: this.makeCorrectDecision(file.sensitivityLevel, data.threatLvl),
                actualUtility: this.makeDecision(file.sensitivityLevel, data.threatLvl)
            })
        });
    }

    calculatePercentage(seconds) {
        return ((seconds - 1) * 1000 / (READ_TIME - 1000)) * 100;
    }

    countdownRenderCallback = ({seconds, completed}) => {
        const {counter, files} = this.state;
        const {content} = files[counter - 1];
        if (completed) {
            return <></>;
        } else {
            return (
                <div className={"tw-mt-9"}>
                    <div className={"tw-mb-9"}>
                        <Message data={content}/>
                    </div>
                    <div>
                        <div style={{width: `${this.calculatePercentage(seconds)}%`}}
                             className={`tw-bg-[#7CB1FF] tw-rounded tw-py-3 tw-transition-all tw-ease-in-out tw-duration-500`}/>
                        <p className={"tw-font-bold tw-text-lg"}>{seconds - 1}</p>
                    </div>
                </div>
            );
        }
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        /* Counter was incremented */
        if (prevState.counter !== this.state.counter) {
            /* Displayed report for all files, start next round if within range */
            if (this.state.counter > this.state.files.length) {
                this.startRound();
            }
            /* Counter is within range of being incremented again */
            if (this.state.counter <= this.state.files.length) {
                const {counter, files} = this.state;
                /* Include AI logic here to update the system's correctness */
                /* Keep track using two counters. Can use the round tracker */
                /* LOGIC NEEDS WORK */
                const {fileSensitivityLvl} = files[counter - 1];
                const [expectedUtility, actualUtility] = [this.makeCorrectDecision(fileSensitivityLvl, this.props.data.threatLvl),
                    this.makeDecision(fileSensitivityLvl, this.props.data.threatLvl)]

                if (expectedUtility === actualUtility) {
                    files[counter - 1].report = AI_CORRECT;
                    setTimeout(() => {
                        this.setState({counter: counter + 1, files, countdownComponent: null})
                    }, DELAY_TIME);
                } else {
                    files[counter - 1].report = AI_INCORRECT;
                    this.setState({
                        files,
                        countdownComponent: <Countdown date={Date.now() + READ_TIME}
                                                       renderer={this.countdownRenderCallback}/>,
                    })
                    setTimeout(() => {
                        this.setState({countdownComponent: null})
                    }, READ_TIME)
                }
            }
        }
        /* Timeout set countdown component to null */
        if (prevState.countdownComponent && this.state.countdownComponent === null) {
            this.setState({counter: this.state.counter + 1});
        }
    }

    render() {
        const {data} = this.props;

        return (
            <div className="simulation">
                {data.state === EXERCISE_IDLE && (
                    <>
                        <h2 className={"bold"}>Click the Start button to begin the simulation</h2>
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
                                    <li>{data.score}</li>
                                    <li>{data.intrusions}</li>
                                    <li>{data.protected}</li>
                                    <li>{data.incorrect}</li>
                                </ul>
                            </div>
                        </div>
                        {/* Body */}
                        <div>
                            {/* Threat Message */}
                            <div className={"tw-flex tw-items-center tw-justify-center tw-w-full"}>
                                <h1 className={"tw-font-bold tw-absolute tw-m-0 -tw-mt-16"}>
                                    {THREAT_LEVEL_TEXT[data.threatLvl]} threat detected!
                                </h1>
                            </div>
                            {/* File Display */}
                            {/* Idea: Utilize callback function to slowly display each file and their result */}
                            {/* Halt the display process if one is incorrect, resume once 30s has passed */}
                            <div className={"tw-flex tw-justify-around tw-mt-16"}>
                                {this.state.files.map((file) => {
                                    return (
                                        <div key={file.fileName} className={"tw-flex tw-flex-col tw-items-center"}>
                                            <div className={"tw-space-y-1.5 file"}>
                                                <p className={"tw-font-bold"}>{file.fileName}</p>
                                                <img className={"tw-h-10 tw-w-10"}
                                                     src={file.accessStatus === LOCKED_FILE ? LOCKED : OPEN}
                                                     alt={`A .png image of ${file.accessStatus === LOCKED_FILE ? "a locked" : "an unlocked"} lock.`}/>
                                                <p className={"tw-italic"}>Sensitivity Level {file.sensitivityLevel}</p>
                                                <p className={"tw-font-bold"}>{file.content}</p>
                                            </div>
                                            {file.report !== undefined && (
                                                <div className={"tw-bg-[#DCDCDC] tw-mt-6 tw-px-10 tw-py-1.5"}>
                                                    <span
                                                        className={file.report === AI_CORRECT ? "tw-text-[#47E22E]" : "tw-text-[#FF0000]"}>{file.report}</span>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
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