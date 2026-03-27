/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { navigate } from 'react-router-dom';
import React from 'react';
import './secondaryInstructions.css';
import LabButton from '../../../all-components/LabButton';

/*
Page containing the instructions for the second popup the user sees
this instructional popup covers color contrast
*/
const ThirdInstructions = ({
  closePage,
  activatePopup,
  toWhiteBackground,
  background,
  selectOption,
  isImagine,
}) => {
  const alreadyCalled = false;
  if (!alreadyCalled) {
    selectOption('Protanopia');
  }

  const changeColors = () => {
    activatePopup();
  };

  if (background !== 'white') {
    toWhiteBackground();
  }
  if (isImagine) {
    navigate('/Imagine2023/Reading');
  }

  return (
    <>
      {!isImagine && (
        <div className=" tw-flex tw-flex-col tw-p-6 tw-text-justify tw-justify-between">
          <p className="tw-title">Round 2 Complete</p>
          <ul className={'tw-font-calibri tw-font-normal tw-body-text'}>
            <li className="tw-pt-3">
              Wow, that was tough! As you can see, this exercise can be very
              difficult for users who are colorblind. The exercise was not
              created in an accessible manner for these users. This is due to
              the colors being in contrast with both the background and the
              other circles.
            </li>
            <li className="tw-pt-3">
              You can change the colors with the
              <strong style={{ marginLeft: '3px', marginRight: '3px' }}>
                Update Colors
              </strong>
              button in the upper left corner of the next screen.
            </li>
            <li className="tw-pt-3">
              You can use any online calculator or a calculator you've created
              for your lab! In order to fix the problem, the contrast must be
              above a ratio of <strong>7:1</strong>.{' '}
              <em>
                Black is not an applicable option, as the entire system relies
                upon black for text coloring (giving you zero contrast between
                the background and text).
              </em>
            </li>
            <h2 className={'tw-title tw-py-6'}>Did you know?</h2>
            <li className="tw-body-text tw-font-medium">
              Color contrast is a measurement of how much two colors differ from
              one another. This measurement makes a huge difference to people
              color vision deficiencies.
            </li>
          </ul>
          <br></br>
          <div className="center">
            <LabButton onClick={changeColors} label={"I'm ready!"} />
          </div>
        </div>
      )}
    </>
  );
};

export default ThirdInstructions;
