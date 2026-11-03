import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES } from "../../../constants/lab17";
import ExerciseStateContext from "./Lab17Context";

import ExerciseIntro from "./pages/ExerciseIntro";
import QvCGameStage from "./pages/QvCGameStage";
import Conclusion from "./pages/Conclusion";

const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );
  const [tasks, setTasks] = useState({});
  const [activeTask, setActiveTask] = useState(null);
  const [openTaskId, setOpenTaskId] = useState(null);

  return (
    <div className="bottomSpace tw-p-6">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
          tasks,
          setTasks,
          activeTask,
          setActiveTask,
          openTaskId,
          setOpenTaskId,
        }}
      >
        <Router className="app">
          <ExerciseIntro default path="/" />
          <QvCGameStage path="/QvCGameStage" />
          <Conclusion path="/Conclusion" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};

export default Main;
