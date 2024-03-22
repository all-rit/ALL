import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import Simulation from "../../components/Simulation";
import { ALTERATION_START } from "../../../../../constants/lab7";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";
import { useLab7StateContext } from "src/reducers/lab7/Lab7Context";

/**
 * Renders the Improved AI Simulation component.
 *
 * @returns {JSX.Element} The rendered Improved AI Simulation component.
 */
const ImprovedAISimulation = () => {
  const { state: mainState } = useMainStateContext();
  const { actions } = useLab7StateContext();

  useEffect(() => {
    if (mainState.userState === EXERCISE_PLAYING)
      actions.updateRedirectURL(ALTERATION_START);
    else setTimeout(() => navigate("/Lab7/Exercise/AICodeRepair"));
  }, []);

  return (
    <div>
      <p className="playthrough__sentence">Improved AI Simulation</p>
      <Simulation />
    </div>
  );
};

export default ImprovedAISimulation;
