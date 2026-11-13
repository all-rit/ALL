import React, { useEffect, useState } from "react";
import { imagesPath } from "src/constants/lab16/DeepfakeImages";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";
// import { navigate } from "@reach/router";

const DisplayDeepFake = (props) => {
  const { teammateId, isChatRoom ,handleNavigation} = props;
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    setImagePath(imagesPath[teammateId] || imagesPath[0]);
  }, [teammateId]);

  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-w-full">
        {isChatRoom ? (
          <div className="tw-w-96 tw-p-2 tw-mt-2 tw-gap-2">
            <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-bg-error tw-bg-opacity-30 tw-rounded-md tw-py-2 tw-px-4">
              <p className="tw-text-md tw-font-bold tw-text-brightRed tw-m-0">
                Your are disqualified!{" "}
              </p>
              <img
                className="tw-w-5 tw-h-5 tw-object-contain"
                src="/src/assets/images/lab16/alert.svg"
                alt="alert icon"
              />
            </div>
            <div className="tw-relative tw-mt-2">
              <img
                src={imagePath}
                alt="Deepfake footage"
                className="tw-rounded-lg tw-shadow-2xl tw-w-full tw-h-[200px] tw-object-contain tw-border tw-border-gray-100 tw-bg-black"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-w-full tw-h-full tw-gap-4">
              <div className="tw-top-5 tw-w-[96%]">
                <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-text-brightRed">
                  <h3 className="tw-title tw-font-bold tw-text-brightRed ">
                    {" "}
                    Your are disqualified!
                  </h3>
                  <img
                    className="tw-w-12 tw-h-12 tw-object-contain"
                    src="/src/assets/images/lab16/alert.svg"
                    alt="alert icon"
                  />
                </div>
              </div>
              <p className="tw-font-bold tw-leading-relaxed tw-max-w-md">
                Your teammate was found cheating while playing the Guess the Flag Tournament
              </p>
            </div>

            <div className="tw-relative tw-max-w-[300px] tw-mx-auto tw-mt-2 tw-p-2">
              <img
                src={imagePath}
                alt="Deepfake footage"
                className="tw-rounded-lg tw-shadow-2xl tw-w-full tw-h-auto tw-object-contain tw-border tw-border-gray-100"
              />
            </div>
            <button
            className="tw-w-fit tw-bg-primary-blue hover:tw-bg-labBlue tw-text-white tw-font-bold tw-py-2 tw-px-6 tw-rounded-lg tw-transition-colors tw-duration-200"
              //alert model should pop up and deepfake should be shown
              onClick={handleNavigation}
            >
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default DisplayDeepFake;

DisplayDeepFake.propTypes = {
  teammateId: PropTypes.number.isRequired,
  isChatRoom: PropTypes.bool,
};
