import React, { useState } from "react";
import { navigate, Router } from "@reach/router";
import SelectExercise from "./SelectExercise";
import Lab0Context from "./Lab0Context";
import { EXERCISE_STATES } from "../../../constants/lab0";
import ScrumIntroduction from "./DesignLabSection/ScrumActivity/ScrumIntroduction";
import DesignLabIntroduction from "./DesignLabSection/DesignLabIntroduction";
import ScrumBoardActivity from "./DesignLabSection/ScrumActivity/ScrumBoardActivity";
import ScrumVelocityReading from "./DesignLabSection/ScrumActivity/ScrumVelocityReading";
import DesignNewCategory from "./DesignLabSection/DesignNewCategory";
import DesignSortNewCategory from "./DesignLabSection/DesignSortNewCategory";

const Main = () => {
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT,
  );

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
          newCategoryName,
          setNewCategoryName,
          newLabTopics,
          setNewLabTopics,
        }}
      >
        <Router className={"tw-p-3 tw-h-[40rem]"}>
          <SelectExercise default path={"/*"} />
          <DesignLabIntroduction path={"/DesignLabIntro"} />
          <DesignNewCategory path={"/DesignNewCategory"} />
          <DesignSortNewCategory path={"/DesignSortNewCategory"} />
          <ScrumIntroduction path={"/ScrumIntro"} />
          <ScrumBoardActivity path={"/ScrumBoardActivity"} />
          <ScrumVelocityReading path={"/ScrumVelocityReading"} />
        </Router>
      </Lab0Context.Provider>
    </div>
  );
};

export default Main;
