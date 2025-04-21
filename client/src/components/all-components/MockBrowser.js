import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

/**
 * A component that fakes a browser that renders "HTML". In reality, this component
 * will be rendering an image when the user enters the correct request URL and clicks
 * the "View" button. This component also simulates a fake loading bar as the page loads
 * in.
 * @param {string} props.correctURL The correct URL that the user should type in and view.
 * @param {string} props.responseImgURL The image URL that is rendered when the correct URL is viewed.
 * @param {function} props.onViewed The function to be called when the correct URL is viewed.
 */
const MockBrowser = (props) => {
  const { correctURL, responseImgURL, onViewed } = props;
  const [urlInput, setURLInput] = useState("");
  const [loadingStage, setLoadingStage] = useState(0);
  const [requestURL, setRequestURL] = useState("");
  const [first, setFirst] = useState(true);

  const loadingPercents = [
    "tw-w-[0%]",
    "tw-w-[25%]",
    "tw-w-[60%]",
    "tw-w-[90%]",
  ];

  const handleExecute = () => {
    setLoadingStage(1);
    setFirst(false);
  };

  const isCorrectURL = () => {
    return requestURL === correctURL;
  };

  useEffect(() => {
    if (loadingStage !== 0) {
      setTimeout(() => {
        setLoadingStage((loadingStage + 1) % loadingPercents.length);
      }, 250);
      return;
    }

    if (urlInput === correctURL) {
      onViewed();
    }

    setRequestURL(urlInput);
  }, [loadingStage]);

  return (
    <div className="tw-border tw-rounded-lg tw-shadow-xl tw-drop-shadow-xl tw-max-w-[56rem]">
      <div className="tw-flex tw-bg-primary-yellow tw-rounded-lg tw-rounded-b-none tw-p-2 tw-gap-2">
        <div className="tw-flex tw-flex-1">
          {/* Input */}
          <div className="tw-flex tw-items-center tw-bg-darkGray tw-rounded-l-md tw-px-4 tw-py-2">
            <span className="tw-font-bold tw-text-white">WEB</span>
          </div>
          <div className="tw-relative tw-w-full">
            <div className="tw-flex tw-flex-1 tw-bg-white tw-rounded-r-md tw-px-4 tw-py-3 tw-gap-y-3">
              <input
                className="tw-w-full tw-bg-transparent tw-border-0 tw-outline-none tw-font-bold tw-text-md tw-text-[#374151] placeholder:tw-italic placeholder:tw-font-normal"
                type="text"
                value={urlInput}
                placeholder={"Enter " + correctURL}
                onChange={(e) => setURLInput(e.target.value)}
              />
            </div>
            <div>
              <div
                className={`tw-absolute tw-left-0 tw-bottom-0 tw-bg-labBlue tw-h-[0.25rem] ${loadingPercents[loadingStage]}`}
              ></div>
            </div>
          </div>
        </div>
        {/* View Button */}
        <button
          className="tw-border-0 tw-rounded-md tw-px-3 tw-py-1.5 tw-drop-shadow tw-shadow tw-bg-[#31965e] tw-font-bold tw-text-white"
          type="button"
          onClick={() => handleExecute()}
        >
          View
        </button>
      </div>
      {/* Webpage Content */}
      <div className="tw-flex tw-bg-primary-yellow tw-rounded-lg tw-rounded-t-none tw-p-2 tw-h-[25rem]">
        <div className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-lg tw-p-2 tw-bg-white tw-gap-2">
          {first ? (
            <>
              <TravelExploreIcon />
              <p className="md:tw-text-xl tw-font-bold">
                Enter the URL to test!
              </p>
            </>
          ) : loadingStage !== 0 ? (
            <>
              <HourglassBottomIcon />
              <p className="md:tw-text-md tw-italic">Loading...</p>
            </>
          ) : isCorrectURL() ? (
            <img
              src={responseImgURL}
              alt={`Rendered webpage for ${correctURL}`}
              className="tw-h-full tw-object-contain"
            />
          ) : (
            <>
              <FeedbackIcon />
              <p className="md:tw-text-xl tw-font-bold">404: Page not found</p>
              <p className="md:tw-text-md tw-italic">
                Did you mean &quot;{correctURL}&quot;?
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

MockBrowser.propTypes = {
  correctURL: PropTypes.string,
  responseImgURL: PropTypes.string,
  onViewed: PropTypes.function,
};

export default MockBrowser;
