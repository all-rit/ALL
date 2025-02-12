import React, { useContext, useState } from "react";
import DragDropGame from "../../../all-components/DragAndDrop/DragAndDrop";
import Lab0Context from "../Lab0Context";

const DesignLabIntroduction = () => {
  const [success, setSuccess] = useState(false);

  const { handleNav } = useContext(Lab0Context);
  const navigateNext = () => {
    handleNav("/NewCategory");
  };

  const Columns = [
    { id: "column1", title: "Accessibility", cards: [] },
    { id: "column2", title: "AI / ML", cards: [] },
    { id: "column3", title: "New Category", cards: [] },
  ];

  const Bank = [
    { id: "card8", content: "Computer Vision" },
    { id: "card4", content: "Focus Order" },
    { id: "card1", content: "Dyspraxia" },
    { id: "card6", content: "Natural Language Processing" },
    { id: "card7", content: "Neural Networks" },
    { id: "card3", content: "Alt Text" },
    { id: "card10", content: "Digital Privacy" },
    { id: "card5", content: "Federated Learning" },
    { id: "card9", content: "Cryptography" },
    { id: "card2", content: "Photosensitivity" },
  ];

  const correctAssignments = [
    { id: "column1", cards: ["card1", "card2", "card3", "card4"] },
    { id: "column2", cards: ["card5", "card6", "card7", "card8"] },
    { id: "column3", cards: ["card9", "card10"] },
  ];

  return (
    <div>
      <h2 className={"tw-title tw-text-left"}>Exercise Start</h2>
      <br />
      <div className={"tw-body-text"}>
        Design LabDesign LabDesign LabDesign LabDesign LabDesign LabDesign
        LabDesign LabDesign LabDesign LabDesign LabDesign LabDesign LabDesign
        LabDesign Lab
      </div>
      <br />
      <div className=" tw-flex tw-flex-col tw-items-center tw-justify-center">
        <DragDropGame
          containerStyle={"tw-flex tw-gap-5 tw-p-5 tw-w-full tw-justify-center"}
          colStyle={
            "tw-px-4 tw-rounded-lg tw-shadow-md tw-flex tw-w-[20rem] tw-h-[20rem] tw-flex-col"
          }
          bankStyle={
            "tw-grid tw-grid-cols-3 sm:tw-grid-cols-4 lg:tw-grid-cols-5 tw-gap-4 tw-p-4 tw-border-4 " +
            "tw-border-dashed tw-border-black tw-rounded-lg tw-my-5 tw-justify-center"
          }
          cardStyle={
            "tw-bg-white tw-border-solid tw-border-labBlue tw-rounded-md tw-p-2 tw-my-1 tw-shadow-sm tw-cursor-grab tw-h-10 tw-w-40 " +
            "tw-text-black tw-w-full tw-h-[4rem]  tw-flex tw-items-center tw-justify-center"
          }
          msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-3 tw-my-3 tw-text-white tw-rounded-md`}
          colHeaderStyle={
            "tw-flex tw-items-center tw-justify-center tw-h-[6rem] tw-text-center tw-px-4 tw-py-4 " +
            "tw-mx-2 tw-my-2 tw-bg-labYellow tw-rounded-md tw-font-bold"
          }
          cols={Columns}
          initial_bank={Bank}
          correct_assignments={correctAssignments}
          setSuccess={setSuccess}
          sucess={success}
          handleNav={navigateNext}
        />
      </div>
    </div>
  );
};

export default DesignLabIntroduction;
