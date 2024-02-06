import React, { useState } from "react";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import Form from "../../components/Form";
import { navigate } from "@reach/router";

/**
 * Renders a component for an inaccessible form.
 * @returns {JSX.Element} The rendered component.
 */
const FormInaccessible = () => {
  const [showNext, setShowNext] = useState(false);
  const componentName = "FormInaccessible";

  const showNextHandler = () => {
    setShowNext(!showNext);
  };

  const handleNav = () => {
    navigate("/Lab5/Exercise/FormGuidance");
  };

  return (
    <div>
      <div className="cognitive_instructions">Complete the form below</div>
      <Form url={"/FormGuidance"} showNext={showNextHandler} />
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

export default FormInaccessible;
