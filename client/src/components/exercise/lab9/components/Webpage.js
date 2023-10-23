import React from "react";
import uni from "../../../../assets/images/lab9/uni.jpeg";

import NewsletterForm from "./webpage-subcomponents/NewsletterForm";
import WebpageNav from "./webpage-subcomponents/WebpageNav";
import WebpageHeader from "./webpage-subcomponents/WebpageHeader";
import WebpageSidebar from "./webpage-subcomponents/WebpageSidebar";

const Webpage = () => {
  return (
    <div className="tw-bg-white tw-flex tw-flex-col">
      <div className="tw-flex-col tw-bg-white tw-self-stretch tw-relative tw-flex tw-min-h-[1024px] tw-w-full tw-max-md:tw-max-w-full">
        <img
          loading="lazy"
          src={uni}
          className="tw-absolute tw-h-full tw-w-full tw-object-cover tw-object-center"
        />
        <WebpageNav />
        <WebpageHeader />
        <div className="tw-relative tw-bg-[#260D0D] tw-flex tw-w-full tw-flex-col tw-mt-60 tw-px-5 tw-max-md:tw-max-w-full tw-max-md:mt-52">
          <div className="tw-self-center tw-w-full tw-ml-4 tw-mt-20 tw-max-md:tw-max-w-full">
            <div className="tw-gap-5 tw-flex tw-max-md:tw-flex-col tw-max-md:tw-items-stretch tw-max-md:tw-gap-0">
              <div className="tw-flex tw-flex-col tw-items-stretch tw-w-[28%] tw-max-md:tw-w-full">
                <WebpageSidebar />
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webpage;
