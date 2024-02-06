import React, { useState } from "react";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import Form from "../../components/Form";
import { navigate } from "@reach/router";
import useLab5StateContext from "src/reducers/lab5/Lab5Context";

const FormAccessible = () => {
  const [showNext, setShowNext] = useState(false);
  const componentName = "FormAccessible";

  const showNextFunc = () => {
    setShowNext(true);
  };

  const handleNav = () => {
    navigate("/Lab5/Exercise/ExerciseEnd");
  };

  const { state } = useLab5StateContext();
  return (
    <div>
      <div className="cognitive_instructions">Complete the form below</div>
      <Form
        url={"/FormGuidance"}
        showNext={showNextFunc}
        errorNotification={state.errorNotification}
        successNotification={state.successNotification}
        borderColor={state.borderColor}
      />
      {showNext && (
        <div className="flex float-right">
          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={handleNav}
            key="next"
          >
            Next
          </button>
        </div>
      )}
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default FormAccessible;
