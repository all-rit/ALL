import useLabRepair from "../../../body/Repair/hooks/useLabRepair";
import { RepairService } from "../../../../services/lab11/RepairService";
import { ExerciseService } from "../../../../services/lab11/ExerciseService";
import { EXERCISE_STATES } from "../../../../constants/lab11";
import { useState } from "react";
/**
 * useDataService(): is a custom hook to abstract the logic implementation for the
 * repair portion of the localization lab. This allows for conditional behavior of
 * initializing the custom behavior for validating and managing state during the
 * date repair portion of the lab
 *
 * @param {Object} user to pass in a user into the hook to better prepare data.
 * @param {String} section includes the section of the lab that will be storing data for.
 * @param {Array[{Objects}]} defaultExerciseState storing the default state that should be given to
 * the user when they are starting an entirely new lab exercise.
 * @returns {Object} of function calls to hooks and fetched user data.
 */
const useDataService = (user, section, defaultExerciseState) => {
  const { data, functions } = useLabRepair();
  const { exercisePromptsState, isInputValid } = data;
  const { checkInputValid, setExercisePromptsState, handleUserInputChange } =
    functions;
  const [isFirst, setIsFirst] = useState(true);
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
        const newStartState = [...defaultExerciseState];
        setExercisePromptsState(newStartState);
        setIsFirst(true);
      } else {
        const { repair } = repairData;
        setExercisePromptsState(Object.values(repair));
        if (repairData.repairCount >= 0 && !repairData.isComplete) {
          setIsFirst(false);
        } else {
          setIsFirst(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * handleExerciseUpdate is an inner function that is responsible
   * for handling the posting of the change instate after a section of the lab is deemed
   * complete. This allows for the Exercise to know when a section of the lab is complete.
   * @param {Object} body Object storing the post modified payload.
   * @returns status code to ensure the post was successful
   */
  async function handleExerciseUpdate(body, section) {
    try {
      const { isComplete, userid } = body;
      const {
        isRepairWordCountComplete,
        isRepairSentenceCountComplete,
        isRepairComplexWordCountComplete,
      } = await ExerciseService.fetchExercise({
        userid: userid,
      });
      if (isComplete) {
        const updatedBody = {
          userid: body.userid,
          isRepairWordCountComplete:
            section === EXERCISE_STATES.REPAIR_WORD_COUNT
              ? true
              : isRepairWordCountComplete,
          isRepairSentenceCountComplete:
            section === EXERCISE_STATES.REPAIR_SENTENCE_COUNT
              ? true
              : isRepairSentenceCountComplete,
          isRepairComplexWordCountComplete:
            section === EXERCISE_STATES.REPAIR_COMPLEX_WORDS
              ? true
              : isRepairComplexWordCountComplete,
        };
        const response = await ExerciseService.submitExercise(updatedBody);
        return response.status;
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
    try {
      const body = {
        userid: user.userid,
        repair: { ...exercisePromptsState },
        section: section,
        isComplete: checkInputValid(),
      };
      const repairID = await RepairService.submitRepair(body);
      await handleExerciseUpdate(body, section);
      return repairID;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    data: { exercisePromptsState, isInputValid, isFirst },
    functions: {
      checkInputValid,
      handleUserInputChange,
      fetchRepair,
      postRepair,
    },
  };
};
export default useDataService;
