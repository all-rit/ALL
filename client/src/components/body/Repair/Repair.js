/* eslint-disable no-unused-vars */
import { useState } from "react";
import Proptypes from "prop-types";
import GameStateContext from "../../exercise/lab9/Lab9Context";
import CodeUpdateHeader from "../../exercise/lab3/components/CodeUpdateHeader";
import React from "react";
import Button from "../../all-components/Navigation/Button";
import CodeBlock from "../../all-components/CodeBlock/Codeblock";
/**
 * Repair: is a reusable component that is responsible for
 * allowing for the ability to render and handle new repair pages
 * moving forward. This is a logic and display component that will use props
 * to render and display information to the page
 * @param {Object} props
 * @returns rendered repair page.s
 */
const Repair = (props) => {
  const {
    //user = "",
    headingText = "",
    repairText = [],
    fileName = "",
    CodeImplementation = () => {},
  } = props;
  const [isRepairActive, setIsRepairActive] = useState(false);
  const [next, setNext] = useState(false);

  const handleRepair = () => {
    setIsRepairActive(true);
  };
  const handleNext = () => {
    setNext();
  };

  return (
    <div>
      <CodeUpdateHeader
        heading={headingText}
        justifyAlignment={"space-between"}
      />
      <div className="tw-pb-10 tw-text-xl ">
        {repairText.map((text, index) => (
          <p className="tw-indent-2" key={index}>
            {text}
          </p>
        ))}
      </div>

      <div className="tw-flex tw-justify-center tw-pb-5">
        <div className="tw-pr-10">
          <Button
            buttonText={"Repair"}
            isPrimary={false}
            onClick={handleRepair}
          />
        </div>

        <div className="tw-pl-10">
          <Button buttonText={"Next"} disabled={next} />
        </div>
      </div>
      {isRepairActive && (
        <CodeBlock fileName={fileName}>{CodeImplementation}</CodeBlock>
      )}
    </div>
  );
};

Repair.propTypes = {
  user: Proptypes.string,
  headingText: Proptypes.string,
  repairText: Proptypes.array,
  fileName: Proptypes.string,
  CodeImplementation: Proptypes.func.isRequired,
};
export default Repair;
