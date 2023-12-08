import React, { useState } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_STATES } from "../../../../../constants/lab9";
import PropTypes from "prop-types";
import { REPAIR } from "src/constants/lab9/index";

/**
 * NewsletterForm is a sub-component of the main Webpage component.
 * It is responsible for displaying the newsletter sign-up form,
 * which asks for an address, city, state, zip, and phone number.
 * @returns rendered newsletter form
 */
const WebpageForm = ({ isDateRepaired, isAddressRepaired }) => {
  // eslint-disable-next-line no-unused-vars
  const [gameState, setGameState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT
  );

  const updateState = (newState) => {
    setGameState(newState);
  };
  const handleNav = (path) => {
    updateState(path);
    navigate(`/Lab9/Exercise${REPAIR}/${path}`);
  };

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-ml-5">
      <div className="tw-bg-[#D9D9D9] tw-flex tw-grow tw-flex-col tw-px-5 tw-py-5">
        <div className="tw-self-stretch tw-flex tw-mb-0 tw-flex-col tw-ml-0.5 tw-mr-4 tw-mt-0.5 ">
          <div className="tw-flex tw-items-start tw-justify-between tw-gap-5">
            <div className="tw-bg-gray tw-self-center" />
            {/* will want a button around the date here that routes to the date repair */}
          </div>
          <div className="tw-flex tw-flex-row tw-justify-between tw-text-[#260D0D] tw-text-4xl tw-font-bold tw-tracking-tighter tw-w-full tw-ml-1.5 tw-mt-4">
            <span className="">Weekly Newsletter</span>
            {isDateRepaired ? (
              <div className="tw-flex-wrap tw-h-full tw-text-xl tw-w-1/5  tw-text-[#260D0D] tw-p-5 tw-text-center tw-mr-5">
                8/28/2027
              </div>
            ) : (
              <div
                onClick={() => handleNav(EXERCISE_STATES.REPAIR_DATE_REPAIR)}
                className="tw-flex-wrap tw-animate-reduced-bounce tw-h-full tw-text-xl tw-w-1/5 hover:tw-bg-labYellow hover:tw-border-white tw-bg-bgwhite tw-text-[#260D0D] tw-cursor-pointer tw-rounded-xl tw-border-solid tw-p-5 tw-text-center tw-mr-5"
              >
                8/28/2027
              </div>
            )}
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
          {isAddressRepaired ? (
            <div className={"tw-w-full tw-mt-5 tw-p-4 tw-pb-10"}>
              <div className="tw-flex tw-items-start tw-justify-between tw-h-1/4 tw-gap-2.5">
                <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-mt-0">
                  Street Address
                </div>
                <div className="tw-self-stretch tw-rounded-md tw-flex tw-w-full tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
              </div>

              <div className=" tw-flex tw-flex-row tw-h-1/4 tw-justify-between tw-gap-5 tw-mt-7">
                <div className="tw-flex tw-flex-row tw-w-1/3 tw-items-start tw-gap-3 tw-mt-0.5">
                  <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                    Locality
                  </div>
                  <div className="tw-self-stretch tw-rounded-md tw-flex tw-w-full tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
                </div>

                <div className="tw-flex tw-flex-row tw-w-1/3 tw-items-start tw-gap-3 tw-mt-0.5">
                  <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                    City
                  </div>
                  <div className="tw-self-stretch tw-rounded-md tw-flex tw-w-full tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
                </div>

                <div className="tw-flex tw-flex-row tw-w-1/3 tw-items-start tw-gap-3 tw-mt-0.5">
                  <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                    Emirate
                  </div>
                  <div className="tw-self-stretch tw-rounded-md tw-flex tw-w-full tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />{" "}
                </div>
              </div>

              <div className="tw-flex tw-max-w-full tw-max-h-1/5 tw-align-middle tw-justify-between tw-gap-3 tw-mr-1 tw-mt-7 ">
                <div className="tw-flex tw-items-start tw-w-full tw-h-full tw-gap-3 tw-mt-0.5">
                  <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                    Postal Code
                  </div>
                  <div className="tw-self-stretch tw-rounded-md tw-flex tw-flex-col tw-w-4/5 tw-h-10 tw-border-[3px] tw-border-solid tw-border-black" />
                </div>
                <div className="tw-text-[#260D0D] tw-rounded-md tw-bg-labGreen tw-justify-center tw-align-middle tw-shadow-[0px_4px_7px_0px_rgba(0,0,0,0.25)] tw-w-1/4 tw-h-10 tw-border-[3px] tw-border-solid">
                  <p className="tw-font-medium tw-text-lg tw-text-bgwhite ">
                    {" "}
                    Sign Up{" "}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div
              onClick={() => handleNav(EXERCISE_STATES.REPAIR_ADDRESS_FORM)}
              className={
                "tw-w-full hover:tw-bg-labYellow hover:tw-border-white tw-bg-bgwhite tw-animate-reduced-bounce tw-cursor-pointer tw-rounded-xl tw-mt-5 tw-border-solid tw-p-4 tw-pb-10"
              }
            >
              <div className="tw-flex tw-items-start tw-justify-between tw-h-1/4 tw-gap-2.5">
                <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-mt-0">
                  Address
                </div>
                <div className="tw-self-stretch tw-rounded-md tw-flex tw-w-full tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
              </div>

              <div className=" tw-flex tw-flex-row tw-h-1/4 tw-justify-between tw-gap-5 tw-mt-7">
                <div className="tw-flex tw-flex-row tw-w-1/3 tw-items-start tw-gap-3 tw-mt-0.5">
                  <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                    City
                  </div>
                  <div className="tw-self-stretch tw-rounded-md tw-flex tw-w-full tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
                </div>

                <div className="tw-flex tw-flex-row tw-w-1/3 tw-items-start tw-gap-3 tw-mt-0.5">
                  <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                    State
                  </div>
                  <div className="tw-self-stretch tw-rounded-md tw-flex tw-w-full tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />
                </div>

                <div className="tw-flex tw-flex-row tw-w-1/3 tw-items-start tw-gap-3 tw-mt-0.5">
                  <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                    Zip
                  </div>
                  <div className="tw-self-stretch tw-rounded-md tw-flex tw-w-full tw-flex-col tw-border-[3px] tw-border-solid tw-border-black" />{" "}
                </div>
              </div>

              <div className="tw-flex tw-max-w-full tw-max-h-1/5 tw-align-middle tw-justify-between tw-gap-3 tw-mr-1 tw-mt-7 ">
                <div className="tw-flex tw-items-start tw-w-full tw-h-full tw-gap-3 tw-mt-0.5">
                  <div className="tw-justify-center tw-text-[#260D0D] tw-text-base tw-self-center tw-my-auto">
                    Phone
                  </div>
                  <div className="tw-self-stretch tw-rounded-md tw-flex tw-flex-col tw-w-4/5 tw-h-10 tw-border-[3px] tw-border-solid tw-border-black" />
                </div>
                <div className="tw-text-[#260D0D] tw-rounded-md tw-bg-labGreen tw-justify-center tw-align-middle tw-shadow-[0px_4px_7px_0px_rgba(0,0,0,0.25)] tw-w-1/4 tw-h-10 tw-border-[3px] tw-border-solid">
                  <p className="tw-font-medium tw-text-lg tw-text-bgwhite ">
                    {" "}
                    Sign Up{" "}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

WebpageForm.propTypes = {
  isDateRepaired: PropTypes.bool,
  isAddressRepaired: PropTypes.bool,
};

export default WebpageForm;
