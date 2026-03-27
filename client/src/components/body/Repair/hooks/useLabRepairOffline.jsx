import { useRef, useEffect } from "react";
import useLabRepair from "./useLabRepair";

/**
 * A wrapper for the {#link useLabRepair} hook that provides extra data,
 * like isFirst, necessary for the Repair component to function. This version
 * is meant only for offline use. If you need a hook that saves to the database,
 * see any of the {#link useDataService} hooks implemented in their respective
 * labs.
 * @param {Array.<Object>} defaultInputs An array of objects where each object is an input in the repair.
 * @param {number} defaultInputs[i].id The unique id of this input (must start at 0 and increment).
 * @param {number} defaultInputs[i].fileId The corresponding file id that this input belongs within.
 * @param {string} defaultInputs[i].userInput The starting userInput; this should always be an empty string.
 * @param {string} defaultInputs[i].validate_expression The regex expression used to check if the user input is correct.
 * @param {string} defaultInputs[i].correct_expression The solution to this input; typically used as a hint.
 */
const useLabRepairOffline = (defaultInputs) => {
  let { data, functions } = useLabRepair();
  const isFirst = useRef(true);
  const resolveFakePostReq = useRef(null);
  data = { ...data, isFirst: isFirst.current };

  functions = {
    ...functions,
    fetchRepair: () => {
      if (isFirst.current) {
        functions.setExercisePromptsState(defaultInputs);
      }
    },
    postRepair: () => {
      const fakePostRequest = new Promise((resolve) => {
        resolveFakePostReq.current = resolve;
        isFirst.current = false;
      });
      return fakePostRequest;
    },
  };

  useEffect(() => {
    if (resolveFakePostReq.current !== null) {
      resolveFakePostReq.current();
      resolveFakePostReq.current = null;
    }
  }, [isFirst.current]);

  return {
    data: data,
    functions: functions,
  };
};

export default useLabRepairOffline;
