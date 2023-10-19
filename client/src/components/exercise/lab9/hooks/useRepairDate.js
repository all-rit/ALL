/* eslint-disable no-unused-vars */
import { useState } from "react";

const dates = [
  {
    id: 0,
    userInput: "",
    correct: "MM-DD-YYYY",
    validate_expression: ""
  },
  {
    id: 1,
    userInput: "",
      correct: "YYYY-MM-DD",
    validate_expression: ""
  },
];

const useRepairDate = ({ user }) => {
  const [exercisePromptsState, setExercisePromptsState] = useState(dates);
  const [isInputValid, setIsInputValid] = useState(
    new Array(dates.length).fill(false)
  );
    const [userError, setUserError] = useState(false);

    const checkInputValid = () =>  {
        let error = false;
        let localValidArray = [...isInputValid];
        let currentRepairState = [...exercisePromptsState];
        currentRepairState.forEach((value, index) => {
            // use regex to validate the entered string is just characters and letters
            if (!RegExp(value.validate_expression).test(value.serInput)) {
                //fails so we need to display error
                error = true;
                localValidArray.splice(index, 1, true);
            }
        });
        return checkInputValid;
    }

    const handleUserInputChange = () => {

    }


    

  return;
};
export default useRepairDate;
