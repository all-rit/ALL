import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";
import { imagesPath } from "src/constants/imagine26/images";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";

const DisplayDeepFake = (props) => {
  const { teammateId, isExperential, toggleAction, isChatRoom } = props;
  const [imagePath, setImagePath] = useState("");
  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
    if (toggleAction) {
      toggleAction();
    }
  };

  useEffect(() => {
    const fetchImagePath = async () => {
      const response = await ImagineService.getImagePath(
        sessionStorage.getItem("userID"),
        26,
        "deepfake",
      );
      setImagePath(response);
    };

    if (isExperential) {
      fetchImagePath();
    } else {
      setImagePath(imagesPath[teammateId] || imagesPath[0]);
    }
  }, [teammateId, isExperential]);

  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-px-6">
        {modal && isChatRoom === false ? (
          <Modal isOpen={modal} toggle={toggle} centered>
            <ModalHeader className="tw-text-center tw-justify-center tw-text-red-600 tw-font-bold ">
              System Alert
            </ModalHeader>
            <ModalBody className="tw-text-center tw-py-8">
              {isExperential ? (
                <h5 className="tw-font-semibold">
                  We have footage of you not wanting popcorn{" "}
                </h5>
              ) : (
                <h5 className="tw-font-semibold">
                  We have footage of your teammate not wanting popcorn
                </h5>
              )}
              <p className="tw-text-gray-600">
                Please click below to review the footage
              </p>
            </ModalBody>
            <ModalFooter className="tw-justify-center">
              <Button color="danger" onClick={toggle} className="tw-px-8">
                View Image
              </Button>
            </ModalFooter>
          </Modal>
        ) : isChatRoom ? (
          <div className="tw-w-96 tw-p-2 tw-gap-2">
            <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-bg-error tw-bg-opacity-30 tw-rounded-md tw-py-2 tw-px-4">
              <p className="tw-text-md tw-font-bold tw-text-brightRed tw-m-0">
                Flagged: High Risk-Content:{" "}
              </p>
              <img
                className="tw-w-5 tw-h-5 tw-object-contain"
                src="/img/imagine26/activityImages/alert.png"
                alt="aler icon"
              />
            </div>
            <div className="tw-relative tw-mt-4">
              <img
                src={imagePath}
                alt="Deepfake footage"
                className="tw-rounded-lg tw-shadow-2xl tw-w-full tw-h-[200px] tw-object-contain tw-border tw-border-gray-100 tw-bg-black"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full tw-gap-4">
              <div className="tw-absolute tw-top-5 tw-w-[96%]">
                <div className="tw-flex  tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-text-brightRed">
                  <h3 className="tw-title tw-font-bold tw-text-brightRed ">
                    {" "}
                    Flagged: High Risk-Content
                  </h3>
                  <img
                    className="tw-w-16 tw-h-16 tw-object-contain"
                    src="/img/imagine26/activityImages/alert.png"
                    alt="aler icon"
                  />
                </div>
                <div className={"tw-flex tw-justify-center tw-mb-6"}>
                  <hr className={"tw-w-3/5 tw-bg-labLightGray"} />
                </div>
              </div>

              <p className="tw-font-bold tw-text-brightRed tw-leading-relaxed tw-max-w-md tw-mt-10">
                {isExperential
                  ? "Unfortunately, due to this information, you won't be receiving your prize."
                  : "Unfortunately, due to this information, your teammate lost their prize."}
              </p>
            </div>

            <div className="tw-relative tw-max-w-[300px] tw-mx-auto tw-mt-2 tw-p-2">
              <img
                src={imagePath}
                alt="Deepfake footage"
                className="tw-rounded-lg tw-shadow-2xl tw-w-full tw-h-auto tw-object-contain tw-border tw-border-gray-100"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DisplayDeepFake;

DisplayDeepFake.propTypes = {
  teammateId: PropTypes.number.isRequired,
  isExperential: PropTypes.bool.isRequired,
  toggleAction: PropTypes.func,
  isChatRoom: PropTypes.bool,
};
