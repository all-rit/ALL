import useLabRepair from "../hooks/useLabRepair";
import {
  RepairService,
  endpoints,
} from "../../../../services/lab9/RepairService";

/**
 * useRepairAddress(): is a custom hook to abstract the logic implementation for the
 * repair portion of the localization lab. This allows for conditional behavior of
 * initializing the custom behavior for validating and managing state during the
 * date repair portion of the lab
 *
 * @param {Object} user to pass in a user into the hook to better prepare data.
 * @returns {Object} of function calls to hooks and fetched user data.
 */
const useRepairAddress = ({ user }) => {
  const { data, functions } = useLabRepair();
  const { exercisePromptsState, isInputValid, repairCount } = data;
  const {
    checkInputValid,
    setExercisePromptsState,
    handleUserInputChange,
    setIsInputValid,
    setRepairCount,
  } = functions;

  async function fetchRepair() {
    try {
        const repairData = await RepairService.getRepair(
            user,
            endpoints.GET_ADDRESS_REPAIR
      );
        if (repairData) {
          // change this array to the template array data
        const newStartState = [];
        setExercisePromptsState(newStartState);
        setIsInputValid(new Array(newStartState.length).fill(false));
        setRepairCount(0);
        return;
      } else {
        const { repair, repairCount } = repairData;
        setExercisePromptsState(repair);
        setIsInputValid(new Array(repair.length).fill(false));
        setRepairCount(repairCount);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function postRepair() {
    try {
      const body = {
        userId: user,
        repair: { ...exercisePromptsState },
        isComplete: checkInputValid(),
        numRepair: repairCount,
      };
      const repairID = await RepairService.submitRepair(
        body,
        endpoints.POST_ADDRESS_REPAIR
      );
      return repairID;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    data: { exercisePromptsState, isInputValid },
    functions: {
      checkInputValid,
      setExercisePromptsState,
      setIsInputValid,
      handleUserInputChange,
      fetchRepair,
      postRepair,
    },
  };
};

export default useRepairAddress;
