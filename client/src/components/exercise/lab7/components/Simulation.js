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
    }

    startRound() {
        const { data, handlers } = this.props;
        handlers.startNewRound();
        handlers.resetDelayTimer();
        handlers.resetReadTimer();
        this.randomizeFiles();
        this.randomizeThreat();
    }

    startSimulation() {
        const { data, handlers, user } = this.props;
        this.startRound();
        handlers.updateState(EXERCISE_PLAYING);

        if (data.roundNumber === 0) {
            ExerciseService.createExercise(data.plays);
        }
        else if (data.roundNumber === 10) {
            handlers.updateState(EXERCISE_ENDED);
            UserLabService.complete_exercise(LAB_ID);
            if (user?.firstname !== null && user !== null) {
                UserLabService.user_complete_exercise(user.userid, LAB_ID)
            }
            ExerciseService.updateEndExerciseScore(data.score);
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

    randomizeFiles() {
        // get 5 random files from dataset
    }

    randomizeThreat() {
        const { handlers } = this.props;
        const num = Math.floor(Math.random() * THREAT_MAX) + 1;
        handlers.updateThreatLevel(num);
    }

    render() {
        const { data, handlers } = this.props;

        return (
            <div className="simulation">
                <RoundCounter />
                <ScoreTally />
                <SimInstructions />
                <Files />
                <Message />
            </div>
        );
    }
}

export default Simulation;