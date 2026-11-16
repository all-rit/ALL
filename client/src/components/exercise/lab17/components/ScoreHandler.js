import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ExerciseStateContext from "../Lab17Context";
import { func } from "prop-types";

const ScoreHandler = (currentStage) => {
    const { state } = ExerciseStateContext();
    // const [currentStage, setCurrentStage] = useState(props.currentStage);
    const submittedAnswers = [];

    useEffect(() => {
        setCurrentStage(props.currentStage);
        getScore();
    }, []);

    function storeSubmittedAnswer(x) {
        const storeObj = {
            taskid:"id",
            category: "cat", 
            answer: "ans",
            points: 1,
            isCorrect: true,
        };

        submittedAnswers.push(storeObj);
        console.log(submittedAnswers);
    }

    // async function getScore() {
    //     try {
    //     const response = await labService.getLabQuiz(props.labId);
    //     const { quiz } = response[0];
    //     const quizAnswers = quiz[currentQuestionCursor].answers;
    //     props.setQuestions(quiz);
    //     setAnswerOption(quizAnswers);
    //     } catch (error) {
    //     console.error(error);
    //     }
    // }
}

// ScoreHandler.propTypes ={
//     currentStage: PropTypes.object,
// }

export default ScoreHandler;