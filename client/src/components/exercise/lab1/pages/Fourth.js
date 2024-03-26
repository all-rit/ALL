import React, { useState, useEffect } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
import PropTypes from "prop-types";

/**
 * Represents the Fourth component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.results - The results array.
 * @returns {JSX.Element} The Fourth component.
 */
const Fourth = ({ results }) => {
  const [adjScore1, setAdjScore1] = useState(0);
  const [adjScore2, setAdjScore2] = useState(0);

  useEffect(() => {
    const firstExercise = results[0].score;

    if (firstExercise === 0) {
      setAdjScore1(0);
    } else {
      const score1 = (results[1].score / firstExercise) * 100;
      setAdjScore1(score1 <= 0 ? 0 : score1);
    }

    if (firstExercise === 0) {
      setAdjScore2(0);
    } else {
      const score2 = (results[2].score / firstExercise) * 100;
      setAdjScore2(score2 <= 0 ? 0 : score2);
    }
  }, [results]);

  const data = [
    { exercise: 2, score: adjScore1 },
    { exercise: 3, score: adjScore2 },
  ];

  /**
   * Represents a container for displaying results.
   *
   * @type {Array<JSX.Element>}
   */
  const resultContainer = results.slice(0, 3).map((result, i) => {
    let title = "";

    if (i === 0) {
      title = "Sound On";
    } else if (i === 1) {
      title = "Sound Off";
    } else {
      title = "Code Fixed + Sound Off";
    }

    return (
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
  });

  return (
    <div className="playthrough">
      <div className="playthrough__content">
        <p className="playthrough__sentence">
          Here are your results from all three exercises:
        </p>

        <div className="playthrough__results">{resultContainer}</div>

        <div className="playthrough__chart">
          <VictoryChart domainPadding={50}>
            <VictoryLabel
              text="Exercise Round vs. Percentage of Points Achieved from Round 1"
              x={225}
              y={30}
              textAnchor="middle"
            />

            <VictoryAxis tickFormat={() => ""} />
            <VictoryAxis
              tickValues={[2, 3]}
              tickFormat={["Sound\nOff", "Code\nFixed+\nSound\nOff"]}
              style={{ tickLabels: { fill: "#A11212" } }}
              offsetY={50}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => x} />

            <VictoryBar
              horizontal
              data={data}
              x="exercise"
              y="score"
              labels={({ datum }) => datum.y}
              domain={{ y: [0, 100] }}
              style={{ labels: { fill: "white" } }}
              labelComponent={<VictoryLabel dy={30} />}
            />
          </VictoryChart>
        </div>

        <p className="playthrough__sentence">
          After playing the exercise with audio, without audio, and without
          audio but with repairs,{" "}
          <b>
            we hope you have a better understanding of deaf and hard-of-hearing
            users&apos; experiences.
          </b>
        </p>

        <p className="playthrough__sentence">
          When developing software,{" "}
          <b>remember to consider deaf and hard-of-hearing users.</b>
        </p>

        <hr />

        <p className="playthrough__sentence">
          If you wish to make further repairs, click the &apos;Repair &apos;
          button. You may play the exercise again by clicking the &apos;Next
          Play&apos;/&apos;Start with Repair Applied&apos; button, or exit the
          exercise by clicking the &apos;Next&apos; button.
        </p>
      </div>
    </div>
  );
};

Fourth.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired,
      correctAnswers: PropTypes.number.isRequired,
      incorrectAnswers: PropTypes.number.isRequired,
      roundNumber: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Fourth;
