/* eslint-disable no-empty-pattern */
import React from "react";
import PropTypes from "prop-types";
import useRepairDate from "../../hooks/useRepairDate";
import Repair from "../../../../body/Repair/Repair";
import {
  // eslint-disable-next-line no-unused-vars
  REPAIR_DATE_REPAIR_HEADING,
  GAME_STATES,
  REPAIR,
} from "../../../../../constants/lab9";

/**
 * Date Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {String} user contains user id for data state and logging user input
 * @returns
 */

const DateRepair = ({ user }) => {
  // eslint-disable-next-line no-unused-vars
  const { data, functions } = useRepairDate(user);
  return (
    <Repair
      path={`${REPAIR}/${GAME_STATES.REPAIR_ADDRESS_FORM}`}
      CodeImplementation={() => {}}
      navigateNext={() => {}}
    />
  );
};

DateRepair.propTypes = {
  user: PropTypes.string.isRequired,
};
export default DateRepair;