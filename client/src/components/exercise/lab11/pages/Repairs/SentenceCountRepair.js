import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import {
  EXERCISE_PATH,
  EXERCISE_STATES,
  REPAIR,
} from "../../../../../constants/lab11";
import useSentenceCountRepair from "../../hooks/useSentenceCountRepair";
import { navigate } from "@reach/router";
/**
 * SentenceCountRepair: is a Component responsible for passing in both logic and information
 * into the universal repair component. This allows for the ability to handle the custom routing
 * and custom implementation for the address repair for lab 9 localization.
 * @param {String} user contains user id for data state and logging user input
 * @returns Component to handle custom logic for the lab.
 */
const SentenceCountRepair = (user = "") => {
  // eslint-disable-next-line no-unused-vars
  const { data, functions } = useSentenceCountRepair(user);
  return (
    <Repair
      path={`${REPAIR}/${EXERCISE_STATES.REPAIR_SENTENCE_COUNT}`}
      CodeImplementation={() => {}}
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/InformationLetterSentenceCount`);
      }}
      headingText={"Sentence Count Repair"}
      repairText={["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}
      fileName={"FogIndexCalculation.js"}
      validateRepair={() => {}}
    />
  );
};

SentenceCountRepair.propTypes = {
  user: PropTypes.object,
};

export default SentenceCountRepair;
