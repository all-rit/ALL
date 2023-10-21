/* eslint-disable no-unused-vars */
// library imports
import React from "react";
import { PropTypes } from "prop-types";
import { Router } from "@reach/router";
// component imports
import AddressRepair from "./Repairs/AddressRepair";
import DateRepair from "./Repairs/DateRepair";
import NavBarRepair from "./Repairs/NavBarRepair";
import { GAME_STATES } from "../../../../constants/lab9";

/**
 * LocalizationRepair is a Route wrapper component that is responsible for declaring the
 * structure for routing of individual repair pages. this allows for the addition of repairs 
 * in the future by then only needing to import the component to one location
 * @param {String} user is a string representing user id for data retrieval purposes.
 * @returns 
 */
const LocalizationRepair = ({ user }) => {
  return (
    <Router className="app">
      <DateRepair path={`${GAME_STATES.REPAIR_DATE_REPAIR}`} user={user} />
      <AddressRepair path={`${GAME_STATES.REPAIR_ADDRESS_FORM}`} user={user} />
      <NavBarRepair path={`${GAME_STATES.REPAIR_NAV_BAR}`} user={user} />
    </Router>
  )
};

LocalizationRepair.propTypes = {
  user: PropTypes.string.isRequired,
}
 

export default LocalizationRepair;
