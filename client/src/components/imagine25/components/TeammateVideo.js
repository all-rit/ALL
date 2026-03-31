import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";
import { videoPaths, groupVideoPaths } from "src/constants/imagine25/Videos";

const TeammateVideo = (props) => {
  let teammateIdJSON = props;
  let teammateId = teammateIdJSON.teammateId;
  let messageShown = teammateIdJSON.messageShown;

  const [videoSrc, setVideoSrc] = useState(
    videoPaths[teammateId] || videoPaths[0],
  );
  const [videoEnded, setVideoEnded] = useState(false);

  const [delayedMessageShown, setDelayedMessageShown] = useState(false);

  useEffect(() => {
    let timeout;

    if (messageShown) {
      timeout = setTimeout(() => {
        setDelayedMessageShown(true);
      }, 3000);
    } else {
      setDelayedMessageShown(false);
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [messageShown]);

  useEffect(() => {
    if (teammateId === null) return;

    const updateVideoSource = async () => {
      if (delayedMessageShown) {
        const group = await ImagineService.getGroup(
          sessionStorage.getItem("userID"),
          25,
        );
        const groupVideos = groupVideoPaths[teammateId] || groupVideoPaths[0];
        setVideoSrc(groupVideos[group] || groupVideos["control"]);
      } else {
        setVideoSrc(videoPaths[teammateId] || videoPaths[0]);
      }
      setVideoEnded(false);
    };

    updateVideoSource();
  }, [teammateId, delayedMessageShown]);

  return (
    <div className="tw-w-full tw-h-full">
      {!videoEnded ? (
        <video
          src={videoSrc}
          autoPlay
          muted
          onEnded={() => setVideoEnded(true)}
          className={`tw-shadow-lg tw-rounded-lg tw-w-full tw-h-full ${
            delayedMessageShown
              ? "tw-border-solid tw-border-[#FF0000] tw-border-[3px]"
              : ""
          }`}
        />
      ) : (
        <div className="tw-w-full tw-h-full tw-bg-black tw-rounded-lg tw-shadow-lg tw-flex tw-justify-center tw-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tw-fill-white tw-w-8 tw-h-8 tw-mr-3"
            viewBox="0 0 576 512"
          >
            <path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-153-153 0-222.2c0-35.3-28.7-64-64-64L129.8 64 41-24.9zM32 128l0 256c0 35.3 28.7 64 64 64l256 0c7.8 0 15.3-1.4 22.2-4L36 105.8c-2.6 6.9-4 14.4-4 22.2zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z" />
          </svg>
          <p className="tw-font-poppins tw-text-white tw-text-md">
            Teammate has disconnected
          </p>
        </div>
      )}
    </div>
  );
};

export default TeammateVideo;
