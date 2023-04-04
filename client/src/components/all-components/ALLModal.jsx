import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const ALLModal = (props) => {
  const {
    status,
    showStatusIcon,
    failedStatusTitle,
    customHeader,
    customBody,
    header,
    statusTitle,
    description,
    customFooter,
    showFooter,
    primaryAction,
    secondaryAction,
    showHeader,
    canClose,
    canDismiss,
    timeOutTime: startTime,
    timeOutMessage,
  } = props;

  const [show, setShow] = useState(true);
  const [seconds, updateSeconds] = useState(startTime);
  // const [startTimer, setStartTimer] = useState(false);

  const timer = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // setStartTimer(true);
      timer.current = setInterval(() => {
        updateSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }, 2000);
    return () => {
      clearInterval(timer.current);
      timer.current = null; // safer to set to null
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timer.current);
      timer.current = null;
      setShow(false);
    }
    // eslint-disable-next-line
  }, [seconds]);

  {
    /*Modal hook*/
  }
  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [show]);

  return show ? (
    <div className="tw-fixed tw-inset-0 tw-z-10 tw-overflow-y-auto">
      <div
        className="tw-fixed tw-inset-0 tw-w-full tw-h-full tw-bg-dark tw-opacity-60"
        onClick={() => {
          canDismiss ? setShow(false) : () => {};
        }}
      ></div>
      <div className="tw-flex tw-items-center tw-min-h-screen tw-px-4 tw-py-8">
        <div className="tw-relative tw-w-full tw-max-w-lg tw-mx-auto tw-bg-white tw-rounded-md tw-shadow-lg">
          {/*Header*/}
          {showHeader && (
            <>
              <div>
                {customHeader ? (
                  customHeader
                ) : (
                  <div className="tw-flex tw-items-center tw-justify-between tw-p-1">
                    <div className="tw-text-2xl tw-font-medium tw-text-textGray tw-m-2">
                      {header}
                    </div>
                    {canClose && (
                      <button
                        className="tw-p-1 tw-text-textGray tw-bg-white tw-rounded-md hover:tw-bg-hoverGray tw-border-0 tw-m-2"
                        onClick={() => setShow(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-w-5 tw-h-5 tw-mx-auto"
                          viewBox="0 0 20 20"
                          fill="black"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                )}
              </div>
              {/*Border*/}
              <div className="tw-mx-auto tw-bg-lightGray tw-h-0.25" />
            </>
          )}
          {/*Body*/}
          <div className="tw-mt-3 tw-p-4">
            {showStatusIcon && (
              <>
                {status ? (
                  <div className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-mx-auto tw-bg-correctGreen tw-rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="tw-w-6 tw-h-6 tw-text-green-600"
                      viewBox="0 0 20 20"
                      fill="white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-mx-auto tw-bg-incorrectRed tw-rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M 10.1125 11.4 l 2.9 2.9 c 0.3 0.3 0.5 0.3 0.8 0 l 0.6 -0.6 c 0.3 -0.3 0.3 -0.5 0 -0.8 L 11.3125 9.8 L 14.4125 6.7 c 0.3 -0.3 0.3 -0.6 0 -0.8 l -0.6 -0.6 c -0.3 -0.3 -0.5 -0.3 -0.8 0 L 10.1125 8.3 L 7.1125 5.2 c -0.3 -0.3 -0.5 -0.3 -0.8 0 L 5.8125 5.8 c -0.3 0.3 -0.3 0.6 0 0.8 L 8.9125 9.8 L 5.8125 13 c -0.3 0.3 -0.3 0.6 0 0.8 l 0.6 0.6 c 0.3 0.3 0.5 0.3 0.8 0 L 10.1125 11.4 z"
                      />
                    </svg>
                  </div>
                )}
              </>
            )}
            <div className="tw-mt-2">
              {customBody ? (
                customBody
              ) : (
                <div>
                  <h4 className="tw-text-lg tw-text-center tw-font-medium tw-text-textGray">
                    {status ? statusTitle : failedStatusTitle}
                  </h4>
                  <p className="tw-mt-2 tw-text-[15px] tw-leading-relaxed tw-text-textGray">
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>
          {/*Timeout Timer*/}
          {startTime && (
            <div className="tw-p-1 tw-space-x-2 tw-flex tw-flex-wrap tw-justify-center">
              <h3 className="tw-text-lg tw-text-center tw-font-semibold tw-text-textGray">
                {timeOutMessage ? timeOutMessage : "Closes in:"}
              </h3>
              <h3 className="tw-text-lg tw-text-center tw-font-bold tw-text-textGray ">
                {seconds} seconds
              </h3>
            </div>
          )}
          {/*Footer*/}
          {showFooter && (
            <>
              {/*Border*/}
              <div className="tw-mx-auto tw-mt-3  tw-bg-lightGray tw-h-0.25" />
              <div className="tw-p-4">
                {customFooter ? (
                  customFooter
                ) : (
                  <div className="tw-items-center tw-gap-2 sm:tw-flex">
                    <button
                      className="btn-md tw-w-full tw-mt-1 tw-p-2.5 tw-flex-1 tw-text-labGray tw-bg-labYellow tw-rounded-md tw-outline-none tw-ring-offset-2 tw-ring-labYellow focus:tw-ring-2 tw-font-medium tw-border-0"
                      onClick={() => {
                        setShow(false);
                        primaryAction();
                      }}
                    >
                      Confirm
                    </button>
                    {secondaryAction && (
                      <button
                        className="btn-md tw-w-full tw-mt-1 p-2.5 tw-flex-1 tw-text-white tw-bg-labGray tw-rounded-md tw-outline-none tw-border-0 tw-ring-offset-2 tw-ring-labGray focus:tw-ring-2 tw-font-medium "
                        onClick={() => setShow(false)}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

ALLModal.propTypes = {
  status: PropTypes.bool,
  showStatusIcon: PropTypes.bool,
  failedStatusTitle: PropTypes.string,
  header: PropTypes.string,
  statusTitle: PropTypes.string,
  description: PropTypes.string,
  customFooter: PropTypes.element,
  customHeader: PropTypes.element,
  customBody: PropTypes.element,
  showFooter: PropTypes.bool,
  showHeader: PropTypes.bool,
  canClose: PropTypes.bool,
  canDismiss: PropTypes.bool,
  primaryAction: PropTypes.func,
  secondaryAction: PropTypes.func,
  timeOutTime: PropTypes.number,
  timeOutMessage: PropTypes.string,
};

export default ALLModal;
