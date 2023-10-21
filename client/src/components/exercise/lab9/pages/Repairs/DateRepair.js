/* eslint-disable no-empty-pattern */
import React from "react";
import { PropTypes } from "prop-types";
import useRepairDate from "../../hooks/useRepairDate";
import Repair from "../../../../body/Repair/Repair";
import { GAME_STATES, REPAIR } from "../../../../../constants/lab9";

const DateRepair = ({ user = "" }) => {
  const { data, functions } = useRepairDate(user);
  const {} = data;
  const {} = functions;
  return <Repair path={`${REPAIR}/${GAME_STATES.REPAIR_DATE_REPAIR}`} CodeImplementation={() => { }} navigateNext={ () => {}} />;
};

DateRepair.propTypes = {
  user: PropTypes.string.isRequired,
}
export default DateRepair;
