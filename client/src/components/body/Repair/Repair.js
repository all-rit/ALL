import { useState, useRef } from "react";
import PropTypes from "prop-types";
import React from "react";
import Popup from "src/components/all-components/Popup";
import LabButton from "../../all-components/LabButton";
import RepairUpdateButton from "../../all-components/RepairUpdateButton";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from "@mui/icons-material/Check";

/**
 * Repair: is a reusable component that is responsible for
 * allowing for the ability to render and handle new repair pages
 * moving forward. This is a logic and display component that will use props
 * to render and display information to the page.
 * @param {Object} props.data The data required for this Repair component to work.
 *                            Exported from hooks like {#link useLabRepair}.
 *                            Required fields: exercisePromptsState, validInputs, isFirst
 * @param {Object} props.functions Functions required for this Repair component to work.
 *                                 Exported from hooks like {#link useLabRepair}.
 *                                 Required fields: handleUserInputChange, checkInputValid, fetchRepair, postRepair
 * @param {string} props.headingText The text to be displayed at the top of the repair component in bold.
 * @param {string} props.repairText The descriptive and instructional text to be displaced under the heading.
 * @param {Array.<Object>} props.files An array of objects listing the valid file ids, file names, and code blocks
 *                                     associated with each file.
 * @param {number} props.files[i].fileId The file id that corresponds with the file id in the constants file for this repair.
 * @param {number} props.files[i].fileName The display name for this file to be shown when navigating the repair.
 * @param {JSX.Element} props.files[i].implementation The code block component to use for this specific file.
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
  const [userError, setUserError] = useState(false);
  const headingRef = useRef(null);

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

  /**
   * Performs a visual file change which causes a new file to be
   * highlighted and switches the code block out beneath it.
   * @param {number} fileId The new file id to switch to.
   */
  const handleFileChange = (fileId) => {
    if (selectedFile === fileId) return;
    setSelectedFile(fileId);
  };

  /**
   * Retrieves the proper status color for a file given whether
   * or not it still has invalid inputs within the file by the user.
   * @param {number} fileId The file id to retrieve.
   * @returns The status of the file as either "gray", "red", or "green".
   */
  const getFileStatusColor = (fileId) => {
    let statusColor = "";
    if (popUpMessage === "") {
      statusColor = "gray";
    } else if (
      exercisePromptsState
        .filter((input) => input.fileId === fileId)
        .some((input) => !validInputs[input.id])
    ) {
      statusColor = "red";
    } else if (
      exercisePromptsState
        .filter((input) => input.fileId === fileId)
        .every((input) => validInputs[input.id] === true)
    ) {
      statusColor = "green";
    }
    return statusColor;
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
      setUserError(false);
      popUpHandler(REPAIR_MESSAGE);
      setEnableNext(true);
    }
    await postRepair();
    if (!localValidateRepair) {
      await fetchRepair();
      setUserError(true);
      popUpHandler(ERROR_MESSAGE);
    }
    headingRef.current?.scrollIntoView({ block: "center" });
  };

  /**
   * handleNext(): is a helper function responsible
   * for navigating the user to the next page in the exercise.
   */
  const handleNext = async () => {
    navigateNext();
  };

  /**
    Set the message to be displayed in the popup
  */
  const popUpHandler = (message) => {
    setPopUpMessage(message);
  };

  return (
    <div>
      <h1 className={"tw-title tw-text-left"} ref={headingRef}>
        {headingText}
      </h1>
      <div className="tw-pb-10 tw-text-xl ">
        {repairText.map((text) => (
          <p className="tw-body-text tw-text-left tw-pt-6" key={text}>
            {text}
          </p>
        ))}
      </div>

      <div className="tw-flex tw-justify-center tw-pb-5">
        <div className="tw-pr-10">
          <LabButton
            onClick={handleRepair}
            label={"Repair"}
            disabled={enableNext}
          />
        </div>
        <div className="tw-pl-10">
          <LabButton
            onClick={handleNext}
            label={"Next"}
            disabled={!enableNext}
          />
        </div>
      </div>
      <Popup message={popUpMessage} handler={popUpHandler} error={userError} />
      {isRepairActive && (
        <div
          className={`${repairVisible ? "tw-opacity-100" : "tw-opacity-0"} tw-transition-opacity tw-duration-500 tw-ease-in`}
        >
          <div className="tw-flex tw-flex-col tw-m-2 tw-bg-[[#ffffffe8]] tw-rounded-lg tw-text-left tw tw-border-solid tw-border-0 tw-shadow-[0px_0px_10px_0px_rgba(0,0,0,.4)]">
            <div className="tw-flex tw-flex-wrap tw-pt-3 tw-pl-3">
              {files.map((file) => (
                <button
                  key={file.fileId}
                  className={`tw-border-solid tw-border-2 tw-border-b-0 tw-cursor-pointer tw-p-2 tw-rounded-t-lg ${selectedFile !== file.fileId ? "tw-opacity-50" : ""}`}
                  onClick={() => handleFileChange(file.fileId)}
                >
                  <div className="tw-flex tw-items-center tw-gap-2">
                    {getFileStatusColor(file.fileId) === "gray" ? (
                      <div className="tw-w-[1.25rem] tw-h-[1.25rem] tw-aspect-square tw-rounded-full tw-bg-labGray"></div>
                    ) : getFileStatusColor(file.fileId) === "red" ? (
                      <div className="tw-relative tw-w-[1.25rem] tw-h-[1.25rem] tw-aspect-square tw-rounded-full tw-bg-error tw-text-white">
                        <PriorityHighIcon className="tw-absolute tw-left-0 tw-text-[1.25rem]" />
                      </div>
                    ) : (
                      <div className="tw-relative tw-w-[1.25rem] tw-h-[1.25rem] tw-aspect-square tw-rounded-full tw-bg-success tw-text-white">
                        <CheckIcon className="tw-absolute tw-left-0 tw-text-[1.25rem]" />
                      </div>
                    )}
                    <p className="tw-font-normal tw-text-sm">{file.fileName}</p>
                  </div>
                </button>
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
  files: PropTypes.arrayOf(
    PropTypes.shape({
      fileId: PropTypes.number,
      fileName: PropTypes.string,
      implementation: PropTypes.elementType,
    }),
  ),
  navigateNext: PropTypes.func.isRequired,
};
export default Repair;
