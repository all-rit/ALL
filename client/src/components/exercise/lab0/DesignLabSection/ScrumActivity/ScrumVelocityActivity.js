import DragDropGame from "../../../../all-components/DragAndDrop/DragDropGame";
import {
  correctAssignments,
  initialBank,
  initialColumns,
} from "../../../../../constants/lab0/DesignALab/ScrumVeloDND";
import React, { useContext, useState } from "react";
import Lab0Context from "../../Lab0Context";

const ScrumVelocityActivity = () => {
  const [success, setSuccess] = useState(false);

  const { handleNav } = useContext(Lab0Context);
  const navigateNext = () => {
    handleNav("DesignLabEnd");
  };
  return (
    <div className="tw-flex tw-flex-col tw-text-left">
      <h2 className={"tw-title tw-text-left"}> Sprint Velocity Activity</h2>
      <p className={"tw-py-3 tw-body-text"}>
        Now that you&apos;ve split your sprints into more manageable chunks, set
        up your sprint schedule to reflect the changes you&apos;ve made.
      </p>
      <p className={"tw-body-text"}>
        Using the blocks below, drag and drop the blocks in the correct
        sequence.
      </p>
      <p className={"tw-py-3 tw-body-text"}>
        To see if your sequence is correct, click the Submit Sprint Plan button.
      </p>
      <div className={"tw-flex tw-flex-col tw-items-center"}>
        <DragDropGame
          containerStyle={"tw-flex tw-p-5"}
          colStyle={
            "tw-p-4 tw-w-48 tw-border-dashed tw-min-w-[11rem] tw-border-[#c3c3c3] tw-border-[.5px] tw-w-full tw-min-h-[20rem] tw-shadow-md"
          }
          colHeaderStyle={"tw-m-1 tw-text-center tw-sub-title"}
          bankStyle={
            "tw-flex tw-gap-2 tw-min-h-[5rem] tw-min-w-[10rem] tw-mb-3 tw-w-full tw-p-4 tw-border-dashed tw-border-[#c3c3c3] tw-border-[.5px] tw-rounded-lg"
          }
          bankCardStyle={
            "tw-p-2 tw-my-1 tw-rounded tw-shadow-sm tw-cursor-grab tw-h-[17rem] tw-text-left tw-text-white tw-body-text tw-w-40 tw-text-black"
          }
          colCardStyle={
            "tw-p-2 tw-my-1 tw-rounded tw-shadow-sm tw-cursor-grab tw-h-[17rem] tw-text-left tw-text-white tw-body-text tw-w-40 tw-text-black"
          }
          msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-3 tw-my-3 tw-text-white tw-rounded-md`}
          cols={initialColumns}
          initialBank={initialBank}
          correctAssignments={correctAssignments}
          setSuccess={setSuccess}
          sucess={success}
          handleNav={navigateNext}
        />
      </div>
    </div>
  );
};

export default ScrumVelocityActivity;
