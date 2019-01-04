import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './HintBox.css';

class HintBox extends Component {
  handleClick() {
    this.props.onClickHandler();
  }

  render() {
    const { hint, isExtended } = this.props;
    const classes = classNames({
      hint_box: true,
      'hint_box--open': isExtended
    });
    const content = "?";

    return (
      <div className={classes} onClick={this.handleClick.bind(this)}>
        {isExtended ? (hint ? hint : "No hint") : content}
      </div>
    );
  }
}

export default HintBox;
