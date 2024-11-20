/* eslint-disable react/prop-types */
import React from "react";
import Button from "../components/header/buttons/button";

const Conclusion = ({ resetSystem }) => {
  const resetFullSystem = () => {
    resetSystem();
  };

  return (
    <div className=" tw-flex tw-flex-col tw-h-[35rem] tw-p-6 tw-text-justify tw-justify-center">
      <p className="tw-title-styling-name">Conclusion</p>
      <p className="tw-body-styling-name tw-font-medium tw-pt-6">
        Thank you for using our system to advance your understanding of software
        accessibility. Here is a short recap of what we covered:
      </p>
      <div className={"tw-body-styling-name tw-font-medium"}>
        <br />
        <li className="tw-body-styling-name tw-font-medium tw-list-decimal">
          How inaccessible software can be detrimental to users with color
          vision deficiencies.
        </li>
        <li className="tw-body-styling-name tw-font-medium tw-list-decimal">
          Some proper techniques to create software that is accessible to all
          users, including those with color vision deficiencies.
        </li>
        <br />
        <p className="tw-body-styling-name tw-font-medium">
          If you would like to play through this again, click the button below:
        </p>
      </div>
      <br />
      <div className="center">
        <Button
          clickMethod={resetFullSystem}
          message={"Play Again!"}
          fontSizing={"25px"}
        />
      </div>
    </div>
  );
};

export default Conclusion;
