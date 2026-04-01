import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainingAICodeBlock from '../components/code/TrainingAICodeBlock';
import Popup from '@all-components/Popup';
import { bindActionCreators } from 'redux';
import {
  actions as repairActions,
  initialState,
} from '@/reducers/lab10/RepairReducer';
import { actions as exerciseActions } from '@/reducers/lab10/ExerciseReducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LabButton from '@all-components/LabButton';

const TrainingAIRepair = (props) => {
  const { actions, repairError, timeValue, popupMessage, repairVisible } =
    props;

  /**
   * Determines whether the repair was successful, allowing for navigation to the following page
   */
  const handleNext = () => {
    return !(repairError === false && timeValue !== initialState.timeValue);
  };

  /**
   * Redirect the user to the following page
   */
  const handleNav = () => {
    return navigate('/Lab10/Exercise/UpdatedTrainingAI');
  };

  return (
    <div>
      <div className={'center-div'}>
        <h1 className={'tw-title tw-text-left tw-pb-6'}>
          {' '}
          Training AI Repair{' '}
        </h1>
        <div className={'guidance margin-bottom-2'}>
          <p className={'tw-body-text tw-text-left'}>
            That was very quick! The duration of the simulation needs to be
            increased to allow the neural network to collect more data to
            improve its decision-making. Let&apos;s increase the duration of the
            simulation to collect more data points.
          </p>
          <p className={'tw-body-text tw-text-leftt tw-py-6'}>
            Click the &lsquo;
            <span className={'tw-font-bold'}>Repair</span>
            &lsquo; button to view and edit the code. Update the simulation to
            run between 60 - 120 seconds.
          </p>
        </div>
      </div>
      <Popup
        message={popupMessage}
        handler={actions.updatePopup}
        error={repairError}
      />
      <div className={'tw-flex tw-justify-center tw-gap-x-3'}>
        <LabButton label={'Repair'} onClick={actions.openRepair} key="repair" />

        <LabButton
          label={'Next'}
          key="Next"
          onClick={handleNav}
          disabled={handleNext()}
        />
      </div>
      {repairVisible && <TrainingAICodeBlock />}
    </div>
  );
};

TrainingAIRepair.propTypes = {
  actions: PropTypes.object,
  repairError: PropTypes.any,
  timeValue: PropTypes.string,
  popupMessage: PropTypes.string,
  repairVisible: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const { repairError, timeValue, popupMessage, repairVisible } =
    state.repair10;
  return {
    repairError,
    timeValue,
    popupMessage,
    repairVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...repairActions, ...exerciseActions },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingAIRepair);
