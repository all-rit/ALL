import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";
import ImagineHeader from "./ImagineHeader";

//add props to display deepfake or user profile
const DisplayDeepFake = () => {
  const [imagePath, setImagePath] = useState(" ");

  useEffect(() => {
    const fetchImagePath = async () => {
      console.log(sessionStorage.getItem("userID"));
      const response = await ImagineService.getImagePath(
        sessionStorage.getItem("userID"),
        26,
        "deepfake",
      );
      console.log(response);
      setImagePath(response);
    };
    fetchImagePath();
  }, []);

  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-gap-4 tw-p-4">
        <ImagineHeader title={"Alert"}></ImagineHeader>
        <img
          src={imagePath}
          alt="Deepfake image"
          className="tw-w-full tw-h-auto tw-rounded-lg tw-shadow-sm"
        />
      </div>
    </>
  );
};
export default DisplayDeepFake;
