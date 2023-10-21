import React from "react";
import { PropTypes } from "prop-types";
import Repair from "../../../../body/Repair/Repair";
import { GAME_STATES, REPAIR } from "../../../../../constants/lab9";

const NavBarRepair = () => {
  return (
    <Repair
      path={`${REPAIR}/${GAME_STATES.REPAIR_NAV_BAR}`}
      CodeImplementation={() => {}}
      navigateNext={() => {}}
    />
  );
};

NavBarRepair.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBarRepair;
