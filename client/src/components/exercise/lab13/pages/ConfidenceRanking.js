import React, { useState, useEffect, useContext } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import DragDropGame from "../components/DragAndDropNoCorrectAnswer/DragDropGame";
import ExerciseStateContext from "../Lab13Context";
import { initialColumns, initialBank } from "src/constants/lab13/RankingConfig";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";

const ConfidenceRanking = () => {
  const {
    rankingSuccess,
    setRankingSuccess,
    rankingColumns,
    setRankingColumns,
    rankingBank,
    setRankingBank,
  } = useContext(ExerciseStateContext);

  const [cols, setCols] = useState(() =>
    rankingColumns.length > 0
      ? structuredClone(rankingColumns)
      : structuredClone(initialColumns),
  );

  const [bank, setBank] = useState(() => {
    const placedIds = new Set(
      (rankingColumns.length > 0 ? rankingColumns : initialColumns).flatMap(
        (col) => col.cards.map((card) => card.id),
      ),
    );

    const sourceBank = rankingBank.length > 0 ? rankingBank : initialBank;
    return sourceBank.filter((card) => !placedIds.has(card.id));
  });

  const [success, setSuccess] = useState(rankingSuccess);

  // Create a permissive correctAssignments that accepts any arrangement
  const correctAssignments = initialColumns.map((col) => ({
    id: col.id,
    cards: initialBank.map((item) => item.id),
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
        Drag and Drop each of the three topics, Dyslexia, Color Blindness, and
        Localization from your most familiar to least familiar.
      </p>
      <DragDropGame
        gameStyle="tw-grid tw-grid-cols-[1fr_2fr] tw-max-w-4xl tw-mx-auto tw-gap-8 tw-direction-rtl tw-items-center"
        containerStyle="tw-flex tw-flex-col tw-w-full tw-gap-5 tw-bg-[#FACE35] tw-rounded-lg tw-items-center tw-h-full tw-p-3"
        colStyle="tw-w-[15rem] tw-h-[3.5rem] tw-shadow-md tw-rounded-lg tw-bg-white tw-flex tw-flex-col tw-items-center tw-border tw-border-dashed tw-border-black"
        colCardStyle="tw-p-2 tw-w-[15rem] tw-h-[3.5rem] tw-rounded tw-shadow-sm tw-shadow-black tw-cursor-grab tw-text-black tw-text-sm tw-bg-white"
        colHeaderStyle="tw-m-1 tw-text-center tw-body-text tw-text-black"
        bankStyle="tw-flex tw-flex-col tw-gap-3 tw-w-full tw-p-3 tw-rounded-lg tw-bg-[#0144D5] tw-items-center tw-justify-center tw-h-full"
        bankCardStyle="tw-text-left tw-p-2 tw-w-[15rem] tw-h-[3.5rem] tw-rounded tw-shadow-sm tw-shadow-black tw-cursor-grab tw-text-black tw-text-sm tw-bg-white"
        msgStyle={`${!success ? "tw-bg-error" : "tw-bg-success"} tw-p-4 tw-my-1 tw-text-white tw-rounded-md tw-mb-3`}
        cols={cols}
        setCols={setCols}
        initialBank={bank}
        setBank={setBank}
        correctAssignments={correctAssignments}
        setSuccess={setSuccess}
        success={success}
        cardIcon={<DragIndicatorRoundedIcon />}
        handleNav={handleContinue}
      />
    </div>
  );
};

export default ConfidenceRanking;
