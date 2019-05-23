import React, { Component } from 'react';
import { GAME_IDLE, GAME_ENDED } from '../../constants';

import Playthrough from './Playthrough';
import AppInstructions from './AppInstructions';
import Game from './Game';

class Content extends Component {
	render() {
		const { data, handlers } = this.props;

		return (
			<main className="content">
				<Playthrough plays={data.plays} results={data.results} visible={data.state === GAME_IDLE} />

				<AppInstructions visible={data.state !== GAME_ENDED && data.state !== GAME_IDLE} />

				<Game data={data} handlers={handlers} />
			</main>
		);
	}
}

export default Content;
