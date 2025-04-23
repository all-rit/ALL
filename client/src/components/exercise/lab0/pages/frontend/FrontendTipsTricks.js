import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import ALLCardFlip from "../../../../all-components/ALLCardFlip";
import FigmaLogo from "../../../../../assets/images/lab0/Lab0_FigmaLogo.png";
import ReactLogo from "../../../../../assets/images/lab0/Lab0_ReactLogo.png";
import ReactHook from "../../../../../assets/images/lab0/Lab0_ReactHooks.png";
import TailwindLogo from "../../../../../assets/images/lab0/Lab0_TailwindLogo.png";
import Logo from "../../../../../assets/images/logos/ALL_Logo.svg";
import NPMLogo from "../../../../../assets/images/lab0/Lab0_NPMLogo.png";

export const FrontendTipsTricks = () => {
  const [complete, setComplete] = useState(false);

  const arrow = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
  );

  return (
    <Page nextPage={ROUTES.SELECTION_ROUTE} completed={complete}>
      <Page.Header>
        <Page.Header.Title>Frontend Tips &amp; Tricks</Page.Header.Title>
      </Page.Header>
      <div className={"tw-flex tw-w-10/12 tw-self-center tw-py-16"}>
        <ALLCardFlip
          width={3}
          height={3}
          onAllFlipped={() => setComplete(true)}
          gridStyle={"tw-gap-3"}
          cardStyle={"tw-rounded-[1.2rem]"}
          cards={[
            {
              id: 0,
              width: 2,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-3xl tw-italic tw-py-2 tw-text-center"
                    }
                  >
                    Design Before Development
                  </p>
                  <div
                    className={
                      "tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-gap-8 tw-w-full tw-flex-1 tw-min-w-0 tw-pb-2 tw-mx-4"
                    }
                  >
                    <div className={"tw-w-[15%] tw-max-w-28"}>
                      <img
                        className={
                          "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                        }
                        src={FigmaLogo}
                        alt={"Figma Logo"}
                      />
                    </div>
                    <div className="tw-w-8 sm:tw-w-14 tw-mx-2 sm:tw-mx-4 tw-content-center tw-h-full tw-hidden sm:tw-flex">
                      {arrow}
                    </div>
                    <div className="tw-w-[30%] tw-max-w-48 tw-hidden sm:tw-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="tw-w-full tw-h-auto tw-hidden sm:tw-flex tw-p-4"
                        viewBox="0 0 640 512"
                      >
                        {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
                        <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              id: 1,
              width: 1,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-2xl tw-italic tw-py-2 tw-text-center"
                    }
                  >
                    Reuse Components when Available
                  </p>
                  <div className="tw-flex-col tw-items-center tw-w-full tw-max-h-[80%] tw-hidden sm:tw-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="tw-w-full tw-h-auto tw-hidden sm:tw-flex tw-p-4"
                      viewBox="0 0 512 512"
                    >
                      {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
                      <path d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448l0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z" />
                    </svg>
                  </div>
                </div>
              ),
            },
            {
              id: 2,
              width: 1,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-3xl tw-italic tw-py-2 tw-mb-4 tw-text-center"
                    }
                  >
                    Tailwind CSS
                  </p>
                  <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-max-w-[60%]">
                    <img
                      className={
                        "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                      }
                      src={TailwindLogo}
                      alt={"Tailwind CSS Logo"}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: 3,
              width: 2,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-3xl tw-italic tw-py-2 tw-text-center"
                    }
                  >
                    React Development Fundamentals
                  </p>
                  <div className="tw-flex tw-flex-col sm:tw-flex-row lg:tw-items-end xs:tw-items-center tw-justify-evenly tw-w-full tw-flex-1 tw-min-w-0 tw-pb-2 tw-mx-4">
                    <div className="tw-flex tw-flex-col tw-items-center tw-h-auto tw-w-[80px] sm:tw-w-[100px]">
                      <div className="tw-w-full !tw-cursor-pointer">
                        <img
                          className={
                            "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                          }
                          src={ReactLogo}
                          alt={"React JS Logo"}
                        />
                        <p className="tw-body-text tw-text-center tw-font-semibold tw-text-base sm:tw-text-2xl tw-italic tw-pt-4">
                          Context
                        </p>
                      </div>
                    </div>

                    <div className="tw-flex tw-flex-col tw-items-center tw-h-auto tw-w-[80px] sm:tw-w-[100px]">
                      <img
                        className={
                          "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                        }
                        src={ReactHook}
                        alt={"React Logo with a fishing hook"}
                      />
                      <p className="tw-body-text tw-text-center tw-font-semibold tw-text-base sm:tw-text-2xl tw-italic tw-pt-4">
                        UseState
                      </p>
                    </div>

                    <div className="tw-flex tw-flex-col tw-items-center tw-h-auto tw-w-[80px] sm:tw-w-[100px]">
                      <img
                        className={
                          "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                        }
                        src={ReactHook}
                        alt={"React Logo with a fishing hook"}
                      />
                      <p className="tw-body-text tw-text-center tw-font-semibold tw-text-base sm:tw-text-2xl tw-italic tw-pt-4">
                        UseContext
                      </p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              id: 4,
              width: 2,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-4"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-3xl tw-italic tw-py-2 " +
                      "tw-mb-4 tw-text-center tw-w-1/2 sm:tw-max-w-full"
                    }
                  >
                    Use ALL-approved NPM Packages
                  </p>
                  <div className="tw-flex tw-flex-col tw-items-center tw-w-full lg:tw-max-w-[50%] tw-pr-4">
                    <img
                      className={
                        "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                      }
                      src={NPMLogo}
                      alt={"NPM logo"}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: 5,
              width: 1,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-3xl tw-italic tw-py-2 tw-mb-4 tw-text-center"
                    }
                  >
                    Follow ALL Branding
                  </p>
                  <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-max-w-[60%]">
                    <img
                      className={
                        "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                      }
                      src={Logo}
                      alt={"ALL logo"}
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </Page>
  );
};
