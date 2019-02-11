import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';
import classNames from 'classnames/bind';
import './HintBox.css';

import { HINT_BOX_CLOSED, HINT_BOX_OPEN, HINT_BOX_THINKING } from '../GameConstants';
import Conditional from '../../helpers/Conditional';

class HintBox extends Component {
  handleClick() {
    this.props.onClickHandler();
  }

  render() {
    const { hint, state } = this.props;
    const classes = classNames({
      hint_box: true,
      'hint_box--open': (state === HINT_BOX_OPEN)
    });
    const content = "?";


    return (
      <div className={classes} onClick={this.handleClick.bind(this)}>
        <Conditional if={state === HINT_BOX_CLOSED}>
          { content }
        </Conditional>

        <Conditional if={state === HINT_BOX_THINKING}>
          <BeatLoader
            sizeUnit={"px"}
            size={12}
          />
        </Conditional>

        <Conditional if={state === HINT_BOX_OPEN}>
          { hint }
        </Conditional>
      </div>
    );
  }
}

export default HintBox;
