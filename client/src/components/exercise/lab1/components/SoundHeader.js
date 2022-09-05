import React, {Component} from 'react';
import {EXERCISE_PLAYING} from '../../../../constants/lab1';
import SoundOption from './SoundOption';

class SoundHeader extends Component {
  render() {
    const {state, plays, soundEnabled, toggleSoundHandler} = this.props;
    const soundBlocked = state === EXERCISE_PLAYING || plays <= 2;
    // const loginEnabled = !(plays > 0 || (plays === 0 && state !== EXERCISE_IDLE));

    return (
      <header>
        <div>
          <SoundOption
            blocked={soundBlocked}
            enabled={soundEnabled}
            toggleSoundHandler={toggleSoundHandler}
          />
        </div>
      </header>
    );
  }
}

export default SoundHeader;
