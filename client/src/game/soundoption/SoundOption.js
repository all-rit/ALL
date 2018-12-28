import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './SoundOption.css';

import VolumeOnIcon from './images/volume_on.svg';
import VolumeOffIcon from './images/volume_off.svg';

class SoundOption extends Component {
  render() {
    const { enabled } = this.props;
    const classes = classNames({
      sound_icon: true,
      'sound_icon--disabled': !enabled
    });

    return (
      <div>
        <img className={classes}
              src={ enabled ? VolumeOnIcon : VolumeOffIcon }
              alt="Sound Option" />
      </div>
    );
  }
}

export default SoundOption;
