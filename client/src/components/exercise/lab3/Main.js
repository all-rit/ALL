import React from "react";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import ExerciseStart from "./pages/ExerciseStart";
import FullExercise from "../../exercise/lab3/pages/BeginnerExercise/Exercise";
import UserUpdatedExercise from "../../exercise/lab3/pages/BeginnerExercise/UserUpdatedExercise";
import ExerciseInstructions from "../../exercise/lab3/pages/BeginnerExercise/ExerciseInstructions";
import AccessibleInstructions from "../../exercise/lab3/pages/BeginnerExercise/AccessibleInstructions";
import CodeChange from "../../exercise/lab3/pages/BeginnerExercise/CodeChange";
import AdvancedExercise from "../../exercise/lab3/pages/AdvancedExercise/AdvancedExercise";
import AdvancedInstructions from "../../exercise/lab3/pages/AdvancedExercise/AdvancedInstructions";
import ProblemDiscovery from "../../exercise/lab3/pages/AdvancedExercise/ProblemDiscovery";
import ProblemExplanation from "../../exercise/lab3/pages/AdvancedExercise/ProblemExplanation";
import ProblemFix from "../../exercise/lab3/pages/AdvancedExercise/ProblemFix";
import BeginnerExerciseConclusion from "../../exercise/lab3/pages/BeginnerExercise/BeginnerExerciseConclusion";
import AdvancedExerciseConclusion from "../../exercise/lab3/pages/AdvancedExercise/AdvancedExerciseConclusion";
import ViewFix from "../../exercise/lab3/pages/AdvancedExercise/ViewFix";
import ProblemDiscoveryFixedExperience from "../../exercise/lab3/pages/AdvancedExercise/ProblemDiscoveryFixedExperience";
import { Lab3ContextProvider } from "src/reducers/lab3/Lab3Context";


const Main = () => {

  return (
    <Lab3ContextProvider>
      <div className="container bottomSpace">
        <Router className="app">
          <ExerciseStart default path="/" />
          <FullExercise path="/BeginnerExercise" />
          <ExerciseInstructions
            path={"/ExerciseInstructions"}
          />
          <UserUpdatedExercise
            path={"/UserUpdatedExercise"}
          />
          <AccessibleInstructions
            path={"/AccessibleInstructions"}
          />
          <CodeChange path={"/CodeChange"}/>
          <AdvancedExercise path={"/AdvancedExercise"} />
          <AdvancedInstructions
            path={"/AdvancedInstructions"}
          />
          <ProblemDiscovery path={"/ProblemDiscovery"} />
          <ProblemExplanation path={"/ProblemExplanation"} />
          <ProblemDiscoveryFixedExperience
            path={"/ProblemDiscoveryFixedExperience"}
          />
          <ProblemFix path={"/ProblemFix"} />
          <BeginnerExerciseConclusion
            path={"/BeginnerExerciseConclusion"}
          />
          <AdvancedExerciseConclusion
            path={"/AdvancedExerciseConclusion"}
          />
          <ViewFix path={"/ViewFix"} />
        </Router>
      </div>
    </Lab3ContextProvider>
  );
};

export default Main;