/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { navigate } from 'react-router-dom';
import PageServiceTimer from '../../../../all-components/PageServiceTimer';
import Notification from '../../components/Notification';
import { AccessibleMessage } from '../../../../../constants/lab5';

class NotificationAccessible extends Component {
  constructor(props) {
    super(props);
    this.state = { componentName: 'NotificationAccessible' };
  }
  handleNav() {
    navigate('/Lab5/Exercise/NotificationAccessibleKnowledgeCheck');
  }
  render() {
    const { actions } = this.props;
    return (
      <div className="mb-5 tw-h-full">
        <p className="tw-sub-title tw-mt-6 tw-text-left">
          There is a notification that has appeared. Click on it to view it!
        </p>
        <p className={'tw-sub-title tw-mb-6 tw-text-left'}>
          Note: It can only be viewed once.
        </p>
        <Notification message={AccessibleMessage} />
        <div className="flex float-right tw-mt-10">
          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={this.handleNav}
            key="next"
          >
            Next
          </button>
        </div>
        <PageServiceTimer actions={actions} name={this.state.componentName} />
      </div>
    );
  }
}

export default NotificationAccessible;
