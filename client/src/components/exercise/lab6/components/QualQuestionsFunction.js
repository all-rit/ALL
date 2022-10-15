import { React, useState } from "react";
import QualQues from "../../../quiz/components/QualQues";
import Result from "./Result";
//need substitute for result page, or can just implement a handle submit on this one

const QualQuestionsFunction = (props) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState({});
    const [questionsAnswered, setQuestionsAnswered] = useState(false)
    //this constant need to come into play with a handle submit

    const handleSubmit = () =>{
        navigate("/Lab6/Exercise/AnalyzeData");
    }

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

         if (questionId == 4){
            this.setState({questionsAnswered: true})
         }

         if (questionsAnswered){
            button = <Submit onClick={this.handleSubmit}/>
         }

            {/* <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                type="submit"
                key="confirm"
            >
                Submit
            </button> */}
        </div>
        ); 
    };


    

export default QualQuestionsFunction;

