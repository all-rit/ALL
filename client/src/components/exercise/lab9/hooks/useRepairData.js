/* eslint-disable no-unused-vars */
import { useState } from "react";

/**
 * usRepairData(): is a custom hook to abstract the logic implementation for the
 * repair portion of the localization lab. This allows for conditional behavior of
 * initializing the custom behavior for validating and managing state during the
 * date repair portion of the lab
 *
 * @param {Object} user to pass in a user into the hook to better prepare data.
 * @returns {Object} of function calls to hooks and fetched user data.
 */
const useRepairData = (props) => {
  const { user, getRepairData, postRepairData, getRoute, postRoute, defaultState } = props;
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

  async function fetchRepair(){
    try {
      const repairData = await getRepairData(user, getRoute);
      if (!repairData) { 
        const newStartState = [...defaultState];
          setExercisePromptsState(newStartState);
          setIsInputValid(new Array(newStartState.length).fill(false));
        setRepairCount(0);
      } else {
        const { repair, repairCount } = repairData;
        setExercisePromptsState(repair);
        setIsInputValid(new Array(repair.length).fill(false));
        setRepairCount(repairCount)
      }
    } catch (error) {
      console.error(error);
    }
  };

  async function postRepair() {
    try {
      const body = {
        userId: user,
        repair: exercisePromptsState,
        isComplete: checkInputValid(),
        numRepair: repairCount,
      };
      const repairID = await postRepairData(body, postRoute);
      return repairID;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data: { exercisePromptsState, isInputValid },
    functions: {
      checkInputValid,
      setExercisePromptsState,
      setIsInputValid,
      handleUserInputChange,
      postRepair,
      fetchRepair,
    },
  };
};
export default useRepairData;
