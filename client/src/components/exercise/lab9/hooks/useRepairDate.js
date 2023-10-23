/* eslint-disable no-unused-vars */
import { useState } from "react";
import { DateFormData } from "../../../../constants/lab9/DateFormData";

/**
 * usRepairDate(): is a custom hook to abstract the logic implementation for the
 * repair portion of the localization lab. This allows for conditional behavior of
 * initializing the custom behavior for validating and managing state during the
 * date repair portion of the lab
 *
 * @param {Object} user to pass in a user into the hook to better prepare data.
 * @returns {Object} of function calls to hooks and fetched user data.
 */
const useRepairDate = ({ user }) => {
  const [exercisePromptsState, setExercisePromptsState] = useState(DateFormData.countries);
  const [isInputValid, setIsInputValid] = useState(
    new Array(DateFormData.countries.length).fill(false)
  );

  /**
   * checkInputValid(): is a function that is intended on handling the logic to
   * ensure that you can check if user inputted strings are valid before letting them
   * them complete their update to their repair
   */
  const checkInputValid = () => {
    let localValidArray = [...isInputValid];
    let currentRepairState = [...exercisePromptsState];
    currentRepairState.forEach((value, index) => {
      // use regex to validate the entered string is just characters and letters
      if (!RegExp(value.validate_expression).test(value.userInput)) {
        //fails so we need to display error
        localValidArray.splice(index, 1, true);
      } else {
        localValidArray.splice(index, 1, false);
      }
    });
    setIsInputValid(localValidArray);
    return localValidArray.every((v) => v === false);
  };

  const handleUserInputChange = (dataId, newValue) => {
    setExercisePromptsState((previous) => {
      previous.map((dateRepair) =>
        dateRepair.id === dataId
          ? {
              ...dateRepair,
              userInput: newValue,
            }
          : dateRepair
      );
    });
  };

  const fetchRepair = async () => {
    console.log(user);
  };

  const postRepair = async () => {
    console.log(user);
  };

  return {
    data: { exercisePromptsState, isInputValid },
    functions: {
      checkInputValid,
      setExercisePromptsState,
      setIsInputValid,
      handleUserInputChange,
    },
  };
};
export default useRepairDate;
