import React from "react";
import { createContext, useState } from "react";
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

  // Reset ranking function
  const resetRanking = () => {
    setRankingSuccess(false);
    setRankingColumns([]);
    setRankingBank([]);
    setRankingComplete(false);
  };

  return (
    <ExerciseStateContext.Provider
      value={{
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
      }}
    >
      {children}
    </ExerciseStateContext.Provider>
  );
};

ExerciseStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExerciseStateContext;
