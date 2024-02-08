import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import { CheckRounded, WarningRounded } from "@material-ui/icons";
import ProgressBar from "./ProgressBar";
import { MESSAGES, READ_TIME } from "../../../../constants/lab7";
import Countdown from "react-countdown";
import { useLab7StateContext } from "src/reducers/lab7/Lab7Context";


/**
 * Represents a message modal component.
 * 
 * @component
 * @returns {JSX.Element} MessageModal component
 */
const MessageModal = () => {
  const { state } = useLab7StateContext();
  /**
   * Callback method for a countdown. Used for progress bar.
   *
   * @param seconds time left on the countdown
   * @param completed whether the countdown is complete
   * @returns {JSX.Element} progress bar component
   */
  const countdownRenderCallback = ({ seconds, completed }) => {
    if (completed) return <></>;
    else return <ProgressBar text={state.message} seconds={seconds} />;
  };

  const isIntrusion = state.message !== MESSAGES.Perfect;
  return (
    <Modal
      centered={true}
      isOpen={state.isModalOpen}
      contentClassName={"tw-max-w-4xl"}
    >
      <ModalHeader>
        <span className={"tw-flex tw-items-center"}>
          {isIntrusion ? (
            <WarningRounded fontSize={"large"} htmlColor={"#e31c3d"} />
          ) : (
            <CheckRounded fontSize={"large"} htmlColor={"#2e8540"} />
          )}
          <h3 className={"tw-ml-3 tw-text-2xl tw-font-bold"}>
            {isIntrusion ? "Intrusion detected!" : "Perfect score!"}
          </h3>
        </span>
      </ModalHeader>
      <Countdown
        date={Date.now() + READ_TIME}
        renderer={countdownRenderCallback}
      />
    </Modal>
  );
};

export default MessageModal;
