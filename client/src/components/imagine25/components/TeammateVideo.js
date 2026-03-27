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
        setVideoSrc(groupVideos[group] || groupVideos.A);
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
        <div className="tw-w-full tw-h-full tw-bg-black tw-rounded-lg tw-shadow-lg tw-mx-auto"></div>
      )}
      <p>
        Teammate live from: <b>Buffalo, NY</b>
      </p>
    </div>
  );
};

export default TeammateVideo;
