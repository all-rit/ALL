/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { EXERCISE_PLAYING } from '../../../../../constants/lab3/index';
import LabButton from '../../../../all-components/LabButton';

class AccessibleInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.state.repair3.changesApplied
        ? 'By adding alt tags that specified what the image\n' +
          '            contained, you have now seen how a screen reader allows the\n' +
          '            the user to more easily identify the image of the cat despite being\n' +
          '            unable to see it, therefore successfully improving the accessibility of the page.'
        : 'You clicked on an image. However, without the ability to see, it may\n' +
          '            be difficult to decipher what these images represent. The previous\n' +
          '            page demonstrated how difficult it was to use a page that was\n' +
          '            inaccessible. In order to make the pages readable by a screenreader\n' +
          "            we need to be add 'alt' attributes to content which will help\n" +
          '            improve accessibility.',
    };
    document.body.style = 'background: white';
  }

  handleSubmit() {
    navigate('/Lab3/Exercise/CodeChange');
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }
  render() {
    return (
      <div className={'tw-p-6'}>
        <h2 className={'tw-title tw-text-left'} aria-label={'Instructions'}>
          Accessibility Instructions
        </h2>
        <br />
        <div className={'tw-text-left'}>
          <p
            aria-label={'Exercise Instructions'}
            tabIndex={'0'}
            className={'tw-body-text tw-font-medium'}
          >
            {this.state.text}
            <br />
          </p>
        </div>
        <br />
        <div className={'tw-text-left'}>
          <p className={'tw-body-text tw-font-bold'}>Note:</p>
          <p className={'tw-body-text tw-font-medium'} aria-label={'Note:'}>
            In the actual project we will show instructions on how to make the
            page more accessible to users. Participants will also be lead
            through the activity of repairing the code.
          </p>
        </div>
        <br />
        <LabButton onClick={this.handleSubmit} label={'Next'} />
      </div>
    );
  }
}

export default AccessibleInstructions;
