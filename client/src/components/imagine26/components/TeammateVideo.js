import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";
import {
  videoPaths,
  groupVideoPaths,
  scorePagePaths,
} from "src/constants/imagine26/Videos";
import PropTypes from "prop-types";

const TeammateVideo = (props) => {
  const { teammateId, status } = props;

  const [group, setGroup] = useState(null);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const result = await ImagineService.getGroup(
          sessionStorage.getItem("userID"),
          26,
        );
        setGroup(result || "control");
      } catch (e) {
        console.error(e);
      }
    };
    fetchGroup();
  }, []);

  useEffect(() => {
    if (teammateId === null) return;

    if (status == "game") {
      setVideoSrc(videoPaths[teammateId] || videoPaths[0]);
      console.log(videoPaths[teammateId]);
    } else if (status == "scorePage") {
      setVideoSrc(scorePagePaths[teammateId] || scorePagePaths[0]);
      console.log(scorePagePaths[teammateId]);
    } else if (status == "groupVideo") {
      const groupVideos = groupVideoPaths[teammateId] || groupVideoPaths[0];
      console.log(groupVideos[group]);
      setVideoSrc(groupVideos[group] || groupVideos.A);
    } else if (status == "analysis") {
      setVideoSrc("");
    }
  }, [teammateId, status, group]);

  return (
    <div className="tw-absolute tw-top-[3.4%] tw-p-1 tw-right-1 tw-pointer-events-none tw-bg-white tw-border-solid tw-border-[1px] tw-rounded-lg tw-w-96 tw-max-h-[575px]">
      <video
        key={`${videoSrc}-${status}`}
        src={videoSrc}
        autoPlay
        loop
        muted
        className={`tw-w-full tw-h-[200px] tw-object-cover tw-shadow-lg tw-rounded-lg`}
      />
      <p>
        Teammate live from: <b>Buffalo, NY</b>
      </p>
      <p className="tw-col-span-2 tw-text-center tw-font-bold">
        <br />
        (Chat Component )
      </p>
      <div className="tw-pt-2 tw-pb-[200px] tw-grid tw-grid-cols-2 tw-grid-rows-4 tw-gap-y-2">
        <p>chat component here</p>
      </div>
    </div>
  );
};

export default TeammateVideo;
TeammateVideo.propTypes = {
  teammateId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};
