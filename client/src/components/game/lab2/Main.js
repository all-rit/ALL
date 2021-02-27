import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "../lab2/components/header/title";
import Home from "./home/Home";
import GameCenter from "../lab2/components/GameCenter";
import ColorChangePopup from "./home/colorChangePopup";
import Header from "../lab2/components/header/headerMain";
import SuccessMessage from "./home/successMessage";
import Countdown from "react-countdown-now";
import Form from "./forms/form";
import LandingPage from "./LandingPage/landingPage";
import UserStats from "./userStatistics/userStats";
import SecondInstructions from "./Instructions/secondInstructions";
import ThirdInstructions from "./Instructions/thirdInstructions";
import FourthInstructions from "./Instructions/fourthInstructions";
import Conclusion from "./Instructions/conclusion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

//Imports from redux actions
import {
  changeDefaultColors,
  changeGameColors,
  selectGameOption,
  activatePopup,
  startGame,
  endGame,
  resetOption,
  resetColors,
  resetChange,
  closeInfoPopup,
  openAboutPage,
  closeAboutPage,
  openStatPage,
  closeStatPage,
  endFirstGame,
  enterInfoState,
  closeInfoState,
  enterSecondInfoState,
  closeSecondInfoState,
  openThirdInfoState,
  closeThirdInfoState,
  openConclusion,
  toWhiteBackground,
  resetBackground,
  openColorChange,
  closeColorChange,
  toGreyBackground,
  resetSystem,
  goBackFromGame
} from "../../../reducers/lab2/actions";

library.add(faQuestionCircle);

const mapStateToProps = state => {
  return {
    baseBackground: state.game2.changeColors.baseBackground,
    baseRightCircle: state.game2.changeColors.baseRightCircle,
    baseWrongCircleOne: state.game2.changeColors.baseWrongCircleOne,
    baseWrongCircleTwo: state.game2.changeColors.baseWrongCircleTwo,
    gameBackground: state.game2.changeColors.gameBackground,
    gameRightCircle: state.game2.changeColors.gameRightCircle,
    gameWrongCircleOne: state.game2.changeColors.gameWrongCircleOne,
    gameWrongCircleTwo: state.game2.changeColors.gameWrongCircleTwo,
    gameOption: state.game2.selectGameOption.option,
    popup: state.game2.changeColors.popup,
    gameState: state.game2.changeGameState.gameState,
    changed: state.game2.changeColors.changed,
    infoPopup: state.game2.changeUser.infoPopup,
    aboutState: state.game2.changeGameState.aboutState,
    statState: state.game2.changeGameState.statState,
    firstGame: state.game2.changeGameState.firstGame,
    secondInfoState: state.game2.changeGameState.secondInfoState,
    thirdInfoState: state.game2.changeGameState.thirdInfoState,
    gamesPlayed: state.game2.changeGameState.gamesPlayed,
    fourthInfoState: state.game2.changeGameState.fourthInfoState,
    endSystem: state.game2.changeGameState.endSystem,
    colorChange: state.game2.changeGameState.colorChangeState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeDefaultColors: event => dispatch(changeDefaultColors(event)),
    onChangeGameColors: event => dispatch(changeGameColors(event)),
    onSelectOption: event => dispatch(selectGameOption(event)),
    popupController: event => dispatch(activatePopup(event)),
    onStartGame: () => dispatch(startGame()),
    onEndGame: () => dispatch(endGame()),
    onResetOption: () => dispatch(resetOption()),
    onResetColors: () => dispatch(resetColors()),
    onResetChange: () => dispatch(resetChange()),
    onCloseInfoPopup: () => dispatch(closeInfoPopup()),
    onOpenAboutPage: () => dispatch(openAboutPage()),
    onCloseAboutPage: () => dispatch(closeAboutPage()),
    onOpenStatPage: () => dispatch(openStatPage()),
    onCloseStatPage: () => dispatch(closeStatPage()),
    onEndFirstGame: () => dispatch(endFirstGame()),
    onEnterInfoState: () => dispatch(enterInfoState()),
    onCloseInfoState: () => dispatch(closeInfoState()),
    onEnterSecondInfoState: () => dispatch(enterSecondInfoState()),
    onCloseSecondInfoState: () => dispatch(closeSecondInfoState()),
    onOpenThirdInfoState: () => dispatch(openThirdInfoState()),
    onCloseThirdInfoState: () => dispatch(closeThirdInfoState()),
    onOpenConclusion: () => dispatch(openConclusion()),
    onToWhiteBackground: () => dispatch(toWhiteBackground()),
    onResetBackground: event => dispatch(resetBackground(event)),
    onOpenColorChange: () => dispatch(openColorChange()),
    onCloseColorChange: () => dispatch(closeColorChange()),
    onToGreyBackground: () => dispatch(toGreyBackground()),
    onResetSystem: () => dispatch(resetSystem()),
    onGoBackFromGame: () => dispatch(goBackFromGame())
  };
};

