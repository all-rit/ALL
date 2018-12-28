import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './HintBox.css';

class HintBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExtended: false
    };
  }

  render() {
    const { isExtended } = this.state;
    const { hint } = this.props;
    const classes = classNames({
      hint_box: true,
      open: isExtended
    });

    return (
      <div className={classes}>
        {isExtended ? hint : "?"}
      </div>
    );
  }
}

export default HintBox;
