import React, { useState } from "react";
import { navigate, Router } from "@reach/router";
import SelectExercise from "./SelectExercise";
import Lab0Context from "./Lab0Context";
import { EXERCISE_STATES } from "../../../constants/lab0";
import ExperientialIntroduction from "./DesignLabSection/ExperientialActivity/ExperientialIntroduction";
import CreateExperientialExercise from "./DesignLabSection/ExperientialActivity/CreateExperientialExercise";
import DesignLabDecision from "./DesignLabSection/ExperientialActivity/DesignLabDecision";
import ScrumIntroduction from "./DesignLabSection/ScrumActivity/ScrumIntroduction";
import DesignLabIntroduction from "./DesignLabSection/LabIdeaActivity/DesignLabIntroduction";
import ScrumBoardActivity from "./DesignLabSection/ScrumActivity/ScrumBoardActivity";
import ScrumVelocityReading from "./DesignLabSection/ScrumActivity/ScrumVelocityReading";
import DesignNewCategory from "./DesignLabSection/LabIdeaActivity/DesignNewCategory";
import DesignSortNewCategory from "./DesignLabSection/LabIdeaActivity/DesignSortNewCategory";
import WireframeIntro from "./DesignLabSection/WireframingActivity/WireframeIntro";
import WireframeFirstGlance from "./DesignLabSection/WireframingActivity/WireframeFirstGlance";
import WireframeReinforceQuiz from "./DesignLabSection/WireframingActivity/WireframeReinforceQuiz";
import WireframeExercise from "./DesignLabSection/WireframingActivity/WireframeExercise";
import WireframeComponents from "./DesignLabSection/WireframingActivity/WireframeComponents";

const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );
  const [labIdeasComplete, setLabIdeasComplete] = useState(false);
  const [experientialExerciseComplete, setExperientialExerciseComplete] =
    useState(false);
  const [sprintPlanningComplete, setSprintPlanningComplete] = useState(false);

  const handleNav = (route) => {
    navigate(`/Lab0/Exercise/${route}`);
  };

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newLabTopics, setNewLabTopics] = useState([]);

  return (
    <div>
      <Lab0Context.Provider
        value={{
          exerciseState,
          setExerciseState,
          handleNav,
          labIdeasComplete,
          setLabIdeasComplete,
          experientialExerciseComplete,
          setExperientialExerciseComplete,
          sprintPlanningComplete,
          setSprintPlanningComplete,
          newCategoryName,
          setNewCategoryName,
          newLabTopics,
          setNewLabTopics,
        }}
      >
        <Router className={"tw-p-3 tw-h-[40rem]"}>
          <SelectExercise default path={"/*"} />
          <DesignLabDecision path={"/LabDecision"} />
          <ExperientialIntroduction path={"/ExperientialIntro"} />
          <CreateExperientialExercise path={"/ExperientialExercise"} />
          <DesignLabIntroduction path={"/DesignLabIntro"} />
          <DesignNewCategory path={"/DesignNewCategory"} />
          <DesignSortNewCategory path={"/DesignSortNewCategory"} />
          <ScrumIntroduction path={"/ScrumIntro"} />
          <ScrumBoardActivity path={"/ScrumBoardActivity"} />
          <ScrumVelocityReading path={"/ScrumVelocityReading"} />
          <WireframeIntro path={"/WireframeIntro"} />
          <WireframeFirstGlance path={"/WireframeFirstGlance"} />
          <WireframeReinforceQuiz path={"/WireframeReinforceQuiz"} />
          <WireframeExercise path={"/WireframeExercise"} />
          <WireframeComponents path={"/WireframeComponents"} />
        </Router>
      </Lab0Context.Provider>
    </div>
  );
};

export default Main;
