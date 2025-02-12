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
    <div className="tw-bg-gray-200 tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen">
      <DragDropGame
        containerStyle={"tw-flex tw-gap-5 tw-p-5"}
        colStyle={
          "tw-bg-labGray tw-p-4 tw-w-full tw-min-h-[300px] tw-shadow-md"
        }
        colHeaderStyle={"tw-bg-primary-yellow tw-rounded-lg tw-p-3 tw-m-3"}
        bankStyle={
          "tw-flex tw-gap-2 tw-mb-3 tw-w-full tw-p-4 tw-border-black tw-rounded-lg tw-mt-5"
        }
        cardStyle={
          "tw-bg-labYellow tw-p-2 tw-my-1 tw-rounded tw-shadow-sm tw-cursor-grab tw-h-10 tw-w-40 tw-text-black"
        }
        msgStyle={""}
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
