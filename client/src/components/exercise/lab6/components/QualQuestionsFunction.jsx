import { React, useState } from "react";
import { navigate } from "@reach/router";

//to use same functionality as quiz component
import QualQues from "../../../quiz/components/QualQues";
// import Result from "./Result";
//need substitute for result page, or can just implement a handle submit on this one

const QualQuestionsFunction = (props) => {
    const [questions, setQuestions] = useState({});
    const [answered, setanswered] = useState(false);
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
         >
        
         </QualQues>
            {/* <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                type="submit"
                key="confirm"
            >
                Submit
            </button> */}
         if (questionId == 4){
            this.setState({answered: true})
         }

         if (answered){
             <button
             className="btn btn-primary text-black btn-xl text-uppercase "
             onClick = {handleSubmit}
             key="confirm"
         >
             Confirm Selection
         </button>
         }
        </div>
        ); 
    };


    

export default QualQuestionsFunction;

