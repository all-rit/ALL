// library imports
import React, { useEffect } from "react";
import { Router } from "@reach/router";
// component imports
import WordCountRepair from "./Repairs/WordCountRepair";
import SentenceCountRepair from "./Repairs/SentenceCountRepair";
import ComplexWordCountRepair from "./Repairs/ComplexWordCountRepair";
import { EXERCISE_STATES } from "../../../../constants/lab11";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * LiteracyRepair is a Route wrapper component that is responsible for declaring the
 * structure for routing of individual repair pages. this allows for the addition of repairs
 * in the future by then only needing to import the component to one location
 * @param {Object} user is a string representing user id for data retrieval purposes.
 * @returns
 */
const LiteracyRepair = () => {
  const { state, actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <Router className="app">
      <WordCountRepair
        path={`${EXERCISE_STATES.REPAIR_WORD_COUNT}`}
        user={state.main.user}
      />
      <SentenceCountRepair
        path={`${EXERCISE_STATES.REPAIR_SENTENCE_COUNT}`}
        user={state.main.user}
      />
      <ComplexWordCountRepair
        path={`${EXERCISE_STATES.REPAIR_COMPLEX_WORDS}`}
        user={state.main.user}
      />
    </Router>
  );
};

export default LiteracyRepair;
