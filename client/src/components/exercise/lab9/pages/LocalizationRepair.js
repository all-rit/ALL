/* eslint-disable no-empty-pattern */
/* eslint-disable no-case-declarations */
import React, { useContext } from "react";
import GameStateContext from "../Lab9Context";
import { GAME_STATES } from "../../../../constants/lab9";
import useRepairDate from "../hooks/useRepairDate";
import Repair from "../../../body/Repair/Repair";

// eslint-disable-next-line react/prop-types
const LocalizationRepair = ({ user }) => {
  const { exerciseState } = useContext(GameStateContext);
  switch (exerciseState) {
    case GAME_STATES.REPAIR_DATE_REPAIR:
      const { data, functions } = useRepairDate(user);
      const {} = data;
      const {} = functions;
      return <Repair path={"date-repair"} CodeImplementation={() => {}} />;
  }
};

export default LocalizationRepair;
