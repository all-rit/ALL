import { React, useState } from "react";
import { navigate } from "@reach/router";

//to use same functionality as quiz component
import QualQues from "../../../quiz/components/QualQues";
// import Result from "./Result";
//need substitute for result page, or can just implement a handle submit on this one

const QualQuestionsHandler = (props) => {
    const [questions, setQuestions] = useState({});
    let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
    const [radioOption, setRadioOption] = useState(questions[currentQuestionCursor].answers);
    //this constant need to come into play with a handle submit
    let [disableNext, setDisableNext] = useState(true);

    function handleNext() {
        if (currentQuestionCursor < questions.length) {
            let updateCursor = currentQuestionCursor + 1;
            setCurrentQuestionCursor(updateCursor);
            setRadioOption(questions[updateCursor].answers);
            setDisableNext(true);
        }
    }
   
    // const handleSubmit = () =>{
    //     navigate("/Lab6/Exercise/AnalyzeData");
    // }

    function selectAnswer(e) {
        const answerValue = e.target.value;
        let tempSelectedAnswers;
        console.log("Selected Answer: " + answerValue);
        console.log(questions[currentQuestionCursor].multiChoice);
        tempSelectedAnswers = [...selectedAnswers];
        tempSelectedAnswers[currentQuestionCursor] = answerValue;
        console.log("Recorded answers: " + tempSelectedAnswers);
        setDisableNext(false);
    }

    return (
    <div>
        {!quizCompleted ? (
        <Quiz
          answer={""}
          radioOptions={radioOption}
          disable={disableNext}
          nextQuestion={handleNext}
          onAnswerSelected={selectAnswer}
          onComplete={onComplete}
          questionId={updateCursor}
          question={questions[currentQuestionCursor].question}
          questionTotal={questions.length}
         >
         </Quiz>
        ) : (
            <div>

            </div>

        )}</div>
    )
}
    

export default QualQuestionsHandler;

