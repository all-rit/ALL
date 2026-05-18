import React from "react";
import { navigate } from "@reach/router";
import LabButton from "src/components/all-components/LabButton";
import { useLab15 } from "../Lab15Context";

const BadPromptIntro = () => {
  const { setIsWorstPromptLoop } = useLab15();
  const handleContinue = () => {
    setIsWorstPromptLoop(true);
    navigate("/Lab15/Exercise/prompt-builder");
  };

  return (
    <>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <h1 className={"tw-title tw-text-left"}>Now for the Worst Prompt</h1>
          <p className="tw-body-text tw-my-6">
            Great job building a strong prompt! Now let&apos;s see if you know
            what NOT to do. This time, try to build the{" "}
            <strong>worst prompt possible</strong> using the GCSE framework.
            Choose the weakest option in each category to see how a bad prompt
            affects ALL-IE&apos;s response.
          </p>
        </div>
        <LabButton onClick={handleContinue} key="start" label={"Start"} />
      </div>
    </>
  );
};

export default BadPromptIntro;
