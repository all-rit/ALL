/* eslint-disable no-unused-vars */

import { useState } from "react";
import PropTypes from "prop-types";
import React from "react";
import Popup from "src/components/all-components/Popup";
import LabButton from "../../all-components/LabButton";
import RepairUpdateButton from "../../all-components/RepairUpdateButton";

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
    data: { exercisePromptsState, validInputs, isFirst },
    functions: {
      handleUserInputChange,
      checkInputValid,
      fetchRepair,
      postRepair,
    },
    headingText,
    repairText,
    files,
    navigateNext,
  } = props;

  const [isRepairActive, setIsRepairActive] = useState(false);
  const [repairVisible, setRepairVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(0);
  const [enableNext, setEnableNext] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [userError, setUserError] = useState(true);

  const REPAIR_MESSAGE = "Repair Successful!";
  const ERROR_MESSAGE = "Error in Repair. Please fix.";

  const handleOpenRepair = () => {
    setIsRepairActive(true);
    setTimeout(() => setRepairVisible(true), 0); // Allow animation to trigger
  };

  const handleCloseRepair = () => {
    setRepairVisible(false);
    setTimeout(() => setIsRepairActive(false), 500); // Match animation duration
  };

  /**
   * handleRepair(): is a function that is responsible
   * for handling the opening of the Codeblock on the
   * repair page. This allows for the fetching of user information
   * and populates the code block with the code implementation view.
   */
  const handleRepair = async () => {
    handleOpenRepair();
    await fetchRepair();
  };

  const handleFileChange = (fileId) => {
    setSelectedFile(fileId);
  };

  /**
   * handleUpdate(): is an async function that is responsible for
   * handling the behavior for validating and posting the results
   * of a repair session. This function checks to see if the
   * repair is correct then if it's not complete fetches the prior
   * state so the user can see errors update in realtime.
   */
  const handleUpdate = async () => {
    const localValidateRepair = checkInputValid();
    if (localValidateRepair) {
      handleCloseRepair();
      setUserError(true);
      popUpHandler(REPAIR_MESSAGE);
      setEnableNext(true);
    }
    await postRepair();
    if (!localValidateRepair) {
      await fetchRepair();
      setUserError(false);
      popUpHandler(ERROR_MESSAGE);
    }
    window.scrollTo(0, 0);
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
      <h1 className={"tw-title tw-text-left"}> {headingText} </h1>
      <div className="tw-pb-10 tw-text-xl ">
        {repairText.map((text) => (
          <p className="tw-body-text tw-text-left tw-pt-6" key={text}>
            {text}
          </p>
        ))}
      </div>

      <div className="tw-flex tw-justify-center tw-pb-5">
        <div className="tw-pr-10">
          <LabButton onClick={handleRepair} label={"Repair"} />
        </div>
        <div className="tw-pl-10">
          <LabButton
            onClick={handleNext}
            label={"Next"}
            disabled={!enableNext}
          />
        </div>
      </div>
      <Popup
        message={popUpMessage}
        handler={() => popUpHandler}
        error={!userError}
      />
      {isRepairActive && (
        <div
          className={`${repairVisible ? "tw-opacity-100" : "tw-opacity-0"} tw-transition-opacity tw-duration-500 tw-ease-in`}
        >
          <div className="tw-flex tw-flex-col tw-m-2 tw-bg-[[#ffffffe8]] tw-rounded-lg tw-text-left tw tw-border-solid tw-border-0 tw-shadow-[0px_0px_10px_0px_rgba(0,0,0,.4)]">
            <div className="tw-flex tw-flex-wrap tw-pt-3 tw-pl-3">
              {files.map((file) => (
                <div
                  key={file.fileId}
                  className={`tw-border-solid tw-border-2 tw-border-b-0 tw-cursor-pointer tw-p-2 tw-rounded-t-lg ${selectedFile !== file.fileId ? "tw-opacity-50" : ""}`}
                  onClick={() => handleFileChange(file.fileId)}
                >
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-[0.75rem] tw-h-[0.75rem] tw-aspect-square tw-rounded-full tw-bg-darkGray"></div>
                    <p className="tw-font-normal tw-text-sm">{file.fileName}</p>
                  </div>
                </div>
              ))}
              <div className="tw-grow"></div>
            </div>

            <div className="tw-bg-[#333] tw-m-3 tw-mt-0 tw-ease-in tw-shadow-2xl tw-rounded-r-sm code_editor__code">
              <div className={"tw-m-5"}>
                {React.createElement(
                  files.find((file) => file.fileId === selectedFile)
                    .implementation,
                  {
                    inputs: exercisePromptsState.filter(
                      (input) => input.fileId === selectedFile,
                    ),
                    userInput: handleUserInputChange,
                    validInputs: validInputs,
                    isFirst: isFirst,
                  },
                )}
              </div>
            </div>
          </div>
          <div>
            <RepairUpdateButton onClick={handleUpdate} />
          </div>
        </div>
      )}
    </div>
  );
};

Repair.propTypes = {
  data: PropTypes.object,
  functions: PropTypes.object,
  headingText: PropTypes.string,
  repairText: PropTypes.array,
  files: PropTypes.array,
  navigateNext: PropTypes.func.isRequired,
};
export default Repair;
