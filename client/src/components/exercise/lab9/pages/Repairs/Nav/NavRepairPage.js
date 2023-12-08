import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Repair from "../../../../../body/Repair/Repair";
import {
  HEADINGS,
  EXERCISE_STATES,
  REPAIR,
} from "../../../../../../constants/lab9";
import NavBarRepair from "./NavBarRepair";
import useDataService from "../../../hooks/useDataService";
import { navigate } from "@reach/router";
import NavBarData from "../../../../../../constants/lab9/NavBarData";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * Nav Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {Object} user contains user id for data state and logging user input
 * @returns
 */

const NavRepairPage = ({ user }) => {
  const { actions } = useMainStateContext();
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.REPAIR_NAV_BAR,
    NavBarData.navItems
  );
  const { exercisePromptsState, isInputValid, isFirst } = data;
  const { handleUserInputChange, checkInputValid, fetchRepair, postRepair } =
    functions;

  const handleNav = () => {
    navigate("/Lab9/Exercise/page");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <Repair
      fileName={"NavBar.js"}
      path={`${REPAIR}/${EXERCISE_STATES.REPAIR_NAV_BAR}`}
      headingText={HEADINGS.REPAIR_NAV_HEADING}
      validateRepair={checkInputValid}
      fetchRepair={() => fetchRepair()}
      submitRepair={() => postRepair()}
      repairText={[
        "in this section you will be making changes to the repair data file below",
      ]}
      CodeImplementation={
        <NavBarRepair
          navItems={exercisePromptsState}
          userInput={handleUserInputChange}
          isInputValid={isInputValid}
          isFirst={isFirst}
        />
      }
      navigateNext={() => handleNav()}
    />
  );
};

NavRepairPage.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
};
export default NavRepairPage;
