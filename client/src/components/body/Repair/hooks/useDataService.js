import useLabRepair from "../../../body/Repair/hooks/useLabRepair";
import { RepairService } from "../../../../services/lab9/RepairService";
import { ExerciseService } from "../../../../services/lab9/ExerciseService"; 

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
  /**
   * fetchRepair(): is an Async Custom Hook function that is
   * responsible for fetching data about a user's repair session.
   * this allows the user to get updated information about their current
   * repair attempt.
   */
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
  /**
   * postRepair(): is an async custom hook function that is responsible for 
   * sending new information after a repair is iterated through by the user, this 
   * includes the ability for storing until the user has entered in the right answer.
   * @returns status after request is performed.
   */
  async function postRepair() {
    /**
     * handleExerciseUpdate is an inner function that is responsible
     * for handling the posting of the change instate after a section of the lab is deemed 
     * complete. This allows for the Exercise to know when a section of the lab is complete.
     * @param {Object} body Object storing the post modified payload.
     * @returns status code to ensure the post was successful
     */
    const handleExerciseUpdate = async (body) => { 
      try {
        if (body?.isComplete) {
          const exerciseState = await ExerciseService.fetchExercise(user.userid);
          const updatedBody = {
              userid: body.userid,
              isAddressComplete: exerciseState.isAddressComplete !== body.isAddressComplete? body.isAddressComplete: exerciseState.isAddressComplete,
              isDateComplete: exerciseState.isDateComplete !== body.isDateComplete? body.isDateComplete: exerciseState.isDateComplete,
              isNavComplete: exerciseState.isNavComplete !== body.isNavComplete? body.isNavComplete: exerciseState.isNavComplete,
          }
          const response = await ExerciseService.postRepair(updatedBody);
          return response.status;
         }
      } catch (error) {
        console.error(error);
      }
  }
    try {
      const body = {
        userid: user.userid,
        repair: { ...exercisePromptsState },
        section: section,
        isComplete: checkInputValid(),
      };
      const repairID = await RepairService.submitRepair(body);
      handleExerciseUpdate(body);
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
