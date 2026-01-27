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
      <ol className="tw-list-inside tw-w-full tw-cursor-default">
        {boxElements.map((element, index) => (
          <li
            key={index}
            className={"tw-p-2 tw-flex tw-flex-row last:tw-bg-labYellow"}
          >
            <p className="tw-mr-2">{index + 1}.</p>
            <div className="tw-flex tw-w-full tw-flex-row tw-justify-between">
              <p>{element.text}</p>
              <div>
                {element.binary.map((bin, binIndex) => (
                  <p className="tw-text-right" key={binIndex}>
                    {bin}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-start tw-mx-8 tw-max-w-1/2 tw-min-w-96 tw-gap-y-2">
      <h5 className="tw-font-poppins tw-text-lg tw-font-semibold">{title}</h5>
      <div className="tw-flex tw-justify-center tw-w-full tw-border-[2px] tw-border-solid tw-border-black tw-rounded-md tw-overflow-hidden">
        {addboxElements()}
      </div>
      <h5 className="tw-font-poppins tw-text-lg tw-font-semibold">{title}</h5>
    </div>
  );
};

OutputBox.propTypes = {
  title: PropTypes.string,
  boxElements: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      binary: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

export default OutputBox;
