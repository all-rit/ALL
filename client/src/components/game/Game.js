import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sound from '../../assets/sounds/female.mp3';

import {
	GAME_PLAYING,
	GAME_ENDED,
	GAME_IDLE,
	GAME_COUNTDOWN,
	HINT_BOX_OPEN,
	HINT_BOX_CLOSED,
	HINT_BOX_THINKING,
	BOX_CORRECT,
	BOX_INCORRECT,
	BOX_REVEALED,
	BOX_LOCKED,
	MILLISECONDS_IN_A_SECOND,
	TIMEOUT_MIN_MS,
	HINT_BOX_THINKING_TIMER_SECONDS,
	CONGRATULATION_MESSAGES,
	BOX_UNOPENED
} from '../../reducers/game/Constants';
import {
	updateGameState,
	resetGame,
	timerTick,
	roundTick,
	countdownTimerTick,
	resetRoundTimer,
	resetCountdownTimer,
	updateScore,
	incrementCorrectAnswers,
	incrementIncorrectAnswers,
	startNewRound,
	updateHintBoxStatus,
	updateHint,
	updateHintUsed,
	updateBox,
	updateBoxStatus,
	updateSoundStatus,
	updateCongratulationMessage,
	addResults
} from '../../reducers/game/Actions';
import { updateInstructionsStatus } from '../../reducers/instructions/Actions';
import { updateCodeEditorStatus } from '../../reducers/codeeditor/Actions';

import Box from './box/Box';
import Stats from './stats/Stats';
import Results from './results/Results';
import HintBox from './hintbox/HintBox';
import Conditional from '../../helpers/Conditional';

const mapStateToProps = (state) => {
	return {
		state: state.game.state,
		numberOfPlays: state.game.numberOfPlays,
		time: state.game.time,
		countdownTime: state.game.countdownTime,
		score: state.game.score,
		roundNumber: state.game.roundNumber,
		roundTime: state.game.roundTime,
		correctAnswers: state.game.correctAnswers,
		incorrectAnswers: state.game.incorrectAnswers,
		correctBoxNumber: state.game.correctBoxNumber,
		currentHint: state.game.currentHint,
		hintBoxState: state.game.hintBoxState,
		hintUsed: state.game.hintUsed,
		boxes: state.game.boxes,
		soundEnabled: state.game.soundEnabled,
		congratulationMessage: state.game.congratulationMessage
	};
};

const mapDispatchToProps = {
	updateGameState,
	resetGame,
	timerTick,
	roundTick,
	countdownTimerTick,
	resetRoundTimer,
	resetCountdownTimer,
	updateScore,
	incrementCorrectAnswers,
	incrementIncorrectAnswers,
	startNewRound,
	updateHintBoxStatus,
	updateHint,
	updateHintUsed,
	updateBox,
	updateBoxStatus,
	updateSoundStatus,
	updateCongratulationMessage,
	updateInstructionsStatus,
	updateCodeEditorStatus,
	addResults
};

class Game extends Component {
	constructor(props) {
		super(props);

		this.audio = new Audio(Sound);
		this.audio.loop = false;
	}

