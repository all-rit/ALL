import React, { useState, useEffect } from "react";
import PhotoCapture from "../components/PhotoCapture";
import UserPhoto from "../components/UserPhoto";
import { useImagine26Context } from "src/reducers/imagine/imagine26Context";
import ALLButton from "src/components/all-components/ALLButton";
import { navigate } from "@reach/router";
import ImagineService from "src/services/ImagineService";

const UserProfilePicture = () => {
  const { blob, clearPhoto } = useImagine26Context();
  const [group, setGroup] = useState(null);
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const result = await ImagineService.getGroup(
          sessionStorage.getItem("userID"),
          26,
        );
        setGroup(result);
      } catch (e) {
        console.error(e);
      }
    };
    fetchGroup();
  }, []);

  const sendImageforGeneration = async () => {
    if (group == "experiential") {
      if (!blob) {
        return;
      }
      const form = new FormData();
      form.append("image", blob, "image.png");
      form.append("userId", sessionStorage.getItem("userID"));
      form.append("year", 26);
      await ImagineService.handleImageUploads(form);
    }
    navigate("/Imagine2026/GalagaInstructions");
  };

  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-gap-4 tw-p-4">
        {!blob ? (
          <PhotoCapture />
        ) : (
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-5">
            <UserPhoto />
            <div className="tw-flex tw-gap-10">
              <ALLButton onClick={clearPhoto} label={"Retake"}></ALLButton>
              <ALLButton
                onClick={sendImageforGeneration}
                label={"Done"}
              ></ALLButton>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfilePicture;
