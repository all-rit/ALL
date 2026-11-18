import React, { useState, useContext } from "react";
import PropTypes, { func } from "prop-types";
import ExerciseStateContext from "../Lab17Context";

function ScoreHandler (currentStage) {
    const {tasks = {},} = useContext(ExerciseStateContext) || {};
    
    const [submittedAnswers, setSubmittedAnswers] = useState([]);
    //Update submittedAnswers when a task is submitted (Move into function??)
    if(tasks && tasks !== submittedAnswers){
        setSubmittedAnswers(tasks);
    }

    const finalAnswers = [];
    const stageScore = 0;
    const scoreBonus = 0;

    function getFinalAnswers(){
        for (let i = submittedAnswers.length - 1; i >= 0; i--) {
            const currentTask = submittedAnswers[i];
            const exists = finalAnswers.some(item => task.id === currentTask.id);
            
            if (!exists) {
                finalAnswers.push(currentTask);
            }
        }
    }

    function calculateBonus(streak) {
        scoreBonus = 10*streak;
        //Add randomizing
    }

    function findStreaks() {
        // for(i = 0; i < length(currentStage.stageTasks); i++){
        //     // Object.values(tasks).at(-1);
        //     //This checks the last occurance of a task (works for a list of ALL task entries)
        //     finalAnswers.push(submittedAnswers.findLast(task => task.taskid == i.taskid));
        // }
        streak = 0;
        finalAnswers.forEach((task) => {
            if(task.isCorrect){
                stageScore += task.points;
                streak++;
            } else {
                streak = 0 ;
            }
        });
        if(streak > 1){
            calculateBonus(streak);
        }
    }
}

// ScoreHandler.propTypes ={
//     currentStage: PropTypes.object,
// }

export default ScoreHandler;