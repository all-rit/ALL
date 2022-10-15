import { React, useState } from "react";
import QualQues from "../../../quiz/components/QualQues";
import Result from "./Result";
//need substitute for result page, or can just implement a handle submit on this one

const QualQuestionsFunction = (props) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState({});
    const [questionsAnswered, setQuestionsAnswered] = useState(false)
    //this constant need to come into play with a handle submit


    return (
    <div>
        <QualQues
          answer={[]}
          answerOptions={[
            {
              val: 0,
              content: "",
            },
          ]}
          questionId={[]}
          question={""}
          questionTotal={0}
          onAnswerSelected={false}
          nextQuestion={""}
          disable={() => {}}
          multiChoice={() => {}}
         ></QualQues>
        </div>
        ); 
    };
    

export default QualQuestionsFunction;



    

