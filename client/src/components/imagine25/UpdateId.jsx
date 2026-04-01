import React, { useState, useEffect } from 'react';
import ALLButton from '../all-components/ALLButton';
import useMainStateContext from '../../reducers/MainContext';
const { nanoid } = require('nanoid');
import { useNavigate } from 'react-router-dom';
import ImagineService from '../../services/ImagineService';
import PropTypes from 'prop-types';

// This component is the start component that updates the user ID
const UpdateId = (props) => {
  const { actions } = useMainStateContext();

  const startImagine = () => actions.setIsImagine(true);

  useEffect(() => {
    startImagine();
  }, []);

  const [warning, setWarning] = useState('tw-hidden');

  useEffect(() => {
    setWarning('tw-hidden');
  }, [props.canContinue]);

  const handleUpdateID = async () => {
    if (props.canContinue) {
      let userID = nanoid(6).toUpperCase();
      sessionStorage.setItem('userID', userID);
      await ImagineService.newID(userID, 25);
      navigate('/Imagine2025/PreSurvey');
    } else {
      setWarning('');
    }
  };

  return (
    <div
      className={
        'tw-flex tw-gap-y-6 tw-flex-col tw-p-6 tw-justify-center tw-h-full tw-w-full'
      }
    >
      <p
        className={
          'tw-text-[#FF0000] tw-text-[1.8rem] tw-absolute tw-top-20 tw-w-[68vw] tw-text-center ' +
          warning
        }
      >
        Please only complete this exercise once and go grab your cotton candy!
      </p>
      <h2 className={'tw-title'}> Welcome! </h2>
      <h2 className={'tw-sub-title'}>
        Click <strong> Get Started </strong> to start the game!
      </h2>
      <ALLButton label={'Get Started'} large={true} onClick={handleUpdateID} />
    </div>
  );
};

UpdateId.propTypes = {
  canContinue: PropTypes.bool,
};

export default UpdateId;
