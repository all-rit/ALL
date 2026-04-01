import React from 'react';
import { Frame } from '../components/Frame';
import ImagineService from '@/services/ImagineService';
import { navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ERROR } from '@/constants/notifications';
import useMainStateContext from '@/reducers/MainContext';
import ImagineHeader from '../components/ImagineHeader';
import AvatarCreation from '../components/AvatarCreation';

const AvatarCreationPage = (props) => {
  const { actions } = useMainStateContext();

  return (
    <>
      <ImagineHeader title="Make an Avatar That Resembles You!" />
      {Frame(
        <AvatarCreation
          userAvatar={props.userAvatar}
          setUserAvatar={props.setUserAvatar}
          AvatarSelections={props.AvatarSelections}
        />,
        async () => {
          //Check to see if all fields have been selected
          if (
            props.userAvatar.hairColor != 'Default' &&
            props.userAvatar.hairStyle != 'Default' &&
            props.userAvatar.clotheColor != 'Default' &&
            props.userAvatar.skinColor != 'Default'
          ) {
            navigate('/Imagine2025/TeammateSelection');
            await ImagineService.postUserAvatar(
              sessionStorage.getItem('userID'),
              props.userAvatar,
              25,
            );
            return;
          }
          actions.showSnackbar(
            'Please finish creating your avatar',
            ERROR,
            'center',
            'top',
          );
        },
        null,
      )}
    </>
  );
};

AvatarCreationPage.propTypes = {
  userAvatar: PropTypes.object.isRequired,
  setUserAvatar: PropTypes.func.isRequired,
  AvatarSelections: PropTypes.object.isRequired,
};

export default AvatarCreationPage;
