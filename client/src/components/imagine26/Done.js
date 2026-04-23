import React from "react";
import ALLButton from "../all-components/ALLButton";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import { useImagine26Context } from "src/reducers/imagine/imagine26Context";

// This component is the start component that updates the user ID
const Done = (props) => {
  const { clearPhoto } = useImagine26Context();
  const handleNext = () => {
    navigate("/Imagine2026/");
    if (props.resetInstance !== null) {
      clearPhoto();
      props.resetInstance();
    }
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
        Click the <strong> Return Home button</strong> below to end the exercise
        and get your popcorn!
      </h2>
      <ALLButton label={"Return Home"} large={true} onClick={handleUpdateID} />
    </div>
  );
};

Done.propTypes = {
  resetInstance: PropTypes.func,
};

export default Done;
