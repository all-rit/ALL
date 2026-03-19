import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";
import ImagineHeader from "./ImagineHeader";
import { imagesPath } from "src/constants/imagine26/images";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";

const DisplayDeepFake = (props) => {
  const { teammateId, isExperential, toggleAction } = props;
  const [imagePath, setImagePath] = useState("");
  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
    toggleAction();
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
        {modal ? (
          <Modal isOpen={modal} toggle={toggle} centered>
            <ModalHeader className="tw-text-center tw-justify-center tw-text-red-600 tw-font-bold ">
              System Alert
            </ModalHeader>
            <ModalBody className="tw-text-center tw-py-8">
              {isExperential ? (
                <h5 className="tw-font-semibold">
                  We have footage of you not wanting cotton candy{" "}
                </h5>
              ) : (
                <h5 className="tw-font-semibold">
                  We have footage of your teammate not wanting cotton candy
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
        ) : (
          <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full tw-gap-4">
            <ImagineHeader title={"Found footage"} />

            <p className="tw-text-gray-700 tw-leading-relaxed tw-max-w-md tw-mt-3">
              {isExperential
                ? "Unfortunately, due to this information, you won't be receiving your prize."
                : "Unfortunately, due to this information, your teammate lost their prize."}
            </p>

            <div className="tw-relative tw-w-full tw-max-w-[400px] tw-mx-auto">
              <img
                src={imagePath}
                alt="Deepfake footage"
                className="tw-rounded-xl tw-shadow-2xl tw-w-full tw-h-auto tw-object-contain tw-border tw-border-gray-100"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default DisplayDeepFake;

DisplayDeepFake.propTypes = {
  teammateId: PropTypes.number.isRequired,
  isExperential: PropTypes.bool.isRequired,
  toggleAction: PropTypes.func.isRequired,
};
