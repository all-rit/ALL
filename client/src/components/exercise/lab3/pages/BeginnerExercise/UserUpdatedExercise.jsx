/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import CatClickNavigate from '../../helpers/CatClickNavigate';
import { useNavigate } from 'react-router-dom';
import { PageService } from '@/services/PageService';
import { EXERCISE_PLAYING, LAB_ID } from '@/constants/lab3/index';

const UserUpdatedExercise = ({ actions, data }) => {
  const [render, setRender] = useState('');
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [renderedButtons, setRenderedButtons] = useState([]);
  const navigate = useNavigate();

  const textToSpeech = useCallback((e, text) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  }, []);

  const shuffleArray = useCallback((array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }, []);

  const setupButtons = useCallback(() => {
    console.log('calling setup');
    const catClick = () => {
      console.log('Cat image clicked!');
      const name = data.repair3.changesApplied
        ? 'UserUpdatedExercise'
        : 'InaccessibleExercise';
      PageService.createPage(name, secondsElapsed, LAB_ID);
      setRender('CatClickNavigate');
    };
    const imgStyle = {
      width: '10rem',
      height: '10rem',
      border: '1px solid black',
      backgroundColor: 'black',
    };
    let buttons = [];
    if (data.repair3.changesApplied) {
      buttons = [
        <button
          style={imgStyle}
          onClick={() => catClick()}
          tabIndex={'0'}
          onFocus={(e) => textToSpeech(e, data.repair3.catAltValue)}
        />,
        <button
          style={imgStyle}
          tabIndex={'0'}
          onFocus={(e) => textToSpeech(e, data.repair3.burgerAltValue)}
        />,
        <button
          style={imgStyle}
          tabIndex={'0'}
          onFocus={(e) => textToSpeech(e, data.repair3.carAltValue)}
        />,
        <button
          style={imgStyle}
          tabIndex={'0'}
          onFocus={(e) => textToSpeech(e, data.repair3.cowAltValue)}
        />,
      ];
    } else {
      buttons = [
        <button
          style={imgStyle}
          onClick={() => catClick()}
          tabIndex={'0'}
          onFocus={(e) => textToSpeech(e, 'Image 1')}
        />,
        <button
          style={imgStyle}
          tabIndex={'0'}
          onFocus={(e) => textToSpeech(e, 'Image 2')}
        />,
        <button
          style={imgStyle}
          tabIndex={'0'}
          onFocus={(e) => textToSpeech(e, 'Image 3')}
        />,
        <button
          style={imgStyle}
          tabIndex={'0'}
          onFocus={(e) => textToSpeech(e, 'Image 4')}
        />,
      ];
    }
    const mappedButtons = buttons.map(function (button, index) {
      return (
        <td key={index} tabIndex={'1'}>
          {button}
        </td>
      );
    });

    return shuffleArray(mappedButtons);
  }, [data, secondsElapsed, shuffleArray, textToSpeech]);

  const handleKeyDown = useCallback(
    (event) => {
      console.log('detected key code is: ' + event.keyCode);
      if (event.keyCode === 27) {
        console.log('Enter key pressed!');
        navigate('/Lab3/Exercise/AccessibleInstructions');
      }
    },
    [navigate],
  );

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
    const interval = setInterval(
      () => setSecondsElapsed((prev) => prev + 1),
      1000,
    );

    if (data.repair3.changesApplied) {
      actions.enableEnd(true);
    }
    setRenderedButtons(setupButtons());

    return () => clearInterval(interval);
  }, [actions, data, setupButtons]);

  const renderNextButton = (path) => {
    if (render === 'CatClickNavigate') {
      return <CatClickNavigate path={path} />;
    }
  };

  const tableStyle = {
    border: '1px solid black',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  };

  return (
    <div className={'tw-bg-black tw-rounded-lg tw-h-full tw-p-6'}>
      <h2
        className={'tw-title tw-text-white tw-p-6'}
        aria-label={
          data.repair3.changesApplied
            ? 'Accessible Exercise'
            : 'Inaccessible Exercise'
        }
        onFocus={(e) =>
          textToSpeech(
            e,
            data.repair3.changesApplied
              ? 'Accessible Exercise'
              : 'Inaccessible Exercise',
          )
        }
      >
        {data.repair3.changesApplied
          ? 'Accessible Exercise'
          : 'Inaccessible Exercise'}
      </h2>
      <p
        className={
          'tw-px-[3rem] tw-text-white tw-body-text tw-font-medium tw-text-center'
        }
        onFocus={(e) =>
          textToSpeech(
            e,
            'Click on the image of a cat. You can use the keyboard to navigate by tabbing across the page. Press the enter key to select.',
          )
        }
      >
        Click on the image of a cat. You can use the keyboard to navigate by
        tabbing across the page. Press the enter key to select.
      </p>
      <table style={tableStyle} className={'tw-relative'}>
        <tbody>
          <tr>
            {renderedButtons[0]}
            {renderedButtons[1]}
          </tr>
          <tr>
            {renderedButtons[2]}
            {renderedButtons[3]}
          </tr>
        </tbody>
      </table>
      {renderNextButton(
        data.repair3.changesApplied
          ? '/Lab3/Exercise/CodeChange'
          : '/Lab3/Exercise/AccessibleInstructions',
      )}
    </div>
  );
};

export default UserUpdatedExercise;
