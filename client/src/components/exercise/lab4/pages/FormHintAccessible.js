import React, { Fragment, useEffect, useState } from "react";
import AppInstructions from "../components/AppInstructions";
import ExtraNav from "../components/ExtraNav";
import FormComp from "../components/FormComp";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const FormHintAccessible = () => {
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
  const url = "/Lab4/Exercise/Finish";
  const tab = "0";
  const name = "FormHintAccessible";

  return (
    <Fragment>
      <a className="skip-main" href="#main">
        Skip to main content
      </a>
      <ExtraNav />

      <AppInstructions
        className={classState}
        instructions2={instructions2}
        instructions={instructions}
      />
      <FormComp
        url={url}
        rule={true}
        showTab={true}
        tab={tab}
        parentCallback={callbackFunction}
        name={name}
      />
    </Fragment>
  );
};

export default FormHintAccessible;
