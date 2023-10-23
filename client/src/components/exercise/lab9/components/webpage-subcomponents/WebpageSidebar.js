import React from "react";

import person from "../../../../../assets/images/lab9/person.jpeg";

const WebpageSidebar = () => {
    return (
        <div className="tw-flex tw-grow tw-flex-col tw-max-md:mt-12">
                  <div className="tw-shadow-[3px_4px_7px_0px_rgba(0,0,0,0.25)] tw-bg-[#D9D9D9] tw-self-stretch tw-flex tw-w-full tw-flex-col tw-pt-7 tw-pb-4 tw-px-5">
                    <div className="tw-flex tw-w-xl tw-max-w-full tw-items-start tw-justify-between tw-gap-5 tw-ml-3 tw-max-md:tw-ml-2.5">
                      <div className="tw-text-[#260D0D] tw-text-center tw-text-3xl tw-font-bold tw-tracking-tighter tw-mt-px">
                        <span className="tw-font-light">
                          Join
                          <br />
                        </span>
                        <span className="tw-font-bold">Us</span>
                      </div>
                      <div className="tw-text-[#260D0D] tw-text-lg tw-font-light">
                        Unlock your full potential and embrace endless
                        opportunities by applying to ALL University, where
                        innovation meets excellence in education.
                      </div>
                    </div>
                    <div className="tw-flex tw-max-w-full tw-items-start tw-justify-between tw-gap-5 tw-ml-0.5 tw-mt-9">
                      <div className="tw-bg-[#D9D9D9] tw-self-center tw-my-auto" />
                      <div className="tw-text-[#260D0D] tw-text-center tw-text-base tw-self-stretch tw-shadow-[0px_4px_7px_0px_rgba(0,0,0,0.25)] tw-max-w-full tw-pl-4 tw-pr-4 tw-pt-2.5 tw-pb-2.5 tw-border-[3px] tw-border-solid">
                        Apply
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    srcSet={person}
                    className="tw-aspect-[2.57] tw-object-cover tw-object-center tw-w-full tw-shadow-[3px_4px_7px_rgba(0,0,0,0.25)] tw-self-stretch tw-grow tw-mt-12"
                  />
                </div>
    )
}

export default WebpageSidebar;