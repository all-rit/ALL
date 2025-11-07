import React, { useState, useEffect, useContext } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import DragDropGame from "src/components/all-components/DragAndDrop/DragDropGame";
import ExerciseStateContext from "../Lab13Context";
import { initialColumns, initialBank } from "src/constants/lab13/RankingConfig";

const ConfidenceRanking = () => {
  const {
    rankingSuccess,
    setRankingSuccess,
    rankingColumns,
    setRankingColumns,
    rankingBank,
    setRankingBank,
  } = useContext(ExerciseStateContext);

  // Initialize from context if available, otherwise use initial values
  const [cols, setCols] = useState(() =>
    rankingColumns.length > 0
      ? rankingColumns
      : structuredClone(initialColumns),
  );
  const [bank, setBank] = useState(() =>
    rankingBank.length > 0 ? rankingBank : structuredClone(initialBank),
  );
  const [success, setSuccess] = useState(rankingSuccess);

  // Create a permissive correctAssignments that accepts any arrangement
  const correctAssignments = initialColumns.map((col) => ({
    id: col.id,
    cards: initialBank.map((item) => item.id), // All cards are valid in any column
  }));

  // Save to context whenever cols or bank changes
  useEffect(() => {
    setRankingColumns(cols);
    setRankingBank(bank);
  }, [cols, bank, setRankingColumns, setRankingBank]);

  // Custom validation: check if all items are placed
  useEffect(() => {
    const allItemsPlaced =
      bank.length === 0 &&
      cols.every((col) => col.cards && col.cards.length > 0);
    setSuccess(allItemsPlaced);
    setRankingSuccess(allItemsPlaced);
  }, [cols, bank, setRankingSuccess]);

  const handleContinue = () => {
    if (!success) {
      alert(
        "Please complete ranking your knowledge of all topics before continuing",
      );
      return;
    }
    startExercise();
    navigate("/Lab13/Exercise/AIPanel");
  };

  return (
    <div className="tw-bg-center">
      <h1 className={"tw-title tw-text-left"}>Confidence Ranking Page</h1>
      <p className="tw-body-text">
        Drag and drop the topics to rank them by your knowledge level
      </p>
      <div className="tw-mb-4">
        <DragDropGame
          gameStyle="tw-flex tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-justify-between tw-w-full"
          containerStyle="tw-flex tw-p-5 tw-flex-col tw-w-full tw-gap-6"
          colStyle="tw-p-4 tw-border-dashed tw-border-[#c3c3c3] tw-border-[.5px] tw-w-full tw-min-h-[12rem] tw-shadow-md tw-rounded-lg tw-bg-white"
          colHeaderStyle="tw-m-1 tw-text-center tw-body-text tw-font-semibold"
          bankStyle="tw-flex tw-flex-col tw-gap-3 tw-min-h-[5rem] tw-mb-3 tw-w-full tw-p-4 tw-border-dashed tw-border-[#c3c3c3] tw-border-[.5px] tw-rounded-lg tw-my-5"
          bankCardStyle="tw-p-4 tw-my-1 tw-w-full tw-rounded tw-shadow-sm hover:tw-shadow-md tw-cursor-grab tw-min-h-[9rem] tw-text-left tw-bg-white"
          colCardStyle="tw-p-4 tw-my-1 tw-w-full tw-rounded tw-shadow-sm hover:tw-shadow-md tw-cursor-grab tw-min-h-[9rem] tw-text-left tw-bg-white"
          msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-4 tw-my-1 tw-text-white tw-rounded-md tw-mb-3`}
          cols={cols}
          setCols={setCols}
          initialBank={bank}
          setBank={setBank}
          correctAssignments={correctAssignments}
          setSuccess={setSuccess}
          success={success}
          handleNav={handleContinue}
          colContainerStyle={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        />
      </div>
    </div>
  );
};

export default ConfidenceRanking;
