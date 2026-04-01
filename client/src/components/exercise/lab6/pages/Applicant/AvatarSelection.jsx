import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GridImages from '../../../../all-components/GridImages';
import ExerciseService from '../../../../../services/lab6/ExerciseService';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_PLAYING } from '@/constants/index';
import LabButton from '../../../../all-components/LabButton';

const AvatarSelection = () => {
  const { actions } = useMainStateContext();

  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const confirmSelection = () => {
    if (avatar.length != 0) {
      ExerciseService.submitAvatar(avatar);
      navigate('/Lab6/Exercise/QualificationQuestions');
    }
  };

  return (
    <div className="center-div">
      <h2 className="tw-title">Welcome to MegaCorp’s hiring process!</h2>
      <p className="tw-body-text tw-text-[1.5rem] tw-my-6">
        To get you started with the hiring process, please pick an avatar you
        most identify with.
      </p>

      <GridImages multi={1} setSelection={setAvatar} />
      {avatar.length != 0 && (
        <LabButton
          label={'Confirm Selection'}
          onClick={confirmSelection}
          key="confirm"
        />
      )}
    </div>
  );
};

export default AvatarSelection;
