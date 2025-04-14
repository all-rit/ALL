import { useRef, useEffect } from "react";
import useLabRepair from "./useLabRepair";

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
