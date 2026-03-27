import React, { Fragment, useEffect } from "react";
import Simulation from "../../components/Simulation";
import "../../../../../assets/stylesheets/components/Simulation.scss";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * Renders the AI simulation component.
 * @returns {JSX.Element} The rendered AI simulation component.
 */
const AISimulation = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <Fragment>
      <Simulation />
    </Fragment>
  );
};

export default AISimulation;
