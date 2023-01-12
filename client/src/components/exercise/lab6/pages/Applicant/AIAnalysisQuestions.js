/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import QuestionsHandler from "../../components/QuestionsHandler";

const AIAnalysisQuestions = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  function checkValue(e) {
    var value = e.target.value;
    console.log("You selected " + value);
  }

  //changed so it doesn't skip phase 2
  const handleContinue = () => {
    navigate("/Lab6/Exercise/EmployerStart"); //How should we handle this (positive or negative)
  };

  const aiAnalysisData = [
    {  
      "question": "Which of these attributes do you think that the AI was looking for in this exercise in order to deny someone?",
      "answers": [
          {
            "val": 0,
            "type": "0",
            "content": "Gender"
          },
          {
            "val": 0,
            "type": "1",
            "content": "Years of experience"
          },
          {
            "val": 0,
            "type": "2",
            "content": "Availability"
          },
          {
            "val": 0,
            "type": "3",
            "content": "Salary"
          }
          ,
          {
            "val": 0,
            "type": "4",
            "content": "Age"
          }
        ],
        "multiChoice": true
      }
    ];

  return (
    <div className="center-div">
      <h2 className="playthrough__title">AI Analysis Survey</h2>
      
      <QuestionsHandler questions={aiAnalysisData} handleContinue={handleContinue}/>

    </div>
  );
};

export default AIAnalysisQuestions;