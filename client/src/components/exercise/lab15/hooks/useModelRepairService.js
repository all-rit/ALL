import { useState } from "react";
import useLabRepair from "../../../body/Repair/hooks/useLabRepair";
import { RepairService } from "src/services/lab15/RepairService";
import { ExerciseService } from "src/services/lab15/ExerciseService";

const useModelRepairService = (user, section, defaultExerciseState) => {
  const { data, functions } = useLabRepair();
  const { exercisePromptsState, validInputs, repairComplete } = data;
  const { checkInputValid, setExercisePromptsState, handleUserInputChange } =
    functions;

  const [isFirst, setIsFirst] = useState(true);

  const fetchRepair = async () => {
    try {
      const repairData = await RepairService.getRepair(user, section);
      if (!repairData || repairData?.isComplete === true) {
        setExercisePromptsState([...defaultExerciseState]);
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
  };

  const handleExerciseUpdate = async (body) => {
    try {
      const { isComplete, userid } = body;
      if (isComplete) {
        const data = await ExerciseService.fetchExercise({ userid });
        const updatedBody = {
          userid,
          isExerciseComplete: true,
          hasViewed: data?.hasViewed || false,
        };
        await ExerciseService.submitExercise(updatedBody);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postRepair = async () => {
    try {
      setIsFirst(false);
      const body = {
        userid: user.userid,
        repair: { ...exercisePromptsState },
        section,
        isComplete: checkInputValid(),
      };
      const repairID = await RepairService.submitRepair(body);
      await handleExerciseUpdate(body);
      return repairID;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data: { exercisePromptsState, validInputs, repairComplete, isFirst },
    functions: {
      checkInputValid,
      handleUserInputChange,
      fetchRepair,
      postRepair,
    },
  };
};

export default useModelRepairService;
