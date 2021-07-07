import React, { Component } from "react";
import Button from "./header/buttons/button";
import "./exerciseStyle.css";

/*
  Class for replay screen and to allow the user to replay the exercise
*/
class Replay extends Component {
  //Constructor to hold state information
  constructor(props) {
    super(props);
    this.state = {
      scorePopup: false,
      exerciseMode: null
    };
  }

  //Renderer for application
  render() {
    // eslint-disable-next-line
    this.state.exerciseMode = "default";

    //Handles the first click
    const clickFirst = () => {
      this.props.changeExerciseColors(this.props.colors);
      this.props.resetOption();
      this.props.enterInfoState();
    };

    const clickSecond = () => {
      this.props.changeExerciseColors(this.props.colors);
      this.props.resetOption();
      this.props.enterSecondInfoState();
    };

    const clickThird = () => {
      this.props.changeExerciseColors(this.props.colors);
      this.props.resetOption();
      this.props.enterThirdInfoState();
    };

    return (
      <div>
        {/*
         <div className='replay_screen'>
           <div className='left'>
             <ScoreBreakdown />
             <PreviousExercises score={this.props.score} mode={this.props.exerciseMode}/>
             <ScoreComparison score={this.props.score} mode={this.props.exerciseMode}/>
           </div>
         </div>
        */}
        <div style={{ marginTop: "75px" }}>
          <div>
            {this.props.score > 0 ? (
              <p className="timeEnd">Good job! Here are your results:</p>
            ) : (
              <p className="timeEnd">
                Better luck next time! Here are your results:
              </p>
            )}
            <div>
              <table className="center centerExercise">
                <tbody style={{ border: "2px solid black" }}>
                  <tr>
                    <td className="replayBreakdown">Final Score</td>
                    {this.props.score > 0 ? (
                      <td className="replayBreakdown positiveData">
                        {this.props.score}
                      </td>
                    ) : (
                      <td className="replayBreakdown negativeData">
                        {this.props.score}
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td className="replayBreakdown">
                      Correctly clicked circles
                    </td>
                    {this.props.rightClick - this.props.wrongNoClick > 0 ? (
                      <td className="replayBreakdown positiveData">
                        {this.props.rightClick}
                      </td>
                    ) : (
                      <td className="replayBreakdown negativeData">
                        {this.props.rightClick}
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td className="replayBreakdown">
                      Correctly not clicked circles
                    </td>
                    {this.props.rightNoClick > 0 ? (
                      <td className="replayBreakdown positiveData">
                        {this.props.rightNoClick}
                      </td>
                    ) : (
                      <td className="replayBreakdown negativeData">
                        {this.props.rightNoClick}
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td className="replayBreakdown">
                      Incorrectly clicked circles
                    </td>
                    {this.props.wrongClick === 0 ? (
                      <td className="replayBreakdown positiveData">
                        {this.props.wrongClick}
                      </td>
                    ) : (
                      <td className="replayBreakdown negativeData">
                        {this.props.wrongClick}
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td className="replayBreakdown">Missed clicks</td>
                    {this.props.wrongNoClick === 0 ? (
                      <td className="replayBreakdown positiveData">
                        {this.props.wrongNoClick}
                      </td>
                    ) : (
                      <td className="replayBreakdown negativeData">
                        {this.props.wrongNoClick}
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="center" style={{ marginLeft: "-25px" }}>
            {this.props.exercisesPlayed === 0 ? (
              <Button
                clickMethod={clickFirst}
                message={"Continue"}
                fontSizing={"25px"}
              />
            ) : (
              <div>
                {this.props.exercisesPlayed === 1 ? (
                  <Button
                    clickMethod={clickSecond}
                    message={"Continue"}
                    fontSizing={"25px"}
                  />
                ) : (
                  <div>
                    <Button
                      clickMethod={clickThird}
                      message={"Continue"}
                      fontSizing={"25px"}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Replay;
