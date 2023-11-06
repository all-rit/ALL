import React from "react";
import uni from "../../../../assets/images/lab9/uni.jpeg";

import NewsletterForm from "./webpage-subcomponents/NewsletterForm";
import WebpageNav from "./webpage-subcomponents/WebpageNav";
import WebpageHeader from "./webpage-subcomponents/WebpageHeader";
import WebpageSidebar from "./webpage-subcomponents/WebpageSidebar";

/**
 * Webpage is a reusable component used to display
 * the ALL University's website homepage.
 * The webpage features a navbar, header, form, and sidebar,
 * each of which are sub-components.
 * @returns rendered webpage
 */
const Webpage = () => {
  return (
    <div className="tw-bg-white tw-flex tw-flex-col">
      <div className="tw-flex-col tw-bg-white tw-relative tw-flex tw-min-h-[1024px] tw-w-100">
        <img
          loading="lazy"
          src={uni}
          className="tw-absolute tw-h-full tw-w-full tw-object-cover tw-object-center"
        />
        <WebpageNav />
        <WebpageHeader />
        <div
          className="tw-flex tw-bg-[#260D0D] tw-w-full tw-flex-col tw-mt-60"
          style={{ zIndex: 1 }}
        >
          <div className="tw-self-center tw-mt-10">
            <div className="tw-flex tw-flex-row tw-p-5">
              <WebpageSidebar />
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webpage;
