import React from "react";
import { Modal } from "reactstrap";
import PropTypes from "prop-types";
import logo from "../../assets/images/logos/ALL_White.svg";

const BrandedALLModal = (props, { children }) => {
  const { isOpen, toggle, direction, body, width } = props;

  return direction === "row" && window.innerWidth >= 640 ? (
    <Modal
      toggle={toggle}
      isOpen={isOpen}
      className={"xs:tw-w-full sm:tw-h-[32rem] sm:md:lg:tw-w-[40rem] tw-pr-5"}
    >
      <div
        className={`tw-flex tw-flex-row xs:tw-h-[10rem] sm:tw-h-[20rem] md:lg:tw-min-h-[28rem] sm:tw-min-w-[30rem] md:tw-min-w-[40rem] lg:tw-min-w-[64rem]`}
      >
        <div
          id="row-header"
          className={"tw-bg-primary-blue tw-w-1/2 tw-rounded-l-md"}
        >
          <div
            className={
              "tw-w-full tw-flex tw-flex-row tw-justify-center tw-align-middle tw-h-full"
            }
          >
            <div
              className={
                "tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-align-middle"
              }
            >
              <img className={"tw-object-cover"} src={logo} />
            </div>
          </div>
        </div>
        <div
          id={"row-body"}
          className={
            "tw-w-1/2 tw-flex tw-flex-col tw-align-middle tw-justify-center tw-relative"
          }
        >
          <button
            className="tw-absolute sm:md:lg:tw-text-5xl
                                            tw-font-poppins line-height-0 tw-top-5 tw-right-0
                                            tw-text-primary-blue tw-bg-white
                                            tw-rounded-4xl tw-border-0 xs:tw-text-xl "
            onClick={toggle}
            aria-hidden="true"
          >
            &times;{" "}
          </button>
          {body}
          {children}
        </div>
      </div>
    </Modal>
  ) : (
    <Modal
      toggle={toggle}
      isOpen={isOpen}
      className={"xs:tw-w-full sm:md:lg:tw-w-[40rem] tw-pr-5"}
    >
      <div
        className={`tw-flex tw-flex-col tw-min-h-[30rem] xs:tw-w-full md:tw-min-w-[20rem] md:tw-max-w-[40rem] lg:tw-min-w-[60rem] ${width}`}
      >
        <div
          id="col-header"
          className={
            "tw-bg-primary-blue tw-relative tw-h-56 tw-rounded-t-md tw-bg-cover"
          }
        >
          <button
            className="tw-absolute tw-text-5xl
                                            tw-top-5 tw-right-0 tw-font-poppins
                                            tw-text-white tw-bg-primary-blue
                                            tw-rounded-4xl tw-border-0 line-height-0"
            onClick={toggle}
            aria-hidden="true"
          >
            {" "}
            &times;{" "}
          </button>
          <div
            className={
              "tw-w-full tw-flex tw-flex-row tw-justify-center tw-align-middle tw-h-full"
            }
          >
            <div
              className={
                "tw-w-1/2 tw-h-full tw-flex tw-flex-row tw-items-center"
              }
            >
              <img className={"tw-object-cover"} src={logo} />
            </div>
          </div>
        </div>
        <div
          id="col-body"
          className={
            "tw-w-full tw-h-full tw-flex tw-flex-row tw-justify-center tw-align-middle"
          }
        >
          <div className={"tw-w-full"}>{body}</div>
        </div>
      </div>
    </Modal>
  );
};

BrandedALLModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.bool.isRequired,
  body: PropTypes.any,
  width: PropTypes.string,
  direction: PropTypes.oneOf(["row", "column"]).isRequired,
};
export default BrandedALLModal;
