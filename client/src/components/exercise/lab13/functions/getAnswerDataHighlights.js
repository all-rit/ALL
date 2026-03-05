import { HIGHLIGHTS_MAPPING } from "src/constants/lab13/HighlightsMapping";

// Get highlights based on current answer data, topic, and question
export const getAnswerDataHighlights = (
  currentAnswerData,
  currentQuestion,
  activeTopic,
) => {
  if (!currentAnswerData || currentQuestion === null) return [];

  const topicKey = activeTopic?.toLowerCase();
  const biasType = currentAnswerData.biasType;

  return HIGHLIGHTS_MAPPING[topicKey]?.[currentQuestion]?.[biasType] || [];
};
