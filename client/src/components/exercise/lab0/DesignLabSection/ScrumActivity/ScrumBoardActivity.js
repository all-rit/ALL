import React, { useContext, useState, useEffect } from "react";
import DragDropGame from "../../../../all-components/DragAndDrop/DragDropGame";
import {
  initialColumns,
  initialBank,
  correctAssignments,
} from "../../../../../constants/lab0/DesignALab/ScrumDND";
import Lab0Context from "../../Lab0Context";

const ScrumBoardActivity = () => {
  const [success, setSuccess] = useState(false);

  const [cols, setCols] = useState(() => structuredClone(initialColumns));
  const [bank, setBank] = useState(() => structuredClone(initialBank));
  const [correct, setCorrect] = useState(() =>
    structuredClone(correctAssignments),
  );

  // Handles if user goes to another page, reset objects
  useEffect(() => {
    setCols(structuredClone(initialColumns));
    setBank(structuredClone(initialBank));
    setCorrect(structuredClone(correctAssignments));
  }, []);

  const { handleNav } = useContext(Lab0Context);
  const navigateNext = () => {
    handleNav("ScrumVelocityReading");
  };

  return (
    <div className="tw-flex tw-flex-col tw-text-left tw-p-5">
      <h2 className={"tw-title tw-text-left"}> Sprint Planning Activity</h2>
      <p className={"tw-py-3 tw-body-text"}>
        In this exercise you will be given the opportunity to plan your
        development schedule of the{" "}
        <strong>Accessibility to Focus Order </strong>exercise that you just
        created in the previous activity.
      </p>
      <p className={"tw-body-text"}>
        Using the blocks below, drag and drop them into the correct sprint
        sequence based on the stories that are present in each block.
      </p>
      <p className={"tw-py-3 tw-body-text"}>
        To see if your sequence is correct, click the Submit button.
      </p>
      <div className={"tw-flex tw-flex-col tw-items-center"}>
        <DragDropGame
          containerStyle={"tw-flex tw-p-5"}
          colStyle={
            "tw-p-4 tw-w-48 tw-border-dashed tw-min-w-[11rem] tw-border-[#c3c3c3] tw-border-[.5px] tw-w-full tw-min-h-[20rem] tw-shadow-md"
          }
          colHeaderStyle={"tw-m-1 tw-text-center tw-sub-title"}
          bankStyle={
            "tw-flex tw-gap-2 tw-min-h-[5rem] tw-min-w-[20rem] tw-mb-3 tw-w-full tw-p-4 tw-border-dashed tw-border-[#c3c3c3] tw-border-[.5px] tw-rounded-lg"
          }
          msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-3 tw-my-3 tw-text-white tw-rounded-md`}
          cols={cols}
          initialBank={bank}
          correctAssignments={correct}
          setSuccess={setSuccess}
          sucess={success}
          handleNav={navigateNext}
          bankCardStyle={
            "tw-p-2 tw-my-1 tw-rounded tw-shadow-sm tw-cursor-grab tw-h-[17rem] tw-text-left tw-text-white tw-body-text tw-w-40 tw-text-black"
          }
          colCardStyle={
            "tw-p-2 tw-my-1 tw-rounded tw-shadow-sm tw-cursor-grab tw-h-[17rem] tw-text-left tw-text-white tw-body-text tw-w-40 tw-text-black"
          }
        />
      </div>
    </div>
  );
};

export default ScrumBoardActivity;
