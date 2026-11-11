const DEFAULT_VARIABLE_NAME = "computer_type";
const VALID_CHOICES_REGEX = "^(quantum|classical)$";

export const TASK_REPAIR_FILE_NAME = "Task_Processor_Config.js";

export const getTaskRepairInputData = (
  correctChoice = "",
  taskId = "",
) => [
  {
    id: 0,
    fileId: 0,
    taskId,
    variableName: DEFAULT_VARIABLE_NAME,
    userInput: "",
    correct_expression: correctChoice,
    validate_expression: VALID_CHOICES_REGEX,
  },
];
