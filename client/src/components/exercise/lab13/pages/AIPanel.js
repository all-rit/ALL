import { React, useContext, useMemo, useState, useEffect, useRef } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import { Tabs } from "../../../all-components/Tab/Tabs";
import ExerciseStateContext from "../Lab13Context";
import { getTopicById } from "src/constants/lab13/BiasQuestionsConfig";
import { content } from "src/constants/lab13/WikipediaContent";
import AIPanelRatingModal from "../components/AIPanel/AIPanelRatingModal";
import AIChatBotTab from "../components/AIPanel/AIChatBotTab";
import AllPediaTab from "../components/AIPanel/AllPediaTab";

const AIPanel = () => {
  const {
    rankingColumns,
    chatMessages,
    setChatMessages,
    setHasVisitedWikipedia,
    currentPhase,
    setCurrentPhase,
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
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [activeTab, setActiveTab] = useState("AIChatBot");
  const [currentDisplayTime, setCurrentDisplayTime] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const phase4IntroAddedRef = useRef(false);
  const [toneRating, setToneRating] = useState("");
  const [confidenceRating, setConfidenceRating] = useState("");
  const [clickedReviewButtonThisPhase, setClickedReviewButtonThisPhase] =
    useState(false);

  // State to track when to show the wikipedia page
  const [hasShownWikipediaInPhase, setHasShownWikipediaInPhase] =
    useState(false);

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

    if (activeTab === "ALLpedia" && showWikipediaTab) {
      // Mark as visited

      setHasVisitedWikipedia(true);

      // Start new session if not already started
      if (!wikipediaSessionStart) {
        setWikipediaSessionStart(Date.now());
      }

      intervalId = setInterval(() => {
        if (wikipediaSessionStart) {
          const sessionElapsed = Math.floor(
            (Date.now() - wikipediaSessionStart) / 1000,
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
          (Date.now() - wikipediaSessionStart) / 1000,
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

  const wikipediaContent =
    content[activeTopic?.toLowerCase()] || content.localization;

  // Initialize first exercise chat with the ALLie greeting
  useEffect(() => {
    if (chatMessages.length === 0 && currentTopic) {
      setChatMessages([
        {
          id: "greeting",
          sender: "bot",
          text: `Hi! I'm ALL-IE the AI. What can I help you with?`,
          timestamp: new Date(),
          isNew: true,
        },
      ]);
      setCurrentPhase(1);
    }
  }, [currentTopic, chatMessages.length, setChatMessages, setCurrentPhase]);

  // Initialize phase 4 after IDE fixes
  useEffect(() => {
    if (currentPhase === 4 && currentTopic) {
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
        console.warn("Phase 4 should be on least topic! Forcing to index 2");
        setTopicIndex(2);
        return;
      }

      // Add intro message once
      if (!phase4IntroAddedRef.current && chatMessages.length > 0) {
        const lastMessage = chatMessages[chatMessages.length - 1];
        const phase4IntroText = `Let's continue. Select another prompt.`;

        if (
          lastMessage.text !== phase4IntroText &&
          !lastMessage.text.includes("implemented your IDE fixes")
        ) {
          phase4IntroAddedRef.current = true;

          setTimeout(() => {
            setQuestionAnswered(false);
            setChatMessages((prev) => [
              ...prev,
              {
                id: "phase4-intro",
                sender: "bot",
                text: phase4IntroText,
                timestamp: new Date(),
                isNew: true,
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
  const handleBiasExplanationClose = () => {
    setShowBiasExplanation(false);
    setShowRatingModal(false);

    setClickedReviewButtonThisPhase(true);
    setCurrentAnswerData(null);
    // Keep questionAnswered=true until the transition message is added,
    // so the question dropdown doesn't flash up between topics.
    setIsBotThinking(false);
    setIsBotTyping(false);
    setHasShownWikipediaInPhase(false);

    setTimeout(() => {
      setSelectedBiasData(null);
      setToneRating("");
      setConfidenceRating("");
      setActiveTab("AIChatBot");

      setTimeout(() => {
        setTopicIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;

          // Navigate to IDE introduction after Phase 3
          if (nextIndex >= getOrderedTopics.length && currentPhase < 4) {
            setTimeout(() => {
              setQuestionAnswered(false);
              startExercise();
              navigate("/Lab13/Exercise/IDEIntroduction");
            }, 300);
            return prevIndex;
          }

          if (currentPhase === 4) {
            phase4IntroAddedRef.current = false;
            setTimeout(() => {
              setQuestionAnswered(false);
              startExercise();
              navigate("/Lab13/Exercise/Conclusion");
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
              // Only allow question selection once the transition message is in place
              setQuestionAnswered(false);
              setChatMessages((prev) => [
                ...prev,
                {
                  id: `transition-${nextIndex}`,
                  sender: "bot",
                  text: `Let's continue. Select another prompt.`,
                  timestamp: new Date(),
                  isNew: true,
                },
              ]);
            }, 800);
          }

          return nextIndex;
        });
      }, 200);
    }, 100);
  };

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
                ? "tw-relative tw-z-10"
                : ""
            }
          >
            <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
              <AIChatBotTab
                currentTopic={currentTopic}
                topicData={topicData}
                setSelectedBiasData={setSelectedBiasData}
                setShowRatingModal={setShowRatingModal}
                setCurrentAnswerData={setCurrentAnswerData}
                setQuestionAnswered={setQuestionAnswered}
                showRatingModal={showRatingModal}
                showBiasExplanation={showBiasExplanation}
                clickedReviewButtonThisPhase={clickedReviewButtonThisPhase}
                showWikipediaTab={showWikipediaTab}
                currentDisplayTime={currentDisplayTime}
                currentAnswerData={currentAnswerData}
                questionAnswered={questionAnswered}
                isBotThinking={isBotThinking}
                isBotTyping={isBotTyping}
                requireWikipedia={requireWikipedia}
                activeTopic={activeTopic}
                setClickedReviewButtonThisPhase={
                  setClickedReviewButtonThisPhase
                }
                setIsBotThinking={setIsBotThinking}
                setIsBotTyping={setIsBotTyping}
                setCurrentQuestion={setCurrentQuestion}
                setActiveTab={setActiveTab}
              />
              {/* ALLpedia Tab, from phase 2 onwards */}
              {showWikipediaTab && (
                <AllPediaTab
                  wikipediaContent={wikipediaContent}
                  requireWikipedia={requireWikipedia}
                  currentDisplayTime={currentDisplayTime}
                  currentAnswerData={currentAnswerData}
                  currentQuestion={currentQuestion}
                  activeTopic={activeTopic}
                />
              )}
            </Tabs>
          </div>

          {/* Rating Modal for Phase 4, shows bias explanation after rating submission */}
          <AIPanelRatingModal
            showRatingModal={showRatingModal}
            setShowRatingModal={setShowRatingModal}
            showBiasExplanation={showBiasExplanation}
            setShowBiasExplanation={setShowBiasExplanation}
            selectedBiasData={selectedBiasData}
            setSelectedBiasData={setSelectedBiasData}
            handleBiasExplanationClose={handleBiasExplanationClose}
            setToneRating={setToneRating}
            setConfidenceRating={setConfidenceRating}
            toneRating={toneRating}
            confidenceRating={confidenceRating}
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
