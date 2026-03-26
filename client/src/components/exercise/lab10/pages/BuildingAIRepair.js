import React, { Component, Fragment } from 'react';
import { EXERCISE_PLAYING } from '../../../../constants';
import { actions as repairActions } from '../../../../reducers/lab10/RepairReducer';
import { actions as exerciseActions } from '../../../../reducers/lab10/ExerciseReducer';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Popup from 'src/components/all-components/Popup';
import BuildingAICodeBlock from '../components/code/BuildingAICodeBlock';
import { navigate } from 'react-router-dom';
import LabButton from '../../../all-components/LabButton';

class BuildingAIRepair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: 'BuildingAIPage',
    };
  }

  /**
   * Update lab state onMount
   */
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    this.reset();
  }

  /**
   * Redirect the user to the following page
   */
  handleNav() {
    return navigate('/Lab10/Exercise/TrainingAI');
  }

  /**
   * Resets popup message onMount
   */
  reset() {
    const { actions } = this.props;
    actions.updatePopup('');
  }

  render() {
    const {
      repairVisible,
      popupMessage,
      actions,
      repairError,
      changesApplied,
    } = this.props;

    return (
      <div>
        <h1 className={'tw-title tw-text-left'}>Repair AI Movement</h1>
        <Fragment>
          <div className={'center-div'}>
            <div className={'guidance margin-bottom-2'}>
              <p className={'tw-body-text tw-my-6'}>
                Let&lsquo;s create our own AI using a simple exercise where you
                will move a person left and right across your screen and attempt
                to avoid different colored falling shapes.
              </p>
              <p className={'tw-body-text tw-my-6'}>
                We need to generate and collect data, but first, we need to
                write code to make our object move. Click the &lsquo;
                <span className={'tw-font-bold'}>Repair</span>
                &lsquo; button to view and edit the code so that our character
                can move left and right using the keyboard arrows.
              </p>
            </div>
          </div>
        </Fragment>
        <Popup
          message={popupMessage}
          handler={actions.updatePopup}
          error={repairError}
        />
        <div className={'tw-flex tw-justify-center tw-gap-x-3'}>
          <LabButton
            label={'Repair'}
            onClick={actions.openRepair}
            key="repair"
          />
          <LabButton
            label={'Next'}
            onClick={this.handleNav.bind(this)}
            disabled={!changesApplied}
          />
        </div>
        {repairVisible && <BuildingAICodeBlock />}
      </div>
    );
  }
}

BuildingAIRepair.propTypes = {
  actions: PropTypes.object,
  leftValue: PropTypes.string,
  rightValue: PropTypes.string,
  repairError: PropTypes.bool,
  repairVisible: PropTypes.bool,
  changesApplied: PropTypes.bool,
  popupMessage: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { popupMessage } = state.repair10;
  const { repairError, repairVisible, leftValue, rightValue, changesApplied } =
    state.repair10;
  return {
    popupMessage,
    repairError,
    repairVisible,
    leftValue,
    rightValue,
    changesApplied,
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

export default connect(mapStateToProps, mapDispatchToProps)(BuildingAIRepair);