	startGame() {
		fetch(process.env.REACT_APP_SERVER_URL + '/game/start', {
			method: 'POST',
			credentials: 'include'
		})
			.then(() => {
				this.startRound();

				this.timer = setInterval(() => {
					const { timerTick, state, time, updateGameState } = this.props;

					if (state === GAME_PLAYING) {
						timerTick();
					}

					if (time <= 0) {
						updateGameState(GAME_ENDED);

						// Clear all timers
						clearInterval(this.timer);
						clearInterval(this.hintTimer);
						clearInterval(this.countdownTimer);
					}
				}, TIMEOUT_MIN_MS);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	startRound() {
		const { startNewRound, soundEnabled, updateHint, resetRoundTimer } = this.props;

		if (soundEnabled) {
			this.audio.load();
		}

		updateHint();
		resetRoundTimer();
		this.closeHintBox();
		this.randomizeBox();

		startNewRound();

		const chance = Math.floor(Math.random() * 2) + 1;

		if (chance > 1) {
			this.randomizeHint();
		}

		this.roundTimer = setInterval(() => {
			this.props.roundTick();
		}, TIMEOUT_MIN_MS);

		fetch(process.env.REACT_APP_SERVER_URL + '/game/round', {
			method: 'POST',
			headers: new Headers({ 'content-type': 'application/json' }),
			body: JSON.stringify({
				soundOption: soundEnabled
			}),
			credentials: 'include'
		})
			.then((res) => {})
			.catch((err) => {
				console.log(err);
			});
	}

	startCountdown() {
		const { updateGameState, countdownTimerTick, resetCountdownTimer } = this.props;

		resetCountdownTimer();
		updateGameState(GAME_COUNTDOWN);

		this.countdownTimer = setInterval(() => {
			const { roundNumber, countdownTime, updateGameState } = this.props;

			countdownTimerTick();

			if (countdownTime <= 0) {
				updateGameState(GAME_PLAYING);

				if (roundNumber === 0) {
					this.startGame();
				} else {
					this.startRound();
				}

				clearInterval(this.countdownTimer);
			}
		}, MILLISECONDS_IN_A_SECOND);
	}

	resetGame() {
		const { resetGame, addResults, score, correctAnswers, incorrectAnswers, roundNumber, soundEnabled } = this.props;

		clearInterval(this.roundTimer);

		addResults({
			score: score,
			correctAnswers: correctAnswers,
			incorrectAnswers: incorrectAnswers,
			roundNumber: roundNumber,
			soundEnabled: soundEnabled
		});
		resetGame();
	}

	randomizeBox() {
		const { updateBox } = this.props;
		const number = Math.floor(Math.random() * 4) + 1;

		updateBox(number);
	}

	randomizeHint() {
		const { updateHint, soundEnabled } = this.props;

		this.unlockBoxes();
		this.closeHintBox();
		clearTimeout(this.closeHintBoxTimer);
		clearTimeout(this.hintBoxThinkingTimer);
		updateHint("The location of the treasure has been revealed!");

		if (soundEnabled) {
			this.audio.play();
		}
	}

	lockBoxes() {
		const { boxes, updateBoxStatus } = this.props;

		Object.keys(boxes).forEach((box) => {
			if (boxes[box] === BOX_UNOPENED) {
				updateBoxStatus(box, BOX_LOCKED);
			}
		});
	}

	unlockBoxes() {
		const { boxes, updateBoxStatus } = this.props;

		Object.keys(boxes).forEach((box) => {
			if (boxes[box] === BOX_LOCKED) {
				updateBoxStatus(box, BOX_UNOPENED);
			}
		});
	}

	openHintBox() {
		const { updateHintBoxStatus, updateHintUsed, updateScore, score } = this.props;

		updateHintBoxStatus(HINT_BOX_THINKING);
		updateHintUsed(true);
		updateScore(score - 25);

		this.lockBoxes();

		this.hintBoxThinkingTimer = setTimeout(() => {
			const { correctBoxNumber, updateBoxStatus, currentHint } = this.props;

			updateHintBoxStatus(HINT_BOX_OPEN);

			this.unlockBoxes();

			if (currentHint)
				updateBoxStatus(correctBoxNumber, BOX_REVEALED);
		}, HINT_BOX_THINKING_TIMER_SECONDS * MILLISECONDS_IN_A_SECOND);
	}

	closeHintBox() {
		this.props.updateHintBoxStatus(HINT_BOX_CLOSED);
	}

	calculateScore() {
		const seconds = this.props.roundTime / MILLISECONDS_IN_A_SECOND;
		let score = 0;

		if (seconds < 1) {
			score = 150;
		} else if (seconds < 2) {
			score = 125;
		} else if (seconds < 3) {
			score = 100;
		} else if (seconds < 4) {
			score = 75;
		} else if (seconds < 5) {
			score = 50;
		} else {
			score = 25;
		}

		return score;
	}

	changeCongratulationMessage() {
		const { updateCongratulationMessage } = this.props;
		let message = CONGRATULATION_MESSAGES[Math.floor(Math.random() * CONGRATULATION_MESSAGES.length)];

		updateCongratulationMessage(message);
	}

	validateAnswer(number) {
		const {
			correctBoxNumber,
			updateScore,
			incrementCorrectAnswers,
			incrementIncorrectAnswers,
			score,
			hintUsed,
			updateBoxStatus
		} = this.props;

		const correct = number === correctBoxNumber;

		if (correct) {
			updateBoxStatus(number, BOX_CORRECT);

			clearInterval(this.hintTimer);
			clearInterval(this.roundTimer);

			this.audio.pause();

			updateScore(score + this.calculateScore());
			incrementCorrectAnswers();

			this.changeCongratulationMessage();
			this.startCountdown();
		} else {
			updateBoxStatus(number, BOX_INCORRECT);
			updateScore(score - 50);
			incrementIncorrectAnswers();
		}

		// Log data to database
		fetch(process.env.REACT_APP_SERVER_URL + '/game/choice', {
			method: 'POST',
			headers: new Headers({ 'content-type': 'application/json' }),
			body: JSON.stringify({
				score: score,
				hintUsed: hintUsed,
				boxNumber: number,
				correct: correct
			}),
			credentials: 'include'
		})
			.then((res) => {})
			.catch((err) => {
				console.log(err);
			});
	}

	openCodeEditor() {
		this.props.updateCodeEditorStatus(true);
	}

	openInstructions() {
		this.props.updateInstructionsStatus(true);
	}

	render() {
		const {
			state,
			numberOfPlays,
			time,
			countdownTime,
			score,
			roundNumber,
			correctAnswers,
			incorrectAnswers,
			currentHint,
			hintBoxState,
			boxes,
			congratulationMessage
		} = this.props;
		const boxesList = Object.keys(boxes).map((key) => {
			return (
				<Box
					key={key}
					number={parseInt(key)}
					onClickHandler={this.validateAnswer.bind(this)}
					state={boxes[key]}
				/>
			);
		});

		return (
			<div className="game">
				<Conditional if={state !== GAME_ENDED}>
					<Conditional if={state === GAME_IDLE}>
						<Conditional if={numberOfPlays >= 2}>
							<button className="button" onClick={this.openCodeEditor.bind(this)}>
								Repair
							</button>
						</Conditional>

						<Conditional if={numberOfPlays === 0}>
							<button className="button" onClick={this.openInstructions.bind(this)}>
								How to Play?
							</button>
						</Conditional>

						<button className="button button--green" onClick={this.startCountdown.bind(this)}>
							Start
						</button>
					</Conditional>

					<Conditional if={state === GAME_COUNTDOWN}>
						<Conditional if={congratulationMessage !== ''}>
							<div className="game__congratulation">{congratulationMessage}</div>
						</Conditional>

						<div className="game__countdown">{countdownTime}</div>
					</Conditional>

					<Conditional if={state === GAME_PLAYING}>
						<HintBox hint={currentHint} state={hintBoxState} onClickHandler={this.openHintBox.bind(this)} />

						<div className="game__boxes">{boxesList}</div>
					</Conditional>

					<Conditional if={state !== GAME_IDLE}>
						<Stats
							score={score}
							correctAnswers={correctAnswers}
							incorrectAnswers={incorrectAnswers}
							roundNumber={roundNumber}
							time={time}
						/>
					</Conditional>
				</Conditional>

				<Conditional if={state === GAME_ENDED}>
					<Results
						correctAnswers={correctAnswers}
						incorrectAnswers={incorrectAnswers}
						score={score}
						roundNumber={roundNumber}
						resetGameHandler={this.resetGame.bind(this)}
					/>
				</Conditional>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
