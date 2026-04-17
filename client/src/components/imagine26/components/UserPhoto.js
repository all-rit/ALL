import React from "react";
import ImagineHeader from "./ImagineHeader";
import { useImagine26Context } from "src/reducers/imagine/imagine26Context";

const UserPhoto = () => {
  const { image } = useImagine26Context();
  return (
    <>
      <div className="tw-w-full tw-max-w-[500px]">
        {image && (
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-5 tw-mt-10">
            <ImagineHeader title="Profile Picture" />
            <img
              src={image}
              alt="Captured webcam feed"
              className="tw-w-full tw-h-auto tw-rounded-lg tw-shadow-sm"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UserPhoto;
