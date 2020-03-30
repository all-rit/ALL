import React, { Component } from 'react';

import { GAME_PLAYING} from '../../constants';

import SoundOption from "./SoundOption";

class Header extends Component {
    render() {
        const { state, plays, soundEnabled, toggleSoundHandler } = this.props;
        const soundBlocked = state === GAME_PLAYING || plays <= 2;

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

export default Header;
