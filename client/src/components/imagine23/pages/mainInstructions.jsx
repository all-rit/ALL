import React from 'react';
import Circle from '../../all-components/imagine-components/circle';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';

const MainInstructions = () => {
  const handleNext = () => {
    navigate('/Imagine2023/ExperientialExercise');
  };
  return (
    <div className="mainInstructionsContainer">
      <h2 className="tw-title">Experiential Empathy Building: Instructions</h2>

      <p className="tw-body-text">
        You are about to play a exercise involving three colored circles, the
        same size as this one:
      </p>
      <div className="center tw-m-3">
        <Circle color={'blue'} clickable={false} />
      </div>
      <ul className="study__list">
        <li className="tw-body-text">
          You will need to <strong>click the circle</strong> in the center of
          the screen.
        </li>
        <li className="tw-body-text">The circle will be 1 of 3 colors.</li>
        <li className="tw-body-text">
          The color you need to click will appear in the{' '}
          <strong>bottom left</strong> corner of the screen.
        </li>
        <li className="tw-body-text">
          The colors you should <strong>avoid</strong> clicking will appear in
          the <strong>bottom right</strong> of the screen.
        </li>
        <li className="tw-body-text">
          You will gain or lose points based on if you clicked the{' '}
          <strong>correct or incorrect</strong> circle and based on{' '}
          <strong>how fast you clicked</strong> the correct colored circle. So
          click as fast as you possibly can!
        </li>
        <li className="tw-body-text">
          The color changes in the center of the screen every second for fifteen
          seconds.
        </li>
      </ul>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleNext}
        key="start"
      >
        Start
      </button>
    </div>
  );
};

export default MainInstructions;
