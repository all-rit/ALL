import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';

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
		let data = [
			{ game: 1, score: results[0].score },
			{ game: 2, score: results[1].score },
			{ game: 3, score: results[2].score }
		];

		results.slice(0, 3).forEach((result, i) => {
			let title = '';

			if (i === 0) {
				title = 'Sound On';
			} else if (i === 1) {
				title = 'Sound Off';
			} else {
				title = 'Code Fixed + Sound Off';
			}

			resultContainer.push(
				<div className="playthrough__game" key={i}>
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

					<div className="playthrough__chart">
					<VictoryChart domainPadding={50}>
  						<VictoryLabel text="Scores in First Three Games" x={225} y={30} textAnchor="middle" />

							<VictoryAxis tickFormat={() => ''} />
							<VictoryAxis tickValues={[1, 2, 3]} tickFormat={["Game 1", "Game 2", "Game 3"]} style={{ tickLabels: { fill: "#f76902" } }} offsetY={50} />
              <VictoryAxis dependentAxis tickFormat={(x) => (x)} />

              <VictoryBar data={data}
                          x="game"
                          y="score" />
            </VictoryChart>
					</div>

					<p className="playthrough__sentence">
            After playing the game with audio on and off and making adjustments within the game, we hope this provided a good learning experience for you.
          </p>

					<p className="playthrough__sentence">
            Remember, if you do develop software, please consider people with disabilities. Thank you.
          </p>

          <hr />

					<p className="playthrough__sentence">
						Wait, you're actually <i>still here</i>? Well, you can decide to make more adjustments, play more games, or take a walk outside. If you're interested in learning more, there is a button left of the repair button that will take you to a page providing more information on this lab. Up to you!
					</p>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(FourthPlaythrough);
