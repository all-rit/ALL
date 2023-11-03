import React from "react";

/**
 * NewsletterForm is a sub-component of the main Webpage component.
 * It is responsible for displaying the newsletter sign-up form,
 * which asks for an address, city, state, zip, and phone number.
 * @returns rendered newsletter form
 */
const WebpageForm = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-stretch tw-w-[72%] tw-ml-5 tw-max-md:tw-w-full">
      <div className="tw-shadow-[3px_4px_7px_0px_rgba(0,0,0,0.25)] tw-bg-[#D9D9D9] tw-flex tw-grow tw-flex-col tw-w-full tw-mx-auto tw-px-5 tw-py-5 tw-max-md:tw-max-w-full tw-max-md:tw-mt-12">
        <div className="tw-self-stretch tw-flex tw-mb-0 tw-flex-col tw-ml-0.5 tw-mr-4 tw-mt-0.5 tw-max-md:tw-max-w-full tw-max-md:mr-2.5">
          <div className="tw-flex tw-w-[723px] tw-max-w-full tw-items-start tw-justify-between tw-gap-5 tw-max-md:flex-wrap">
            <div className="tw-bg-gray tw-self-center tw-w-[577px] tw-h-[5px] tw-grow tw-shrink-0 tw-basis-auto tw-my-auto tw-max-md:tw-max-w-full" />
            <div className="tw-text-[#260D0D] tw-text-center tw-text-2xl tw-self-stretch tw-w-[155px]">
              8/28/2027
            </div>
          </div>
          <div className="tw-text-[#260D0D] tw-text-4xl tw-font-bold tw-tracking-tighter tw-w-[373px] tw-max-w-full tw-ml-1.5 tw-mt-4">
            <span className="">Weekly </span>
            <span className="font-bold">Newsletter</span>
          </div>
          <div className="tw-text-[#260D0D] tw-text-justify tw-text-2xl tw-font-light tw-max-w-[711px] tw-ml-2 tw-mt-6 tw-max-md:tw-max-w-full">
            {" "}
            Welcome to another edition of your weekly newsletter, your go-to
            source for the latest updates, events, and highlights from our
            vibrant campus community. As we settle into the rhythm of the
            academic year, we&apos;re excited to keep you informed and engaged
            with all that&apos;s happening here at ALL University.
          </div>
          {/* will want a button around this section that leads to the address form repair */}
          <div className="tw-flex tw-w-[717px] tw-max-w-full tw-items-start tw-gap-2.5 tw-mt-14 tw-max-md:tw-flex-wrap">
            <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-w-[113px] tw-my-auto">
              Address Line
            </div>
            <div className="tw-self-stretch tw-flex tw-w-[612px] tw-h-[31px] tw-flex-col tw-grow tw-shrink-0 tw-basis-auto tw-border-[3px] tw-border-solid tw-border-black tw-max-md:max-w-full" />
          </div>
          <div className="tw-self-center tw-flex tw-ml-0 tw-max-w-full tw-items-start tw-justify-between tw-gap-5 tw-mt-7 tw-max-md:flex-wrap">
            <div className="tw-flex tw-grow tw-shrink-0 tw-basis-auto tw-items-start tw-justify-between tw-gap-3.5 tw-max-md:max-w-full tw-max-md:tw-flex-wrap tw-max-md:tw-justify-center">
              <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                City
              </div>
              <div className="tw-self-stretch tw-flex tw-w-[162px] tw-h-[31px] tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
              <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                State
              </div>
              <div className="tw-self-stretch tw-flex tw-w-[162px] tw-h-[31px] tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
            </div>
            <div className="tw-flex tw-items-start tw-gap-3 tw-mt-0.5">
              <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                Zip
              </div>
              <div className="tw-self-stretch tw-flex tw-w-[141px] tw-h-[31px] tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
            </div>
          </div>
          <div className="tw-flex w-[813px] tw-max-w-full tw-items-start tw-justify-between tw-gap-3 tw-mr-1 tw-mt-7 tw-max-md:tw-flex-wrap tw-max-md:tw-justify-center">
            <div className="tw-flex tw-items-start tw-gap-3 tw-mt-0.5">
              <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                Phone
              </div>
              <div className="tw-self-stretch tw-flex tw-w-[141px] tw-h-[31px] tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
            </div>
            <div className="tw-text-[#260D0D] tw-text-center tw-text-base tw-self-stretch tw-shadow-[0px_4px_7px_0px_rgba(0,0,0,0.25)] tw-max-w-full tw-pl-4 tw-pr-4 tw-pt-2.5 tw-pb-2.5 tw-border-[3px] tw-border-solid">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebpageForm;
