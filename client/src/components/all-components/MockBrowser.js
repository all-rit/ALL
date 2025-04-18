/* eslint-disable no-unused-vars, react/prop-types */

import React, { useState } from "react";

const MockBrowser = (props) => {
  const { defaultURL, responseImgURL } = props;
  const [URL, setURL] = useState(defaultURL);

  const handleExecute = () => {};

  return (
    <div className="tw-border tw-rounded-lg tw-shadow-xl tw-drop-shadow-xl tw-max-w-[56rem]">
      <div className="tw-flex tw-bg-primary-yellow tw-rounded-lg tw-rounded-b-none tw-p-2 tw-gap-2">
        <div className="tw-flex tw-flex-1">
          <div className="tw-flex tw-items-center tw-bg-darkGray tw-rounded-l-md tw-px-4 tw-py-2">
            <span className="tw-font-bold tw-text-white">WEB</span>
          </div>
          <div className="tw-flex tw-flex-1 tw-bg-white tw-rounded-r-md tw-px-4 tw-py-3 tw-gap-y-3">
            <input
              className="tw-w-full tw-bg-transparent tw-border-0 tw-outline-none tw-font-bold tw-text-md tw-text-[#374151] placeholder:tw-italic placeholder:tw-font-normal"
              type="text"
              value={URL}
              placeholder={defaultURL}
              onChange={(e) => setURL(e.target.value)}
            />
          </div>
        </div>
        <button
          className="tw-border-0 tw-rounded-md tw-px-3 tw-py-1.5 tw-drop-shadow tw-shadow tw-bg-[#31965e] tw-font-bold tw-text-white"
          type="button"
          onClick={() => alert("Clicked")}
        >
          Execute
        </button>
      </div>
      <div className="tw-flex tw-bg-primary-yellow tw-rounded-lg tw-rounded-t-none tw-p-2 tw-gap-2">
        <div className="tw-w-full tw-rounded-lg tw-p-2 tw-bg-white">
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};

export default MockBrowser;
