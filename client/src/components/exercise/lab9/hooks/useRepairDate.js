/* eslint-disable no-unused-vars */
import { useState } from "react";

const dates = [
  {
    id: 0,
    userInput: "",
    correct: "MM-DD-YY",
  },
  {
    id: 1,
    userInput: "",
    correct: "MM-DD-YY",
  },
];

const useRepairDate = ({ user }) => {
  const [exercisePromptsState, setExercisePromptsState] = useState(dates);
  const [isInputValid, setIsInputValid] = useState(
    new Array(dates.length).fill(false)
  );
  const [userError, setUserError] = useState();

  return;
};
export default useRepairDate;
