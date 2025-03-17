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

  useEffect(() => {
    const updateVideoSource = async () => {
      if (messageShown) {
        const group = await ImagineService.getGroup(
          sessionStorage.getItem("userID"),
          25,
        );
        const groupVideos = groupVideoPaths[teammateId] || groupVideoPaths[0];
        setVideoSrc(groupVideos[group] || groupVideos.A);
      } else {
        setVideoSrc(videoPaths[teammateId] || videoPaths[0]);
      }
    };

    updateVideoSource();
  });

  return (
    <div className="tw-absolute tw-top-[47px] tw-right-1 tw-p-4 tw-pointer-events-none bg-white border tw-rounded-lg tw-max-w-[300px] tw-max-h-[600px]">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="tw-w-64 tw-h-36 tw-shadow-lg tw-rounded-lg"
      />
      <p>
        Teammate live from: <b>Buffalo, NY</b>
      </p>
      <div className="tw-pt-[100px] tw-pb-[200px]">
        <h1>Instructions:</h1>
        <br></br>
        <p>Use ← → arrow keys to move</p>
        <p>Space bar to shoot</p>
        <p>Don&#39;t touch enemies</p>
        <br></br>
        <p>Get a higher score than your opponents to win!</p>
      </div>
    </div>
  );
};

export default TeammateVideo;
