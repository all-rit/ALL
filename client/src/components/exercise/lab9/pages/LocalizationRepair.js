// library imports
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Router } from "@reach/router";
// component imports
import AddressRepair from "./Repairs/AddressRepair";
import DateRepair from "./Repairs/DateRepair";
import NavRepairPage from "./Repairs/NavRepairPage";
import { EXERCISE_STATES } from "../../../../constants/lab9";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * LocalizationRepair is a Route wrapper component that is responsible for declaring the
 * structure for routing of individual repair pages. this allows for the addition of repairs
 * in the future by then only needing to import the component to one location
 * @param {String} user is a string representing user id for data retrieval purposes.
 * @returns
 */
const LocalizationRepair = ({ user }) => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <Router className="app">
      <DateRepair
        path={`${EXERCISE_STATES.REPAIR_DATE_REPAIR}`}
        user={user}
        actions={actions}
      />
      <AddressRepair
        path={`${EXERCISE_STATES.REPAIR_ADDRESS_FORM}`}
        user={user}
        actions={actions}
      />
      <NavRepairPage
        path={`${EXERCISE_STATES.REPAIR_NAV_BAR}`}
        user={user}
        actions={actions}
      />
    </Router>
  );
};

LocalizationRepair.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
};

export default LocalizationRepair;
