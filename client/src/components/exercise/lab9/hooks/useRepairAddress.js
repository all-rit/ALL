import { useState } from "react";
import { AddressRepairData as AddressFormsData } from "../../../../constants/lab9/AddressRepairData";
/**
 * UseRepairAddress(): is a custom hook responsible for handling the behavior
 * of the Repair address repair section for the new LAB 9 localization.
 * This is to be used to allow for decoupling of the display and logic based portions of
 * repair section.
 */
const useRepairAddress = (user) => {
  const [exercisePromptsState, setExercisePromptsState] = useState(
    AddressFormsData.countries
  );
  const [isInputValid, setIsInputValid] = useState(
    new Array(AddressFormsData.countries.length).fill(false)
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
    console.log(localValidArray);
    console.warn(exercisePromptsState);
    return localValidArray.every((v) => v === false);
  };

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

  // eslint-disable-next-line no-unused-vars
  const fetchRepair = async () => {
    console.log(user);
  };

  // eslint-disable-next-line no-unused-vars
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
export default useRepairAddress;
