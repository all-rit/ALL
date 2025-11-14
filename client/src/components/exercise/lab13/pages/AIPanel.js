import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import AIChatBot from "../components/AIChatBot";

const AIPanel = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/HaloExplination");
  };

  const questions = [
    { id: 1, text: "Question1" },
    { id: 2, text: "Question2" },
    { id: 3, text: "Question3" },
  ];

  const answers = [
    { id: 1, text: "Answer1" },
    { id: 2, text: "Answer2" },
    { id: 3, text: "Answer3" },
  ];

  return (
    <div>
      <AIChatBot userQuestions={questions} fixedAIResponse={answers} />
      AI Panel Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default AIPanel;
