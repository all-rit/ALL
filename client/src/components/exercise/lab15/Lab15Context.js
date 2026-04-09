import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const ExerciseStateContext = createContext({
  exerciseState: "",
  setExerciseState: () => {},
  chatMessages: [],
  setChatMessages: () => {},
  promptScore: 0,
  setPromptScore: () => {},
  promptText: "",
  setPromptText: () => {},
});

export const ExerciseStateProvider = ({
  children,
  exerciseState,
  setExerciseState,
}) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [promptScore, setPromptScore] = useState(0);
  const [promptText, setPromptText] = useState("");

  return (
    <ExerciseStateContext.Provider
      value={{
        exerciseState,
        setExerciseState,
        chatMessages,
        setChatMessages,
        promptScore,
        setPromptScore,
        promptText,
        setPromptText,
      }}
    >
      {children}
    </ExerciseStateContext.Provider>
  );
};

ExerciseStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
  exerciseState: PropTypes.string.isRequired,
  setExerciseState: PropTypes.func.isRequired,
};

export const useLab15 = () => useContext(ExerciseStateContext);

export default ExerciseStateContext;
