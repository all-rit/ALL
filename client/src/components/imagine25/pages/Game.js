import { Modal, ModalBody } from "reactstrap";
import React, { useEffect, useState } from "react";
import { Frame } from "../components/Frame";
import ALLButton from "src/components/all-components/ALLButton";

const Game = () => {
  const [seconds, setSeconds] = useState(60);
  const [modal, setModal] = useState(false);

  //When page load timer starts that counts down from 60->0
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(timer);
          toggle();
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggle = () => setModal(!modal);

  //This is the sizing of both the div container and game
  const sizeStyling = " tw-w-[800px] tw-h-[600px]";
  return (
    //flex container used to venter game vertically
    <div
      className={
        "tw-flex tw-justify-left tw-items-center tw-relative" + sizeStyling
      }
    >
      <iframe
        src="https://microstudio.io/Nerozz/galaga/3E7A6TBT/"
        className={"tw-rounded-xl" + sizeStyling}
      />
      <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white ">
        <div>{seconds}</div>
      </div>
      <Modal isOpen={modal} className="tw-flex">
        <ModalBody className="tw-w-[60vw]">
          {Frame(
            <>
              <div className="xs:tw-text-md xl:tw-text-xl tw-text-center">
                <p>Your team&apos;s score: 540</p>
                <p>Your opponent team&apos;s score: 345</p>
                <p>
                  <strong>You Win!</strong>
                </p>
              </div>
              <ALLButton
                onClick={() => alert("No next page implemented")}
                label="Analyze Game"
              />
            </>,
            null,
            null,
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Game;
