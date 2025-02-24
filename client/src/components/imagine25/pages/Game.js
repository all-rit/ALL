import { Modal, ModalBody } from "reactstrap";
import React, { useEffect, useState } from "react";
import { Frame } from "../components/Frame";
import ALLButton from "src/components/all-components/ALLButton";

//Random score that will be generated for both teams
const userScore = Math.floor(Math.random() * 1000 + 500);
/*opponent score will always be less than user score, but never less than 475
This is done so that the game seems realistically close*/
const opponentScore = Math.floor((userScore - 500) * Math.random() + 475);

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
              <div className="xs:tw-text-md xl:tw-text-xl tw-text-center tw-p-auto tw-mt-[100px]">
                <p>Your team&apos;s score: {userScore}</p>
                <p>Your opponent team&apos;s score: {opponentScore}</p>
                <p>
                  <strong>You Win!</strong>
                </p>
              </div>
              <ALLButton
                onClick={() => alert("No next page implemented")}
                label="Analyze Game"
                className="tw-flex tw-justify-center tw-mt-[100px]"
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
