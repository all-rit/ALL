import React, { Component } from "react";
import ExerciseService from '../../../../services/lab7/ExerciseService';
import UserLabService from "../../../../services/UserLabService";
import Files from "./Files";
import File from "./File";
import AutoSysAI from './AutoSysAI';
import Message from "./Message";
import ScoreTally from "./ScoreTally"
import RoundCounter from "./RoundCounter";
import SimInstructions from './SimInstructions';
import Timer from "./Timer";
import '../../../../assets/stylesheets/components/Simulation.scss';

import {
    EXERCISE_PLAYING,
    EXERCISE_ENDED,
    EXERCISE_IDLE,
    AI_CORRECT,
    AI_INCORRECT,
    OPEN_FILE,
    LOCKED_FILE,
    FILE_INTRUSION,
    FILE_INCORRECT,
    FILE_PROTECTED,
    LAB_ID,
    DELAY_TIME,
    READ_TIME,
    FILE_DEFAULT_VALUES,
    THREAT_MAX
} from "../../../../constants/lab7";

class Simulation extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     roundNumber: 0
        // }
    }

    calculatePercentage(time) {
        const percentage = time / (30 * 1000 / 10) * 100;
        return percentage;
    }

    startRound() {
        const { data, handlers } = this.props;
        data.roundNumber++;
        handlers.startNewRound();
        handlers.resetDelayTimer();
        handlers.resetReadTimer();
        this.randomizeThreat();
    }

    startSimulation() {
        this.startRound();
        const { data, handlers, user } = this.props;
        handlers.updateState(EXERCISE_PLAYING);

        if (data.roundNumber === 0) {
            ExerciseService.createSimulation(data.plays);
        }
        else if (data.roundNumber === 10) {
            handlers.updateState(EXERCISE_ENDED);
            UserLabService.complete_exercise(LAB_ID);
            if (user?.firstname !== null && user !== null) {
                UserLabService.user_complete_exercise(user.userid, LAB_ID)
            }
            ExerciseService.updateEndExerciseScore(data.score);
        }
        else {
            this.startSimulation();
        }
    }

    resetExercise() {
        const { data, handlers } = this.props;

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
        const { data, handlers } = this.props;
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
        const { data } = this.props;
        let score = 0;

        if (outcome) {
            score = 10;
        } else {
            score = 5;
        }
    }

    randomizeThreat() {
        const { data, handlers } = this.props;
        let num = 0;
        if (data.roundNumber === 0) {
            num = 0;
        } else {
            num = (Math.floor(Math.random() * THREAT_MAX) + 1);
        }
        // handlers.updateThreatLevel(num);
        return num;
    }

    render() {
        const { data, handlers, time } = this.props;
        const randThreatLvl = this.randomizeThreat()
        const countdownStyle = {
            width: this.calculatePercentage(time).toString() + '%'
        };

        return (
            <div className="simulation">
                <RoundCounter
                    roundNumber={data.roundNumber}
                />
                <ScoreTally
                // totalScore={data.totalScore}
                // intrusions={data.intrusions}
                // protectedTP={data.protectedTP}
                // incorrectFP={data.incorrectFP}
                />
                <SimInstructions
                    threatLvl={randThreatLvl}
                />
                <Files
                />
                {/* <AutoSysAI
                /> */}
                <Message
                // data={data.exposedContent}
                />
                {/* <Timer
                    visible={data.state === EXERCISE_PLAYING}
                    time={data.time}
                /> */}
                <div className="roundTimer">
                    <div className="roundCountdown" style={countdownStyle}>
                    </div>
                </div>
                <button
                    disabled={this.state === EXERCISE_IDLE}
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={this.startSimulation.bind(this)}
                    key="start"
                >
                    Start
                </button>
            </div>
        );
    }
}

export default Simulation;