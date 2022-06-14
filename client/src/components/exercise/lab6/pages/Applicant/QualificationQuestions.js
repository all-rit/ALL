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

    const questions = [

        
        {
            val: 0,
            content: "Male"
        },
        {
            val: 0,
            content: "Female"
        },
        {
            val: 0,
            content: "Non-binary"
        }
    ];
    const questions2 = [
        {
            val: 0,
            content: "0"
        },
        {
            val: 0,
            content: "1-4"
        },
        {
            val: 0,
            content: "5-10"
        },
        {
            val: 0,
            content: "10+"
        },
    ];
    const questions3 = [
        {
            val: 0,
            content: "full-time"
        },
        {
            val: 0,
            content: "part-time"
        },
        {
            val: 0,
            content: "weekdays"
        },
        {
            val: 0,
            content: "weekends"
        },
    ];
    const questions4 = [
        {
            val: 0,
            content: "40K - 42.5K"
        },
        {
            val: 0,
            content: "42.6K - 45K"
        },
        {
            val: 0,
            content: "45.1K - 47.5K"
        },
        {
            val: 0,
            content: "47.6 - 50K"
        },
    ];
    const questions5 = [
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

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Qualification Questions:</h2>

        {/*They are each their own quiz, which is why the "Next Question button is not working" */}
            <Quiz
                    answer={""}
                    answerOptions={questions}
                    questionId={1}
                    question={"What gender to you identify as?"}
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
                    question={"What is your availability?"}
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
                    question={"What is your expected salary?"}
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
                    question={"What is your age?"}
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
