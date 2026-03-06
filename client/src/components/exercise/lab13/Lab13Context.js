import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
const ExerciseStateContext = createContext({
  // Existing user info state
  exerciseState: "",
  setExerciseState: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  preferredName: "",
  setPreferredName: () => {},
  pronouns: "",
  setPronouns: () => {},
  college: "",
  setCollege: () => {},
  major: "",
  setMajor: () => {},
  gradTerm: "",
  setGradTerm: () => {},

  // Ranking state
  rankingSuccess: false,
  setRankingSuccess: () => {},
  rankingColumns: [],
  setRankingColumns: () => {},
  rankingBank: [],
  setRankingBank: () => {},
  rankingComplete: false,
  setRankingComplete: () => {},
  resetRanking: () => {},

  // Save chat history
  chatMessages: [],
  setChatMessages: () => {},
  resetChatMessages: () => {},

  // Wikpedia page states
  currentPhase: 1,
  setCurrentPhase: () => {},
  hasVisitedWikipedia: false,
  setHasVisitedWikipedia: () => {},
  wikipediaTimeSpent: 0,
  setWikipediaTimeSpent: () => {},

  // IDE fix states
  showConfidenceScore: false,
  setShowConfidenceScore: () => {},
  showCitations: false,
  setShowCitations: () => {},
  disclaimerMessage: "",
  setDisclaimerMessage: () => {},
  // Question tracking states
  askedQuestions: [],
  setAskedQuestions: () => {},
});

export const ExerciseStateProvider = ({ children }) => {
  const [exerciseState, setExerciseState] = useState("submitting");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [gradTerm, setGradTerm] = useState("");

  // Ranking state
  const [rankingSuccess, setRankingSuccess] = useState(false);
  const [rankingColumns, setRankingColumns] = useState(() => []); // Initialize as empty array
  const [rankingBank, setRankingBank] = useState(() => []); // Initialize as empty array
  const [rankingComplete, setRankingComplete] = useState(false);

  // Chat history state
  const [chatMessages, setChatMessages] = useState([]);

  // Wikpedia page tracking states
  const [wikipediaTimeSpent, setWikipediaTimeSpent] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(1);
  const [hasVisitedWikipedia, setHasVisitedWikipedia] = useState(false);
  const [wikipediaAccumulatedTime, setWikipediaAccumulatedTime] = useState(0);
  const [wikipediaSessionStart, setWikipediaSessionStart] = useState(null);

  // Post IDE fix tracking states
  const [showConfidenceScore, setShowConfidenceScore] = useState(false);
  const [showCitations, setShowCitations] = useState(false);
  const [disclaimerMessage, setDisclaimerMessage] = useState("");

  // Question tracking states
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [topicIndex, setTopicIndex] = useState(0);

  // Reset ranking function
  const resetRanking = () => {
    setRankingSuccess(false);
    setRankingColumns([]);
    setRankingBank([]);
    setRankingComplete(false);
  };

  const resetChatMessages = () => {
    setChatMessages([]);
  };

  const [exercisePromptsState, setExercisePromptsState] = useState([
    {
      id: "disclaimer",
      fileId: 0,
      value: "",
    },
    {
      id: "confidence",
      fileId: 0,
      value: false,
    },
    {
      id: "citations",
      fileId: 0,
      value: false,
    },
  ]);

  const [validInputs, setValidInputs] = useState({
    disclaimer: null,
    confidence: null,
    citations: null,
  });
  const [isFirst, setIsFirst] = useState(true);

  const handleUserInputChange = (id, value) => {
    setExercisePromptsState((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item)),
    );
    setIsFirst(false);
  };

  const checkInputValid = () => {
    const disclaimerValue = exercisePromptsState
      .find((i) => i.id === "disclaimer")
      .value.trim()
      .toLowerCase();
    // The disclaimer should be at least 20 characters, and include the words "verify" and "output"
    const disclaimerValid =
      disclaimerValue.length >= 20 &&
      /\bverify\b/.test(disclaimerValue) &&
      /\boutput\b/.test(disclaimerValue);
    const confidenceValid =
      exercisePromptsState.find((i) => i.id === "confidence").value.trim() ===
      "true";
    const citationsValid =
      exercisePromptsState.find((i) => i.id === "citations").value.trim() ===
      "true";

    setValidInputs({
      disclaimer: disclaimerValid,
      confidence: confidenceValid,
      citations: citationsValid,
    });
    return disclaimerValid && confidenceValid && citationsValid;
  };

  // No-ops for fetchRepair/postRepair for this exercise
  const fetchRepair = () => {};
  const postRepair = () => {};

  return (
    <ExerciseStateContext.Provider
      value={{
        // Existing context values
        exerciseState,
        setExerciseState,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        preferredName,
        setPreferredName,
        pronouns,
        setPronouns,
        college,
        setCollege,
        major,
        setMajor,
        gradTerm,
        setGradTerm,
        rankingSuccess,
        setRankingSuccess,
        rankingColumns,
        setRankingColumns,
        rankingBank,
        setRankingBank,
        rankingComplete,
        setRankingComplete,
        resetRanking,
        // --- REPAIR SECTION CONTEXT ---
        exercisePromptsState,
        setExercisePromptsState,
        validInputs,
        setValidInputs,
        isFirst,
        setIsFirst,
        handleUserInputChange,
        checkInputValid,
        fetchRepair,
        postRepair,
        // --- CHAT HISTORY IN AICHATBOT ---
        chatMessages,
        setChatMessages,
        resetChatMessages,
        // --- WIKIPEDIA PAGE TRACKING ---
        wikipediaTimeSpent,
        setWikipediaTimeSpent,
        currentPhase,
        setCurrentPhase,
        hasVisitedWikipedia,
        setHasVisitedWikipedia,
        wikipediaAccumulatedTime,
        setWikipediaAccumulatedTime,
        wikipediaSessionStart,
        setWikipediaSessionStart,

        showConfidenceScore,
        setShowConfidenceScore,
        showCitations,
        setShowCitations,
        disclaimerMessage,
        setDisclaimerMessage,
        askedQuestions,
        setAskedQuestions,
        topicIndex,
        setTopicIndex,
      }}
    >
      {children}
    </ExerciseStateContext.Provider>
  );
};

ExerciseStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLab13 = () => useContext(ExerciseStateContext);

export default ExerciseStateContext;
