/* eslint-disable no-empty-pattern */
import React from "react";
import { PropTypes } from "prop-types";
import useRepairDate from "../../hooks/useRepairDate";
import Repair from "../../../../body/Repair/Repair";
import { REPAIR_DATE_REPAIR_HEADING, GAME_STATES, REPAIR } from "../../../../../constants/lab9";
import DateFormRepair from "../DateFormRepair";
/**
 * Date Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {String} user contains user id for data state and logging user input
 * @returns
 */
const DateRepair = (props) => {
  const { user } = props;
   const { data, functions } = useRepairDate(user);
  const { exercisePromptsState } = data;
  const {} = functions;
  return (
    <Repair
      fileName={"DateFormat.js"}
      path={`${REPAIR}/${GAME_STATES.REPAIR_DATE_REPAIR}`}
      headingText={REPAIR_DATE_REPAIR_HEADING }
      repairText={["in this section you will be making changes to the repair data file below"]}
      CodeImplementation={<DateFormRepair dateForms={exercisePromptsState}/>}
      navigateNext={() => {}}
    />
  );
};

DateRepair.propTypes = {
  user: PropTypes.string.isRequired,
};
export default DateRepair;
