/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import QuestionsHandler from "../../components/QuestionsHandler";
import ExerciseService from "../../../../../services/lab6/ExerciseService";

function QualificationQuestions(props) {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleContinue = (answers) => {
    ExerciseService.submitQualQuestions(answers);
    navigate("/Lab6/Exercise/AnalyzeData");
  };

  const qualQuestionsData = [
    {
      question: "What gender do you identify as?",
      answers: [
        {
          val: 0,
          type: "0",
          content: "Male",
        },
        {
          val: 0,
          type: "1",
          content: "Female",
        },
        {
          val: 0,
          type: "2",
          content: "Non-binary",
        },
        {
          val: 0,
          type: "3",
          content: "Prefer not to say",
        },
      ],
      multiChoice: false,
    },
    {
      question: "How many years of experience do you have?",
      answers: [
        {
          val: 0,
          type: "0",
          content: "0",
        },
        {
          val: 0,
          type: "1",
          content: "1-4",
        },
        {
          val: 0,
          type: "2",
          content: "5-10",
        },
        {
          val: 0,
          type: "3",
          content: "10+",
        },
      ],
      multiChoice: false,
    },
    {
      question: "What is your availability?",
      answers: [
        {
          val: 0,
          type: "0",
          content: "Full-time",
        },
        {
          val: 0,
          type: "1",
          content: "Part-time",
        }
      ],
      multiChoice: false,
    },
    {
      question: "What is your expected hourly",
      answers: [
        {
          val: 0,
          type: "0",
          content: "$15-$20/hr",
        },
        {
          val: 0,
          type: "1",
          content: "$21-$25/hr",
        },
        {
          val: 0,
          type: "2",
          content: "$26-$30/hr",
        },
        {
          val: 0,
          type: "3",
          content: "$31-$35/hr",
        },
      ],
      multiChoice: false,
    },
    {
      question: "What is your age?",
      answers: [
        {
          val: 0,
          type: "0",
          content: "<18",
        },
        {
          val: 0,
          type: "1",
          content: "18-25",
        },
        {
          val: 0,
          type: "2",
          content: "26-45",
        },
        {
          val: 0,
          type: "3",
          content: "46-64",
        },
        {
          val: 0,
          type: "4",
          content: "65+",
        },
      ],
      multiChoice: false,
    },
  ];

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Qualification Questions</h2>

      <QuestionsHandler
        questions={qualQuestionsData}
        handleContinue={handleContinue}
      />
    </div>
  );
}

export default QualificationQuestions;
