import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './SoundOption.css';

import VolumeOnIcon from './images/volume_on.svg';
import VolumeOffIcon from './images/volume_off.svg';

class SoundOption extends Component {
  handleClick() {
    const { onClickHandler, blocked } = this.props;

    if (!blocked) {
      onClickHandler();
    }
  }

  render() {
    const { enabled, blocked } = this.props;
    const classes = classNames({
      sound_icon: true,
      'sound_icon--off': !enabled,
      'sound_icon--disabled': blocked
    });

    return (
      <div onClick={this.handleClick.bind(this)}>
        <img className={classes}
              src={ enabled ? VolumeOnIcon : VolumeOffIcon }
              alt="Sound Option" />
      </div>
    );
  }
}

export default SoundOption;
