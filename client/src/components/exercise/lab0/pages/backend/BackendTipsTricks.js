import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import ALLCardFlip from "../../../../all-components/ALLCardFlip";
import PostMan from "../../../../../assets/images/lab0/Lab0_PostmanLogo.png";
import DataGrip from "../../../../../assets/images/lab0/Lab0_DataGripLogo.png";
import DevTools from "../../../../../assets/images/lab0/Lab0_DevToolsLogo.png";
import AgileCycle from "../../../../../assets/images/lab0/Lab0_AgileCycle.png";
import Conventions from "../../../../../assets/images/lab0/Lab0_ConventionSymbol.png";
import RoadMap from "../../../../../assets/images/lab0/Lab0_RoadMap.jpg";

export const BackendTipsTricks = () => {
  const [complete, setComplete] = useState(false);

  const arrow = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
  );

  return (
    <Page nextPage={ROUTES.SELECTION_ROUTE} completed={complete} exercise>
      <Page.Header>
        <Page.Header.Title>Backend Tips &amp; Tricks</Page.Header.Title>
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
              width: 1,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-2xl tw-italic tw-py-2"
                    }
                  >
                    Explore ALL on
                  </p>
                  <div className={"tw-w-2/5"}>
                    {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </div>
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-2xl tw-italic tw-py-2"
                    }
                  >
                    GitHub
                  </p>
                </div>
              ),
            },
            {
              id: 1,
              width: 2,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-2xl tw-italic tw-pt-2"
                    }
                  >
                    Backend Development Order
                  </p>
                  <div className="tw-flex tw-items-center tw-p-3">
                    {/* Schema */}
                    <div className="tw-flex tw-flex-col tw-h-full tw-items-center tw-justify-end">
                      <div className="md:tw-w-1/2 lg:tw-w-3/4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 512"
                        >
                          <path d="M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z" />
                        </svg>
                      </div>
                      <p className="tw-body-text tw-font-semibold tw-text-base sm:tw-text-2xl tw-italic tw-pt-4">
                        Schema
                      </p>
                    </div>

                    <div className="tw-w-1/6">{arrow}</div>

                    {/* Service */}
                    <div className="tw-flex tw-flex-col tw-h-full tw-items-center tw-justify-end">
                      <svg
                        className="tw-w-2/5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                      </svg>
                      <p className="tw-body-text tw-text-center tw-font-semibold tw-text-base sm:tw-text-2xl tw-italic tw-pt-4">
                        Service
                      </p>
                    </div>

                    <div className="tw-w-1/6">{arrow}</div>

                    {/* Controller */}
                    <div className="tw-flex tw-flex-col tw-items-center tw-h-full tw-justify-between">
                      <svg
                        className="tw-w-1/3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                      </svg>
                      <p className="tw-body-text tw-text-center tw-font-semibold tw-text-base sm:tw-text-2xl tw-italic tw-pt-4">
                        Controller
                      </p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              id: 2,
              width: 2,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-2xl tw-italic tw-pt-2"
                    }
                  >
                    Helpful Tools
                  </p>
                  <div className="tw-flex tw-flex-col sm:tw-flex-row lg:tw-items-end xs:tw-items-center tw-justify-evenly tw-w-full tw-flex-1 tw-min-w-0 tw-pb-2 tw-mx-4">
                    <div className="tw-flex tw-flex-col tw-items-center tw-h-auto tw-w-[80px] sm:tw-w-[100px]">
                      <div className="tw-w-full">
                        <img
                          className={
                            "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                          }
                          src={DataGrip}
                          alt={"DataGrip Logo"}
                        />
                        <p className="tw-body-text tw-text-center tw-font-semibold tw-text-base sm:tw-text-2xl tw-italic tw-pt-4">
                          DataGrip
                        </p>
                      </div>
                    </div>

                    <div className="tw-flex tw-flex-col tw-items-center tw-h-auto tw-w-[80px] sm:tw-w-[100px]">
                      <img
                        className={
                          "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                        }
                        src={PostMan}
                        alt={"PostMan Logo"}
                      />
                      <p className="tw-body-text tw-text-center tw-font-semibold tw-text-base sm:tw-text-2xl tw-italic tw-pt-4">
                        Postman
                      </p>
                    </div>

                    <div className="tw-flex tw-flex-col tw-items-center tw-h-auto tw-w-[80px] sm:tw-w-[100px]">
                      <img
                        className={
                          "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                        }
                        src={DevTools}
                        alt={"DevTools Logo"}
                      />
                      <p className="tw-body-text tw-text-center tw-font-semibold tw-text-base sm:tw-text-2xl tw-italic tw-pt-4">
                        DevTools
                      </p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              id: 3,
              width: 1,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-2xl tw-italic tw-mt-4 tw-text-center"
                    }
                  >
                    Complete Work Iteratively
                  </p>
                  <div className={"tw-w-3/5 tw-content-center"}>
                    <img
                      className={
                        "tw-object-contain tw-w-full tw-max-h-[80%]  tw-hidden sm:tw-flex"
                      }
                      src={AgileCycle}
                      alt={"Iterative Cycle Logo"}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: 4,
              width: 1,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center tw-justify-center"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-2xl tw-italic tw-py-2"
                    }
                  >
                    Follow ALL
                  </p>
                  <div className={"tw-w-2/5"}>
                    <img
                      className={
                        "tw-object-contain tw-w-full tw-h-auto tw-hidden sm:tw-flex"
                      }
                      src={Conventions}
                      alt={"Figure presenting to an audience"}
                    />
                  </div>
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-2xl tw-italic tw-py-2"
                    }
                  >
                    Conventions
                  </p>
                </div>
              ),
            },
            {
              id: 5,
              width: 2,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-4"
                  }
                >
                  <p
                    className={
                      "tw-body-text tw-font-semibold tw-text-3xl tw-italic tw-py-2 tw-w-1/2 tw-text-center"
                    }
                  >
                    Plan Your Flow of Data Ahead of Time
                  </p>
                  <div className="tw-w-[30%] tw-my-4">
                    <img
                      className="tw-object-contain tw-w-full tw-max-h-[90%] tw-hidden sm:tw-flex"
                      src={RoadMap}
                      alt="Milestone symbol"
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
