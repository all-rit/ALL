/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Score from './score';
import Instructions from '../Instructions/instructions';
import Circle from './circle';
import Replay from './replay';
import Countdown from 'react-countdown-now';

/*
Component for the secondary timer used for each of the circles per second
*/
class SecondTimer extends Component {
  // State for score information
  constructor(props) {
    super(props);
    this.currentColor = null;
    this.correct = null;
    this.possibleCorrect = 0;
    this.clicked = false;
    this.time = 1;
    this.score = 0;
    this.numRightOnClick = 0;
    this.numRightOnNoClick = 0;
    this.numWrongOnClick = 0;
    this.numWrongOnNoClick = 0;
    this.first = true;
  }

  // Renderer for system
  render() {
    const {
      correctColor,
      incorrectColorOne,
      incorrectColorTwo,
      startTime,
      exerciseOption,
      background,
      onUpdateTime,
      enterInfoState,
      enterSecondInfoState,
      exercisesPlayed,
      enterThirdInfoState,
    } = this.props;

    const isHex = exerciseOption === 'hex';

    // Calculates the score based on the response from the user
    const calculateScore = () => {
      if (
        this.numRightOnClick +
          this.numRightOnNoClick +
          this.numWrongOnClick +
          this.numWrongOnNoClick !==
        15
      ) {
        if (this.clicked) {
          if (this.correct) {
            this.numRightOnClick++;
            this.possibleCorrect++;
            if (this.time < 0.1) {
              this.score += 100;
            } else if (this.time > 0.1 && this.time < 0.21) {
              this.score += 75;
            } else if (this.time > 0.2 && this.time < 0.31) {
              this.score += 50;
            } else if (this.time > 0.3 && this.time < 0.41) {
              this.score += 35;
            } else if (this.time > 0.4 && this.time < 0.51) {
              this.score += 25;
            } else if (this.time > 0.5 && this.time < 0.61) {
              this.score += 15;
            } else if (this.time > 0.6 && this.time < 0.71) {
              this.score += 10;
            } else {
              this.score += 5;
            }
          } else {
            this.numWrongOnClick++;
            this.score -= 50;
          }
          this.clicked = false;
          this.time = 1;
        } else {
          if (this.correct) {
            this.numWrongOnNoClick++;
            this.possibleCorrect++;
            this.score -= 100;
          } else {
            this.numRightOnNoClick++;
            this.score += 25;
          }
        }
      }
    };

    // Randomly generates a color for the middle circle
    const calculateRandomColor = () => {
      const options = [correctColor, incorrectColorOne, incorrectColorTwo];
      const position = Math.floor(Math.random() * 3);
      this.currentColor = options[position];
      return options[position];
    };

    // Handles the click of the middle circle and records the time
    const onClick = () => {
      if (!this.clicked) {
        this.clicked = true;
        this.time = ((Date.now() - startTime) / 1000) % 1;
      }
    };

    const updateColor = (isCorrect) => {
      const element = document.getElementById('notifyUser');
      if (element !== null) {
        element.innerHTML = `${isCorrect}`;
      }
    };

    // turns the data found into an object so it can be passed to the backend
    // after it is converted, the system sends the info to the backend and then
    // eslint-disable-next-line max-len
    // will record the results from the past five exercises in the state of the exercise
    const recordData = () => {
      const score = this.score;
      const numRightOnClick = this.numRightOnClick;
      const numWrongOnClick = this.numWrongOnClick;
      const numRightOnNoClick = this.numRightOnNoClick;
      const numWrongOnNoClick = this.numWrongOnNoClick;
      const data = {
        score,
        numRightOnClick,
        numWrongOnClick,
        numRightOnNoClick,
        numWrongOnNoClick,
        background,
        correctColor,
        incorrectColorOne,
        incorrectColorTwo,
        Mode: [exerciseOption.toUpperCase()],
      };

      fetch(process.env.API_URL + '/exerciseStats', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        credentials: 'include',
        body: JSON.stringify(data),
      }).catch((err) => console.log(err));
    };

    // Specified by the timer for custom rendering of the center circle
    const renderer = (props) => {
      this.correct = this.currentColor === correctColor;
      let isCorrect = 'Incorrect';
      if (this.correct) {
        isCorrect = 'Correct';
      }
      calculateRandomColor();
      if (!this.first) {
        calculateScore();
      } else {
        this.first = false;
      }
      if (props.total === 0) {
        recordData();
      }
      if (props.total !== 0) {
        updateColor(isCorrect);
      }
      // Returns either the replay screen option or the center circle that
      // Changes every second
      return (
        <div>
          {props.total === 0 ? (
            <Replay
              exerciseEnded={this.props.exerciseEnded}
              onUpdateTime={onUpdateTime}
              score={this.score}
              rightClick={this.numRightOnClick}
              rightNoClick={this.numRightOnNoClick}
              wrongClick={this.numWrongOnClick}
              wrongNoClick={this.numWrongOnNoClick}
              exerciseOption={exerciseOption}
              rightOnClick={this.numRightOnClick}
              exerciseMode={exerciseOption.toUpperCase()}
              changeExerciseColors={this.props.onChangeExerciseColors}
              colors={this.props.colors}
              resetOption={this.props.resetOption}
              enterInfoState={enterInfoState}
              enterSecondInfoState={enterSecondInfoState}
              exercisesPlayed={exercisesPlayed}
              enterThirdInfoState={enterThirdInfoState}
            />
          ) : (
            <div>
              <div className="circleClicked">
                <div
                  id="notifyUser"
                  aria-live="polite"
                  aria-atomic="true"
                  className="ariaAlert"
                ></div>
                <Circle
                  clickable={true}
                  color={this.currentColor}
                  onClick={onClick}
                />
              </div>
              <Instructions
                correctColor={correctColor}
                incorrectColorOne={incorrectColorOne}
                incorrectColorTwo={incorrectColorTwo}
              />
              <Score
                score={this.score}
                rightClick={this.numRightOnClick}
                wrongClick={this.numWrongOnClick}
                rightNoClick={this.numRightOnNoClick}
                wrongNoClick={this.numWrongOnNoClick}
                isHex={isHex}
                background={background}
                currentColor={this.currentColor}
                exerciseMode={exerciseOption}
              />
            </div>
          )}
        </div>
      );
    };

    // Used only for the react component used for the countdown system
    return (
      <div>
        <Countdown
          date={startTime + 18000}
          intervalDelay={1000}
          precision={2}
          renderer={renderer}
        />
      </div>
    );
  }
}

export default SecondTimer;
