import { useState } from "react";
import Proptypes from "prop-types";
import CodeUpdateHeader from "../../exercise/lab3/components/CodeUpdateHeader";
import React from "react";
import Button from "../../all-components/Navigation/Button";
import CodeBlock from "../../all-components/CodeBlock/Components/Codeblock";
import Popup from "src/components/all-components/Popup";
const REPAIR_MESSAGE = "The repairs have been made.";
const ERROR_MESSAGE = "Error in Repair. Please fix";
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
  const [popUpMessage, setPopUpMessage] = useState("");
  const [userError, setUserError] = useState(true);

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
      setUserError(true);
      popUpHandler(REPAIR_MESSAGE);
      setEnableNext(true);
    }
    await submitRepair();
    if (!localValidateRepair) {
      await fetchRepair();
      setUserError(false);
      popUpHandler(ERROR_MESSAGE);
    }
  };
  /**
   * handleNext(): is a helper function responsible
   * for navigating the user to the next page in the exercise.
   */
  const handleNext = async () => {
    navigateNext();
  };

  /*
    set the message to be displayed in the popup
  */
  const popUpHandler = (message) => {
    setPopUpMessage(message);
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
      <Popup
        message={popUpMessage}
        handler={() => popUpHandler}
        error={!userError}
      />
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
