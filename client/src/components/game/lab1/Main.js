import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Content from './components/Content';
import GameInstructions from './components/GameInstructions';
import Popup from './components/Popup';

import { actions as appActions } from '../../../reducers/lab1/AppReducer';
import { actions as gameActions } from '../../../reducers/lab1/GameReducer';
import { actions as repairActions } from '../../../reducers/lab1/RepairReducer';
import {GAME_IDLE} from '../../../constants/lab1';
import SoundHeader from "./components/SoundHeader";


const mapStateToProps = (state) => {
	return {
		// General
		popupMessage: state.app1.popupMessage,
		instructionsVisible: state.app1.instructionsVisible,

		// Game specific
		state: state.game1.state,
		plays: state.game1.plays,
		results: state.game1.results,
		time: state.game1.time,
		roundTime: state.game1.roundTime,
		countdownTime: state.game1.countdownTime,
		score: state.game1.score,
		roundNumber: state.game1.roundNumber,
		correctAnswers: state.game1.correctAnswers,
		incorrectAnswers: state.game1.incorrectAnswers,
		boxes: state.game1.boxes,
		correctBoxNumber: state.game1.correctBoxNumber,
		boxRevealed: state.game1.boxRevealed,
		hintBoxStatus: state.game1.hintBoxStatus,
		hintUsed: state.game1.hintUsed,
		soundEnabled: state.game1.soundEnabled,
		congratulationMessage: state.game1.congratulationMessage,

		
		// Repair specific
		availableMessage: state.repair1.availableMessage,
		unavailableMessage: state.repair1.unavailableMessage,
		availableBackgroundColor: state.repair1.availableBackgroundColor,
		unavailableBackgroundColor: state.repair1.unavailableBackgroundColor,
		currentTab: state.repair1.currentTab,
		repairVisible: state.repair1.repairVisible,
		changesApplied: state.repair1.changesApplied
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
