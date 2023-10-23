import React from "react";
import logo from "../../../../../assets/images/lab9/logo.png"

const WebpageNav = () => {
    return (
        <div className="tw-relative tw-shadow-[3px_4px_16px_0px_rgba(0,0,0,0.25)] tw-bg-[#E8E8E8] tw-flex tw-w-full tw-flex-col tw-pl-5 tw-pr-5 tw-py-3 tw-max-md:tw-max-w-full">
          <div className="tw-self-center tw-flex tw-ml-0 tw-w-full tw-max-w-[1373px] tw-items-start tw-justify-between tw-gap-5 tw-mt-px tw-mb-px tw-max-md:tw-max-w-full tw-max-md:tw-flex-wrap">
            <div className="tw-self-stretch tw-flex tw-flex-col">
              <div className="tw-text-[#260D0D]  tw-w-[54px] tw-h-1.5" />
              <div className="tw-flex tw-w-[282px] tw-max-w-full tw-items-start tw-gap-2.5">
                <img
                  loading="lazy"
                  srcSet={logo}
                  className="tw-aspect-[1.13] tw-object-cover tw-object-center tw-w-[54px] tw-shrink-0 tw-border-[6px] tw-border-solid tw-border-stone-900"
                />
                <div className="tw-text-[#260D0D] tw-text-4xl tw-font-light tw-tracking-tighter tw-self-center tw-my-auto">
                  ALL University
                </div>
              </div>
            </div>
            <div className="tw-self-center tw-flex tw-items-start tw-justify-between tw-gap-2 tw-my-auto tw-max-md:tw-max-w-full tw-max-md:tw-flex-wrap tw-max-md:tw-justify-center">
              <div className="tw-text-[#260D0D] tw-text-center tw-text-base">
                Careers
              </div>
              <div className="tw-text-[#260D0D] tw-text-center tw-text-base tw-w-md">
                Education
              </div>
              <div className="tw-text-[#260D0D] tw-text-center tw-text-base tw-w-md">
                Who We Are
              </div>
              <div className="tw-text-[#260D0D] tw-text-center tw-text-base tw-w-md">
                Contact Us
              </div>
            </div>
          </div>
        </div>
    )
}

export default WebpageNav;