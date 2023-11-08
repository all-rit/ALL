import useLabRepair from "../../../body/Repair/hooks/useLabRepair";
import { RepairService } from "../../../../services/lab9/RepairService";

/**
 * usDataService(): is a custom hook to abstract the logic implementation for the
 * repair portion of the localization lab. This allows for conditional behavior of
 * initializing the custom behavior for validating and managing state during the
 * date repair portion of the lab
 *
 * @param {Object} user to pass in a user into the hook to better prepare data.
 * @param {String} handles
 * @returns {Object} of function calls to hooks and fetched user data.
 */
const useDataService = (user, section, defaultGameState) => {
  const { data, functions } = useLabRepair();
  const { exercisePromptsState, isInputValid } = data;
  const { checkInputValid, setExercisePromptsState, handleUserInputChange } =
    functions;

  async function fetchRepair() {
    try {
      const repairData = await RepairService.getRepair(user, section);
      if (!repairData || repairData?.isComplete === true) {
        const newStartState = [...defaultGameState];
        setExercisePromptsState(newStartState);
      } else {
        const { repair } = repairData;
        setExercisePromptsState(Object.values(repair));
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function postRepair() {
    try {
      const body = {
        userid: user.userid,
        repair: { ...exercisePromptsState },
        section: section,
        isComplete: checkInputValid(),
      };
      const repairID = await RepairService.submitRepair(body);
      return repairID;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    data: { exercisePromptsState, isInputValid },
    functions: {
      checkInputValid,
      handleUserInputChange,
      fetchRepair,
      postRepair,
    },
  };
};
export default useDataService;
