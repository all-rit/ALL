import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './Box.css';
import { BOX_UNOPENED, BOX_INCORRECT, BOX_CORRECT } from '../GameConstants';

class Box extends Component {
  handleClick() {
    const { state } = this.props;

    if (state === BOX_UNOPENED)
      this.props.onClickHandler(this.props.number);
  }

  render() {
    const { number, state } = this.props;
    const classes = classNames({
      box: true,
      'box--black': (number === 2 || number === 3) && (state === BOX_UNOPENED),
      'box--green': (state === BOX_CORRECT),
      'box--red': (state === BOX_INCORRECT)
    });

    return (
      <button className={classes} onClick={this.handleClick.bind(this)}>
        {number}
      </button>
    );
  }
}

export default Box;
