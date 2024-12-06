import React from "react";
import PropTypes from "prop-types";
import ALLButton from "../../../components/all-components/ALLButton";
import ComingSoon from "../../../assets/images/ComingSoonVideo.svg";
import { COMING_SOON } from "../../../constants/educatorResources/LabOverview";

const ResourceRow = (props) => {
  const { id, title, description, image, walkthroughVideo, slides } = props;

  return (
    <li key={id} className={"tw-my-5"}>
      <div className={"tw-flex xs:tw-flex-col md:tw-flex-row"}>
        <div
          className={
            "tw-flex tw-flex-col xs:tw-w-full md:tw-w-1/2 tw-gap-3 xs:tw-items-center md:tw-items-start"
          }
        >
          <p className={"tw-font-calibri tw-font-extrabold tw-text-xl"}>
            {id ? `Lab ${id}:` : ""} {title}
          </p>
          <p className="tw-body-text tw-text-justify tw-leading-normal">
            <hr />
            {description}
          </p>
          {slides && !slides.includes(COMING_SOON) && (
            <a href={slides} download className={"tw-py-6"}>
              <ALLButton label={`Download Powerpoint`} />
            </a>
          )}
        </div>
        <div className="xs:tw-w-full md:tw-w-1/2 tw-flex tw-flex-row tw-justify-center tw-items-center tw-py-6">
          {image ? (
            <img
              src={image}
              className="tw-object-cover tw-rounded-lg tw-border-solid tw-border-primary-blue tw-border-[0.5rem]
                xs:tw-h-[12.5rem] xs:tw-w-[12.5rem]
                md:tw-h-[15.625rem] md:tw-w-[15.625rem]
                lg:tw-h-[21.875rem] lg:tw-w-[21.875rem]"
            />
          ) : (
            <div>
              <img
                src={
                  walkthroughVideo.includes(COMING_SOON)
                    ? ComingSoon
                    : walkthroughVideo
                }
                className="tw-object-cover tw-rounded-lg tw-border-solid tw-border-primary-blue tw-border-[0.5rem]
                    xs:tw-h-[12.5rem] xs:tw-w-[12.5rem]
                    lg:tw-h-[21.875rem] lg:tw-w-[21.875rem]"
              />
              <p className={"tw-text-sm tw-body-text tw-text-center"}>
                {" "}
                Lab {id} Walkthrough Video
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

ResourceRow.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slides: PropTypes.string,
  walkthroughVideo: PropTypes.string,
};

export default ResourceRow;
