import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './Box.css';

class Box extends Component {
  handleClick() {
    this.props.onClickHandler(this.props.number);
  }

  render() {
    const { number } = this.props;
    const classes = classNames({
      box: true,
      'box--black': (number === 2 || number === 3)
    });

    return (
      <button className={classes} onClick={this.handleClick.bind(this)}>
        {number}
      </button>
    );
  }
}

export default Box;
