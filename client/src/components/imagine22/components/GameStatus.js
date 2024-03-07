/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const GameStatus = (props) => {
  const { userType, handleNext, biasType, setModalActive } = props;

  const [status, setStatus] = useState("Waiting...");

  const timerTimeout =
    userType === "opposingMember"
      ? Math.random() * (10000 - 7500) + 7500
      : Math.random() * (15000 - 8500) + 7500;

  useEffect(() => {
    if (biasType === "none") {
      const inGame = setTimeout(() => {
        if (userType !== "user") {
          setStatus("In Game");
        } else {
          setStatus("Loading...");
          handleNext();
        }
      }, timerTimeout);

      return () => {
        clearTimeout(inGame);
      };
    } else {
      setTimeout(() => {
        setStatus("Penalty");
        setModalActive(true);
      }, 5100);
    }
  });

  return (
    <div
      className={
        status === "Penalty"
          ? "tw-text-brightRed"
          : status === "In Game"
            ? "tw-text-lightGreen"
            : ""
      }
    >
      {status}
    </div>
  );
};

export default GameStatus;
