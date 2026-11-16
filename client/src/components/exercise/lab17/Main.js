import React, { useState } from "react";
import { Router } from "@reach/router";

import { EXERCISE_STATES, STAGE_1_TASKS, STAGE_2_TASKS, STAGE_3_TASKS } from "../../../constants/lab17";
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

  const score = Object.values(tasks).filter((task) => task.isCorrect).length;

  return (
    <div className="bottomSpace tw-p-6">
      <ExerciseStateContext.Provider
        value={{
          exerciseState,
          setExerciseState,
          tasks,
          setTasks,
          score,
          activeTask,
          setActiveTask,
          openTaskId,
          setOpenTaskId,
        }}
      >
        <Router className="app">
          <ExerciseIntro default path="/" />
          <QvCGameStage path="/QvCGameStage" stageNum = {1} stageTasks={STAGE_1_TASKS} />
          <QvCGameStage path="/QvCGameStage/stage2" stageNum = {1} stageTasks={STAGE_2_TASKS} />
          <QvCGameStage path="/QvCGameStage/stage3" stageNum = {1} stageTasks={STAGE_3_TASKS} />
          <Conclusion path="/Conclusion" />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};

export default Main;
