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

  const previous_Bank = [
    { id: "card8", content: "Computer Vision" },
    { id: "card4", content: "Focus Order" },
    { id: "card1", content: "Dyspraxia" },
    { id: "card6", content: "Natural Language Processing" },
    { id: "card7", content: "Neural Networks" },
    { id: "card3", content: "Alt Text" },
    { id: "card5", content: "Federated Learning" },
    { id: "card2", content: "Photosensitivity" },
  ];
  const newBank = () => {
    newLabTopics.forEach((topic) => {
      const newId = previous_Bank.length;
      previous_Bank.push({ id: "card" + newId, content: topic.value });
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
        column3.cards.push("card" + previous_Bank.length);
      }
    }

    console.log(correctAssignments); // Check after modification
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
      <div className=" tw-flex tw-flex-col tw-items-center tw-justify-center">
        <DragDropGame
          containerStyle={"tw-flex tw-gap-5 tw-p-5 tw-w-full tw-justify-center"}
          colStyle={
            "tw-px-4 tw-rounded-lg tw-shadow-md tw-flex tw-flex-1 tw-h-[20rem] tw-flex-col tw-w-full"
          }
          bankStyle={
            "tw-grid tw-grid-cols-3 sm:tw-grid-cols-4 lg:tw-grid-cols-5 tw-gap-4 tw-p-4 tw-border-4 " +
            "tw-border-dashed tw-border-black tw-rounded-lg tw-my-5 tw-justify-center tw-min-w-full"
          }
          cardStyle={
            "tw-bg-white tw-border-solid tw-border-labBlue tw-rounded-md tw-p-2 tw-my-1 tw-shadow-sm tw-cursor-grab tw-h-10 tw-w-40 " +
            "tw-text-black tw-w-full tw-h-[4rem] tw-flex tw-items-center tw-justify-center " +
            "sm:tw-text-xs md:tw-text-sm lg:tw-text-md"
          }
          msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-3 tw-my-3 tw-text-white tw-rounded-md`}
          colHeaderStyle={
            "tw-flex tw-items-center tw-justify-center tw-h-[6rem] tw-text-center tw-px-4 tw-py-4 " +
            "tw-mx-2 tw-my-2 tw-bg-labYellow tw-rounded-md tw-font-bold"
          }
          colContainerStyle={"tw-w-1/3"}
          cols={Columns}
          initial_bank={Array.from(newBank)}
          correct_assignments={Array.from(newCorrectAssignments)}
          setSuccess={setSuccess}
          sucess={success}
          handleNav={navigateNext}
        />
      </div>
    </div>
  );
};

export default DesignSortNewCategory;
