import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';

class Fourth extends Component {
	render() {
		const { results } = this.props;
		let resultContainer = [];

		// score of the first exercise, used to calculate percentages below
		let firstExercise = results[0].score;

		// a variable to hold the adjusted percentage for the second round
		let adjScore1;
		// a variable to hold the adjusted percentage for the third round
		let adjScore2;

		// checks if the first exercise score is 0 to avoid dividing by 0 (NaN)
		if (firstExercise === 0) {
			adjScore1 = 0;
		}
		// checks if the percentage for the second round
		// is negative; if so, set percentage to 0
		else {
			if ((results[1].score / firstExercise) * 100 <= 0) {
				adjScore1 = 0;
			}
			// otherwise, set percentage as normal (will be 0 or positive)
			else {
				adjScore1 = (results[1].score / firstExercise) * 100;
			}
		}

		// checks if the first exercise score is 0 to avoid dividing by 0 (NaN)
		if (firstExercise === 0) {
			adjScore2 = 0;
		}
		else {
			// checks if the percentage for the third round
			// is negative; if so, set percentage to 0
			if ((results[2].score / firstExercise) * 100 <= 0) {
				adjScore2 = 0;
			}
			// otherwise, set percentage as normal (will be 0 or positive)
			else {
				adjScore2 = (results[2].score / firstExercise) * 100;
			}
		}
		// a variable to store the previously calculated data
		// to be displayed in the graph
		let data = [
			{ exercise: 2, score: adjScore1},
			{ exercise: 3, score: adjScore2}
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
				<div className="playthrough__exercise" key={i}>
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
				<div className="playthrough__content">
					<p className="playthrough__sentence">Here are your results from all three Exercises:</p>

					<div className="playthrough__results">{resultContainer}</div>

					<div className="playthrough__chart">
						<VictoryChart domainPadding={50}>
							<VictoryLabel text="Exercise Round vs. Percentage of Points Achieved from Round 1" x={225} y={30} textAnchor="middle" />

							<VictoryAxis tickFormat={() => ''} />
							<VictoryAxis
								tickValues={[2, 3 ]}
								tickFormat={[ 'Sound\nOff', 'Code\nFixed+\nSound\nOff' ]}
								style={{ tickLabels: { fill: '#A11212' } }}
								offsetY={50}
							/>
							<VictoryAxis dependentAxis tickFormat={(x) => x} />

							<VictoryBar horizontal data={data} x="exercise" y="score"
										labels={({ datum }) => datum.y}
										domain={{y: [0, 100]}} // setting domain avoids infinitesimally small numbers on axis
										style={{ labels: { fill: "white" } }}
										labelComponent={<VictoryLabel dy={30}/>}
							/>
						</VictoryChart>
					</div>

					<p className="playthrough__sentence">
						After playing the exercise with audio, without audio,
						and without audio but with repairs, <b>we hope you have a better
						understanding of deaf and hard-of-hearing users' experiences.</b>
					</p>

					<p className="playthrough__sentence">
						When developing software, <b>remember to consider deaf and hard-of-hearing users.</b>
					</p>

					<hr />

					<p className="playthrough__sentence">
						If you wish to make further repairs, click the 'Repair' button.
						You may play the exercise again by clicking the 'Next Play'/'Start with Repair Applied' button, or
						exit the exercise by clicking the 'Next' button.
					</p>
				</div>
			</div>
		);
	}
}

export default Fourth;
