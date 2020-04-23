import React, { Component } from 'react';
import { GAME_IDLE, GAME_PLAYING } from '../../constants';
import WelcomeMessage from './WelcomeMessage';

import SoundOption from "./SoundOption";

class Header extends Component {
    render() {
        const { state, user, plays, soundEnabled, toggleSoundHandler } = this.props;
        const soundBlocked = state === GAME_PLAYING || plays <= 2;
        const loginEnabled = !(plays > 0 || (plays === 0 && state !== GAME_IDLE));

        return (
            <header>
                <div>
                    <SoundOption
                        blocked={soundBlocked}
                        enabled={soundEnabled}
                        toggleSoundHandler={toggleSoundHandler}
                    />
                </div>
                <div className="header__column text-right">
                    <WelcomeMessage user={user} loginEnabled={loginEnabled} />
                </div>
            </header>
        );
    }
}

export default Header;
