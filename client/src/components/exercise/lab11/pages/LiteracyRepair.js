/* eslint-disable no-unused-vars */
// library imports
import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { Router } from "@reach/router";
// component imports
import WordCountRepair from "./Repairs/WordCountRepair";
import SentenceCountRepair from "./Repairs/SentenceCountRepair";
import ComplexWordCountRepair from "./Repairs/ComplexWordCountRepair";
import { EXERCISE_PLAYING, EXERCISE_STATES } from "../../../../constants/lab11";

/**
 * LiteracyRepair is a Route wrapper component that is responsible for declaring the
 * structure for routing of individual repair pages. this allows for the addition of repairs
 * in the future by then only needing to import the component to one location
 * @param {Object} user is a string representing user id for data retrieval purposes.
 * @returns
 */
const LiteracyRepair = (props) => {
  const { user = "", actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);
  
  return (
    <Router className="app">
      <WordCountRepair
        path={`${EXERCISE_STATES.REPAIR_WORD_COUNT}`}
        user={user}
      />
      <SentenceCountRepair
        path={`${EXERCISE_STATES.REPAIR_SENTENCE_COUNT}`}
        user={user}
      />
      <ComplexWordCountRepair
        path={`${EXERCISE_STATES.REPAIR_COMPLEX_WORDS}`}
        user={user}
      />
    </Router>
  );
};

LiteracyRepair.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
};

export default LiteracyRepair;
