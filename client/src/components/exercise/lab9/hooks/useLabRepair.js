import { useState } from "react";
/**
 * useLabRepair(): is one of the new custom hooks responsible for validating
 * user inputted info during the lab repair sections. This hook is intended to be
 * the single source of truth in managing and reading logic.
 * @returns {Object} containing data and functions to be passed to the
 * component it is using.
 */
const useLabRepair = () => {
  const [exercisePromptsState, setExercisePromptsState] = useState([]);
  const [isInputValid, setIsInputValid] = useState([]);
  const [repairCount, setRepairCount] = useState(0);
  /**
   * checkInputValid(): is a function that is intended on handling the logic to
   * ensure that you can check if user inputted strings are valid before letting them
   * them complete their update to their repair
   */
  const checkInputValid = () => {
    let localValidArray = [...isInputValid];
    let currentRepairState = [...exercisePromptsState];
    currentRepairState.forEach((value, index) => {
      const correctDateFormRegex = new RegExp(value.validate_expression);
      // Use regex to validate the entered string matches the correct date form
      if (
        correctDateFormRegex.test(value.userInput) &&
        value.userInput === value.validate_expression
      ) {
        // Passes, so we display true in the valid array
        localValidArray.splice(index, 1, true);
      } else {
        // Fails, so we keep the false value in the valid array
        localValidArray.splice(index, 1, false);
      }
    });
    setIsInputValid(localValidArray);
    console.warn(localValidArray);
    console.warn(exercisePromptsState);
    return localValidArray.every((v) => v === true);
  };
  /**
   * handleUserInputChange() is a function that is responsible for handling the
   * saving of user inputted data into the state of the exercise hook. This allows for
   * the information to be recorded and then can be manipulate however intended.
   * @param {*} dataId id of the particular input question field
   * @param {*} newValue the new assignable value to the state.
   */
  const handleUserInputChange = (dataId, newValue) => {
    setExercisePromptsState((previous) => {
      return previous.map((dateRepair) =>
        dateRepair.id === dataId
          ? {
              ...dateRepair,
              userInput: newValue,
            }
          : dateRepair
      );
    });
    console.log(newValue);
  };

  return {
    data: {
      exercisePromptsState,
      isInputValid,
      repairCount,
    },
    functions: {
      checkInputValid,
      setExercisePromptsState,
      handleUserInputChange,
      setIsInputValid,
      setRepairCount,
    },
  };
};
export default useLabRepair;
