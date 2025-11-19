import { React, useState } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import EntanglementQubit from "src/components/exercise/lab14/components/EntaglementQubit.js";

const Entanglement = () => {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("qubit");
  const [fontColor, setFontColor] = useState("white");
  const [time, setTime] = useState(0);
  const [altColor, setAltColor] = useState("qubit");
  const [altText, setAltText] = useState("");
  const [altFontColor, setAltFontColor] = useState("white");

  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/CaesarCipher");
  };

  const colorChange = () => {
    // Gives random number either 0 or 1 to collapse to for qubit color
    const rng = Math.floor(Math.random() * 2);

    if (rng == 0) {
      setBgColor("labBlue");
      setAltColor("labYellow");
      setText("0");
      setAltText("1");
      setAltFontColor("black");
      setTime(0);
    } else {
      setBgColor("labYellow");
      setAltColor("labBlue");
      setFontColor("black");
      setText("1");
      setAltText("0");
    }
  };

  return (
    <div>
      <h1 className={"tw-title tw-text-left"}>Entanglement</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          Entanglement is a unique quantum phenomenon where pairs or groups of
          qubits are linked together in such a way that the state of one qubit
          directly influences the state of another, regardless of the distance
          between them. This means that measuring one entangled qubit instantly
          determines the state of its partner qubit. Entanglement is a crucial
          resource in quantum computing and quantum communication, enabling
          advanced protocols like quantum teleportation and superdense coding.
        </p>
      </div>
      <div className="tw-flex tw-items-center tw-justify-center tw-gap-8">
        <div className="tw-flex tw-flex-row tw-w-1/2 tw-py-10">
          <EntanglementQubit
            text={text}
            colorChange={colorChange}
            bgColor={bgColor}
            fontColor={fontColor}
            time={time}
          ></EntanglementQubit>
          <div className="tw-flex-grow tw-border-b-7 tw-border-dashed tw-border-labGray tw-w-1/2 tw-my-12 tw-h-0"></div>
          <EntanglementQubit
            colorChange={colorChange}
            text={altText}
            bgColor={altColor}
            fontColor={altFontColor}
          ></EntanglementQubit>
        </div>
      </div>
      <div className="tw-flex tw-justify-evenly tw-my-20">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Entanglement;
