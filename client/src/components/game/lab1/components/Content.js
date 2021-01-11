import React, { Component } from 'react';
import { GAME_IDLE, GAME_ENDED } from '../../../../constants/lab1';

import Playthrough from './Playthrough';
import AppInstructions from './AppInstructions';
import Game from './Game';
import Repair from './Repair';

class Content extends Component {
	render() {
		const { data, handlers } = this.props;
		const {availableMessage, unavailableMessage, availableBackgroundColor, unavailableBackgroundColor, currentTab, repairVisible} = data;
		return (
			<main className="content">
				<Playthrough plays={data.plays} results={data.results} visible={data.state === GAME_IDLE} />

				<AppInstructions visible={data.state !== GAME_ENDED && data.state !== GAME_IDLE} />
				<Repair
					visible={repairVisible && data.state === GAME_IDLE}
					data={{
						availableMessage,
						unavailableMessage,
						availableBackgroundColor,
						unavailableBackgroundColor,
						currentTab
					}}
					handlers={handlers}
				/>
				<Game data={data} handlers={handlers} />
			</main>
		);
	}
}

export default Content;
