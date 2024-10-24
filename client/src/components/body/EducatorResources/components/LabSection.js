import React from "react";
import PropTypes from "prop-types";

const LabSection = (props) => {
  const { id, title, description, image } = props;
  return (
    <li key={id} className={"tw-my-5"}>
      <div className={"tw-flex tw-flex-row"}>
        <div className={"tw-flex tw-flex-col tw-w-1/2 tw-gap-3"}>
          <p className={"tw-font-calibri tw-font-extrabold tw-text-lg"}>
            {title}
          </p>
          <p>{description}</p>
        </div>
        <div className={"tw-w-1/2 tw-flex tw-flex-row tw-justify-end"}>
          <img
            src={image}
            className={
              "tw-object-cover tw-w-1/2 tw-rounded-lg tw-border-solid tw-border-primary-blue tw-border-[0.5rem]"
            }
          />
        </div>
      </div>
    </li>
  );
};

LabSection.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default LabSection;
