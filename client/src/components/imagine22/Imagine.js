// /* eslint-disable react/prop-types */
// import { Router } from "@reach/router";
// import React from "react";
// // import AvatarSelection from "./pages/AvatarSelection";
// import ImagineEnd from "./pages/ImagineEnd";
// import ImagineStart from "./pages/ImagineStart";
// import GameInstructions from "./pages/GameInstructions";
// //import GameBoard from "./pages/GameBoard";
// import GameBoardCenter from "./pages/GameBoardCenter";
// import CBInstructions from "./pages/CBInstructions";
// import CBGameBoard from "./pages/CBGameBoard";
// import ExpressionStart from "./pages/ExpressionStart";
// import VideoExercise from "./pages/VideoExercise";
// import ExpressionScore from "./pages/ExpressionScore";
// // import MatchLobby from "./pages/MatchLobby";
// // import TicTacToe from "./pages/TicTacToe";
// import { transitions, positions, Provider } from "react-alert";
// import AlertMUITemplate from "react-alert-template-mui";

// import {
//   changeDefaultColors,
//   changeExerciseColors,
//   selectExerciseOption,
//   activatePopup,
//   startExercise,
//   endExercise,
//   resetOption,
//   resetColors,
//   resetChange,
//   closeInfoPopup,
//   openAboutPage,
//   closeAboutPage,
//   openStatPage,
//   closeStatPage,
//   endFirstExercise,
//   enterInfoState,
//   closeInfoState,
//   enterSecondInfoState,
//   closeSecondInfoState,
//   openThirdInfoState,
//   closeThirdInfoState,
//   openConclusion,
//   toWhiteBackground,
//   resetBackground,
//   openColorChange,
//   closeColorChange,
//   toGreyBackground,
//   resetSystem,
//   goBackFromExercise,
// } from "../../reducers/lab2/actions"

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChangeDefaultColors: (event) => dispatch(changeDefaultColors(event)),
//     onChangeExerciseColors: (event) => dispatch(changeExerciseColors(event)),
//     onSelectOption: (event) => dispatch(selectExerciseOption(event)),
//     popupController: (event) => dispatch(activatePopup(event)),
//     onStartExercise: () => dispatch(startExercise()),
//     onEndExercise: () => dispatch(endExercise()),
//     onResetOption: () => dispatch(resetOption()),
//     onResetColors: () => dispatch(resetColors()),
//     onResetChange: () => dispatch(resetChange()),
//     onCloseInfoPopup: () => dispatch(closeInfoPopup()),
//     onOpenAboutPage: () => dispatch(openAboutPage()),
//     onCloseAboutPage: () => dispatch(closeAboutPage()),
//     onOpenStatPage: () => dispatch(openStatPage()),
//     onCloseStatPage: () => dispatch(closeStatPage()),
//     onEndFirstExercise: () => dispatch(endFirstExercise()),
//     onEnterInfoState: () => dispatch(enterInfoState()),
//     onCloseInfoState: () => dispatch(closeInfoState()),
//     onEnterSecondInfoState: () => dispatch(enterSecondInfoState()),
//     onCloseSecondInfoState: () => dispatch(closeSecondInfoState()),
//     onOpenThirdInfoState: () => dispatch(openThirdInfoState()),
//     onCloseThirdInfoState: () => dispatch(closeThirdInfoState()),
//     onOpenConclusion: () => dispatch(openConclusion()),
//     onToWhiteBackground: () => dispatch(toWhiteBackground()),
//     onResetBackground: (event) => dispatch(resetBackground(event)),
//     onOpenColorChange: () => dispatch(openColorChange()),
//     onCloseColorChange: () => dispatch(closeColorChange()),
//     onToGreyBackground: () => dispatch(toGreyBackground()),
//     onResetSystem: () => dispatch(resetSystem()),
//     onGoBackFromExercise: () => dispatch(goBackFromExercise()),
//   };
// };

// const Imagine = (props) => {
//   const { user, /*biasType*/ linkNum } = props;

//   const options = {
//     timeout: 10000,
//     position: positions.MIDDLE,
//     transition: transitions.SCALE,
//   };

//   return (
//     <section className="page-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 text-center">
//             <h2 className="section-heading text-uppercase tw-text-right">
//               {"ID#" + user?.userid}
//             </h2>
//           </div>
//         </div>
//       </div>
//       <Provider template={AlertMUITemplate} {...options}>
//         <div className="container bottomSpace">
//           <Router className="app">
//             <ImagineStart path="/" user={user} linkNum={linkNum} />
//             <GameInstructions
//               path="/GameInstructions"
//               user={user}
//               linkNum={linkNum} />
//             <GameBoardCenter
//               path="/GameBoardCenter"
//               user={user}
//               linkNum={linkNum}
//               exerciseEnded={onEndExercise}
//               correctColor={exerciseRightCircle}
//               incorrectColorOne={exerciseWrongCircleOne}
//               incorrectColorTwo={exerciseWrongCircleTwo}
//               exerciseOption={exerciseOption}
//               background={exerciseBackground}
//               selectOption={onSelectOption}
//               resetOption={onResetOption}
//               onChangeExerciseColors={onChangeExerciseColors}
//               colors={colors}
//               resetColors={onResetColors}
//               enterInfoState={onEnterInfoState}
//               enterSecondInfoState={onEnterSecondInfoState}
//               exercisesPlayed={exercisesPlayed}
//               enterThirdInfoState={onOpenThirdInfoState}
//             />
//             <CBInstructions
//               path="/CBInstrucions"
//               user={user}
//               linkNum={linkNum} />
//             <CBGameBoard
//               path="/CBGameBoard"
//               user={user}
//               linkNum={linkNum} />
//             <ExpressionStart path="/Expression" user={user} linkNum={linkNum} />
//             <VideoExercise path="/Exercise" user={user} linkNum={linkNum} />
//             <ExpressionScore path="/ExpressionScore" user={user} linkNum={linkNum} />
//             {/* <AvatarSelection
//               path="/AvatarSelection"
//               user={user}
//               linkNum={linkNum}
//             /> */}
//             {/* <MatchLobby
//               path="/MatchLobby"
//               user={user}
//               biasType={biasType}
//               linkNum={linkNum}
//             /> */}
//             {/* <TicTacToe path="/TicTacToe" user={user} linkNum={linkNum} /> */}
//             <ImagineEnd path="/End" user={user} linkNum={linkNum} />
//           </Router>
//         </div>
//       </Provider>
//     </section>
//   );
// };

// export default Imagine;
