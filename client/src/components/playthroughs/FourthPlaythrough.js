import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		results: state.game.results
	};
};

class FourthPlaythrough extends Component {
	render() {
		const { results } = this.props;
		let resultContainer = [];
		let i = 0;

		results.slice(0, 3).forEach((result) => {
			let title = '';

			if (i === 0) {
				title = 'Sound On';
			} else if (i === 1) {
				title = 'Sound Off';
			} else {
				title = 'Code Fixed + Sound Off';
			}

			resultContainer.push(
				<div className="playthrough__game">
					<div className="playthrough__description">{title}</div>

					<div className="playthrough__result">
						<div className="playthrough__category">Final Score:</div>
						<div className="playthrough__value">{result.score}</div>
					</div>

					<div className="playthrough__result">
						<div className="playthrough__category">Correct Answers:</div>
						<div className="playthrough__value">{result.correctAnswers}</div>
					</div>

					<div className="playthrough__result">
						<div className="playthrough__category">Incorrect Answers:</div>
						<div className="playthrough__value">{result.incorrectAnswers}</div>
					</div>

					<div className="playthrough__result">
						<div className="playthrough__category">Rounds:</div>
						<div className="playthrough__value">{result.roundNumber}</div>
					</div>
				</div>
			);

			i += 1;
		});

		return (
			<div className="playthrough">
				<div className="playthrough__title">Godspeed</div>
				<div className="playthrough__content">
					<p className="playthrough__sentence">
            Here's your first three game results:
          </p>

					<div className="playthrough__results">
						{resultContainer}
					</div>

					<p className="playthrough__sentence">
            After playing the game with audio on and off and making adjustments within the game, we hope this provided a good learning experience for you.
          </p>

					<p className="playthrough__sentence">
            Remember, if you do develop software, please consider people with disabilities. Thank you.
          </p>

          <hr />

					<p className="playthrough__sentence">
						Wait, you're actually <i>still here</i>? Well, you can decide to make more adjustments, play more games, or take a walk outside. Up to ya!
					</p>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(FourthPlaythrough);
