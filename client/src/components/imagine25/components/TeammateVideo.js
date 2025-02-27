import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import ImagineService from "src/services/ImagineService";

const videoPaths = {
  0: "/videos/video0.mp4",
  1: "../videos/video1.mp4",
  2: "../videos/video2.mp4",
  3: "../videos/video2.mp4",
};

const groupVideoPaths = {
  0: {
    experiential: "../videos/0experiential.mp4",
    expression: "../videos/0expression.mp4",
    control: "../videos/0control.mp4",
  },
  1: {
    experiential: "../videos/1experiential.mp4",
    expression: "../videos/1expression.mp4",
    control: "../videos/1control.mp4",
  },
  2: {
    experiential: "../videos/2experiential.mp4",
    expression: "../videos/2expression.mp4",
    control: "../videos/2control.mp4",
  },
  3: {
    experiential: "../videos/3experiential.mp4",
    expression: "../videos/3expression.mp4",
    control: "../videos/3control.mp4",
  },
};

const TeammateVideo = (props) => {
  let teammateIdJSON = props;
  let teammateId = teammateIdJSON.teammateId;
  let messageShown = teammateIdJSON.messageShown;

  const [videoSrc, setVideoSrc] = useState(
    videoPaths[teammateId] || videoPaths[0],
  );
  const location = useLocation();

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
  }, [location, teammateId]);

  return (
    <div className="tw-fixed tw-top-[110px] tw-right-1 tw-p-4 tw-pointer-events-none bg-white border tw-rounded-lg tw-max-w-[300px]">
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
