/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LabButton from '@all-components/LabButton';

const CatClickFirstNavigate = ({ path }) => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    console.log(path);
    navigate(path);
  };

  return (
    <div id={'catClickMessage'}>
      <p
        className={'tw-body-text tw-text-2xl tw-text-center tw-py-6'}
        aria-label={"Cat clicked! Please click the 'next' button to continue."}
      >
        Cat clicked! Please click the 'next' button to continue.
      </p>
      <br />
      <LabButton onClick={handleOnclick} label={'Next'}>
        Next
      </LabButton>
    </div>
  );
};

CatClickFirstNavigate.propTypes = {
  path: PropTypes.string,
};

export default CatClickFirstNavigate;
