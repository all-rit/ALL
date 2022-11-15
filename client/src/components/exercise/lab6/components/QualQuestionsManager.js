import { React, useState } from "react";
import { PropTypes } from "victory";
//to use same functionality as quiz component

import QualificationQuestionsC from "./QualificationQuestionsC";

// import Result from "./Result";
//need substitute for result page, or can just implement a handle submit on this one

let info = require('./QualQuesData');


/* Takes data from json file and should include functionality to go from from question to the next
with the corresponding answers */

/*Created option (answer) and question object*/
const QualQuestionsManager = (props) => {
    //currently unnecessary and should be used if other labs are being used
    // const [currentLabId, setCurrentLab] = useState(props.labId);
    const [questions, setQuestions] = useState(assignQualQuestions(props.labId));
    let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
    //this constant need to come into play with a handle submit
    const [questionsCompleted, setQuestionsCompleted] = useState(false);
    //Part 4 - answer object
    const [Option, setOption] = useState(questions[currentQuestionCursor].answers);
    let [disableNext, setDisableNext] = useState(true);

 
function assignQualQuestions(labId) {
    console.log(labId);
    return info;
}
  
    /*Part 6 - Functions used to to iterate the list of questions*/
    function handleNext() {
        if (currentQuestionCursor < questions.length) {
            let updateCursor = currentQuestionCursor + 1;
            setCurrentQuestionCursor(updateCursor);
            setOption(questions[updateCursor].answers);
            setDisableNext(true);
        }
    }
   
    // const handleSubmit = () =>{
    //     navigate("/Lab6/Exercise/AnalyzeData");
    // }

    function selectOption(e) {
        const answerValue = e.target.value;
        let tempSelectedAnswers;
        console.log("Selected Answer: " + answerValue);
        console.log(questions[currentQuestionCursor].multiChoice);
        tempSelectedAnswers = [...setOption];
        tempSelectedAnswers[currentQuestionCursor] = answerValue;
        console.log("Recorded answers: " + tempSelectedAnswers);
        setDisableNext(false);
    }

    return (
    <div>
        {!questionsCompleted ? (
        <QualificationQuestionsC
          answer={""}
          Options={Option}
          disable={disableNext}
          multiChoice={questions[currentQuestionCursor].multichoice}
          nextQuestion={handleNext}
          onAnswerSelected={selectOption}
        //   onComplete={onComplete}
          questionId={currentQuestionCursor + 1}
          question={questions[currentQuestionCursor].question}
          questionTotal={questions.length}
         >
         </QualificationQuestionsC>
        ) : (
            <div>

            </div>

        )}</div>
    )
    };
    
    QualQuestionsManager.propTypes = {
        labId: PropTypes.integer.isRequired
    };

    

export default QualQuestionsManager;

