import { navigate } from "@reach/router";
import LabButton from "src/components/all-components/LabButton";
import {
  circleStyles,
  gcse_content,
} from "src/constants/lab15/GCSEExplanationConfig";

const GoodPromptingGuide = () => {
  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <h1 className="tw-title tw-text-left">What is GCSE?</h1>
        {/* Context about what the GCSE guide is */}
        <p className="tw-body-text tw-my-6">
          The GCSE framework (Goal, Context, Sources, Expectations) is a simple way to write better prompts, so you get clearer and more useful answers from AI. 
          Instead of asking vague questions, this framework helps you break your request into four parts.
        </p>
      </div>
      {/* Columns for each term in GCSE */}
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-4 tw-flex-1 tw-min-h-[50vh] mb-4">
        {gcse_content.map((item, index) => (
          <div key={item.letter} className="tw-relative tw-h-full">
            {/* Black dividers between the columns. First one is mobile, second is larger screen. */}
            {index > 0 && (
              <>
                <div className="lg:tw-hidden tw-absolute tw-left-8 tw-right-8 tw-top-0 tw-h-px tw-bg-black" />
                <div className="tw-hidden lg:tw-block tw-absolute tw-bottom-6 tw-left-0 tw-top-6 tw-w-px tw-bg-black" />
              </>
            )}
            <div className="tw-px-8 tw-py-6 lg:tw-py-0 tw-h-full">
              <div
                className={`tw-w-20 tw-h-20 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-3xl tw-font-bold tw-mb-4 tw-mx-auto tw-border-4 tw-border-solid ${circleStyles[index]}`}
              >
                {item.letter}
              </div>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <LabButton
        onClick={() => navigate("/Lab15/Exercise/model-repair")}
        key="goodPromptingNext"
        label="Next"
      ></LabButton>
    </div>
  );
};

export default GoodPromptingGuide;
