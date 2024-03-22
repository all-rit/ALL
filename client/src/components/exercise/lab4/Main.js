import React from "react";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import SmallTarget from "./pages/SmallTarget";
import TargetGuideline from "./pages/TargetGuideline";
import SubmitUpdated from "./pages/SubmitUpdated";
import CodeChangeTarget from "./pages/CodeChangeTarget";
import CodeChangeBlocks from "./pages/CodeChangeBlocks";
import BypassBlocksGuideline from "./pages/BypassBlocksGuideline";
import FormSkipToMainBroken from "./pages/FormSkipToMainBroken";
import FormSkipToMainFixed from "./pages/FormSkipToMainFixed";
import FormHintInaccessible from "./pages/FormHintInaccessible";
import AccessibleGuideline from "./pages/AccessibleGuideline";
import CodeChangeAccessible from "./pages/CodeChangeAccessible";
import FormHintAccessible from "./pages/FormHintAccessible";
import Finish from "./pages/Finish";
import ExerciseStart from "./pages/ExerciseStart";

const Main = () => {
  return (
    <div className="container bottomSpace">
      <Router className="app">
        <ExerciseStart path="/" />
        <SmallTarget path="/SmallTarget" />
        <TargetGuideline path="/TargetGuideline" />
        <CodeChangeTarget path={"/CodeChangeTarget"} />
        <SubmitUpdated path="/SubmitUpdated" />
        <CodeChangeBlocks path={"/CodeChangeBlocks"} />
        <BypassBlocksGuideline path={"/BypassBlocksGuideline"} />
        <FormSkipToMainBroken path={"/FormSkipToMainBroken"} />
        <FormSkipToMainFixed path={"/FormSkipToMainFixed"} />
        <FormHintInaccessible path={"FormHintInaccessible"} />
        <AccessibleGuideline path={"/AccessibleGuideline"} />
        <CodeChangeAccessible path={"/CodeChangeAccessible"} />
        <FormHintAccessible path={"/FormHintAccessible"} />
        <Finish path={"/Finish"} />
      </Router>
    </div>
  );
};

export default Main;
