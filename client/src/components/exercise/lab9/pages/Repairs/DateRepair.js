/* eslint-disable no-empty-pattern */
import React from "react";
import { PropTypes } from "prop-types";
import useRepairDate from "../../hooks/useRepairDate";
import Repair from "../../../../body/Repair/Repair";
import { GAME_STATES, REPAIR } from "../../../../../constants/lab9";
/**
 * Date Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {String} user contains user id for data state and logging user input
 * @returns
 */
const DateRepair = ({ user }) => {
  const { data, functions } = useRepairDate(user);
  const {} = data;
  const {} = functions;
  return (
    <Repair
      path={`${REPAIR}/${GAME_STATES.REPAIR_DATE_REPAIR}`}
      CodeImplementation={() => {}}
      navigateNext={() => {}}
    />
  );
};

DateRepair.propTypes = {
  user: PropTypes.object.isRequired,
};
export default DateRepair;
