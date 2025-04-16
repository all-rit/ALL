import React, { useEffect } from "react";
import ALLButton from "../all-components/ALLButton";
import useMainStateContext from "../../reducers/MainContext";
const { nanoid } = require("nanoid");
import { navigate } from "@reach/router";
import ImagineService from "../../services/ImagineService";
import PropTypes from "prop-types";

// This component is the start component that updates the user ID
const UpdateId = (props) => {
  const { actions } = useMainStateContext();

  const startImagine = () => actions.setIsImagine(true);

  useEffect(() => {
    startImagine();
  }, []);

  const handleNext = () => {
    if (props.canContinue) {
      navigate("/Imagine2025/PreSurvey");
    } else {
      alert("Please let the next person play");
    }
  };

  const handleUpdateID = async () => {
    let userID = nanoid(6).toUpperCase();
    sessionStorage.setItem("userID", userID);
    await ImagineService.newID(userID, 25);

    handleNext();
  };

  return (
    <div
      className={
        "tw-flex tw-gap-y-6 tw-flex-col tw-p-6 tw-justify-center tw-h-full tw-w-full"
      }
    >
      <h2 className={"tw-title"}> Welcome! </h2>
      <h2 className={"tw-sub-title"}>
        Click <strong> Get Started </strong> to start the game!
      </h2>
      <ALLButton label={"Get Started"} large={true} onClick={handleUpdateID} />
    </div>
  );
};

UpdateId.propTypes = {
  canContinue: PropTypes.bool,
};

export default UpdateId;
