import { React, useEffect } from "react";
import { EXERCISE_PLAYING } from "src/constants/index";
import { startExercise } from "src/reducers/lab2/actions";
import useMainStateContext from "src/reducers/MainContext";
import { navigate } from "@reach/router";
import { useState } from "react";
import Qubit from "src/components/exercise/lab14/components/Qubit.js";

const Superposition = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    startExercise();
    navigate("/Lab14/Exercise/Entanglement");
  };

  const Bit = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHovering ? "#ffc334" : "#0d28bc",
          color: isHovering ? "black" : "white",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isHovering ? "1" : "0"}
      </div>
    );
  };

  return (
    <div>
      <h1 className={"tw-title tw-text-left"}>Superposition</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          Superposition is the phenomona in quantum computing that makes it so
          powerful compared to classic computers! Qubits fluctuate between
          values of 0 and 1 simultaneously and can be valued at either all at
          the same time.
        </p>
      </div>
      <h2 className={"tw-subtitle tw-text-center"}>Classic Computer</h2>
      <div className="tw-flex-row tw-flex tw-gap-10 tw-justify-evenly tw-items-center">
        <p className="tw-body-text tw-text-left tw-py-6 tw-justify-start tw-max-w-[500px]">
          Classic computers work with what are called bits. Bits are values
          within a computers memory that can be stored as either 0 or 1. Try
          hovering over the bit values below to see for yourself! Notice how the
          bits can only be one of two values? This is what all of classic
          comupting breaks down to!
        </p>
        <div className="tw-flex tw-flex-row tw-gap-7 tw-max-w-1/2 p-2">
          <Bit></Bit>
          <Bit></Bit>
        </div>
      </div>
      <h2 className={"tw-subtitle tw-text-center"}>Quantum Computer</h2>
      <div className="tw-flex-row tw-flex tw-gap-10 tw-justify-evenly tw-items-center">
        <p className="tw-body-text tw-text-left tw-py-6 tw-justify-start tw-max-w-[625px]">
          Quantum computers work with qubits, which harness the power of
          superposition to have values of 0 and 1 simultaneously. However, if a
          qubit is measured for too long, it will collapse to a static value of
          0 or 1 like a classic bit. Go ahead and test it for yourself! Make
          sure to wait a bit when hovering over the qubit. Notice how the qubit
          collapses to a random value whenever it&apos;s measured for some time?
          If you test it multiple times, it will change values to either 0 or 1.
          This shows how real qubits will collapse to a random value of 0 or 1.
        </p>
        <div className="tw-flex tw-flex-row tw-gap-7 tw-max-w-1/2 p-2">
          <Qubit></Qubit>
        </div>
      </div>
      <div className="tw-flex tw-justify-evenly">
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

export default Superposition;
