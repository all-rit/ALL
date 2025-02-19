import React, { useContext, useState } from "react";
import Lab0Context from "../Lab0Context";
import DragDropGame from "../../../all-components/DragAndDrop/DragAndDrop";

const DesignSortNewCategory = () => {
  const { newCategoryName, newLabTopics, handleNav } = useContext(Lab0Context);

  const [success, setSuccess] = useState(false);

  const navigateNext = () => {
    handleNav("DesignNewCategory");
  };

  const Columns = [
    { id: "column1", title: "Accessibility", cards: [] },
    { id: "column2", title: "AI / ML", cards: [] },
    { id: "column3", title: newCategoryName, cards: [] },
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const previous_Bank = [
    { id: "card8", content: "Computer Vision", isCorrect: true },
    { id: "card4", content: "Focus Order", isCorrect: true },
    { id: "card1", content: "Dyspraxia", isCorrect: true },
    { id: "card6", content: "Natural Language Processing", isCorrect: true },
    { id: "card7", content: "Neural Networks", isCorrect: true },
    { id: "card3", content: "Alt Text", isCorrect: true },
    { id: "card5", content: "Federated Learning", isCorrect: true },
    { id: "card2", content: "Photosensitivity", isCorrect: true },
  ];
  const newBank = () => {
    newLabTopics.forEach((topic) => {
      const newId = previous_Bank.length + 1;
      previous_Bank.push({
        id: "card" + newId,
        content: topic.value,
        isCorrect: true,
      });
    });
    return previous_Bank;
  };

  const correctAssignments = [
    { id: "column1", cards: ["card1", "card2", "card3", "card4"] },
    { id: "column2", cards: ["card5", "card6", "card7", "card8"] },
    { id: "column3", cards: [] },
  ];

  const newCorrectAssignments = () => {
    const column3 = correctAssignments.find((col) => col.id === "column3");

    if (column3) {
      for (let i = 0; i < newLabTopics.length; i++) {
        column3.cards.push("card" + (8 + 1 + i));
      }
    }
    return correctAssignments;
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
      <div className="tw-p-3 tw-h-[40rem]">
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
            "tw-bg-white tw-border-solid tw-border-labBlue tw-rounded-md tw-py-4 tw-my-1 tw-shadow-sm tw-cursor-grab" +
            "tw-text-black tw-w-full tw-flex tw-items-center tw-justify-center tw-h-auto  "
          }
          bankCardStyle={
            "tw-bg-white tw-border-solid tw-border-labBlue tw-rounded-md tw-p-4 tw-m-2 tw-shadow-sm tw-cursor-grab " +
            "tw-text-black 2xl:tw-w-[16rem] xl:tw-w-[12rem] lg:tw-w-[12rem] tw-h-[4rem] tw-flex tw-items-center tw-justify-center"
          }
          msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-py-4 tw-my-1 tw-text-white tw-rounded-md`}
          colHeaderStyle={
            "tw-flex tw-items-center tw-justify-center tw-h-[6rem] tw-text-center tw-px-4 tw-py-4 " +
            "tw-mx-2 tw-my-2 tw-bg-labYellow tw-rounded-md tw-font-bold"
          }
          colContainerStyle={"tw-w-1/3"}
          cols={Columns}
          initial_bank={shuffleArray(newBank())}
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
