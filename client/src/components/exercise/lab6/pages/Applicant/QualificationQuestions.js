import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import Quiz from "../../../../quiz/components/Quiz";


const QualificationQuestions = [
  
        {
            question: "How many jobs have you held?",
            answers: [
                {
                    val:1,
                    content:"0-1"
                },
                {
                    val:0,
                    content: "2-3"
                },
                {
                    val:0,
                    content: "4-5"
                },
                {
                    val:0,
                    content: "5+"
                }
            ],
            multiChoice: false
        },
        {
            question: "How old are you?",
            answers: [
                {
                    val:0,
                    content:"18-29"
                },
                {
                    val:0,
                    content: "30-39"
                },
                {
                    val:0,
                    content: "40-49"
                },
                {
                    val:1,
                    content: "50+"
                }
            ],
            multiChoice: false
        },
        {
            question: "What is your GPA range?",
            answers: [
                {
                    val:0,
                    content:"2.0 - 2.5"
                },
                {
                    val:0,
                    content: "2.6 - 3.0"
                },
                {
                    val:1,
                    content: "3.1 - 3.5"
                },
                {
                    val:0,
                    content: "3.6 - 4.0"
                }
            ],
            multiChoice: false
        },
        {
            question: "What kind of pay range are you looking to receive?",
            answers: [
                {
                    val:0,
                    content: "$15.00/hr"
                },
                {
                    val:0,
                    content:"$18.00/hr"
                },
                {
                    val:1,
                    content: "$19.00/hr"
                },
                {
                    val:0,
                    content: "$22.00/hr"
                },
               
            ],
            multiChoice: false
        },
        {
            question: "How many hours can you work per week?",
            answers: [
                {
                    val:1,
                    content:"1- 10"
                },
                {
                    val:0,
                    content: "11 - 20"
                },
                {
                    val:0,
                    content: "21 - 30"
                },
                {
                    val:0,
                    content: "31 - 40"
                }
            ],
            multiChoice: false
        },
        
    ];
    
    export default QualificationQuestions;



// const QualificationQuestions = (props) =>{
//     const {actions} = props;

//     useEffect(()=>{
//         actions.updateState(EXERCISE_PLAYING);
//     },[actions]);

//     const handleContinue = () =>{
//         navigate("/Lab6/Exercise/AnalyzeData");
//     }

//     const questions = [
//         {
//             val: 0,
//             content: "Gender"
//         },
//         {
//             val: 0,
//             content: "Years of Experience"
//         },
//         {
//             val: 0,
//             content: "Facial hair"
//         },
//         {
//             val: 1,
//             content: "Age"
//         },
      

//     ];

//     return(
//         <div className="center-div">
//             <h2 class="playthrough__title">Qualification Questions:</h2>

//             <Quiz
//                     answer={""}
//                     answerOptions={questions}
//                     questionId={1}
//                     question={"Which of these attributes do you think that the AI was looking for in this exercise in order to deny someone?"}
//                     questionTotal={1}
//                     onAnswerSelected={()=>{}}
//                     nextQuestion={()=>{}}
//                     disable={false}
//                     multiChoice = {false}
//             />

//             <button
//                 className="btn btn-primary text-black btn-xl text-uppercase "
//                 onClick = {handleContinue}
//                 key="confirm"
//             >
//                 Finished
//             </button>
//       </div>
//     );
// }

// export default QualificationQuestions;
