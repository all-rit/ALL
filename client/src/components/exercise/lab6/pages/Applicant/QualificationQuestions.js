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
            content: "Gender"
        },
        {
            val: 0,
            content: "Years of Experience"
        },
        {
            val: 0,
            content: "Facial hair"
        },
        {
            val: 1,
            content: "Age"
        },
        {
            val: 1,
            content: "GPA"
        }

    ];

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Qualification Questions:</h2>

            <Quiz
                    answer={""}
                    answerOptions={questions}
                    questionId={1}
                    question={"Which of these attributes do you think that the AI was looking for in this exercise in order to deny someone?"}
                    questionTotal={1}
                    onAnswerSelected={()=>{}}
                    nextQuestion={()=>{}}
                    disable={false}
                    multiChoice = {true}
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
