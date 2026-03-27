import { navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useMainStateContext from 'src/reducers/MainContext';
import { EXERCISE_PLAYING } from 'src/constants/index';
import LabButton from '../../../all-components/LabButton';

const Discovery = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleNext = () => {
    // navigate to the webpage
    navigate('/Lab9/Exercise/page');
  };

  return (
    <>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <h2 className="tw-title tw-text-left tw-my-6">Did You Notice?</h2>
          <div className="tw-body-text ">
            Did you notice the three sections of the website that aren&#39;t
            localized? The first section is the navigation bar, which uses only
            text for the navigation menu items. To reach a wider audience, the
            navigation bar should also include icons next to every navigation
            menu item so that the items are more globally recognizable.
          </div>
          <div className="tw-body-text tw-my-6">
            The second section that isn&#39;t localized is the date at the top
            of the weekly newsletter. Date formats can vary globally, so the
            date needs to be localized.
          </div>
          <div className="tw-body-text">
            The third section that isn&#39;t localized is the subscription form.
            The form collects the user&#39;s address and phone number, the
            formats of which can both vary globally. To be accessible to all
            users, the form should be localized.
          </div>
        </div>
      </div>
      <div className="tw-body-text tw-p-6">
        In the next section of the exercise, you will click on each section of
        the website that isn&#39;t localized and repair that section. Click
        &#34;Continue&#34; to begin!
      </div>
      <LabButton onClick={handleNext} key="continue" label={'Continue'} />
    </>
  );
};

Discovery.propTypes = {
  actions: PropTypes.object,
};

export default Discovery;
