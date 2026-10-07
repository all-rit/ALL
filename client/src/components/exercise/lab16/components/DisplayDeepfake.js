import React, { useEffect, useState } from "react";
import { imagesPath } from "src/constants/lab16/DeepfakeImages";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

const DisplayDeepFake = (props) => {
  const { teammateId, toggleAction, isChatRoom } = props;
  const [imagePath, setImagePath] = useState("");
  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
    if (toggleAction) {
      toggleAction();
    }
  };

  const handleNavigation = async () => {
    sessionStorage.setItem("teammateId", teammateId);
      //insert Chatroom nav when finished implementing
      navigate("/Lab16/Exercise/Conclusion");
  };

  useEffect(() => {
    setImagePath(imagesPath[teammateId] || imagesPath[0]);
  }, [teammateId]);

  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-px-6">
        {modal && isChatRoom === false ? (
          <Modal isOpen={modal} toggle={toggle} centered>
            <ModalHeader className="tw-text-center tw-justify-center tw-text-red-600 tw-font-bold ">
              System Alert
            </ModalHeader>
            <ModalBody className="tw-text-center tw-py-8">
              <h5 className="tw-font-semibold">
                We have footage of your teammate not wanting popcorn
              </h5>
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
                //change image source to lab16
                src="/img/imagine26/activityImages/alert.png"
                alt="alert icon"
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
                    //change img source to lab16
                    src="/img/imagine26/activityImages/alert.png"
                    alt="alert icon"
                  />
                </div>
                <div className={"tw-flex tw-justify-center tw-mb-6"}>
                  <hr className={"tw-w-3/5 tw-bg-labLightGray"} />
                </div>
              </div>

              <p className="tw-font-bold tw-text-brightRed tw-leading-relaxed tw-max-w-md tw-mt-10">
                Unfortunately, due to this information, your teammate lost their prize.
              </p>
            </div>

            <div className="tw-relative tw-max-w-[300px] tw-mx-auto tw-mt-2 tw-p-2">
              <img
                src={imagePath}
                alt="Deepfake footage"
                className="tw-rounded-lg tw-shadow-2xl tw-w-full tw-h-auto tw-object-contain tw-border tw-border-gray-100"
              />
            </div>
            <Button
              className="tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
        tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black tw-mt-8"
              //alert model should pop up and deepfake should be shown
              onClick={handleNavigation}
            >
              Next
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default DisplayDeepFake;

DisplayDeepFake.propTypes = {
  teammateId: PropTypes.number.isRequired,
  toggleAction: PropTypes.func,
  isChatRoom: PropTypes.bool,
};
