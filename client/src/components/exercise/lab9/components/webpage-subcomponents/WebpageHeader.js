import React from "react";

/**
 * WebpageHeader is a sub-component of the main Webpage component.
 * It is responsible for displaying the textual information over the hero image,
 * which includes the title, subtitle, and "Who We Are" button.
 * @returns rendered webpage header
 */
const WebpageHeader = () => {
  return (
    <div className="tw-relative tw-flex tw-w-[567px] tw-max-w-full tw-flex-col tw-ml-14 tw-mt-36 tw-px-5">
      <div className="tw-text-[#260D0D] tw-text-6xl tw-font-bold tw-tracking-tighter tw-max-md:tw-max-w-full tw-max-md:tw-text-4xl">
        <span className="tw-font-light">Learning</span>
        <span className="tw-font-extralight"> </span>
        <span className="tw-font-bold">Excellence</span>
      </div>
      <div className="tw-text-[#260D0D] tw-text-xl tw-font-light tw-tracking-tighter tw-max-w-[354px] tw-ml-2">
        Here we make dreams a reality
      </div>
      <div className="tw-text-[#260D0D] tw-text-center tw-text-base tw-w-[205px] tw-max-w-full tw-grow tw-ml-2.5 tw-mt-3.5 tw-pl-5 tw-pr-5 tw-pt-2.5 tw-pb-3 border-[3px] tw-border-solid tw-border-stone-900">
        Who We Are
      </div>
    </div>
  );
};

export default WebpageHeader;
