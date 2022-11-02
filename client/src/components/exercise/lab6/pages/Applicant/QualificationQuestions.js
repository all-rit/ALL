import React, {useEffect } from "react";
import PropTypes from "prop-types";
import Question from "../../components/Question";
import QuestionCount from "../../components/QuestionCount";
import RadioOption from "../../components/RadioOption";
 import { navigate } from "@reach/router";
// import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
// import qqjson from "../../components/QualQuesData.js";

// import Quiz from "../../../../quiz/components/Quiz";

function QualificationQuestions(props) {
    function renderRadioOptions(key) {
        return (
            <RadioOption
            key={key.type}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
            />
        );
    }




    const handleContinue = () =>{
        navigate("/Lab6/Exercise/AnalyzeData");
    }

    // const qualificationquestions = {...qqjson};

    return (
        <div className="quiz container shadow" key={props.questionId}>
          <h2 class="playthrough_title">QualificationQuestions:</h2>
          <div>
            <h3>
                This is to be displayed here!
            </h3>

            <button
                className="btn btn-primary text-black btn-xl text-uppercase"
                onClick= {handleContinue}
                key="confirm"
            >
                Finished
            </button>
            </div>
            </div>
        
      );
    }

QualificationQuestions.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOption: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
};


export default QualificationQuestions;
