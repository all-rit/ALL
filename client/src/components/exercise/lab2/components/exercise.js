/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Countdown from 'react-countdown-now';
import SecondTimer from './secondTimer';
import Instructions from '../Instructions/instructions';
import Circle from './circle';
import Title from './header/title';
import './exerciseStyle.css';

/*
Class for controlling the main exercise page
*/
class exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: 0,
    };
  }

  // custom renderer for the class
  render() {
    const {
      correctColor,
      incorrectColorOne,
      incorrectColorTwo,
      background,
      exerciseOption,
      resetOption,
      onChangeExerciseColors,
      colors,
      resetColors,
      selectOption,
      exerciseEnded,
      enterInfoState,
      enterSecondInfoState,
      exercisesPlayed,
      enterThirdInfoState,
    } = this.props;

    // setting state for the start time of the exercise
    if (this.state.startTime === 0) {
      this.setState({startTime: Date.now()});
    }

    // Resets the state time of the exercise zero so the exercise repeats
    const updateTime = () => {
      this.setState({startTime: 0});
    };

    // Controls the top right page countdown clock
    const mainTimerRenderer = (props) => {
      if (props.total === 0) {
        return <Title exerciseState={false} replay={true} />;
      } else {
        let milliseconds = props.milliseconds;
        milliseconds = milliseconds / 100;
        return (
          <div>
            <div className="exerciseTimer">
              {props.seconds}.{milliseconds}
            </div>
            <Title exerciseState={true} replay={false} />
          </div>
        );
      }
    };

    // Controls the renderer for the switching circles overall countdown of
    // the exercise
    const renderer = (props) => {
      if (props.total === 0) {
        return (
          <div>
            <Countdown
              date={this.state.startTime + 18000}
              intervalDelay={0}
              precision={1}
              renderer={mainTimerRenderer}
            />
            <SecondTimer
              exerciseEnded={exerciseEnded}
              onUpdateTime={updateTime}
              correctColor={correctColor}
              incorrectColorOne={incorrectColorOne}
              incorrectColorTwo={incorrectColorTwo}
              startTime={this.state.startTime}
              background={background}
              exerciseOption={exerciseOption}
              resetOption={resetOption}
              selectOption={selectOption}
              onChangeExerciseColors={onChangeExerciseColors}
              colors={colors}
              resetColors={resetColors}
              enterInfoState={enterInfoState}
              enterSecondInfoState={enterSecondInfoState}
              exercisesPlayed={exercisesPlayed}
              enterThirdInfoState={enterThirdInfoState}
            />
          </div>
        );
      }
      // Instruction display during inital countdown
      return (
        <div>
          <Title exerciseState={true} replay={false} />
          <div className="startExerciseTimer">{props.seconds}</div>
          <div className="center prescreen">
            <Circle color={correctColor} />
            <div className="arrow">
              <div className="point" />
              <div className="line" />
            </div>
            <div>
              <p className="prescreenText">
                Click this color whenever it appears here!
              </p>
              <p className="prescreenText">
                If its one of the other colors, don't click!
              </p>
            </div>
          </div>
          <Instructions
            correctColor={correctColor}
            incorrectColorOne={incorrectColorOne}
            incorrectColorTwo={incorrectColorTwo}
          />
        </div>
      );
    };

    // Controls the main countdown clock for the center of the screen
    return (
      <div>
        {this.state.startTime === 0 ? null : (
          <Countdown
            date={this.state.startTime + 3000}
            intervalDelay={1000}
            precision={1}
            renderer={renderer}
          />
        )}
      </div>
    );
  }
}

export default exercise;
