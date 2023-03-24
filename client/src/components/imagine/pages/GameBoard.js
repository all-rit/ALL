/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
//import { navigate } from "@reach/router";
import Countdown from "react-countdown-now";
import SecondTimer from "../../exercise/lab2/components/secondTimer";
import Instructions from "../../exercise/lab2/Instructions/instructions";
import Circle from "../../exercise/lab2/components/circle";
import Title from "../../exercise/lab2/components/header/title";
import "../../exercise/lab2/components/exerciseStyle.css";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: 0,
    };
  }

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

    if (this.state.startTime === 0) {
      this.setState({ startTime: 0 });
    }

    const updateTime = () => {
      this.setState({ startTime: 0 });
    };

    const mainTimeRenderer = (props) => {
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

    const renderer = (props) => {
      if (props.total === 0) {
        return (
          <div>
            <Countdown
              date={this.state.startTime + 18000}
              intervalDelay={0}
              precision={1}
              renderer={mainTimeRenderer}
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
// const GameBoard = (props) => {
//     const { linkNum } = props;
//     const handleNext = () => {
//         navigate("Imagine" + linkNum + "/CBInstructions");
//     };

//     return (
//         <div className="container bottomSpace center-div">
//             <button
//                 className="btn btn-primary text-black btn-x1 text-uppercase"
//                 onClick={handleNext}
//                 key="next"
//             >
//                 Next
//             </button>
//         </div>
//     )
// }

export default GameBoard;
