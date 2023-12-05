const getExerciseState = (state) => {
  const lab = state.main.lab;
  if (state.userState) {
    return state.userState;
  }
  switch (lab) {
    case 1:
      return state.exercise1.state;
    case 2:
      return state.exercise2.changeExerciseState.exerciseState
        ? "EXERCISE_PLAYING"
        : "EXERCISE_IDLE";
    case 3:
      return state.exercise3.state;
    case 4:
      return state.exercise4.state;
    case 5:
      return state.exercise5.state;
    case 6:
      return state.exercise6.state;
    case 7:
      return state.exercise7.state;
    case 8:
      return state.exercise8.state;
    case 10:
      return state.exercise10.state;
    case 11:
      return state.exercise11.state;
    default:
      return state.exercise1.state;
  }
};

export default getExerciseState;
