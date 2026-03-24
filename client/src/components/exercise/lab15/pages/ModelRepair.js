import { navigate } from "@reach/router";
import React, { useState } from "react";
import PromptViewer, { GCSE_SECTIONS } from "../components/PromptViewer";

const ModelRepair = () => {
  const [promptState] = useState({
    values: GCSE_SECTIONS.reduce((acc, section) => {
      acc[section.key] = null;
      return acc;
    }, {}),
    activeIndex: 0,
    lockedKeys: [],
  });

  const activeSection = GCSE_SECTIONS[promptState.activeIndex];
  const activeKey = activeSection?.key ?? null;

  return (
    <div className="tw-flex tw-flex-row tw-w-full tw-h-full tw-min-h-0 tw-overflow-hidden">
      {/* Left Panel */}
      <div className="tw-flex-1 tw-overflow-y-auto tw-p-6">
        <div className="tw-border-solid tw-border-b-labGray tw-p-4">
          {/* QUIZ COMPONENT TO BE ADDED */}
        </div>
      </div>

      {/* Divider */}
      <div
        aria-hidden="true"
        className="tw-w-px tw-self-stretch tw-bg-bgdark tw-shrink-0"
      />

      {/* Right Panel */}
      <div className="tw-flex-1 tw-overflow-y-auto tw-p-6 tw-bg-labLightGray">
        {/* Prompt Viewer */}
        <PromptViewer
          sections={GCSE_SECTIONS}
          values={promptState.values}
          activeKey={activeKey}
          lockedKeys={promptState.lockedKeys}
        />
      </div>

      <button onClick={() => navigate("/Lab15/Exercise/model-with-grades")}>
        Next
      </button>
    </div>
  );
};

export default ModelRepair;
