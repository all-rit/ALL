/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import PageServiceTimer from '../../../../all-components/PageServiceTimer';
import LabButton from '../../../../all-components/LabButton';

class FormGuidance extends Component {
  constructor(props) {
    super(props);
    this.state = { componentName: 'FormGuidance' };
  }
  handleNav() {
    navigate('/Lab5/Exercise/FormRepair');
  }

  render() {
    const { actions } = this.props;
    return (
      <div className="tw-my-6 tw-body-text">
        <h2 className={'tw-title tw-text-left tw-mb-6'}> Cognitive Design </h2>
        <div className="center-div tw-body-text tw-text-left tw-flex tw-flex-col tw-gap-y-3">
          <p className="">
            The activity you completed was meant to stimulate poor cognitive
            form design. People with cognitive disabilities have even more
            difficulty creating error-free input. In addition, it may be harder
            for them to detect that they have made an error. According to
            Guideline 3.3, W3C Recommends:
          </p>
          <ul className={'tw-px-6'}>
            <li className={'tw-list-disc'}>
              The item that is in error is identified and the error is described
              to the user in text
            </li>
            <li className={'tw-list-disc'}>
              Suggestions are provided to the user to correct the input
            </li>
            <li className={'tw-list-disc'}>
              Provide feedback when there is a successful form submission
            </li>
          </ul>
          <p className="lowercontent">
            Let’s continue on and make the changes. Click <bold>Next</bold>.
          </p>
          <div className="tw-flex tw-justify-center">
            <LabButton label={'Next'} onClick={this.handleNav} key="Next" />
          </div>
        </div>
        <PageServiceTimer actions={actions} name={this.state.componentName} />
      </div>
    );
  }
}

export default FormGuidance;
