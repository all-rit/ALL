import React, { Component } from 'react';
import { GAME_PLAYING } from '../../constants';
// import WelcomeMessage from './WelcomeMessage';

import SoundOption from "./SoundOption";

class Header extends Component {
    render() {
        const { state, plays, soundEnabled, toggleSoundHandler } = this.props;
        const soundBlocked = state === GAME_PLAYING || plays <= 2;
        // const loginEnabled = !(plays > 0 || (plays === 0 && state !== GAME_IDLE));

        return (
            <header>
                <div>
                    <SoundOption
                        blocked={soundBlocked}
                        enabled={soundEnabled}
                        toggleSoundHandler={toggleSoundHandler}
                    />
                </div>
                {/*<div className="header__column text-right">*/}
                    {/*<WelcomeMessage user={user} loginEnabled={loginEnabled} />*/}
                {/*/!*</div>*!/ //TODO Add login*/}
            </header>
        );
    }
}

export default Header;
