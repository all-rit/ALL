/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Component } from "react";
import "../../../../assets/stylesheets/components/SimInstructions.scss";

class SimInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roundNumber: props.roundNumber,
      threatLvl: props.threatLvl,
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ threatLvl: this.props.threatLvl }),
      100
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getInstructions(roundNumber, threatLvl) {
    if (roundNumber === 0) {
      return (
        <div className="simInstr">
          <h2>Click the Start button to begin the simulation</h2>
        </div>
      );
    } else {
      switch (threatLvl) {
        case 3:
          return (
            <div className="simInstr">
              <h2> High threat detected!</h2>
            </div>
          );
        case 2:
          return (
            <div className="simInstr">
              <h2> Medium threat detected!</h2>
            </div>
          );
        case 1:
          return (
            <div className="simInstr">
              <h2> Low threat detected!</h2>
            </div>
          );
        default:
          return (
            <div className="simInstr">
              <h2>Click the Start button to begin the simulation</h2>
            </div>
          );
      }
    }
  }

  render() {
    let data = this.props;

    return this.getInstructions(data.roundNumber, data.threatLvl);
  }
}

export default SimInstructions;
