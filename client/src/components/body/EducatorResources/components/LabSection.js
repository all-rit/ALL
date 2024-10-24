import React from "react";
import PropTypes from "prop-types";
import ALLButton from "../../../all-components/ALLButton";

const LabSection = (props) => {
  const { id, title, subTitle, description, image, videoLink, slides } = props;
  return (
    <li key={id} className={"tw-my-5"}>
      <div className={"tw-flex xs:tw-flex-col md:tw-flex-row"}>
        <div
          className={"tw-flex tw-flex-col xs:tw-w-full md:tw-w-1/2 tw-gap-3"}
        >
          <p className={"tw-font-calibri tw-font-extrabold tw-text-lg"}>
            {title}
          </p>
          <p> {subTitle ? subTitle : ""}</p>
          <p className="xs:tw-text-xs md:tw-text-sm">{description}</p>
          {slides && slides !== "Not yet available!" && (
            <a href={slides}>
              <ALLButton label={"Go to Slideshow"} />
            </a>
          )}
        </div>
        <div className="xs:tw-w-full md:tw-w-1/2 tw-flex tw-flex-row tw-justify-center tw-items-center tw-py-6">
          {image ? (
            <img
              src={image}
              className="tw-object-cover tw-rounded-lg tw-border-solid tw-border-primary-blue tw-border-[0.5rem]
                xs:tw-h-[200px] xs:tw-w-[200px]
                lg:tw-h-[300px] lg:tw-w-[300px]"
            />
          ) : (
            <video
              src={videoLink}
              className="tw-object-cover tw-rounded-lg tw-border-solid tw-border-primary-blue tw-border-[0.5rem]
                {/*xs:tw-h-[150px] xs:tw-w-[150px]*/}
                xs:tw-h-[200px] xs:tw-w-[200px]
                lg:tw-h-[300px] lg:tw-w-[300px]"
            />
          )}
        </div>
      </div>
    </li>
  );
};

LabSection.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slides: PropTypes.string,
  videoLink: PropTypes.string,
};

export default LabSection;
