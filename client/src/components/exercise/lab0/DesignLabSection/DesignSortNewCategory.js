import React, { useContext, useEffect, useState } from "react";
import Lab0Context from "../Lab0Context";
import DragDropGame from "../../../all-components/DragAndDrop/DragDropGame";
import _ from "lodash";
import {
  columns_new_category,
  previous_Bank,
  correctAssignmentsNewCategory,
} from "../../../../constants/lab0/DesignALab/LabCategoryDND";

const DesignSortNewCategory = () => {
  const { newCategoryName, newLabTopics, handleNav } = useContext(Lab0Context);

  const [success, setSuccess] = useState(false);
  const [cols, setCols] = useState(() => structuredClone(columns_new_category));
  const [bank, setBank] = useState(() => structuredClone(previous_Bank));
  const [correct, setCorrect] = useState(() =>
    structuredClone(correctAssignmentsNewCategory),
  );

  // Handles if user goes to another page, reset objects
  useEffect(() => {
    setCols(structuredClone(columns_new_category));
    setBank(structuredClone(previous_Bank));
    setCorrect(structuredClone(correctAssignmentsNewCategory));
  }, []);

  const navigateNext = () => {
    handleNav("DesignNewCategory");
  };

  const Columns = cols.map((col) =>
    col.id === "column3" ? { ...col, title: newCategoryName } : col,
  );

  const newBank = () => {
    newLabTopics.forEach((topic) => {
      const newId = bank.length + 1;
      bank.push({
        id: "card" + newId,
        content: topic.value,
        isCorrect: true,
      });
    });
    return bank;
  };

  const newCorrectAssignments = () => {
    return correct.map((col) => {
      if (col.id === "column3") {
        return {
          ...col,
          cards: [
            ...col.cards,
            ...newLabTopics.map((_, i) => "card" + (8 + 1 + i)),
          ],
        };
      }
      return col;
    });
  };

  return (
    <div>
      <h2 className={"tw-title tw-text-left"}>Lab Sorting Activity</h2>
      <br />
      <div className={"tw-body-text"}>
        In this interactive exercise, you will categorize a set of cards by
        dragging and dropping them into their correct groups.
        <br />
        Each card contains a term or concept related to one of the existing
        categories our labs fall into. Good luck!
        <br />
        <br />
        <h3>How It Works:</h3>
        <ol className="tw-list-decimal tw-pl-8">
          <li>
            Drag each card and drop it into the category you believe it belongs
            to.
          </li>
          <li>
            Once all cards are sorted, click the Submit button to check your
            results.
          </li>
        </ol>
      </div>
      <br />
      <div className="tw-p-3 tw-h-[60rem]">
        <DragDropGame
          containerStyle={"tw-flex tw-gap-5 tw-p-5 tw-w-full tw-justify-center"}
          colStyle={
            "tw-px-4 tw-rounded-lg tw-shadow-md tw-flex tw-flex-1 tw-min-h-[20rem] tw-pb-4 tw-flex tw-flex-col tw-w-full"
          }
          bankStyle={
            "tw-grid tw-grid-cols-3 sm:tw-grid-cols-4 lg:tw-grid-cols-5 tw-gap-4 tw-p-4 tw-border-t-4 " +
            "tw-border-dashed tw-border-black tw-border-r-0 tw-border-l-0 tw-border-b-0 tw-my-5 tw-justify-center " +
            "tw-w-full tw-min-w-full tw-max-w-full tw-flex-shrink-0 tw-h-auto tw-min-h-[10rem] " +
            "after:tw-content-[''] after:tw-block after:tw-w-[12rem] after:tw-h-[6rem] after:tw-opacity-0 after:tw-col-span-1"
          }
          colCardStyle={
            "tw-bg-white tw-border-solid tw-border-labBlue tw-rounded-md tw-py-4 tw-my-1 tw-shadow-sm focus:tw-shadow-xl tw-cursor-grab" +
            "tw-text-black tw-w-full tw-flex tw-items-center tw-justify-center tw-h-auto "
          }
          bankCardStyle={
            "tw-bg-white tw-border-solid tw-border-labBlue tw-rounded-md tw-p-4 tw-m-2 tw-shadow-sm tw-cursor-grab focus:tw-shadow-xl " +
            "tw-text-black tw-h-[4rem] tw-flex tw-items-center tw-body-text tw-leading-snug xs:tw-text-sm md:tw-text-[1rem] tw-justify-center tw-min-w-[6rem]"
          }
          msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-4 tw-my-1 tw-text-white tw-rounded-md tw-mb-8`}
          colHeaderStyle={
            "tw-flex tw-items-center tw-justify-center tw-h-[6rem] tw-text-center tw-px-4 tw-py-4 " +
            "tw-mx-2 tw-my-2 tw-bg-labYellow tw-rounded-md tw-font-bold"
          }
          colContainerStyle={"tw-w-1/3"}
          cols={Columns}
          initial_bank={_.shuffle(newBank())}
          correct_assignments={newCorrectAssignments()}
          setSuccess={setSuccess}
          sucess={success}
          handleNav={navigateNext}
        />
      </div>
    </div>
  );
};

export default DesignSortNewCategory;
