import React, { useContext, useState } from "react";
import {
  initialBank,
  initialColumns,
  correctAssignments,
} from "../../../../constants/lab0/DesignALab/ExperientialDND";
import DragDropGame from "../../../all-components/DragAndDrop/DragAndDrop";
import Lab0Context from "../Lab0Context";

const CreateExperientialExercise = () => {
  const [success, setSuccess] = useState(false);

  const { handleNav, setExperientialExerciseComplete } =
    useContext(Lab0Context);

  const navigateNext = () => {
    handleNav("ScrumIntro");
  };

  const updateExerciseComplete = () => {
    setExperientialExerciseComplete(true);
  };

  return (
    <div className={"tw-flex tw-flex-col tw-body-text"}>
      <h2 className={"tw-title"}> Experiential Exercise </h2>
      <p className={"tw-py-6"}>
        Below you will have the opportunity to flush out an experiential
        exercise for the Accessibility to Focus Order lab that was accepted.
      </p>
      <p>
        You will be given a set exercises that pertain to the above lab idea,
        and you will rank which would be provide the most experiential impact
        for the participant.
      </p>
      <DragDropGame
        containerStyle={"tw-flex tw-p-5 tw-flex-col tw-w-1/2 tw-gap-6"}
        gameStyle={"tw-flex tw-flex-row tw-items-center"}
        colStyle={
          "tw-p-4 tw-w-48 tw-border-dashed tw-min-w-[11rem] tw-border-[#c3c3c3] tw-border-[.5px] tw-w-full tw-min-h-[12rem] tw-shadow-md tw-rounded-lg"
        }
        colHeaderStyle={"tw-m-1 tw-text-center tw-body-text"}
        bankStyle={
          "tw-flex tw-flex-col tw-gap-3 tw-min-h-[5rem] tw-mb-3 tw-w-1/2 tw-p-4 tw-border-dashed tw-border-[#c3c3c3] tw-border-[.5px] tw-rounded-lg tw-my-5 "
        }
        cardStyle={
          "tw-p-2 tw-my-1 tw-w-full tw-rounded tw-shadow-sm tw-cursor-grab tw-min-h-[9rem] tw-text-left tw-text-white tw-body-text tw-w-40 tw-text-black tw-bg-primary-blue"
        }
        msgStyle={"tw-p-3 tw-my-3 tw-text-white tw-rounded-md"}
        cols={initialColumns}
        initial_bank={initialBank}
        correct_assignments={correctAssignments}
        setSuccess={setSuccess}
        success={success}
        handleNav={navigateNext}
        updateExerciseState={updateExerciseComplete}
      />
    </div>
  );
};

export default CreateExperientialExercise;
