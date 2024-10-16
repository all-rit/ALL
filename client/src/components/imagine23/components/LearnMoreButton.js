import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import ImagineService from "../../../services/ImagineService";
import PropTypes from "prop-types";

const LearnMoreButton = (props) => {
  const { data, userID } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState("");
  const [running, setRunning] = useState(false);
  const timer = useRef();

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
  }, [running]);

  const stopTimer = () => {
    toggle();
    setRunning(false);
    setTimeElapsed(formatTime(time));
    clearInterval(timer.current);
  };

  const readMoreCount = () => {
    setModal(true);
    setCounter(1);
  };

  const saveData = () => {
    setRunning(true);
    readMoreCount();
    toggle();
  };

  useEffect(() => {
    ImagineService.readMoreCount(userID, counter);
  }, [counter, userID]);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  };

  useEffect(() => {
    ImagineService.readMoreTimeElapsed(userID, timeElapsed);
  }, [timeElapsed, userID]);

  return (
    <>
      <button
        className="btn btn-second text-white btn-xl text-uppercase tw-m-3"
        onClick={() => saveData()}
      >
        Read more
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-content__header">
          <h1>For more information, please visit the following websites: </h1>
        </div>

        <ModalBody>
          <ul className="module_more_info">
            <li className="p-text-modal">
              Learn more about Accessibility for Color Blindness:
            </li>
          </ul>
          <div>
            {data.map((data, index) => {
              return (
                <div key={index}>
                  <h1>{data.name}</h1>
                  <iframe
                    src={data.link}
                    sandbox="allow-orientation-lock"
                    title={data.name}
                    name="link"
                    style={{ height: "80vh", width: "100%" }}
                  ></iframe>
                </div>
              );
            })}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
            onClick={stopTimer}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

LearnMoreButton.propTypes = {
  data: PropTypes.string,
  userID: PropTypes.string,
};

export default LearnMoreButton;
