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
    {
      id: 1,
      text: "Question1: How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
    },
    {
      id: 2,
      text: "A farmer went to a market and bought a wolf, a goat, and a cabbage. On his way home, the farmer came to the bank of a river and rented a boat. But crossing the river by boat, the farmer could carry only himself and a single one of his purchases: the wolf, the goat, or the cabbage. If left unattended together, the wolf would eat the goat, or the goat would eat the cabbage. The farmer’s challenge was to carry himself and his purchases to the far bank of the river, leaving each purchase intact. How did he do it?",
    },
    { id: 3, text: "Question3" },
  ];

  const answers = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
    {
      id: 2,
      text: "Loreum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
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
