import React, { useContext, useState, useEffect } from "react";
import {
  initialBank,
  initialColumns,
  correctAssignments,
} from "@/constants/lab0/DesignALab/ExperientialDND";
import DragDropGame from "@all-components/DragAndDrop/DragDropGame";
import Lab0Context from "../../Lab0Context";
import { SECTION_STATUSES } from "@/constants/lab0";

const CreateExperientialExercise = () => {
  const [success, setSuccess] = useState(false);
  const { section, updateSectionStatus } = useContext(Lab0Context);

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

  const { handleNav, setExperientialExerciseComplete } =
    useContext(Lab0Context);

  const navigateNext = () => {
    updateSectionStatus(section, SECTION_STATUSES.SECTION_COMPLETED);
    handleNav("WireframeIntro");
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
        gameStyle={
          "tw-flex tw-grid tw-grid-cols-2 tw-justify-between tw-w-full"
        }
        containerStyle={"tw-flex tw-p-5 tw-flex-col tw-w-full tw-gap-6"}
        colStyle={
          "tw-p-4 tw-border-dashed tw-w-full tw-border-[#c3c3c3] tw-border-[.5px] tw-w-full tw-min-h-[12rem] tw-shadow-md tw-rounded-lg"
        }
        colHeaderStyle={"tw-m-1 tw-text-center tw-body-text"}
        bankStyle={
          "tw-flex tw-flex-col tw-gap-3 tw-min-h-[5rem] tw-mb-3 tw-w-full tw-p-4 tw-border-dashed tw-border-[#c3c3c3] tw-border-[.5px] tw-rounded-lg tw-my-5 "
        }
        bankCardStyle={
          "tw-p-2 tw-my-1 tw-w-full tw-rounded tw-shadow-sm tw-shadow-black tw-cursor-grab tw-min-h-[9rem] tw-text-left tw-text-white tw-body-text tw-w-40 tw-text-black tw-bg-primary-blue"
        }
        colCardStyle={
          "tw-p-2 tw-my-1 tw-w-full tw-rounded tw-shadow-sm tw-shadow-black tw-cursor-grab tw-min-h-[9rem] tw-text-left tw-text-white tw-body-text tw-w-40 tw-text-black tw-bg-primary-blue"
        }
        msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-4 tw-my-1 tw-text-white tw-rounded-md tw-mb-3`}
        cols={cols}
        initialBank={bank}
        correctAssignments={correct}
        setSuccess={setSuccess}
        success={success}
        handleNav={navigateNext}
        updateExerciseState={updateExerciseComplete}
      />
    </div>
  );
};

export default CreateExperientialExercise;
