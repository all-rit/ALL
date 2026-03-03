import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";
import ImagineHeader from "./ImagineHeader";
import ALLButton from "src/components/all-components/ALLButton";
import { navigate } from "@reach/router";

//add props to display deepfake or user profile
const DisplayDeepFake = () => {
  const [imagePath, setImagePath] = useState("");
  useEffect(() => {
    const fetchImagePath = async () => {
      console.log(sessionStorage.getItem("userID"));
      const response = await ImagineService.getImagePath(
        sessionStorage.getItem("userID"),
        26,
        "userProfile",
      );
      console.log(response);
      setImagePath(response);
    };
    fetchImagePath();
  }, []);

  const nextPage = () => {
    navigate("/Imagine2026/DisplayDeepfake");
  };

  return (
    <>
      <ImagineHeader title={"User Profile"}></ImagineHeader>
      <img
        src={imagePath}
        alt="Deepfake image"
        style={{ width: "100%", maxWidth: "500px" }}
      />
      <ALLButton label={"Next Page"} onClick={nextPage} />
    </>
  );
};
export default DisplayDeepFake;
