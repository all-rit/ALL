import { Modal, ModalBody } from "reactstrap";
import React, { useEffect, useState } from "react";
import { Frame } from "../components/Frame";
import ALLButton from "src/components/all-components/ALLButton";
import "./Game.css";

//Random score that will be generated for both teams
const userScore = Math.floor(Math.random() * 1000 + 500);
/*opponent score will always be less than user score, but never less than 475
This is done so that the game seems realistically close*/
const opponentScore = Math.floor((userScore - 500) * Math.random() + 475);

const Game = () => {
  const [seconds, setSeconds] = useState(60);
  const [modal, setModal] = useState(false);

  //When page loads timer starts that counts down from 60->0
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

  return (
    //flex container used to venter game vertically
    <div
      className={
        "tw-flex tw-justify-left tw-items-center tw-relative tw-w-[52vw] xs:tw-h-[500px] md:tw-h-[525px] lg:tw-h-[550px] xl:tw-h-[600px] tw-bg-[Black] tw-rounded-xl"
      }
    >
      <iframe
        src="https://microstudio.io/Nerozz/galaga/3E7A6TBT/"
        className={"tw-rounded-xl tw-w-[52vw] tw-h-[39vw] xl:tw-h-[600px]"}
      />
      <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white timerFont">
        <div>{seconds}</div>
      </div>
      <Modal isOpen={modal} className="tw-flex">
        <ModalBody className="tw-w-[60vw]">
          {Frame(
            <>
              <h3 className="tw-text-center tw-my-[50px]">
                <strong>You Win!</strong>
              </h3>
              <div className="xs:tw-text-md xl:tw-text-xl tw-text-left">
                <p>Team&apos;s score: {userScore}</p>
                <p className="tw-mt-[50px]">
                  Opponent team&apos;s score: {opponentScore}
                </p>
              </div>
              <ALLButton
                onClick={() => alert("No next page implemented")}
                label="Analyze Game"
                className="tw-flex tw-justify-center tw-mt-[75px]"
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
