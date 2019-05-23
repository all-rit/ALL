import React, { Component } from 'react';

import { GAME_IDLE, GAME_PLAYING } from '../../constants';

import SoundOption from './SoundOption';
import WelcomeMessage from './WelcomeMessage';

class Header extends Component {
	render() {
		const { state, user, plays, soundEnabled, toggleSoundHandler } = this.props;
		const loginEnabled = !(plays > 0 || (plays === 0 && state !== GAME_IDLE));
		const soundBlocked = state === GAME_PLAYING || plays <= 2;

		return (
			<header className="header">
				<div className="header__column text-left">
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
