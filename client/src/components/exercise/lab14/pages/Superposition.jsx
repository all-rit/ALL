import { React } from 'react';
import { navigate } from 'react-router-dom';
import { useState } from 'react';
import Qubit from '@/components/exercise/lab14/components/Qubit';

const Superposition = () => {
  const handleContinue = () => {
    navigate('/Lab14/Exercise/Entanglement');
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
        className="hover:tw-cursor-pointer"
        style={{
          backgroundColor: isHovering ? '#ffc334' : '#0d28bc',
          color: isHovering ? 'black' : 'white',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isHovering ? '1' : '0'}
      </div>
    );
  };

  return (
    <div>
      <h1 className={'tw-title tw-text-left'}>Superposition</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          Superposition is an important idea in quantum computing that helps
          explain why it can be more powerful than regular computers. Instead of
          being only a 0 or a 1, a qubit can be in both states at the same time.
          This means a quantum computer can work with many possibilities at
          once, which can make certain types of problems easier to solve.
        </p>
      </div>
      <h2 className={'tw-subtitle tw-text-center'}>Classic Computer</h2>
      <div className="tw-flex-row tw-flex-wrap tw-flex tw-gap-x-10 tw-mb-8 tw-justify-evenly tw-items-center">
        <p className="tw-body-text tw-text-left tw-py-6 tw-justify-start tw-max-w-[500px]">
          Classical computers use units of information called <i>bits</i>. A bit
          is a value in the computer&apos;s memory that can be either a 0 or a
          1. Try hovering over the bit values below to see how they work. Notice
          that each bit can only be one of these two values. This simple idea is
          the basis of all classical computing.
        </p>
        <div className="tw-flex tw-flex-row tw-gap-7 tw-max-w-1/2 p-2">
          <Bit></Bit>
          <Bit></Bit>
        </div>
      </div>
      <h2 className={'tw-subtitle tw-text-center'}>Quantum Computer</h2>
      <div className="tw-flex-row tw-flex-wrap tw-flex tw-gap-x-10 tw-mb-8 tw-justify-evenly tw-items-center">
        <p className="tw-body-text tw-text-left tw-py-6 tw-justify-start tw-max-w-[625px]">
          While Classical computers use <i>bits</i>, Quantum computers use{' '}
          <i>qubits</i>. Qubits harness the power of superposition to hold the
          values of 0 and 1 simultaneously. However, when a qubit is measured
          for long enough, it collapses into a single value, either 0 or 1. Try
          hovering over the qubit. If you wait a moment, you&apos;ll see how the
          qubit collapses to a random value. When you test it again, this value
          will change! This shows how real qubits behave when they are measured.
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
