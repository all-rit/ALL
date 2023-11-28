/* eslint-disable no-empty-pattern */
import React from "react";
import PropTypes from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import DateFormData from "../../../../../constants/lab9/DateFormData";
import {
  REPAIR_DATE_REPAIR_HEADING,
  GAME_STATES,
  REPAIR,
} from "../../../../../constants/lab9";
import DateFormRepair from "../DateFormRepair";
import useDataService from "../hooks/useDataService";
import { navigate } from "@reach/router";
/**
 * Date Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {String} user contains user id for data state and logging user input
 * @returns
 */

const DateRepair = ({ user }) => {
  const { data, functions } = useDataService(
    user,
    GAME_STATES.REPAIR_DATE_REPAIR,
    DateFormData.countries
  );
  const handleNav = () => {
    navigate("/Lab9/Exercise/page");
  };
  const { exercisePromptsState, repairComplete } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
    functions;
  return (
    <Repair
      fileName={"DateFormat.js"}
      path={`${REPAIR}/${GAME_STATES.REPAIR_DATE_REPAIR}`}
      headingText={REPAIR_DATE_REPAIR_HEADING}
      repairComplete={repairComplete}
      validateRepair={checkInputValid}
      fetchRepair={() => fetchRepair()}
      submitRepair={() => postRepair()}
      repairText={[
        "in this section you will be making changes to the repair data file below",
      ]}
      CodeImplementation={
        <DateFormRepair
          dateForms={exercisePromptsState}
          userInput={handleUserInputChange}
          repairError={checkInputValid}
        />
      }
      navigateNext={() => handleNav()}
    />
  );
};

DateRepair.propTypes = {
  user: PropTypes.object,
};
export default DateRepair;
