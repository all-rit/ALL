// library imports
import React, { useEffect } from "react";
import { Router } from "@reach/router";
// component imports
import AddressRepair from "./Repairs/Address/AddressRepair";
import DateRepair from "./Repairs/Date/DateRepair";
import NavRepairPage from "./Repairs/Nav/NavRepairPage";
import { EXERCISE_STATES } from "../../../../constants/lab9";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * LocalizationRepair is a Route wrapper component that is responsible for declaring the
 * structure for routing of individual repair pages. this allows for the addition of repairs
 * in the future by then only needing to import the component to one location
 * @returns
 */
const LocalizationRepair = () => {
  const { actions, state } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <Router className="app">
      <DateRepair
        path={`${EXERCISE_STATES.REPAIR_DATE_REPAIR}`}
        user={state.main.user}
        actions={actions}
      />
      <AddressRepair
        path={`${EXERCISE_STATES.REPAIR_ADDRESS_FORM}`}
        user={state.main.user}
        actions={actions}
      />
      <NavRepairPage
        path={`${EXERCISE_STATES.REPAIR_NAV_BAR}`}
        user={state.main.user}
        actions={actions}
      />
    </Router>
  );
};

export default LocalizationRepair;
