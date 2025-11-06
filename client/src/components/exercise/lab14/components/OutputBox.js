import { React } from "react";
import PropTypes from "prop-types";

const OutputBox = ({ title, boxElements }) => {
  const addboxElements = () => {
    if (boxElements.length === 0) {
      return (
        <p className="tw-p-4 tw-text-center tw-text-gray-500">
          Press the Decrypt button to run the simulation.
        </p>
      );
    }

    return (
      <ol className="tw-list-inside tw-w-full">
        {boxElements.map((element, index) => (
          <li
            key={index}
            className={`tw-p-2 tw-flex tw-flex-row ${index == boxElements.length - 1 ? "tw-bg-labYellow" : ""}`}
          >
            <p className="tw-mr-2">{index + 1}.</p>
            <div className="tw-flex tw-w-full tw-flex-row tw-justify-between">
              <p>{element.text}</p>
              <p>{element.binary}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="tw-flex tw-flex-col tw-mx-8 tw-max-w-1/2 tw-min-w-96">
      <h5>{title}</h5>
      <div className="tw-flex tw-border-[2px] tw-border-solid tw-border-black tw-rounded-md tw-overflow-hidden">
        {addboxElements()}
      </div>
    </div>
  );
};

OutputBox.propTypes = {
  title: PropTypes.string,
  boxElements: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      binary: PropTypes.string,
    }),
  ),
};

export default OutputBox;
