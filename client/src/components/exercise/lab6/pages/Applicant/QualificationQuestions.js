/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import QuestionsHandler from "../../components/QuestionsHandler";


function QualificationQuestions(props) {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleContinue = () => {
    navigate("/Lab6/Exercise/AnalyzeData");
  };

  const qualQuestionsData = [
    {  
      "question": "What gender do you identify as?",
      "answers": [
          {
            "val": 0,
            "type": "0",
            "content": "Male"
          },
          {
            "val": 0,
            "type": "1",
            "content": "Female"
          },
          {
            "val": 0,
            "type": "2",
            "content": "Non-binary"
          },
          {
            "val": 0,
            "type": "3",
            "content": "Prefer not to say"
          }
        ],
        "multiChoice": false
      },
      {
        "question":"How many years of experience do you have?",
        "answers": [
            {
                "val": 0,
                "type": "0",
              "content": "0"
            },
            {
                "val": 0,
                "type": "1",
              "content": "1-4"
            },
            {
                "val": 0,
                "type": "2",
              "content": "5-10"
            },
            {
            "val": 0,
            "type": "3",
            "content": "10+"
            }
        ],
        "multiChoice": false
      },
      {
        "question":"What is your availability?",
        "answers": [
            {
                "val": 0,
                "type": "0",
              "content": "Full-time (Weekdays and Weekends)"
            },
            {
                "val": 0,
                "type": "1",
              "content": "Full-time (Weekdays only)"
            },
            {
                "val": 0,
                "type": "2",
              "content": "Part-time (Weekdays only)"
            },
            {
                "val": 0,
                "type": "3",
              "content": "Part-time(Weekends only)"
            }
        ],
        "multiChoice": false
      },
      {
        "question": "What is your expected salary",
        "answers": [
          {
            "val": 0,
            "type": "0",
            "content": "40K - 42.5K"
          },
          {
            "val": 0,
            "type": "1",
            "content": "42.6K - 45K"
          },
          {
            "val": 0,
            "type": "2",
            "content": "45.1K - 47.5K"
          },
          {
            "val": 0,
            "type": "3",
            "content": "47.6-50K"
          }
      ],
      "multiChoice": false
    },
    {
      "question": "What is your age?",
      "answers": [
        {
            "val": 0,
            "type": "0",
          "content": "<18"
        },
        {
            "val": 0,
            "type": "1",
          "content": "18-25"
        },
        {
            "val": 0,
            "type": "2",
          "content": "26-45"
        },
        {
            "val": 0,
            "type": "3",
          "content": "46-64"
        },
        {
            "val": 0,
            "type": "4",
          "content": "65+"
        }
    ],
    "multiChoice": false
  }
];

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Qualification Questions</h2>
      
      <QuestionsHandler questions={qualQuestionsData} handleContinue={handleContinue}/>

    </div>
  );
}

export default QualificationQuestions;
