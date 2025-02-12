import React, { useState } from "react";
import DragDropGame from "../../../all-components/DragAndDrop/DragAndDrop";
import {
  initialColumns,
  initialBank,
  correctAssignments,
} from "../../../../constants/lab0/DesignALab/ScrumDND";

const ScrumBoardActivity = () => {
  const [success, setSuccess] = useState(false);

  const getSuccess = () => {
    return success;
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      <h2 className={"tw-title tw-text-left"}> Sprint Planning Activity</h2>
      <DragDropGame
        containerStyle={"tw-flex tw-p-5"}
        colStyle={
          "tw-p-4 tw-w-48 tw-border-dashed tw-border-[#c3c3c3] tw-border-[.5px] tw-w-full tw-min-h-[20rem] tw-shadow-md"
        }
        colHeaderStyle={"tw-m-1 tw-text-center tw-sub-title"}
        bankStyle={
          "tw-flex tw-gap-2 tw-mb-3 tw-w-full tw-p-4 tw-border-black tw-rounded-lg"
        }
        cardStyle={
          "tw-p-2 tw-my-1 tw-rounded tw-shadow-sm tw-cursor-grab tw-h-[17rem] tw-text-left tw-text-white tw-body-text tw-w-40 tw-text-black"
        }
        msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-3 tw-my-3 tw-text-white tw-rounded-md`}
        cols={initialColumns}
        initial_bank={initialBank}
        correct_assignments={correctAssignments}
        setSuccess={setSuccess}
        getSuccess={getSuccess}
      />
    </div>
  );
};

export default ScrumBoardActivity;
