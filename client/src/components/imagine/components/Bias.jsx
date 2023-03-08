/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Timer from "./Timer";
import { Modal, ModalBody } from "reactstrap";

const Bias = (props) => {
  const {
    handleNext,
    biasType,
    team,
    avatar,
    offender,
    isModalActive,
    setModalActive,
  } = props;
  const [timerDone, setTimerDone] = useState(false);
  const [bias, setBias] = useState(null);

  useState(() => {
    biasType === "user" ? setBias(avatar[0]?.bias) : setBias(offender?.bias);
  }, [team, avatar, offender]);

  const onExit = () => {
    handleNext();
  };
  const penaltyFinished = () => {
    setTimerDone(true);
    setModalActive(false);
    onExit();
  };

  if (biasType !== "none") {
    return (
      <div>
        <Modal isOpen={isModalActive}>
          <ModalBody>
            <div className="tw-p-5 tw-text-center">
              {biasType === "user" ? (
                <h3>
                  Your avatar was not selected to play because the {bias}.
                </h3>
              ) : (
                <h3>
                  You were not selected because one of your teammates {bias}.
                </h3>
              )}
              <h3>You will now have to wait to join your match.</h3>
            </div>
            <div>
              <Timer seconds={30} finished={penaltyFinished} />
            </div>
            <div>
              {timerDone ? (
                <button
                  className="btn btn-primary text-black btn-xl text-uppercase"
                  onClick={onExit}
                >
                  Next
                </button>
              ) : (
                <></>
              )}
            </div>
          </ModalBody>
        </Modal>
        {/* change to any number */}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Bias;
