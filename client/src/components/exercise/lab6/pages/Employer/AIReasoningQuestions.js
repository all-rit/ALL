/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import QuestionsHandler from "../../components/QuestionsHandler";
import ExerciseService from "../../../../../services/lab6/ExerciseService";

const AIReasoningQuestions = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleContinue = (answers) => {
    ExerciseService.submitAIReasoningQuestion(Array.from(answers[0]));
    navigate("/Lab6/Exercise/AIReasoning");
  };
  const aiReasoningData = [
    {
      question:
        "Which of these attributes do you think that the AI was looking for in this exercise in order to deny someone?",
      answers: [
        {
          val: 0,
          type: "0",
          content: "Gender",
        },
        {
          val: 0,
          type: "1",
          content: "Years of experience",
        },
        {
          val: 0,
          type: "2",
          content: "Availability",
        },
        {
          val: 0,
          type: "3",
          content: "Expected Pay",
        },
        {
          val: 0,
          type: "4",
          content: "Age",
        },
      ],
      multiChoice: true,
    },
  ];

  return (
    <div className="center-div">
      <h2 className="playthrough__title">AI Reasoning Survey</h2>

      <QuestionsHandler
        questions={aiReasoningData}
        handleContinue={handleContinue}
      />
    </div>
  );
};

export default AIReasoningQuestions;
