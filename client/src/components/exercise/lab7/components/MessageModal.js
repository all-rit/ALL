import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab7/ExerciseReducer";
import { connect } from "react-redux";
import { CheckRounded, WarningRounded } from "@mui/icons-material";
import ProgressBar from "./ProgressBar";
import { MESSAGES, READ_TIME } from "../../../../constants/lab7";
import Countdown from "react-countdown";

const MessageModal = (props) => {
  /**
   * Callback method for a countdown. Used for progress bar.
   *
   * @param seconds time left on the countdown
   * @param completed whether the countdown is complete
   * @returns {JSX.Element} progress bar component
   */
  const countdownRenderCallback = ({ seconds, completed }) => {
    if (completed) return <></>;
    else return <ProgressBar text={props.message} seconds={seconds} />;
  };

  const isIntrusion = props.message !== MESSAGES.Perfect;
  return (
    <Modal
      centered={true}
      isOpen={props.isModalOpen}
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

MessageModal.propTypes = {
  isModalOpen: PropTypes.bool,
  message: PropTypes.element,
  handlers: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { isModalOpen, message } = state.exercise7;
  return { isModalOpen, message };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlers: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageModal);
