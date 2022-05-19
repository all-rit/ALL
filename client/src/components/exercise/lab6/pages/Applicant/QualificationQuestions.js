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
    const questions3 = [
        {
            val: 0,
            content: "<18"
        },
        {
            val: 0,
            content: "18-25"
        },
        {
            val: 0,
            content: "25-45"
        },
        {
            val: 0,
            content: "45-65"
        },
        {
            val: 0,
            content: "65+"
        },
    ];
    const questions4 = [
        {
            val: 0,
            content: "Computer Science"
        },
        {
            val: 0,
            content: "Business"
        },
        {
            val: 0,
            content: "Communications"
        },
        {
            val: 0,
            content: "Other - if other, explain"
        },
    ];
    const questions5 = [
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
            content: "4-5"
        },
        {
            val: 0,
            content: "6+"
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
            <Quiz
                    answer={""}
                    answerOptions={questions3}
                    questionId={3}
                    question={"What is your age?"}
                    questionTotal={5}
                    onAnswerSelected={()=>{}}
                    nextQuestion={()=>{}}
                    disable={false}
                    multiChoice = {false}
            />
            <Quiz
                    answer={""}
                    answerOptions={questions4}
                    questionId={4}
                    question={"What is your major/degree in?"}
                    questionTotal={5}
                    onAnswerSelected={()=>{}}
                    nextQuestion={()=>{}}
                    disable={false}
                    multiChoice = {false}
            />
            <Quiz
                    answer={""}
                    answerOptions={questions5}
                    questionId={5}
                    question={"How many jobs have you held since college graduation?"}
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
