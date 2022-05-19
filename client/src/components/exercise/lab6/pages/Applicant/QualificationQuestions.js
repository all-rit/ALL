import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import Quiz from "../../../../quiz/components/Quiz";

const QualificationQuestions = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
    },[actions]);

    const handleContinue = () =>{
        navigate("/Lab6/Exercise/AnalyzeData");
    }
//}
//    export default QualificationQuestions;



// const QualificationQuestions = (props) =>{
//     const {actions} = props;

//     useEffect(()=>{
//         actions.updateState(EXERCISE_PLAYING);
//     },[actions]);

//     const handleContinue = () =>{
//         navigate("/Lab6/Exercise/AnalyzeData");
//     }

    const questions = [
        {
            val: 0,
            content: "full-time"
        },
        {
            val: 0,
            content: "part-time"
        },
    ];
    const questions2 = [
        {
            val: 0,
            content: "0"
        },
        {
            val: 0,
            content: "1-3"
        },
        {
            val: 0,
            content: "4-10"
        },
        {
            val: 0,
            content: "10+"
        },
    ];

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Qualification Questions:</h2>

            <Quiz
                    answer={""}
                    answerOptions={questions}
                    questionId={1}
                    question={"Where you looking to work full-time or part-time?"}
                    questionTotal={5}
                    onAnswerSelected={()=>{}}
                    nextQuestion={()=>{}}
                    disable={false}
                    multiChoice = {false}
            />
            <Quiz
                    answer={""}
                    answerOptions={questions2}
                    questionId={2}
                    question={"How many years of experience do you have?"}
                    questionTotal={5}
                    onAnswerSelected={()=>{}}
                    nextQuestion={()=>{}}
                    disable={false}
                    multiChoice = {false}
            />

            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleContinue}
                key="confirm"
            >
                Finished
            </button>
      </div>
    );
}

export default QualificationQuestions;
