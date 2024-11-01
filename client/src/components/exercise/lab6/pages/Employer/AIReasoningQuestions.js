import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import QuestionsHandler from "../../components/QuestionsHandler";
import ExerciseService from "../../../../../services/lab6/ExerciseService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const AIReasoningQuestions = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

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
        isFinalQuiz={true}
        questions={aiReasoningData}
        handleContinue={handleContinue}
      />
    </div>
  );
};

export default AIReasoningQuestions;
