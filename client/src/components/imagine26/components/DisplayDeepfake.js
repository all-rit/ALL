import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";
import ImagineHeader from "./ImagineHeader";
import { imagesPath } from "src/constants/imagine26/images";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";

const DisplayDeepFake = (props) => {
  const teammateId = props.teammateId;
  const isExperential = props.isExperential;
  const [imagePath, setImagePath] = useState("");
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

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
      <div className="tw-p-4 tw-flex tw-flex-col tw-items-center">
        {modal ? (
          <Modal isOpen={modal} toggle={toggle} centered>
            <ModalHeader className="tw-text-red-600 tw-font-bold">
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
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-4">
            <ImagineHeader title={"Found footage"}></ImagineHeader>
            <p className="tw-text-center">
              {isExperential
                ? "Unfortunately, due to this information, you won't be receiving your prize."
                : "Unfortunately, due to this information, your teammate lost their prize."}
            </p>
            <img
              src={imagePath}
              alt="Deepfake image"
              className="tw-rounded-lg tw-shadow-sm"
            />
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
};
