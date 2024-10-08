import React, { useEffect } from "react";
import { Modal } from "reactstrap";
import PropTypes from "prop-types";
import logo from "../../assets/images/logos/ALL_White_Logo.svg";

const NewALLModal = (props) => {
  const { isOpen, toggle, direction, body } = props;

  useEffect(() => {
    console.log(direction);
  });

  return (
    <Modal toggle={toggle} isOpen={isOpen} className={"tw-w-[32rem] tw-pr-5"}>
      {direction === "row" ? (
        <div
          className={`tw-flex tw-flex-row lg:tw-h-[28rem] sm:tw-min-w-[30rem] md:tw-min-w-[40rem] lg:tw-min-w-[64rem]`}
        >
          <div
            id="row-header"
            className={
              "tw-bg-primary-blue tw-relative tw-w-1/2 tw-rounded-l-md"
            }
          >
            <button
              className="tw-absolute tw-text-5xl
                                        tw-font-poppins line-height-0 tw-top-5
                                        tw-text-white tw-bg-primary-blue
                                        tw-rounded-4xl tw-border-0"
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
                  "tw-w-1/2 tw-flex tw-flex-row tw-justify-center tw-align-middle "
                }
              >
                <img className={"tw-font-poppins"} src={logo} srcSet={logo} />
              </div>
            </div>
          </div>
          <div
            id={"row-body"}
            className={
              "tw-w-1/2 tw-flex tw-flex-col tw-align-middle tw-justify-center"
            }
          >
            {body}
          </div>
        </div>
      ) : (
        <div
          className={`tw-flex tw-flex-col tw-min-h-[40rem] sm:tw-min-w-[20rem] md:tw-min-w-[30rem] lg:tw-min-w-[40rem]`}
        >
          <div
            id="col-header"
            className={"tw-bg-primary-blue tw-relative tw-h-52 tw-rounded-t-md"}
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
                  "tw-w-1/2 tw-flex tw-flex-row tw-justify-center tw-align-middle "
                }
              >
                <img className={"tw-font-poppins"} src={logo} srcSet={logo} />
              </div>
            </div>
          </div>
          <div id="col-body">{body}</div>
        </div>
      )}
    </Modal>
  );
};

NewALLModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.bool.isRequired,
  body: PropTypes.any,
  direction: PropTypes.oneOf(["row", "column"]).isRequired,
};
export default NewALLModal;
