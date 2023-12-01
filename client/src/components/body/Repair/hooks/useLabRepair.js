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
  const [repairComplete, setIsComplete] = useState(false);
  const [error, setError] = useState(false)
  /**
   * checkInputValid(): is a function that is intended on handling the logic to
   * ensure that you can check if user inputted strings are valid before letting them
   * them complete their update to their repair
   */
  const checkInputValid = () => {
    let localValidArray = [...isInputValid];
    let currentRepairState = [...exercisePromptsState];
    currentRepairState.forEach((value, index) => {
      const regex = new RegExp(value.validate_expression);
      // Use regex to validate the entered string matches the correct date form
      const result =
        regex.test(value.userInput) &&
        value.userInput === value.correct_expression;
      console.log(value.userInput === value.correct_expression);
      localValidArray.splice(index, 1, result);
    });
    setIsInputValid(localValidArray);
    localValidArray.every((v) => v === true)
      ? setIsComplete(true)
      : setIsComplete(false);
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
      const updatedState = previous.map((dateRepair) =>
        dateRepair.id === dataId
          ? {
            ...dateRepair,
            userInput: newValue,
          }
          : dateRepair
      );
      updatedState.forEach((value, index) => {
        handleError(index, value.userInput);
      });
      return updatedState;
    });
  };

  const handleError = (id, value) => {
    const element = exercisePromptsState.find((element) => element.id === id);
    if (element && value !== element.correct_expression) {
      setError((prevState) => ({
        ...prevState,
        [id]: true,
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }
    return error;
  };

  const isRepairComplete = (exercisePromptsState, isInputValid) => {
    return (
      isInputValid.every((valid) => valid) && exercisePromptsState.length > 0
    );
  };

  return {
    data: {
      repairComplete,
      exercisePromptsState,
      isInputValid,
    },
    functions: {
      checkInputValid,
      setExercisePromptsState,
      handleUserInputChange,
      handleError,
      isRepairComplete,
    },
  };
};
export default useLabRepair;
