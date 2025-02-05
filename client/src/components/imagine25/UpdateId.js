import React, { useEffect } from "react";
import ALLButton from "../all-components/ALLButton";
import useMainStateContext from "../../reducers/MainContext";
const { nanoid } = require("nanoid");
import { navigate } from "@reach/router";
import ImagineService from "../../services/ImagineService";

const UpdateId = () => {
  const { actions } = useMainStateContext();

  const startImagine = () => actions.setIsImagine(true);

  useEffect(() => {
    startImagine();
  }, []);

  const handleNext = () => {
    navigate("/Imagine2025/PreSurvey");
  };

  const handleUpdateID = async () => {
    let userID = nanoid(6).toUpperCase();
    sessionStorage.setItem("userID", userID);
    await ImagineService.newID(userID, 25);

    actions.setIsImagine(true);
    handleNext();
  };

  return (
    <div className={"tw-flex tw-gap-y-6 tw-flex-col"}>
      <h2 className={"tw-title"}> Welcome to Accessible Learning Labs! </h2>
      <h2 className={"tw-sub-title"}>
        {" "}
        Click the <strong> Get Started </strong> below to begin the exercise!{" "}
      </h2>
      <ALLButton label={"Get Started"} large={true} onClick={handleUpdateID} />
    </div>
  );
};

export default UpdateId;
