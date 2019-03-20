import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

import { login } from './reducers/app/Actions';
import { GAME_PLAYING, GAME_IDLE, GAME_ENDED } from './reducers/game/Constants';

import Game from './components/game/Game';
import Header from './components/header/Header';
import CodeEditor from './components/codeeditor/CodeEditor';
import Instructions from './components/instructions/Instructions';
import FirstPlaythrough from './components/playthroughs/FirstPlaythrough';
import SecondPlaythrough from './components/playthroughs/SecondPlaythrough';
import ThirdPlaythrough from './components/playthroughs/ThirdPlaythrough';
import FourthPlaythrough from './components/playthroughs/FourthPlaythrough';
import Conditional from './helpers/Conditional';

const mapStateToProps = (state) => {
	return {
		state: state.game.state,
		numberOfPlays: state.game.numberOfPlays,
		codeEditorOpen: state.code.codeEditorOpen,
		instructionsOpen: state.instructions.open
	};
};

const mapDispatchToProps = {
	login
};

class App extends Component {
	componentDidMount() {
		this.props.login();
	}

	render() {
		const { state, numberOfPlays, codeEditorOpen, instructionsOpen } = this.props;

		return (
			<div className="app">
				<Header />

				<div className="app__name">Treasure Hunter</div>

				<main className="content">
					<Conditional if={state === GAME_IDLE}>
						<Conditional if={numberOfPlays === 0}>
							<FirstPlaythrough />
						</Conditional>
						<Conditional if={numberOfPlays === 1}>
							<SecondPlaythrough />
						</Conditional>
						<Conditional if={numberOfPlays === 2}>
							<ThirdPlaythrough />
						</Conditional>
						<Conditional if={numberOfPlays > 2}>
							<FourthPlaythrough />
						</Conditional>
					</Conditional>

					<Conditional if={state !== GAME_ENDED && state !== GAME_IDLE}>
						<p className="app__instructions">Goal: Find the box with the treasure.</p>
					</Conditional>

					<Game />
				</main>

				<Conditional if={codeEditorOpen && state !== GAME_PLAYING}>
					<CodeEditor />
				</Conditional>

				<Conditional if={instructionsOpen && state !== GAME_PLAYING}>
					<Instructions />
				</Conditional>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
