/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import './secondaryInstructions.css';
import { useNavigate } from 'react-router-dom';
import LabButton from '@all-components/LabButton';

/*
Page containing the instructions for the second popup the user sees
this instructional popup covers color vision defiencies
*/
const SecondInstructions = ({
  closePage,
  selectOption,
  toWhiteBackground,
  background,
  isImagineExpression,
}) => {
  const navigate = useNavigate();
  
  const alreadyCalled = false;
  if (!alreadyCalled) {
    selectOption('Protanopia');
  }

  if (background !== 'white') {
    toWhiteBackground();
  }

  const closeInstructions = () => {
    if (!isImagineExpression) {
      closePage();
    } else {
      navigate('/Imagine2023/ExpressionExerciseStart');
    }
  };

  return (
    <div className=" tw-flex tw-flex-col tw-p-6 tw-text-justify tw-justify-between">
      <p className="tw-title tw-p-0">Round 1 Complete</p>
      <ul className={'tw-font-calibri tw-font-normal tw-body-text'}>
        <li className={'tw-py-3'}>
          As you can see, this exercise isn't too difficult. However, to a user
          with a <em>color vision deficiency</em>, it is.
        </li>
        <li>
          A color vision deficiency (also sometimes referred to as color
          blindness) is when an individual is unable to see a portion of the
          color spectrum. These are quite common, especially in men, across the
          world.
        </li>
        <li className={'tw-py-3'}>
          An app, like this one, would be impossible for someone with a color
          vision deficiency to use properly. To simulate this, we have added the
          ability to simulate what an individual with this deficiency would see.
        </li>
        <h2 className={'tw-title'}>Did you know?</h2>
        <br />
        <li
          className={
            'tw-font-calibri tw-font-normal tw-body-text tw-text-justify'
          }
          style={{ listStyleType: 'none' }}
        >
          There are three main color vision deficiencies: Protanopia (Red
          blindness), Deuteranopia (Green blindness), and Tritanopia (Blue
          blindness). These are all options for simulation for in the exercise.
        </li>
      </ul>
      <div className="center tw-py-6">
        <LabButton onClick={closeInstructions} label={"I'm ready!"} />
      </div>
    </div>
  );
};

export default SecondInstructions;
