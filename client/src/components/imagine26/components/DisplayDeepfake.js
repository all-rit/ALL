import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";
import ImagineHeader from "./ImagineHeader";

const DisplayDeepFake = () => {
  const [imagePath, setImagePath] = useState(" ");

  useEffect(() => {
    const fetchImagePath = async () => {
      console.log(sessionStorage.getItem("userID"));
      const response = await ImagineService.getDeepfakeImagePath(
        sessionStorage.getItem("userID"),
        26,
      );
      console.log(response);
      const path = process.env.REACT_APP_SERVER_URL + "/" + response;
      console.log(path);
      setImagePath(path);
    };
    fetchImagePath();
  }, []);

  return (
    <>
      <ImagineHeader title={"I dont want cotton candy"}></ImagineHeader>
      <img
        src={imagePath}
        alt="Deepfake image"
        style={{ width: "100%", maxWidth: "500px" }}
      />
    </>
  );
};
export default DisplayDeepFake;
