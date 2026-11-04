import { useEffect, useRef, useState } from "react";
import { RepairService } from "src/services/lab17/RepairService";

const useTaskRepairService = (
  user,
  section,
  defaultExerciseState = [],
  onRepairComplete,
) => {
  // current input entries for the repair code block
  const [exercisePromptsState, setExercisePromptsState] = useState([]);
  const [validInputs, setValidInputs] = useState([]);
  const [repairComplete, setRepairComplete] = useState(false);
  // prevents error when user hasn't put in a value for the first time in repair
  const [isFirst, setIsFirst] = useState(true);
  const hasSubmittedRef = useRef(false);

  // update userInput for a specific input field id
  const handleUserInputChange = (dataId, newValue) => {
    setExercisePromptsState((previous) =>
      previous.map((element) =>
        element.id === dataId ? { ...element, userInput: newValue } : element,
      ),
    );
  };

  // validate that each user input matches 'quantum' or 'classical'
  const checkInputValid = () => {
    const localValidArray = exercisePromptsState.map((value) => {
      if (!value.validate_expression) return false;
      try {
        const regex = new RegExp(value.validate_expression, "g");
        return regex.test(value.userInput);
      } catch {
        return false;
      }
    });
    setValidInputs(localValidArray);
    const complete =
      localValidArray.length > 0 && localValidArray.every(Boolean);
    setRepairComplete(complete);
    return complete;
  };

  // check whether the user's submission is actually correct
  const checkAnswerCorrect = () =>
    exercisePromptsState.length > 0 &&
    exercisePromptsState.every(
      (value) =>
        Boolean(value.correct_expression) &&
        value.userInput === value.correct_expression,
    );

  // re-validate input while it gets updated
  useEffect(() => {
    checkInputValid();
  }, [exercisePromptsState]);

  // initialize repair inputs with the current task's defaults on first open
  const fetchRepair = () => {
    if (!hasSubmittedRef.current) {
      setExercisePromptsState([...defaultExerciseState]);
      setIsFirst(true);
    }
  };

  // validate and submit the user's repair attempt
  const postRepair = async () => {
    try {
      hasSubmittedRef.current = true;
      setIsFirst(false);
      const isComplete = checkInputValid();
      if (isComplete) {
        onRepairComplete?.({
          userChoice: exercisePromptsState[0]?.userInput || "",
          isCorrect: checkAnswerCorrect(),
        });
      }

      if (!user?.userid) {
        return null;
      }
      const body = {
        userid: user.userid,
        repair: { ...exercisePromptsState },
        section,
        isComplete,
      };
      return await RepairService.submitRepair(body);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data: {
      exercisePromptsState,
      validInputs,
      repairComplete,
      isFirst,
    },
    functions: {
      checkInputValid,
      checkAnswerCorrect,
      handleUserInputChange,
      fetchRepair,
      postRepair,
    },
  };
};

export default useTaskRepairService;
