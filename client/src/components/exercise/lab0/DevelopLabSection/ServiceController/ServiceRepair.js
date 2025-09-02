import React from "react";
import ReactText from "../../../../all-components/CodeBlock/StyleComponents/ReactText";
import MultiTab from "../../../../all-components/CodeBlock/Components/MultiTab";
import Tab from "../../../../all-components/CodeBlock/Components/Tab";

const ServiceRepair = () => {
  return (
    <div
      className={"code_editor__code tw-w-full tw-h-full tw-p-5 tw-rounded-lg"}
    >
      <ReactText>const db = require(&apos;../../database&apos;);</ReactText>
      <br />
      <ReactText>async function getExercise(data) &#123;</ReactText>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>try &#123;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>
          const exerciseResponse = await db.ExerciseLab0.findOne(
        </ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={3} />
        <ReactText>&#123;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={4} />
        <ReactText>
          order: [(&apos;attemptTime&apos;, &apos;DESC&apos;)],
        </ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={4} />
        <ReactText>where: &#123;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={5} />
        <ReactText>userid: data,</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={4} />
        <ReactText>&#125;,</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={4} />
        <ReactText>raw: true,</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={3} />
        <ReactText>&#125;,</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>);</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>return exerciseRespose;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>&#125; catch(error) &#123;</ReactText>
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

export default ServiceRepair;
