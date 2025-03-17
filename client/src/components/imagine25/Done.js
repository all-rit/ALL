import React, { useEffect } from "react";
import ALLButton from "../all-components/ALLButton";
import useMainStateContext from "../../reducers/MainContext";
import { navigate } from "@reach/router";

// This component is the start component that updates the user ID
const Done = () => {
  const { actions } = useMainStateContext();

  const handleNext = () => {
    navigate("/Imagine2025/");
  };

  const handleUpdateID = async () => {
    sessionStorage.removeItem("userID");

    handleNext();
  };

  return (
    <div
      className={
        "tw-flex tw-gap-y-6 tw-flex-col tw-p-6 tw-justify-center tw-h-full tw-w-full"
      }
    >
      <h2 className={"tw-title"}> Thank you for participating! </h2>
      <h2 className={"tw-sub-title"}>
        {" "}
        Click the <strong> Return Home </strong> below to end the exercise!{" "}
      </h2>
      <ALLButton label={"Return Home"} large={true} onClick={handleUpdateID} />
    </div>
  );
};

export default Done;
