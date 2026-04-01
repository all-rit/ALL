import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../../../common/Spinner/Spinner';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_PLAYING } from '@/constants/index';
import SuccessCheck from '../../../../all-components/SuccessCheck';

const AnalyzeData = () => {
  const { actions } = useMainStateContext();
  const [success, setSuccess] = useState(false);

  const displaySuccess = () => {
    setSuccess(!success);
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    setTimeout(function () {
      displaySuccess();
      setTimeout(function () {
        handleContinue();
      }, 3000);
    }, 5000);
  }, []);

  const handleContinue = () => {
    navigate('/Lab6/Exercise/NegativeReasoning');
  };

  return (
    <div className="center-div tw-w-full">
      <h2 className="tw-title tw-pt-210">
        Reviewing your application, please be patient...
      </h2>
      <div className="tw-w-full tw-flex tw-justify-center">
        {!success && <Spinner />}
        {success && (
          <div className={'tw-m-[10rem]'}>
            <SuccessCheck />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyzeData;
