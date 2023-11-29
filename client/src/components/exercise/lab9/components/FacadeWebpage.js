import React from "react";
import { navigate } from "@reach/router";
import uni from "../../../../assets/images/lab9/uni.jpeg";
import PropTypes from "prop-types";
import logo from '../../../../assets/images/lab9/logo.png'
import WebpageHeader from "./webpage-subcomponents/WebpageHeader";
import WebpageSidebar from "./webpage-subcomponents/WebpageSidebar";

/**
 * Webpage is a reusable component used to display
 * the ALL University's website homepage.
 * The webpage features a navbar, header, form, and sidebar,
 * each of which are sub-components.
 * @returns rendered webpage
 */
const FacadeWebpage = () => {
    const handleNext = () => {
        navigate("/Lab9/Exercise/Discovery")
    }

    return (
        <div>
            <div className="tw-bg-white tw-flex tw-flex-col pb-5">
                <div className="tw-relative tw-shadow-[3px_4px_16px_0px_rgba(0,0,0,0.25)] tw-bg-[#E8E8E8] tw-flex tw-w-full tw-flex-col tw-pl-5 tw-pr-5 tw-py-3 tw-max-md:tw-max-w-full">
                    <div className="tw-self-center tw-flex tw-ml-0 tw-w-full tw-items-start tw-justify-between tw-gap-5">
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
                        <div><div
                            className="tw-self-center tw-flex tw-items-start tw-justify-between tw-gap-2 tw-p-5"
                        >
                            <div className="tw-bg-transparent tw-text-[#260D0D] tw-text-center tw-text-base">
                                Home
                            </div>
                            <div className="tw-bg-transparent tw-text-[#260D0D] tw-text-center tw-text-base tw-w-md">
                                Careers
                            </div>
                            <div className="tw-bg-transparent tw-text-[#260D0D] tw-text-center tw-text-base tw-w-md">
                                Education
                            </div>
                            <div className="tw-bg-transparent tw-text-[#260D0D] tw-text-center tw-text-base tw-w-md">
                                Contact Us
                            </div></div>
                        </div>
                    </div>
                    <div className="tw-flex-col tw-bg-white tw-relative tw-flex tw-min-h-[1024px] tw-w-full">
                        <img
                            loading="lazy"
                            src={uni}
                            className="tw-absolute tw-h-full tw-w-full tw-object-cover tw-object-center"
                        />
                        <WebpageHeader />
                        <div
                            className="tw-flex tw-bg-[#260D0D] tw-w-full tw-flex-row tw-mt-60"
                            style={{ zIndex: 1 }}
                        >
                            <div className="tw-w-full tw-flex tw-flex-row tw-mt-10">
                                <div className="tw-flex tw-w-1/4 tw-ml-5">
                                    <WebpageSidebar />
                                </div>
                                <div className="tw-flex tw-w-3/4 tw-mr-5">
                                    <div className="tw-flex tw-flex-col tw-w-full tw-ml-5">
                                        <div className="tw-bg-[#D9D9D9] tw-flex tw-grow tw-flex-col tw-px-5 tw-py-5">
                                            <div className="tw-self-stretch tw-flex tw-mb-0 tw-flex-col tw-ml-0.5 tw-mr-4 tw-mt-0.5 ">
                                                <div className="tw-flex tw-items-start tw-justify-between tw-gap-5">
                                                    <div className="tw-bg-gray tw-self-center" />
                                                </div>
                                                <div className="tw-flex tw-flex-row tw-justify-between tw-text-[#260D0D] tw-text-4xl tw-font-bold tw-tracking-tighter tw-w-full tw-ml-1.5 tw-mt-4">
                                                    <span className="">Weekly Newsletter</span>
                                                    <div className="tw-flex-wrap  tw-h-full tw-text-xl tw-w-1/5 tw-text-[#260D0D] tw-p-5 tw-text-center tw-mr-5">
                                                        8/28/2027
                                                    </div>
                                                </div>
                                                <div className="tw-text-[#260D0D] tw-text-justify tw-text-2xl tw-font-light tw-max-w-[711px] tw-ml-2 tw-mt-6 tw-max-md:tw-max-w-full">
                                                    {" "}
                                                    Welcome to another edition of your weekly newsletter, your go-to
                                                    source for the latest updates, events, and highlights from our
                                                    vibrant campus community. As we settle into the rhythm of the
                                                    academic year, we&apos;re excited to keep you informed and engaged
                                                    with all that&apos;s happening here at ALL University.
                                                </div>
                                                <div className={"tw-w-full tw-mt-5 tw-p-4 tw-pb-10"}>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="btn btn-primary text-black btn-xl tw-m-3 text-uppercase "
                onClick={handleNext}
                key="start"
            >
                Next
            </button>
        </div>
    );
};

FacadeWebpage.propTypes = {
    user: PropTypes.object,
};
export default FacadeWebpage;
