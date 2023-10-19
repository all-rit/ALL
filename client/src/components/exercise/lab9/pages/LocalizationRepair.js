import { useContext } from "react";
import GameStateContext from "../Lab9Context";
import { GAME_STATES } from "../../../../constants/lab9";

const LocalizationRepair = () => {
  const { exerciseState } = useContext(GameStateContext);
  switch (exerciseState) {
    case GAME_STATES.REPAIR_NAV_BAR:
      console.log();
      break;
    case GAME_STATES.REPAIR_ADDRESS_FORM:
      console.log();
      break;
    case GAME_STATES.REPAIR_DATE_REPAIR:
      console.log();
      break;
  }
};

export default LocalizationRepair;
