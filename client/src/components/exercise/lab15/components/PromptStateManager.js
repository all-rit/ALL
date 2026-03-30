import { useMemo, useReducer } from "react";

// Ordered flow for the prompt builder UI
export const PROMPT_BUILDER_STAGES = [
  "goal",
  "context",
  "sources",
  "expectations",
];

// Minimum score to consider the prompt ready
export const DEFAULT_PASSING_SCORE = 6;

const ACTIONS = {
  SELECT_STAGE_OPTION: "SELECT_STAGE_OPTION",
  LOCK_CURRENT_STAGE: "LOCK_CURRENT_STAGE",
  CLEAR_JUST_LOCKED: "CLEAR_JUST_LOCKED",
  MOVE_STAGE: "MOVE_STAGE",
  SET_STAGE_INDEX: "SET_STAGE_INDEX",
  RESET: "RESET",
};

const buildEmptyStageMap = (defaultValue) =>
  PROMPT_BUILDER_STAGES.reduce((acc, stage) => {
    acc[stage] = defaultValue;
    return acc;
  }, {});

const buildInitialState = (passingScore = DEFAULT_PASSING_SCORE) => ({
  currentStageIndex: 0,
  passingScore,
  selections: buildEmptyStageMap(null),
  scores: buildEmptyStageMap(0),
  lockedStages: buildEmptyStageMap(false),
  justLockedKey: null,
});

// Preventing going below and above the available stages
const clampStageIndex = (index) =>
  Math.max(0, Math.min(index, PROMPT_BUILDER_STAGES.length - 1));

const getTotalScore = (scores) =>
  Object.values(scores).reduce((total, score) => total + score, 0);

// Helper to determine if a stage has an answer
const hasSelection = (selection) => selection !== null && selection !== "";

const hasStageSelection = (state, stage) =>
  hasSelection(state.selections[stage]);

const handleSelectStageOption = (state, action) => {
  const { stage, value, score = 0 } = action.payload;

  if (!PROMPT_BUILDER_STAGES.includes(stage)) {
    return state;
  }

  return {
    ...state,
    selections: {
      ...state.selections,
      [stage]: value,
    },
    scores: {
      ...state.scores,
      [stage]: score,
    },
  };
};

const handleLockCurrentStage = (state) => {
  const stage = PROMPT_BUILDER_STAGES[state.currentStageIndex];
  if (!hasStageSelection(state, stage)) {
    return state;
  }

  return {
    ...state,
    lockedStages: {
      ...state.lockedStages,
      [stage]: true,
    },
    justLockedKey: stage,
  };
};

const handleClearJustLocked = (state) => ({
  ...state,
  justLockedKey: null,
});

const handleMoveStage = (state, action) => {
  const delta = action.payload?.delta ?? 0;
  return {
    ...state,
    currentStageIndex: clampStageIndex(state.currentStageIndex + delta),
    justLockedKey: null,
  };
};

const handleSetStageIndex = (state, action) => ({
  ...state,
  currentStageIndex: clampStageIndex(action.payload.index),
  justLockedKey: null,
});

const handleReset = (state) => buildInitialState(state.passingScore);

const ACTION_HANDLERS = {
  [ACTIONS.SELECT_STAGE_OPTION]: handleSelectStageOption,
  [ACTIONS.LOCK_CURRENT_STAGE]: handleLockCurrentStage,
  [ACTIONS.CLEAR_JUST_LOCKED]: handleClearJustLocked,
  [ACTIONS.MOVE_STAGE]: handleMoveStage,
  [ACTIONS.SET_STAGE_INDEX]: handleSetStageIndex,
  [ACTIONS.RESET]: handleReset,
};

// With the current state and the next action, determine which stage to go to
export const promptBuilderStageReducer = (state, action) => {
  const handler = ACTION_HANDLERS[action.type];
  if (!handler) {
    return state;
  }
  return handler(state, action);
};

export const usePromptBuilderStageManager = ({
  passingScore = DEFAULT_PASSING_SCORE,
} = {}) => {
  const [state, dispatch] = useReducer(
    promptBuilderStageReducer,
    passingScore,
    buildInitialState,
  );

  const currentStage = PROMPT_BUILDER_STAGES[state.currentStageIndex];
  const totalScore = useMemo(() => getTotalScore(state.scores), [state.scores]);

  const allStagesAnswered = useMemo(
    () => Object.values(state.selections).every(hasSelection),
    [state.selections],
  );

  const canMoveToNextStage = hasStageSelection(state, currentStage);
  const hasMetPassingScore =
    allStagesAnswered && totalScore >= state.passingScore;

  const selectStageOption = (stage, value, score = 0) => {
    dispatch({
      type: ACTIONS.SELECT_STAGE_OPTION,
      payload: { stage, value, score },
    });
  };

  const lockedKeys = useMemo(
    () => PROMPT_BUILDER_STAGES.filter((stage) => state.lockedStages[stage]),
    [state.lockedStages],
  );

  return {
    ...state,
    stages: PROMPT_BUILDER_STAGES,
    currentStage,
    currentSelection: state.selections[currentStage],
    currentScore: state.scores[currentStage],
    totalScore,
    allStagesAnswered,
    canMoveToNextStage,
    lockedKeys,
    hasMetPassingScore,
    isPromptReadyToSubmit: hasMetPassingScore,

    // Selection helpers
    selectStageOption,
    selectGoal: (value, score = 0) => selectStageOption("goal", value, score),
    selectContext: (value, score = 0) =>
      selectStageOption("context", value, score),
    selectSource: (value, score = 0) =>
      selectStageOption("sources", value, score),
    selectSources: (value, score = 0) =>
      selectStageOption("sources", value, score),
    selectExpectation: (value, score = 0) =>
      selectStageOption("expectations", value, score),
    selectExpectations: (value, score = 0) =>
      selectStageOption("expectations", value, score),

    // Navigation helpers
    lockCurrentStage: () => dispatch({ type: ACTIONS.LOCK_CURRENT_STAGE }),
    clearJustLockedKey: () => dispatch({ type: ACTIONS.CLEAR_JUST_LOCKED }),
    nextStage: () =>
      dispatch({ type: ACTIONS.MOVE_STAGE, payload: { delta: 1 } }),
    previousStage: () =>
      dispatch({ type: ACTIONS.MOVE_STAGE, payload: { delta: -1 } }),
    goToStageIndex: (index) =>
      dispatch({ type: ACTIONS.SET_STAGE_INDEX, payload: { index } }),
    resetPromptBuilder: () => dispatch({ type: ACTIONS.RESET }),
  };
};

export default usePromptBuilderStageManager;
