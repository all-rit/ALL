import React from "react";
import LabButton from "../../../all-components/LabButton";
import PropTypes from "prop-types";

const Conclusion = ({ resetSystem }) => {
  const resetFullSystem = () => {
    resetSystem();
  };

  return (
    <div className=" tw-flex tw-flex-col tw-p-6 tw-text-justify tw-justify-center">
      <p className="tw-title">Conclusion</p>
      <p className="tw-body-text tw-font-medium tw-pt-6">
        Thank you for using our system to advance your understanding of software
        accessibility. Here is a short recap of what we covered:
      </p>
      <div className={"tw-body-text"}>
        <br />
        <li className="tw-body-text tw-list-decimal">
          How inaccessible software can be detrimental to users with color
          vision deficiencies.
        </li>
        <li className="tw-body-text tw-list-decimal">
          Some proper techniques to create software that is accessible to all
          users, including those with color vision deficiencies.
        </li>
        <br />
        <p className="tw-body-text">
          If you would like to play through this again, click the button below:
        </p>
      </div>
      <br />
      <div className="center">
        <LabButton onClick={resetFullSystem} label={"Play Again!"} />
      </div>
    </div>
  );
};

Conclusion.propTypes = {
  resetSystem: PropTypes.func,
};

export default Conclusion;
