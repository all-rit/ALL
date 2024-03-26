import React from "react";
import Content from "./components/Content";
import ExerciseInstructions from "./components/ExerciseInstructions";
import Popup from "../../all-components/Popup";
import SoundHeader from "./components/SoundHeader";
import {
  Lab1ContextProvider,
  useLab1StateContext,
} from "src/reducers/lab1/Lab1Context";

/**
 * Main component for the Lab1 exercise.
 * Renders the Lab1ContextProvider and its child components.
 *
 * @returns {JSX.Element} The rendered Main component.
 */
const Main = () => {
  const { state: lab1State, actions: lab1Actions } = useLab1StateContext();

  return (
    <Lab1ContextProvider>
      <SoundHeader />
      <Content />
      <ExerciseInstructions />
      <Popup
        message={lab1State.popupMessage}
        handler={lab1Actions.updatePopup}
      />
    </Lab1ContextProvider>
  );
};

export default Main;
