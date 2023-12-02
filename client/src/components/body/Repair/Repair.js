/* eslint-disable no-unused-vars */
import { useState } from "react";
import Proptypes from "prop-types";
import CodeUpdateHeader from "../../exercise/lab3/components/CodeUpdateHeader";
import React from "react";
import Button from "../../all-components/Navigation/Button";
import CodeBlock from "../../all-components/CodeBlock/Components/Codeblock";
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
    headingText,
    repairText,
    fileName,
    navigateNext,
    CodeImplementation,
    validateRepair,
    fetchRepair,
    submitRepair,
  } = props;
  const [isRepairActive, setIsRepairActive] = useState(false);
  const [enableNext, setEnableNext] = useState(false);

  /**
   * handleRepair(): is a function that is responsible
   * for handling the opening of the Codeblock on the
   * repair page. This allows for the fetching of user information
   * and populates the code block with the code implementation view.
   */
  const handleRepair = async () => {
    setIsRepairActive(true);
    await fetchRepair();
  };

  /**
   * handleUpdate(): is an async function that is responsible for
   * handling the behavior for validating and posting the results
   * of a repair session. This function checks to see if the 
   * repair is correct then if it's not complete fetches the prior 
   * state so the user can see errors update in realtime.
   */
  const handleUpdate = async () => {
    const localValidateRepair = validateRepair();
    if (localValidateRepair) {
      setIsRepairActive(false);
      setEnableNext(true);
    }
    await submitRepair();
    if (!localValidateRepair) {
      await fetchRepair();
    }
  };
  /**
   * handleNext(): is a helper function responsible 
   * for navigating the user to the next page in the exercise.
   */
  const handleNext = async () => {
    navigateNext();
  };

  return (
    <div>
      <CodeUpdateHeader
        heading={headingText}
        justifyAlignment={"space-between"}
      />
      <div className="tw-pb-10 tw-text-xl ">
        {repairText.map((text) => (
          <p className="tw-indent-2" key={text}>
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
          <Button
            buttonText={"Next"}
            disabled={!enableNext}
            onClick={handleNext}
          />
        </div>
      </div>
      {isRepairActive && (
        <>
          <CodeBlock fileName={fileName}>{CodeImplementation}</CodeBlock>
          <div>
            <button
              onClick={handleUpdate}
              type="submit"
              className="button button--green button--block"
            >
              Update
            </button>
          </div>
        </>
      )}
    </div>
  );
};

Repair.propTypes = {
  CodeImplementation: Proptypes.object.isRequired,
  fileName: Proptypes.string,
  headingText: Proptypes.string,
  navigateNext: Proptypes.func.isRequired,
  repairText: Proptypes.array,
  user: Proptypes.string,
  validateRepair: Proptypes.func.isRequired,
  repairComplete: Proptypes.bool.isRequired,
  fetchRepair: Proptypes.func.isRequired,
  submitRepair: Proptypes.func.isRequired,
};
export default Repair;
