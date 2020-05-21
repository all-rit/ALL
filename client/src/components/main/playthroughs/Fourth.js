import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';

class Fourth extends Component {
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
					<p className="playthrough__sentence">Here are your results from all three games:</p>

					<div className="playthrough__results">{resultContainer}</div>

					<div className="playthrough__chart">
						<VictoryChart domainPadding={50}>
							<VictoryLabel text="Scores in First Three Games" x={225} y={30} textAnchor="middle" />

							<VictoryAxis tickFormat={() => ''} />
							<VictoryAxis
								tickValues={[ 1, 2, 3 ]}
								tickFormat={[ 'w/ Sound', 'w/o Sound', 'w/o Sound + Repair' ]}
								style={{ tickLabels: { fill: '#f76902' } }}
								offsetY={50}
							/>
							<VictoryAxis dependentAxis tickFormat={(x) => x} />

							<VictoryBar data={data} x="game" y="score" />
						</VictoryChart>
					</div>

					<p className="playthrough__sentence">
						After playing the game with audio, without audio, and without audio with repairs,
						we hope you have a better understanding of deaf and hard-of-hearing users' experience.
					</p>

					<p className="playthrough__sentence">
						When developing software, remember to consider deaf and hard-of-hearing users.
					</p>

					<hr />

					<p className="playthrough__sentence">
						If you wish to make further repairs, click the “Repair” button.
						You may play the game again by clicking the “Next Play” button.
					</p>
				</div>
			</div>
		);
	}
}

export default Fourth;
