import React from 'react';
import ALLButton from '../all-components/ALLButton';
import { navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// This component is the start component that updates the user ID
const Done = (props) => {
  const handleNext = () => {
    navigate('/Imagine2025/');
    if (props.resetInstance !== null) {
      props.resetInstance();
    }
  };

  const handleUpdateID = async () => {
    sessionStorage.removeItem('userID');

    handleNext();
  };

  return (
    <div
      className={
        'tw-flex tw-gap-y-6 tw-flex-col tw-p-6 tw-justify-center tw-h-full tw-w-full'
      }
    >
      <h2 className={'tw-title'}> Thank you for participating! </h2>
      <h2 className={'tw-sub-title'}>
        Click the <strong> Return Home </strong> below to end the exercise and
        get your cotton candy!
      </h2>
      <ALLButton label={'Return Home'} large={true} onClick={handleUpdateID} />
    </div>
  );
};

Done.propTypes = {
  resetInstance: PropTypes.func,
};

export default Done;
