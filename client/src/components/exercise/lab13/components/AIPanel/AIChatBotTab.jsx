import {
  BIAS_DEFINITIONS,
  BIAS_POSITION_MAP,
  BIAS_TYPES,
} from '@/constants/lab13/BiasQuestionsConfig';
import AIChatBot from '../AIChatBot';
import { Tab } from '../Tab/Tab';
import { useContext, useMemo } from 'react';
import ExerciseStateContext from '../../Lab13Context';
import PropTypes from 'prop-types';

const AIChatBotTab = ({
  currentTopic,
  topicData,
  setSelectedBiasData,
  setShowRatingModal,
  setCurrentAnswerData,
  setQuestionAnswered,
  showRatingModal,
  showBiasExplanation,
  clickedReviewButtonThisPhase,
  showWikipediaTab,
  currentDisplayTime,
  currentAnswerData,
  questionAnswered,
  isBotThinking,
  isBotTyping,
  requireWikipedia,
  activeTopic,
  setClickedReviewButtonThisPhase,
  setIsBotThinking,
  setIsBotTyping,
  setCurrentQuestion,
  setActiveTab,
}) => {
  const {
    chatMessages,
    setChatMessages,
    hasVisitedWikipedia,
    currentPhase,
    showConfidenceScore,
    showCitations,
    disclaimerMessage,
    askedQuestions,
    setAskedQuestions,
    topicIndex,
  } = useContext(ExerciseStateContext);

  const activeBias =
    BIAS_POSITION_MAP[currentTopic?.biasPosition] || BIAS_TYPES.HALO_EFFECT;
  const handleAnswerSelected = (
    biasType,
    biasDefinition,
    explanation,
    aiResponseText,
  ) => {
    setSelectedBiasData({
      biasType,
      biasDefinition,
      explanation,
      aiResponseText,
    });
    setShowRatingModal(true);
  };

  const handleAnswerDataChange = (data) => {
    setCurrentAnswerData(data);
    setQuestionAnswered(true);
  };

  const getCurrentInstruction = () => {
    if (!currentTopic) return null;

    // hide instructions when modals are open or when review button was clicked
    if (
      showRatingModal ||
      showBiasExplanation ||
      clickedReviewButtonThisPhase
    ) {
      return null;
    }

    if (topicIndex === 0) {
      if (!canReviewResponse) {
        return `You're now on your moderately knowledgeable topic, ${currentTopic.title}. Select a prompt to interact with ALL-IE.`;
      }
      return null;
    }

    if (topicIndex === 1) {
      if (questionAnswered && showWikipediaTab && !hasVisitedWikipedia) {
        return `ALLpedia is now available. Click the ALLpedia tab above if you'd like to fact-check ALL-IE's response on ${currentTopic.title} before reviewing it.`;
      }
      if (!questionAnswered) {
        return `You're now on your most knowledgeable topic, ${currentTopic.title}. Select a prompt to interact with ALL-IE.`;
      }
      return null;
    }
    if (topicIndex === 2 && currentPhase < 4) {
      if (!questionAnswered || !currentAnswerData) {
        return `You're now on your least knowledgeable topic, ${currentTopic.title}. Select a prompt to interact with ALL-IE.`;
      }
      if (questionAnswered && !canReviewResponse) {
        const timeLeft = 15 - currentDisplayTime;
        if (!hasVisitedWikipedia) {
          return `Before reviewing ALL-IE's response on ${currentTopic.title}, click the ALLpedia tab above and stay on the page for at least 15 seconds.`;
        }
        return `Please spend ${timeLeft} more second${timeLeft !== 1 ? 's' : ''} on ALLpedia`;
      }
      return null;
    }

    if (currentPhase === 4) {
      if (!questionAnswered) {
        return `Great! Now that you've implemented your IDE fixes, interact with ALL-IE again on your least knowledgeable topic, ${currentTopic.title}.`;
      }
      if (questionAnswered && !canReviewResponse) {
        const timeLeft = 15 - currentDisplayTime;
        if (!hasVisitedWikipedia) {
          return `Before reviewing ALL-IE's response on ${currentTopic.title}, click the ALLpedia tab above and stay on the page for at least 15 seconds.`;
        }
        return `Please spend ${timeLeft} more second${timeLeft !== 1 ? 's' : ''} on ALLpedia`;
      }
      return null;
    }

    return null;
  };

  // Check if ai review button should be enabled
  const canReviewResponse = useMemo(() => {
    if (!currentAnswerData || isBotTyping || isBotThinking || showRatingModal) {
      return false;
    }

    // Phase 3 and 4 require Wikipedia visit for 15 or more seconds
    if (requireWikipedia) {
      return hasVisitedWikipedia && currentDisplayTime >= 15;
    }

    return true;
  }, [
    currentAnswerData,
    isBotTyping,
    isBotThinking,
    showRatingModal,
    requireWikipedia,
    hasVisitedWikipedia,
    currentDisplayTime,
  ]);

  // Filter questions for round 4 to only show unasked questions
  const getAvailableQuestions = useMemo(() => {
    if (!topicData?.questions) return [];

    if (currentPhase === 4) {
      // Phase 4, show only unasked questions from current topic

      const available = topicData.questions
        .map((q, index) => ({ ...q, originalIndex: index }))
        .filter((q) => {
          const questionKey = `${activeTopic}-${q.originalIndex}`;
          return !askedQuestions.includes(questionKey);
        })
        .slice(0, 2); // Only first 2 unasked

      return available;
    }

    // All other phases, show all questions with originalIndex
    return topicData.questions.map((q, index) => ({
      ...q,
      originalIndex: index,
    }));
  }, [currentPhase, topicData, askedQuestions, activeTopic]);

  // Switch to Wikipedia tab on citation click
  const handleCitationClick = () => {
    setActiveTab('ALLpedia');
  };

  // Track when a question is asked
  const handleQuestionAsked = (questionIndex) => {
    const questionKey = `${activeTopic}-${questionIndex}`;
    setCurrentQuestion(questionIndex);

    setAskedQuestions((prev) => {
      if (!prev.includes(questionKey)) {
        return [...prev, questionKey];
      }
      return prev;
    });
  };
  return (
    <Tab label="AIChatBot">
      <div className="tw-h-full tw-flex tw-flex-col">
        <div className="tw-flex-1 tw-overflow-auto">
          <AIChatBot
            userQuestions={getAvailableQuestions.map((q, index) => ({
              id: index + 1,
              text: q.text,
              originalIndex:
                q.originalIndex !== undefined ? q.originalIndex : index,
            }))}
            fixedAIResponse={getAvailableQuestions.map((q, index) => {
              return {
                id: index + 1,
                text: q.answers[activeBias].text,
                isCorrect: q.answers[activeBias].isCorrect,
                explanation: q.answers[activeBias].explanation,
                biasType: activeBias,
                biasDefinition: BIAS_DEFINITIONS[activeBias],
                confidence: q.answers[activeBias].confidence || 93,
              };
            })}
            onAnswerDataChange={handleAnswerDataChange}
            onTypingChange={setIsBotTyping}
            onThinkingChange={setIsBotThinking}
            messages={chatMessages}
            setMessages={setChatMessages}
            canSelectQuestion={!questionAnswered}
            showConfidenceScore={currentPhase === 4 && showConfidenceScore}
            showCitations={currentPhase === 4 && showCitations}
            disclaimerMessage={currentPhase === 4 ? disclaimerMessage : ''}
            onCitationClick={handleCitationClick}
            onQuestionAsked={handleQuestionAsked}
          />
        </div>
        <div className="tw-bg-white tw-flex tw-flex-col tw-items-center tw-py-4 tw-border-t tw-border-gray-200">
          {getCurrentInstruction() && (
            <div className="tw-mb-2 tw-text-sm tw-text-orange-600 tw-font-medium">
              {getCurrentInstruction()}
            </div>
          )}

          {canReviewResponse && (
            <button
              onClick={() => {
                setClickedReviewButtonThisPhase(true);

                handleAnswerSelected(
                  currentAnswerData.biasType,
                  currentAnswerData.biasDefinition,
                  currentAnswerData.explanation,
                  currentAnswerData.aiResponseText,
                );
              }}
              className="tw-w-fit tw-bg-primary-blue hover:tw-bg-labBlue tw-text-white tw-font-bold tw-py-2 tw-px-6 tw-rounded-lg tw-transition-colors tw-duration-200"
            >
              Review ALL-IE&apos;s Response
            </button>
          )}
        </div>
      </div>
    </Tab>
  );
};

AIChatBotTab.propTypes = {
  currentTopic: PropTypes.object,
  topicData: PropTypes.object,
  setSelectedBiasData: PropTypes.func.isRequired,
  setShowRatingModal: PropTypes.func.isRequired,
  setCurrentAnswerData: PropTypes.func.isRequired,
  setQuestionAnswered: PropTypes.func.isRequired,
  showRatingModal: PropTypes.bool.isRequired,
  showBiasExplanation: PropTypes.bool.isRequired,
  clickedReviewButtonThisPhase: PropTypes.bool.isRequired,
  showWikipediaTab: PropTypes.bool.isRequired,
  currentDisplayTime: PropTypes.number.isRequired,
  currentAnswerData: PropTypes.object,
  questionAnswered: PropTypes.bool.isRequired,
  isBotThinking: PropTypes.bool.isRequired,
  isBotTyping: PropTypes.bool.isRequired,
  requireWikipedia: PropTypes.bool.isRequired,
  activeTopic: PropTypes.string.isRequired,
  setClickedReviewButtonThisPhase: PropTypes.func.isRequired,
  setIsBotThinking: PropTypes.func.isRequired,
  setIsBotTyping: PropTypes.func.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default AIChatBotTab;
