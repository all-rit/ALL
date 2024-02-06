const getExerciseState = (state, reduxState) => {
  const lab = state.main.lab;
  switch (lab) {
    case 1:
      return reduxState.exercise1.state;
    case 2:
      return reduxState.exercise2.changeExerciseState.exerciseState
        ? "EXERCISE_PLAYING"
        : "EXERCISE_IDLE";
    case 5:
      return reduxState.exercise5.state;
    case 7:
      return reduxState.exercise7.state;
    case 10:
      return reduxState.exercise10.state;
    default:
      return state.userState;
  }
};

export default getExerciseState;
