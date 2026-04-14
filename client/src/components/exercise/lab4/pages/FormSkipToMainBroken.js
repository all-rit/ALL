import React, { useState, useEffect } from "react";
import AppInstructions from "../components/AppInstructions";
import ExtraNav from "../components/ExtraNav";
import FormComp from "../components/FormComp";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const FormSkipToMainBroken = () => {
  const { actions } = useMainStateContext();

  const [classState, setClassState] = useState("app__instructions2");

  const callbackFunction = () => {
    setClassState("app__instructions3");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const instructions =
    "Complete the form below. Use tab to go next, and shift+tab to go back.";
  const instructions2 = "Do not use the mouse!";
  const url = "/Lab4/Exercise/BypassBlocksGuideline";
  const name = "FormSkipToMainBroken";

  return (
    <div className="tw-z-50">
      <ExtraNav />
      <AppInstructions
        className={classState}
        instructions2={instructions2}
        instructions={instructions}
      />
      <FormComp url={url} parentCallback={callbackFunction} name={name} />
    </div>
  );
};

export default FormSkipToMainBroken;