class Main extends Component {
  shouldComponentUpdate(nextprops) {
    if (nextprops.gameState !== this.props.gameState){
      return true;
    }
    if (nextprops.baseBackground !== this.props.baseBackground){
      return true;
    }
    if (nextprops.baseRightCircle !== this.props.baseRightCircle){
      return true;
    }
    if (nextprops.baseWrongCircleOne !== this.props.baseWrongCircleOne){
      return true;
    }
    if (nextprops.baseWrongCircleTwo !== this.props.baseWrongCircleTwo){
      return true;
    }
    if (nextprops.gameBackground !== this.props.gameBackground){
      return true;
    }
    if (nextprops.gameRightCircle !== this.props.gameRightCircle){
      return true;
    }
    if (nextprops.gameWrongCircleOne !== this.props.gameWrongCircleOne){
      return true;
    }
    if (nextprops.gameWrongCircleTwo !== this.props.gameWrongCircleTwo){
      return true;
    }
    if (nextprops.gameOption !== this.props.gameOption){
      return true;
    }
    if (nextprops.gameWrongCircleTwo !== this.props.gameWrongCircleTwo){
      return true;
    }
    if (nextprops.changed !== this.props.changed){
      return true;
    }
    if (nextprops.infoPopup !== this.props.infoPopup){
      return true;
    }
    if (nextprops.aboutState !== this.props.aboutState){
      return true;
    }
    if (nextprops.statState !== this.props.statState){
      return true;
    }
    if (nextprops.firstGame !== this.props.firstGame){
      return true;
    }
    if (nextprops.secondInfoState !== this.props.secondInfoState){
      return true;
    }
    if (nextprops.thirdInfoState !== this.props.thirdInfoState){
      return true;
    }
    if (nextprops.gamesPlayed !== this.props.gamesPlayed){
      return true;
    }
    if (nextprops.fourthInfoState !== this.props.fourthInfoState){
      return true;
    }
    if (nextprops.endSystem !== this.props.endSystem){
      return true;
    }
    if (nextprops.colorChange !== this.props.colorChange){
      return true;
    }
    return false;
  }

