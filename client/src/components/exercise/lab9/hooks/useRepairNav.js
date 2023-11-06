import useLabRepair from "../../../body/Repair/hooks/useLabRepair";
import { RepairService } from "../../../../services/lab9/RepairService";
import { GAME_STATES } from "../../../../constants/lab9";

/**
 * useRepairNav(): is a custom hook to abstract the logic implementation for the
 * repair portion of the localization lab. This allows for conditional behavior of
 * initializing the custom behavior for validating and managing state during the
 * date repair portion of the lab
 *
 * @param {Object} user to pass in a user into the hook to better prepare data.
 * @returns {Object} of function calls to hooks and fetched user data.
 */
const useRepairNav = (user) => {
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
        GAME_STATES.REPAIR_NAV_BAR
      );
      if (repairData) {
        const newStartState = [];
        setExercisePromptsState(newStartState);
        setIsInputValid(new Array(newStartState.length).fill(false));
        setRepairCount(0);
      } else {
        const { repair, repairCount } = repairData;
        const listRepair = Object.values(repair);
        setExercisePromptsState(Object.values(repair));
        setIsInputValid(new Array(listRepair.length).fill(false));
        setRepairCount(repairCount);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function postRepair() {
    try {
      const body = {
        userId: user.userid,
        repair: { ...exercisePromptsState },
        isComplete: checkInputValid(),
        section: GAME_STATES.REPAIR_NAV_BAR,
        numRepair: repairCount,
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
      setExercisePromptsState,
      setIsInputValid,
      handleUserInputChange,
      fetchRepair,
      postRepair,
    },
  };
};
export default useRepairNav;
