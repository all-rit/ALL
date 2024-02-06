import React, { Fragment } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";

const FormGuidance = () => {
  const componentName = "FormGuidance";

  const handleNav = () => {
    navigate("/Lab5/Exercise/FormRepair");
  };

  return (
    <Fragment>
      <div className="center-div">
        <div className="guidance">
          The activity you completed was meant to stimulate poor cognitive form
          design. People with cognitive disabilities have even more difficulty
          creating error-free input. In addition, it may be harder for them to
          detect that they have made an error.
          <div className="lowercontent">
            According to Guideline 3.3, W3C Recommends:
          </div>
          <ul>
            <li>
              The item that is in error is identified and the error is described
              to the user in text
            </li>
            <li>Suggestions are provided to the user to correct the input</li>
            <li>Provide feedback when there is a successful form submission</li>
          </ul>
          <div className="lowercontent">
            Let’s continue on and make the changes. Click &lsquo;Next&rsquo;.
          </div>
          <div className="flex">
            <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick={handleNav}
              key="Next"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <PageServiceTimer name={componentName} />
    </Fragment>
  );
};

export default FormGuidance;
