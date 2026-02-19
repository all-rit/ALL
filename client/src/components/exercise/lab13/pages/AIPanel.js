import {
  React,
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { startExercise } from 'src/reducers/lab2/actions';
import { navigate } from '@reach/router';
import AIChatBot from '../components/AIChatBot';
import { Tabs } from '../components/Tab/Tabs';
import { Tab } from '../components/Tab/Tab';
import RatingModal from '../components/RatingModal';
import ExerciseStateContext from '../Lab13Context';
import {
  BIAS_TYPES,
  BIAS_DEFINITIONS,
  getTopicById,
} from 'src/constants/lab13/BiasQuestionsConfig';
import ProgressBar from 'src/components/all-components/ProgressBar';

const AIPanel = () => {
  const {
    rankingColumns,
    chatMessages,
    setChatMessages,
    hasVisitedWikipedia,
    setHasVisitedWikipedia,
    currentPhase,
    setCurrentPhase,
    showConfidenceScore,
    showCitations,
    disclaimerMessage,
    askedQuestions,
    setAskedQuestions,
    topicIndex,
    setTopicIndex,
    wikipediaAccumulatedTime,
    setWikipediaAccumulatedTime,
    wikipediaSessionStart,
    setWikipediaSessionStart,
  } = useContext(ExerciseStateContext);

  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showBiasExplanation, setShowBiasExplanation] = useState(false);
  const [selectedBiasData, setSelectedBiasData] = useState(null);
  const [currentAnswerData, setCurrentAnswerData] = useState(null);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [toneRating, setToneRating] = useState('');
  const [confidenceRating, setConfidenceRating] = useState('');
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [activeTab, setActiveTab] = useState('AIChatBot');
  const [currentDisplayTime, setCurrentDisplayTime] = useState(0);
  const phase4IntroAddedRef = useRef(false);
  const [clickedReviewButtonThisPhase, setClickedReviewButtonThisPhase] =
    useState(false);

  // State to track when to show the wikipedia page
  const [hasShownWikipediaInPhase, setHasShownWikipediaInPhase] =
    useState(false);

  const BIAS_POSITION_MAP = {
    0: BIAS_TYPES.TRUTH_BIAS, // Most knowledgeable
    1: BIAS_TYPES.HALO_EFFECT, // Medium knowledgeable
    2: BIAS_TYPES.DUNNING_KRUGER, // Least knowledgeable
  };

  // Get all three topics in order: medium, most, least
  const getOrderedTopics = useMemo(() => {
    if (!rankingColumns?.length) return [];

    const topics = [];
    // Medium knowledgeable (index 1) - Halo Effect
    if (rankingColumns[1]?.cards?.length > 0) {
      topics.push({
        id: rankingColumns[1].cards[0].id,
        biasPosition: 1,
        title: rankingColumns[1].cards[0].title,
      });
    }
    // Most knowledgeable (index 0) - Truth Bias
    if (rankingColumns[0]?.cards?.length > 0) {
      topics.push({
        id: rankingColumns[0].cards[0].id,
        biasPosition: 0,
        title: rankingColumns[0].cards[0].title,
      });
    }
    // Least knowledgeable (index 2) - Dunning-Kruger
    if (rankingColumns[2]?.cards?.length > 0) {
      topics.push({
        id: rankingColumns[2].cards[0].id,
        biasPosition: 2,
        title: rankingColumns[2].cards[0].title,
      });
    }

    return topics;
  }, [rankingColumns]);

  const currentTopic = getOrderedTopics[topicIndex] || null;
  const activeTopic = currentTopic?.id || null;
  const activeBias =
    BIAS_POSITION_MAP[currentTopic?.biasPosition] || BIAS_TYPES.HALO_EFFECT;
  const topicData = getTopicById(activeTopic);

  // Display Wikipedia based on current phase and whether or not the AI has finished typing
  const showWikipediaTab = useMemo(() => {
    // Phase 1 does not show wiki
    if (topicIndex === 0) {
      return false;
    }

    // Phase 2, 3, 4 shows wiki after the first AI response is completed
    if (topicIndex >= 1) {
      // keep displaying if the wikishown was already set to true
      if (hasShownWikipediaInPhase) {
        return true;
      }

      if (currentAnswerData && !isBotTyping && !isBotThinking) {
        return true;
      }
    }

    return false;
  }, [
    topicIndex,
    hasShownWikipediaInPhase,
    currentAnswerData,
    isBotThinking,
    isBotTyping,
  ]);

  const requireWikipedia = topicIndex === 2;

  // Wikipedia time tracking with interval
  useEffect(() => {
    let intervalId;

    if (activeTab === 'ALLpedia' && showWikipediaTab) {
      // Mark as visited

      setHasVisitedWikipedia(true);
      console.log('Set wikipedia to true');

      // Start new session if not already started
      if (!wikipediaSessionStart) {
        setWikipediaSessionStart(Date.now());
      }

      intervalId = setInterval(() => {
        if (wikipediaSessionStart) {
          const sessionElapsed = Math.floor(
            (Date.now() - wikipediaSessionStart) / 1000
          );
          const total = wikipediaAccumulatedTime + sessionElapsed;
          setCurrentDisplayTime(total);

          // Stop at 15 seconds
          if (total >= 15) {
            clearInterval(intervalId);
          }
        }
      }, 100);
    } else {
      // Leaving Wikipedia tab ensure you save the time
      if (wikipediaSessionStart) {
        const sessionElapsed = Math.floor(
          (Date.now() - wikipediaSessionStart) / 1000
        );
        setWikipediaAccumulatedTime((prev) => prev + sessionElapsed);
        setWikipediaSessionStart(null);
      }
      // Keep displaying the accumulated time
      setCurrentDisplayTime(wikipediaAccumulatedTime);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [
    activeTab,
    showWikipediaTab,
    wikipediaSessionStart,
    wikipediaAccumulatedTime,
    setHasVisitedWikipedia,
    setWikipediaAccumulatedTime,
    setWikipediaSessionStart,
  ]);

  // Track and respond when Wikipedia becomes visible
  useEffect(() => {
    if (showWikipediaTab && !hasShownWikipediaInPhase) {
      setHasShownWikipediaInPhase(true);
    }
  }, [showWikipediaTab, hasShownWikipediaInPhase]);

  const getWikipediaTimeSpent = useCallback(() => {
    return currentDisplayTime;
  }, [currentDisplayTime]);

  // Filter questions for round 4 to only show unasked questions
  const getAvailableQuestions = useMemo(() => {
    if (!topicData?.questions) return [];

    if (currentPhase === 4) {
      // Phase 4, show only unasked questions from current topic
      console.log('Phase 4 - Topic:', activeTopic);
      console.log('Phase 4 - All questions:', topicData.questions.length);
      console.log('Asked questions:', askedQuestions);

      const available = topicData.questions
        .map((q, index) => ({ ...q, originalIndex: index }))
        .filter((q) => {
          const questionKey = `${activeTopic}-${q.originalIndex}`;
          return !askedQuestions.includes(questionKey);
        })
        .slice(0, 2); // Only first 2 unasked

      console.log('Available questions:', available.length);
      return available;
    }

    // All other phases, show all questions with originalIndex
    return topicData.questions.map((q, index) => ({
      ...q,
      originalIndex: index,
    }));
  }, [currentPhase, topicData, askedQuestions, activeTopic]);

  // Switch to Wikipedia tab on citation click
  const handleCitationClick = useCallback(() => {
    setActiveTab('ALLpedia');
  }, []);

  // Track when a question is asked
  const handleQuestionAsked = useCallback(
    (questionIndex) => {
      const questionKey = `${activeTopic}-${questionIndex}`;

      setAskedQuestions((prev) => {
        if (!prev.includes(questionKey)) {
          console.log(
            'Tracking question:',
            questionKey,
            'Phase:',
            currentPhase
          );
          return [...prev, questionKey];
        }
        return prev;
      });
    },
    [currentPhase, setAskedQuestions, activeTopic]
  );

  // Get Wikipedia content based on topic
  const getWikipediaContent = (topicId) => {
    const content = {
      localization: {
        title: 'Localization',
        text: `Localization is the process of adapting information or communication to align with the cultural, linguistic, and social expectations of a specific audience. Unlike translation, which focuses only on language, localization also adjusts context, examples, and cultural references.

This may include using local currency or changing date formats, but it does not involve physical changes, such as changing clothing materials for climate. However, modifying language or tone to fit different social settings can be considered a form of cultural localization.`,
        sources: [
          'https://resources.gala-global.org/accessibility-localization/',
          'https://www.vistatec.com/localization-for-all-advancing-accessibility-and-inclusion-in-a-globalized-world/',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400', // Placeholder
      },
      colorblindness: {
        title: 'Color Blindness',
        text: `Color blindness is a visual condition that affects color perception, most commonly red and green. The most common type, red-green color blindness, is inherited through the X chromosome. People with red-green color blindness do not see only red and green, but may have difficulty distinguishing between certain shades.

Although many cases are inherited, they can also develop later in life due to eye disease, injury, aging, or certain medications. Complete color blindness is rare and should not be assumed.`,
        sources: [
          'https://www.colourblindawareness.org/colour-blindness/',
          'https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400', // Placeholder
      },
      dyslexia: {
        title: 'Dyslexia',
        text: `Dyslexia is a neurological learning disability that primarily affects reading and language processing. It is not a vision problem and does not affect intelligence. People with dyslexia may have difficulty connecting written letters to spoken sounds, not how letters visually appear.

        Dyslexia cannot be cured, but it can be effectively supported through early intervention, structured reading instruction, and classroom accommodations.`,
        sources: [
          'https://dyslexiaida.org/definition-of-dyslexia/',
          'https://www.losdschools.org/student-services/dyslexia-handbook/definition-of-dyslexia',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400', // Placeholder
      },
    };

    return content[topicId?.toLowerCase()] || content.localization;
  };

  const wikipediaContent = getWikipediaContent(activeTopic);

  // Check if ai review button should be enabled
  const canReviewResponse = useMemo(() => {
    if (!currentAnswerData || isBotTyping || isBotThinking || showRatingModal) {
      return false;
    }

    // Phase 3 and 4 require Wikipedia visit for 15 or more seconds
    if (requireWikipedia) {
      return hasVisitedWikipedia && getWikipediaTimeSpent() >= 15;
    }

    return true;
  }, [
    currentAnswerData,
    isBotTyping,
    isBotThinking,
    showRatingModal,
    requireWikipedia,
    hasVisitedWikipedia,
    getWikipediaTimeSpent,
  ]);

  const getCurrentInstruction = useCallback(() => {
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
        return `ALLpedia is now available if you'd like to fact-check ALL-IE's response on ${currentTopic.title} before reviewing.`;
      }
      if (!questionAnswered) {
        return `You're now on your most knowledgeable topic, ${currentTopic.title}. Select a prompt to interact with ALL-IE.`;
      }
      return null;
    }

    if (topicIndex === 2 && currentPhase < 4) {
      if (!questionAnswered) {
        return `You're now on your least knowledgeable topic, ${currentTopic.title}. Select a prompt to interact with ALL-IE.`;
      }
      if (questionAnswered && !canReviewResponse) {
        const timeLeft = 15 - getWikipediaTimeSpent();
        if (!hasVisitedWikipedia) {
          return `Review the ALLpedia page for at least 15 seconds before reviewing ALL-IE's response on ${currentTopic.title}.`;
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
        const timeLeft = 15 - getWikipediaTimeSpent();
        if (!hasVisitedWikipedia) {
          return `Review the ALLpedia page for at least 15 seconds before reviewing ALL-IE's response on ${currentTopic.title}.`;
        }
        return `Please spend ${timeLeft} more second${timeLeft !== 1 ? 's' : ''} on ALLpedia`;
      }
      return null;
    }

    return null;
  }, [
    currentTopic,
    topicIndex,
    currentPhase,
    questionAnswered,
    hasVisitedWikipedia,
    canReviewResponse,
    showRatingModal,
    showBiasExplanation,
    clickedReviewButtonThisPhase,
    showWikipediaTab,
    getWikipediaTimeSpent,
  ]);

  // Initialize first exercise chat with the ALLie greeting
  useEffect(() => {
    if (chatMessages.length === 0 && currentTopic) {
      setChatMessages([
        {
          id: 'greeting',
          sender: 'bot',
          text: `Hi! I'm ALL-IE the AI. What can I help you with?`,
          timestamp: new Date(),
        },
      ]);
      setCurrentPhase(1);
    }
  }, [currentTopic, chatMessages.length, setChatMessages, setCurrentPhase]);

  // Initialize phase 4 after IDE fixes
  useEffect(() => {
    if (currentPhase === 4 && currentTopic) {
      console.log('Phase 4 Init - Topic Index:', topicIndex);
      console.log('Phase 4 Init - Current Topic:', currentTopic);
      console.log('Phase 4 Init - Topic Position:', currentTopic.biasPosition);

      // Reset Wikipedia tracking for Phase 4
      if (!phase4IntroAddedRef.current) {
        setHasVisitedWikipedia(false);
        setWikipediaAccumulatedTime(0);
        setWikipediaSessionStart(null);
        setCurrentDisplayTime(0);
        setHasShownWikipediaInPhase(false);
      }

      // Enusure we're on the least knowledgeable topic
      if (currentTopic.biasPosition !== 2) {
        console.warn('Phase 4 should be on least topic! Forcing to index 2');
        setTopicIndex(2);
        return;
      }

      // Add intro message once
      if (!phase4IntroAddedRef.current && chatMessages.length > 0) {
        const lastMessage = chatMessages[chatMessages.length - 1];
        const phase4IntroText = `Let's continue. Select another prompt.`;

        if (
          lastMessage.text !== phase4IntroText &&
          !lastMessage.text.includes('implemented your IDE fixes')
        ) {
          setQuestionAnswered(false);
          phase4IntroAddedRef.current = true;

          setTimeout(() => {
            setChatMessages((prev) => [
              ...prev,
              {
                id: 'phase4-intro',
                sender: 'bot',
                text: phase4IntroText,
                timestamp: new Date(),
              },
            ]);
          }, 500);
        }
      }
    }
  }, [
    currentPhase,
    currentTopic,
    topicIndex,
    chatMessages.length,
    setChatMessages,
    setHasVisitedWikipedia,
    setWikipediaAccumulatedTime,
    setWikipediaSessionStart,
    setTopicIndex,
  ]);

  // Add transitions with instructional messages from ALL-ie
  const handleBiasExplanationClose = useCallback(() => {
    setShowBiasExplanation(false);
    setShowRatingModal(false);

    setClickedReviewButtonThisPhase(true);
    setCurrentAnswerData(null);
    setQuestionAnswered(false);
    setIsBotThinking(false);
    setIsBotTyping(false);
    setHasShownWikipediaInPhase(false);

    setTimeout(() => {
      setSelectedBiasData(null);
      setToneRating('');
      setConfidenceRating('');
      setActiveTab('AIChatBot');

      setTimeout(() => {
        setTopicIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;

          // Navigate to IDE introduction after Phase 3
          if (nextIndex >= getOrderedTopics.length && currentPhase < 4) {
            setTimeout(() => {
              startExercise();
              navigate('/Lab13/Exercise/IDEIntroduction');
            }, 300);
            return prevIndex;
          }

          if (currentPhase === 4) {
            phase4IntroAddedRef.current = false;
            setTimeout(() => {
              startExercise();
              navigate('/Lab13/Exercise/Conclusion');
            }, 300);
            return prevIndex;
          }

          // Reset Wikipedia tracking for new phase
          setHasVisitedWikipedia(false);
          setWikipediaAccumulatedTime(0);
          setWikipediaSessionStart(null);
          setCurrentDisplayTime(0);
          setClickedReviewButtonThisPhase(false);

          setCurrentPhase(nextIndex + 1);

          const nextTopic = getOrderedTopics[nextIndex];
          if (nextTopic) {
            setTimeout(() => {
              setChatMessages((prev) => [
                ...prev,
                {
                  id: `transition-${nextIndex}`,
                  sender: 'bot',
                  text: `Let's continue. Select another prompt.`,
                  timestamp: new Date(),
                },
              ]);
            }, 800);
          }

          return nextIndex;
        });
      }, 200);
    }, 100);
  }, [
    getOrderedTopics,
    setChatMessages,
    setHasVisitedWikipedia,
    setWikipediaAccumulatedTime,
    setWikipediaSessionStart,
    setCurrentPhase,
    currentPhase,
  ]);

  const handleAnswerSelected = useCallback(
    (biasType, biasDefinition, explanation, aiResponseText) => {
      setSelectedBiasData({
        biasType,
        biasDefinition,
        explanation,
        aiResponseText,
      });
      setShowRatingModal(true);
    },
    []
  );

  const handleRatingSubmit = useCallback(() => {
    setShowRatingModal(false);
    setShowBiasExplanation(true);
  }, []);

  const biasDefinition = selectedBiasData
    ? BIAS_DEFINITIONS[selectedBiasData.biasType]
    : null;

  const handleAnswerDataChange = useCallback((data) => {
    setCurrentAnswerData(data);
    setQuestionAnswered(true);
  }, []);

  return (
    <div className="tw-relative tw-h-full">
      {/* Full-screen overlay when modal is shown */}
      {(showRatingModal || showBiasExplanation) && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-40 tw-pointer-events-none" />
      )}

      {activeTopic && topicData && (
        <>
          <div
            className={
              showRatingModal || showBiasExplanation
                ? 'tw-relative tw-z-10'
                : ''
            }
          >
            <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
              <Tab label="AIChatBot">
                <div className="tw-h-full tw-flex tw-flex-col">
                  <div className="tw-flex-1 tw-overflow-auto">
                    <AIChatBot
                      userQuestions={getAvailableQuestions.map((q, index) => ({
                        id: index + 1,
                        text: q.text,
                        originalIndex:
                          q.originalIndex !== undefined
                            ? q.originalIndex
                            : index,
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
                      showConfidenceScore={
                        currentPhase === 4 && showConfidenceScore
                      }
                      showCitations={currentPhase === 4 && showCitations}
                      disclaimerMessage={
                        currentPhase === 4 ? disclaimerMessage : ''
                      }
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

                    {/* Wikipedia requirement warning for phase 3 */}
                    {/* {requireWikipedia &&
                      !canReviewResponse &&
                      currentAnswerData && (
                        <div className="tw-mb-2 tw-text-sm tw-text-orange-600 tw-font-medium">
                          {!hasVisitedWikipedia
                            ? 'Visit the ALLpedia tab before reviewing'
                            : `Please spend ${15 - getWikipediaTimeSpent()} more seconds on ALLpedia`}
                        </div>
                      )} */}

                    {canReviewResponse && (
                      <button
                        onClick={() => {
                          setClickedReviewButtonThisPhase(true);

                          handleAnswerSelected(
                            currentAnswerData.biasType,
                            currentAnswerData.biasDefinition,
                            currentAnswerData.explanation,
                            currentAnswerData.aiResponseText
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

              {/* ALLpedia Tab, from phase 2 onwards */}
              {showWikipediaTab && (
                <Tab label="ALLpedia">
                  <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-bg-white tw-overflow-auto">
                    {/* Header with Title and Timer */}
                    <div className="tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-p-6 tw-border-b tw-border-blue-200">
                      <div className="tw-grid tw-grid-cols-3 tw-items-center tw-max-w-6xl tw-mx-auto tw-gap-4">
                        {/* Left: Empty spacer for balance */}
                        <div className="tw-w-full">
                          {/* Empty div for grid balance */}
                        </div>

                        {/* Title */}
                        <div className="tw-text-center">
                          <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800">
                            {wikipediaContent.title}
                          </h1>
                        </div>

                        {/* Timer */}
                        <div className="tw-flex tw-justify-end">
                          {requireWikipedia && (
                            <div className="tw-flex tw-flex-col tw-items-end">
                              {currentDisplayTime >= 15 ? (
                                <div className="tw-flex tw-items-center tw-gap-2">
                                  <span className="tw-text-3xl tw-text-green-600">
                                    ✓
                                  </span>
                                  <span className="tw-text-lg tw-font-semibold tw-text-green-600">
                                    Complete
                                  </span>
                                </div>
                              ) : (
                                <ProgressBar
                                  duration={15 - currentDisplayTime}
                                  disableTitle
                                  className="tw-w-36"
                                />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Text on left and image on right */}
                    <div className="tw-flex-1 tw-p-8">
                      <div className="tw-max-w-6xl tw-mx-auto tw-grid tw-grid-cols-2 tw-gap-8">
                        {/* Left: Text Content */}
                        <div className="tw-pr-4">
                          <div className="tw-prose tw-prose-lg">
                            {wikipediaContent.text
                              .split('\n\n')
                              .map((paragraph, index) => (
                                <p
                                  key={index}
                                  className="tw-text-gray-700 tw-leading-relaxed tw-mb-4 tw-text-left"
                                >
                                  {paragraph}
                                </p>
                              ))}
                          </div>
                        </div>

                        {/* Image */}
                        <div className="tw-flex tw-items-start tw-justify-center">
                          <img
                            src={wikipediaContent.imageUrl}
                            alt={wikipediaContent.title}
                            className="tw-w-full tw-h-auto tw-rounded-lg tw-shadow-lg tw-object-cover"
                            style={{ maxHeight: '400px' }}
                          />
                        </div>
                      </div>

                      {/* Sources at bottom */}
                      <div className="tw-max-w-6xl tw-mx-auto tw-mt-12 tw-pt-6 tw-border-t tw-border-gray-200">
                        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mb-3">
                          Sources:
                        </h3>
                        <ul className="tw-list-none tw-space-y-2">
                          {wikipediaContent.sources.map((source, index) => (
                            <li key={index}>
                              <a
                                href={source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tw-text-blue-600 hover:tw-text-blue-800 tw-underline tw-break-all"
                              >
                                {source}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab>
              )}
            </Tabs>
          </div>

          <RatingModal
            show={showRatingModal}
            setShow={setShowRatingModal}
            toneRating={toneRating}
            setToneRating={setToneRating}
            confidenceRating={confidenceRating}
            setConfidenceRating={setConfidenceRating}
            onSubmit={handleRatingSubmit}
            showTextModal={showBiasExplanation}
            setShowTextModal={setShowBiasExplanation}
            textModalHeader={
              biasDefinition ? (
                <div className="tw-text-xl tw-font-bold tw-text-textGray tw-pb-0 tw-mb-0 tw-body-text">
                  {biasDefinition.name}
                </div>
              ) : null
            }
            textModalBody={
              selectedBiasData && biasDefinition ? (
                <div className="tw-p-4 tw-pt-0 tw-text-sm tw-text-gray-700">
                  {selectedBiasData.aiResponseText && (
                    <div className="tw-mb-2 tw-p-1 tw-bg-gray-50 tw-rounded tw-border tw-border-gray-200">
                      <p className=" tw-text-left tw-text-gray-700 tw-body-text">
                        <strong>Given AI Response: </strong>
                        <em>&quot;{selectedBiasData.aiResponseText}&quot;</em>
                      </p>
                    </div>
                  )}
                  <div className="tw-mb-2">
                    <p className="tw-text-left tw-text-gray-600 tw-border-l-4 tw-border-primary-blue tw-pl-1 tw-pb-3 tw-body-text">
                      {selectedBiasData.explanation}
                    </p>
                  </div>
                  <div className="tw-bg-blue-50 tw-p-1 tw-rounded tw-mb-2">
                    <h5 className="tw-font-bold tw-mb-2">
                      What is {biasDefinition.name}?
                    </h5>
                    <p className="tw-body-text">{biasDefinition.definition}</p>
                  </div>
                </div>
              ) : null
            }
            onCloseTextModal={handleBiasExplanationClose}
          />
        </>
      )}

      {!activeTopic && (
        <div className="tw-text-center tw-py-8">
          <p className="tw-text-lg tw-text-gray-600">
            Please complete the ranking to see questions.
          </p>
        </div>
      )}
    </div>
  );
};

export default AIPanel;
