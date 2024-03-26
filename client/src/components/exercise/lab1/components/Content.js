import React from "react";
import { EXERCISE_ENDED } from "../../../../constants/lab1";
import Playthrough from "./Playthrough";
import AppInstructions from "./AppInstructions";
import Exercise from "./Exercise";
import Repair from "./Repair";
import { useLab1StateContext } from "src/reducers/lab1/Lab1Context";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";

/**
 * Renders the content of the exercise lab1.
 *
 * @returns {JSX.Element} The content component.
 */
const Content = () => {
  const { state: lab1State } = useLab1StateContext();
  const { state: mainState } = useMainStateContext();

  return (
    <main className="content">
      <Playthrough visible={mainState.userState === EXERCISE_IDLE} />

      <AppInstructions
        visible={
          lab1State.exerciseState !== EXERCISE_ENDED &&
          lab1State.exerciseState !== EXERCISE_IDLE
        }
      />
      <Repair
        visible={
          lab1State.repairVisible && lab1State.exerciseState === EXERCISE_IDLE
        }
      />
      <Exercise />
    </main>
  );
};

export default Content;