  render() {
    //Props from redux used in the application
    const {
      onChangeDefaultColors,
      onChangeGameColors,
      gameState,
      onStartGame,
      onEndGame,
      onSelectOption,
      baseBackground,
      baseRightCircle,
      baseWrongCircleOne,
      baseWrongCircleTwo,
      gameBackground,
      gameRightCircle,
      gameWrongCircleOne,
      gameWrongCircleTwo,
      gameOption,
      popupController,
      onResetOption,
      onResetColors,
      changed,
      onResetChange,
      onCloseInfoPopup,
      infoPopup,
      aboutState,
      onOpenAboutPage,
      onCloseAboutPage,
      onOpenStatPage,
      onCloseStatPage,
      statState,
      onEndFirstGame,
      firstGame,
      secondInfoState,
      onEnterInfoState,
      onCloseInfoState,
      thirdInfoState,
      onEnterSecondInfoState,
      onCloseSecondInfoState,
      gamesPlayed,
      fourthInfoState,
      onOpenThirdInfoState,
      onCloseThirdInfoState,
      endSystem,
      onOpenConclusion,
      onToWhiteBackground,
      onResetBackground,
      onOpenColorChange,
      onCloseColorChange,
      colorChange,
      onToGreyBackground,
      onResetSystem,
      onGoBackFromGame
    } = this.props;

    //establishing array of current colors for the system
    const colors = [
      baseBackground,
      baseRightCircle,
      baseWrongCircleOne,
      baseWrongCircleTwo
    ];

    //custom renderer for top of page popup
    //popup occurs after a successful change to the colors in the system
    const renderer = props => {
      if (props.total > 0) {
        return (
          <div className="successPopup">
            <SuccessMessage />
          </div>
        );
      } else {
        onResetChange();
        return null;
      }
    };

    return (
      <div class="container">
        {infoPopup ? (
          <Form closeInfoPopup={onCloseInfoPopup} />
        ) : (
          <div style={{ background: `${gameBackground}` }} className="main">
            {changed ? (
              <Countdown
                date={Date.now() + 5000}
                intervalDelay={1000}
                precision={2}
                renderer={renderer}
              />
            ) : null}
            <Header
              endSystem={endSystem}
              gameState={gameState}
              firstGame={firstGame}
              popupController={popupController}
              gameMode={gameOption}
              colors={colors}
              goBackFromGame={onGoBackFromGame}
              changeGameColors={onChangeGameColors}
              openAboutPage={onOpenAboutPage}
              closeAboutPage={onCloseAboutPage}
              aboutState={aboutState}
              openStatPage={onOpenStatPage}
              closeStatPage={onCloseStatPage}
              statState={statState}
              gamesPlayed={gamesPlayed}
              openColorChange={onOpenColorChange}
              thirdInfoState={thirdInfoState}
              colorChange={colorChange}
              closeColorChange={onCloseColorChange}
              openSecondInfoState={onEnterSecondInfoState}
            />
            {gameState ? (
              <div>
                <GameCenter
                  gameEnded={onEndGame}
                  correctColor={gameRightCircle}
                  incorrectColorOne={gameWrongCircleOne}
                  incorrectColorTwo={gameWrongCircleTwo}
                  gameOption={gameOption}
                  background={gameBackground}
                  selectOption={onSelectOption}
                  resetOption={onResetOption}
                  onChangeGameColors={onChangeGameColors}
                  colors={colors}
                  resetColors={onResetColors}
                  enterInfoState={onEnterInfoState}
                  enterSecondInfoState={onEnterSecondInfoState}
                  gamesPlayed={gamesPlayed}
                  enterThirdInfoState={onOpenThirdInfoState}
                />
              </div>
            ) : (
              <div>
                {statState ? (
                  <UserStats
                    toWhiteBackground={onToWhiteBackground}
                    background={baseBackground}
                  />
                ) : (
                  <div>
                    {secondInfoState ? (
                      <SecondInstructions
                        closePage={onCloseInfoState}
                        selectOption={onSelectOption}
                        toWhiteBackground={onToWhiteBackground}
                        background={baseBackground}
                      />
                    ) : (
                      <div>
                        {thirdInfoState ? (
                          <ThirdInstructions
                            closePage={onCloseSecondInfoState}
                            selectOption={onSelectOption}
                            activatePopup={onOpenColorChange}
                            toWhiteBackground={onToWhiteBackground}
                            background={baseBackground}
                          />
                        ) : (
                               <div>
                                {fourthInfoState ? (
                                  <FourthInstructions
                                    closePage={onCloseThirdInfoState}
                                    activatePopup={onOpenColorChange}
                                    endSystem={onOpenConclusion}
                                    toWhiteBackground={onToWhiteBackground}
                                    background={baseBackground}
                                  />
                                ) : (
                                  <div>
                                    {endSystem ? (
                                      <Conclusion resetSystem={onResetSystem} />
                                    ) : (
                                      <div>
                                        {firstGame ? (
                                          <LandingPage
                                            endFirstGame={onEndFirstGame}
                                            toWhiteBackground={
                                              onToWhiteBackground
                                            }
                                            background={baseBackground}
                                          />
                                        ) : (
                                          <div>
                                            {colorChange ? (
                                              <ColorChangePopup
                                                changeDefaultColors={
                                                  onChangeDefaultColors
                                                }
                                                changeGameColors={
                                                  onChangeGameColors
                                                }
                                                popupController={
                                                  popupController
                                                }
                                                closeColorChange={
                                                  onCloseColorChange
                                                }
                                                colors={colors}
                                                toGreyBackground={
                                                  onToGreyBackground
                                                }
                                                background={baseBackground}
                                              />
                                            ) : (
                                              <div>
                                                <Title gameState={gameState} />
                                                <Home
                                                  background={gameBackground}
                                                  onChangeGameColors={
                                                    onChangeGameColors
                                                  }
                                                  gameOption={gameOption}
                                                  correctColor={gameRightCircle}
                                                  incorrectColorOne={
                                                    gameWrongCircleOne
                                                  }
                                                  incorrectColorTwo={
                                                    gameWrongCircleTwo
                                                  }
                                                  startGame={onStartGame}
                                                  selectOption={onSelectOption}
                                                  gamesPlayed={gamesPlayed}
                                                  resetBackground={
                                                    onResetBackground
                                                  }
                                                  baseBackground={
                                                    baseBackground
                                                  }
                                                />
                                              </div>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
