import ReactText from "../../../../all-components/CodeBlock/StyleComponents/ReactText";
import Tab from "../../../../all-components/CodeBlock/Components/Tab";
import MultiTab from "../../../../all-components/CodeBlock/Components/MultiTab";
import React from "react";

const ControllerRepair = () => {
  return (
    <div
      className={"code_editor__code tw-w-full tw-h-full tw-p-5 tw-rounded-lg"}
    >
      <ReactText>
        const ExerciseService =
        require(&apos;../../services/lab0/ExerciseService);
      </ReactText>
      <br />
      <ReactText>async function getExercise(req) &#123;</ReactText>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>try &#123;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>const &#123; userID &#125; = req.params;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>return await ExerciseService.getExercise(userID);</ReactText>
      </div>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>&#125; catch (error) &#123;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>
          console.error(&apos;Error: Could not Find Exercise&apos;, error);
        </ReactText>
      </div>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>&#125;</ReactText>
      </div>
      <ReactText>&#125;</ReactText>
      <br />
      <div className={"tw-flex"}>
        <ReactText>module.exports = &#123;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>getExercise</ReactText>
      </div>
      <ReactText>&#125;;</ReactText>
    </div>
  );
};

export default ControllerRepair;
