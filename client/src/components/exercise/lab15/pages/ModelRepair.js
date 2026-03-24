import { navigate } from "@reach/router";
import React, { useState } from "react";
import PromptViewer, { GCSE_SECTIONS } from "../components/PromptViewer";
import LabButton from "../../../all-components/LabButton";

const ModelRepair = () => {
  const [sectionValues] = useState({
    values: GCSE_SECTIONS.reduce((acc, section) => {
      acc[section.key] = null;
      return acc;
    }, {}),
    activeIndex: 0,
    lockedKeys: [],
    justLockedKey: null,
  });

  const activeSection = GCSE_SECTIONS[sectionValues.activeIndex];
  const activeKey = activeSection?.key ?? null;

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-h-full tw-min-h-0 tw-overflow-hidden">
      <div className="tw-px-6 tw-pt-6 tw-pb-4 tw-shrink-0 md:tw-px-0 md:tw-pt-0 md:tw-pb-0">
        <h1 className="tw-title tw-text-left">Exercise Start</h1>
        <p className="tw-body-text tw-text-left tw-py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-flex-1 tw-min-h-0 tw-overflow-hidden">
        {/* Left Panel */}
        <div className="tw-flex-1 tw-overflow-y-auto tw-p-6">
          <div className="tw-border-solid tw-border-b-labGray tw-p-4">
            {/* QUIZ COMPONENT TO BE ADDED */}
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="tw-h-px md:tw-h-auto md:tw-w-px tw-w-full tw-bg-bgdark tw-shrink-0"
        />

        {/* Right Panel */}
        <div className="tw-flex-1 tw-overflow-y-auto tw-p-6 tw-bg-white">
          <PromptViewer
            sections={GCSE_SECTIONS}
            values={sectionValues.values}
            activeKey={activeKey}
            lockedKeys={sectionValues.lockedKeys}
            justLockedKey={sectionValues.justLockedKey}
          />
        </div>
      </div>
      <div className="tw-mt-5">
        <LabButton
          label="Next"
          onClick={() => navigate("/Lab15/Exercise/model-with-grades")}
        />
      </div>
    </div>
  );
};

export default ModelRepair;
