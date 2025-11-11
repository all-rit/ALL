import React, { useState, useEffect, useContext } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import DragDropGame from "../components/DragAndDropNoCorrectAnswer/DragDropGame";
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
      <p className="tw-body-text tw-text-left tw-py-6">
        Drag and Drop each of the three topics, Dexterity, Literacy and
        Deaf/Hard of Hearing from your most familiar to least familiar.
      </p>
      <DragDropGame
        gameStyle="tw-flex tw-grid tw-grid-cols-[2fr_1fr] tw-justify-between tw-w-auto tw-max-w-4xl tw-mx-auto tw-gap-8 tw-direction-rtl tw-items-stretch"
        containerStyle="tw-flex tw-p-3 tw-flex-col tw-w-full tw-gap-5 tw-bg-[#0144D5] tw-rounded-lg tw-items-center tw-h-full"
        colStyle="tw-p-0 tw-w-[15rem] tw-h-[3.5rem] tw-shadow-md tw-rounded-lg tw-bg-white tw-flex tw-flex-col tw-items-center tw-border tw-border-dashed tw-border-black"
        colCardStyle="tw-p-2 tw-w-[15rem] tw-h-[3.5rem] tw-rounded tw-shadow-sm tw-shadow-black tw-cursor-grab tw-text-left tw-text-black tw-text-sm tw-bg-white"
        colHeaderStyle="tw-m-1 tw-text-center tw-body-text tw-text-white"
        bankStyle="tw-flex tw-flex-col tw-gap-3 tw-w-full tw-p-3 tw-rounded-lg tw-bg-[#FACE35] tw-text-white tw-items-center tw-justify-center tw-h-full"
        bankCardStyle="tw-p-2 tw-w-[15rem] tw-h-[3.5rem] tw-rounded tw-shadow-sm tw-shadow-black tw-cursor-grab tw-text-left tw-text-black tw-text-sm tw-bg-white"
        msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-4 tw-my-1 tw-text-white tw-rounded-md tw-mb-3`}
        cols={cols}
        setCols={setCols}
        initialBank={bank}
        setBank={setBank}
        correctAssignments={correctAssignments}
        setSuccess={setSuccess}
        success={success}
        handleNav={handleContinue}
      />
    </div>
  );
};

export default ConfidenceRanking;
