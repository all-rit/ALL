import { NavBarData } from "../../../../constants/lab9/NavBarData";
import { useState } from "react";
/**
 * useRepairNav(): is a function that is responsible for handling the logic
 * behind the repair navigation section of the new Lab 9 localization. This
 * hook is decoupled to allow for the ease in handling custom logic for the
 * component
 * * @param {Object} user to pass in a user into the hook to better prepare data.
 *  * @returns {Object} of function calls to hooks and fetched user data.
 */
const useRepairNav = ({ user }) => {
  const [exercisePromptsState, setExercisePromptsState] = useState(
    NavBarData.navItems
  );
  const [isInputValid, setIsInputValid] = useState(
    new Array(NavBarData.navItems.length).fill(false)
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
      return previous.map((navItem) =>
        navItem.id === dataId
          ? {
            ...navItem,
            userInput: newValue,
          }
          : navItem
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
export default useRepairNav;
