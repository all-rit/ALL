// Shared constants for the prompt state manager
export const PROMPT_BUILDER_STAGES = [
  "goal",
  "context",
  "sources",
  "expectations",
];

// Minimum score to consider the prompt ready
export const DEFAULT_PASSING_SCORE = 6;

export const ACTIONS = {
  SELECT_STAGE_OPTION: "SELECT_STAGE_OPTION",
  LOCK_CURRENT_STAGE: "LOCK_CURRENT_STAGE",
  CLEAR_JUST_LOCKED: "CLEAR_JUST_LOCKED",
  MOVE_STAGE: "MOVE_STAGE",
  SET_STAGE_INDEX: "SET_STAGE_INDEX",
  RESET: "RESET",
};
