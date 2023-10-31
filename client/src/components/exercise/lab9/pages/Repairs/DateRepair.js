/* eslint-disable no-empty-pattern */
import React from "react";
import PropTypes from "prop-types";
import useRepairData from "../../hooks/useRepairData";
import Repair from "../../../../body/Repair/Repair";
import {
  REPAIR_DATE_REPAIR_HEADING,
  GAME_STATES,
  REPAIR,
} from "../../../../../constants/lab9";
import DateFormRepair from "../DateFormRepair";
import {
  RepairService,
  endpoints,
} from "../../../../../services/lab9/RepairService";
/**
 * Date Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {String} user contains user id for data state and logging user input
 * @returns
 */

const DateRepair = ({ user }) => {
  const { data, functions } = useRepairData(
    user,
    RepairService.getRepair,
    RepairService.submitRepair,
    endpoints.GET_DATE_REPAIR,
    endpoints.POST_DATE_REPAIR
  );
  const { exercisePromptsState } = data;
  const { handleUserInputChange, checkInputValid } = functions;
  return (
    <Repair
      fileName={"DateFormat.js"}
      path={`${REPAIR}/${GAME_STATES.REPAIR_DATE_REPAIR}`}
      headingText={REPAIR_DATE_REPAIR_HEADING}
      validateRepair={checkInputValid}
      repairText={[
        "in this section you will be making changes to the repair data file below",
      ]}
      CodeImplementation={
        <DateFormRepair
          dateForms={exercisePromptsState}
          userInput={handleUserInputChange}
        />
      }
      navigateNext={() => {}}
    />
  );
};

DateRepair.propTypes = {
  user: PropTypes.object,
};
export default DateRepair;
