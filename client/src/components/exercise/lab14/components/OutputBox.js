import { React } from "react";
import PropTypes from "prop-types";

const OutputBox = ({ title }) => {
  const addElements = () => {
    return (
      <ol>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </ol>
    );
  };

  return (
    <div className="tw-flex tw-flex-col tw-mx-8 tw-max-w-1/2 tw-min-w-96">
      <h5>{title}</h5>
      <div className="tw-flex tw-border-[2px] tw-border-solid tw-border-black tw-rounded-md">
        {addElements()}
      </div>
    </div>
  );
};

OutputBox.propTypes = {
  title: PropTypes.string,
  elements: PropTypes.list,
};

export default OutputBox;
