import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Content from '../components/main/Content';
import GameInstructions from '../components/main/GameInstructions';
import Popup from '../components/main/Popup';

import { actions as appActions } from '../reducers/AppReducer';
import { actions as gameActions } from '../reducers/GameReducer';
import { actions as repairActions } from '../reducers/RepairReducer';
import {GAME_IDLE} from '../constants';
import SoundHeader from "../components/main/SoundHeader";


const mapStateToProps = (state) => {
	return {
		// General
		user: state.app.user,
		popupMessage: state.app.popupMessage,
		instructionsVisible: state.app.instructionsVisible,

		// Game specific
		state: state.game.state,
		plays: state.game.plays,
		results: state.game.results,
		time: state.game.time,
		roundTime: state.game.roundTime,
		countdownTime: state.game.countdownTime,
		score: state.game.score,
		roundNumber: state.game.roundNumber,
		correctAnswers: state.game.correctAnswers,
		incorrectAnswers: state.game.incorrectAnswers,
		boxes: state.game.boxes,
		correctBoxNumber: state.game.correctBoxNumber,
		boxRevealed: state.game.boxRevealed,
		hintBoxStatus: state.game.hintBoxStatus,
		hintUsed: state.game.hintUsed,
		soundEnabled: state.game.soundEnabled,
		congratulationMessage: state.game.congratulationMessage,

		
		// Repair specific
		availableMessage: state.repair.availableMessage,
		unavailableMessage: state.repair.unavailableMessage,
		availableBackgroundColor: state.repair.availableBackgroundColor,
		unavailableBackgroundColor: state.repair.unavailableBackgroundColor,
		currentTab: state.repair.currentTab,
		repairVisible: state.repair.repairVisible,
		changesApplied: state.repair.changesApplied
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ ...appActions, ...gameActions, ...repairActions }, dispatch)
	};
};

class Main extends Component {
	render() {
		const {
			user,
			popupMessage,
			instructionsVisible,

			state,
			plays,
			results,
			time,
			roundTime,
			countdownTime,
			score,
			roundNumber,
			correctAnswers,
			incorrectAnswers,
			boxes,
			correctBoxNumber,
			boxRevealed,
			hintBoxStatus,
			hintUsed,
			soundEnabled,
			congratulationMessage,

			availableMessage,
			unavailableMessage,
			availableBackgroundColor,
			unavailableBackgroundColor,
			currentTab,
			repairVisible,
			changesApplied,

			actions
		} = this.props;

		return (
			<Fragment>
				<SoundHeader
					state={state}
					user={user}
					plays={plays}
					soundEnabled={soundEnabled}
					toggleSoundHandler={actions.toggleSound}
				/>
				<Content
					data={{
						state,
						plays,
						results,
						time,
						roundTime,
						countdownTime,
						score,
						roundNumber,
						correctAnswers,
						incorrectAnswers,
						boxes,
						correctBoxNumber,
						boxRevealed,
						hintBoxStatus,
						hintUsed,
						soundEnabled,
						congratulationMessage,
						availableMessage,
						unavailableMessage,
						availableBackgroundColor,
						unavailableBackgroundColor,
						currentTab,
						repairVisible,
						changesApplied
					}}
					handlers={actions}
				/>

				<GameInstructions
					visible={instructionsVisible && state === GAME_IDLE}
					closeHandler={actions.closeInstructions}
				/>

				<Popup message={popupMessage} handler={actions.updatePopup} />
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
