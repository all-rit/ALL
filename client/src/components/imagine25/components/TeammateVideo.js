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

  const buttonSize = "tw-w-16 tw-mx-auto";

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
      <p className="tw-col-span-2 tw-text-center tw-font-bold">
        <br />
        (Keyboard)
      </p>
      <div className="tw-pt-2 tw-pb-[200px] tw-grid tw-grid-cols-2 tw-grid-rows-4 tw-gap-y-4">
        <h4 className="tw-col-span-2 tw-text-center">Movement:</h4>
        <img
          className={
            "tw-rotate-180 tw-translate-x-0 tw-translate-y-0 tw-skew-x-0 tw-skew-y-0 tw-scale-x-100 tw-scale-y-100 " +
            buttonSize
          }
          src="/img/imagine_game_controls/ArrowKey.png"
        />
        <img
          className={buttonSize}
          src="/img/imagine_game_controls/ArrowKey.png"
        />
        <h4 className="tw-col-span-2 tw-text-center">Fire Weapon:</h4>
        <img
          className="tw-col-span-2 tw-w-32 tw-mx-auto"
          src="/img/imagine_game_controls/SpaceBar.png"
        />
      </div>
    </div>
  );
};

export default TeammateVideo;
