/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import ImagineService from "../../../services/ImagineService";

const LearnMoreButton = (props) => {
  const { data, userID } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [counter, setCounter] = useState(1);
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
    console.log("time elapsed " + formatTime(time));
    setTimeElapsed(formatTime(time));
    clearInterval(timer.current);
    // setTimeElapsed(formatTime(time))
    console.log("get current time " + formatTime(time));
  };

  const readMoreCount = () => {
    setModal(true);
    setCounter(1);
    console.log(counter);
  };

  const saveData = () => {
    setRunning(true);
    console.log(counter);
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
        className="btn-second btn btn-md tw-m-3"
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
          <Button className="btn-primary" onClick={stopTimer}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default LearnMoreButton;
