import React from "react";
import PropTypes from "prop-types";

// Define what sections exist within the prompt viewer
export const GCSE_SECTIONS = [
  {
    number: 1,
    key: "goal",
    label: "Goal",
    placeholder: "Define what you want the AI to do...",
  },
  {
    number: 2,
    key: "context",
    label: "Context",
    placeholder: "",
  },
  {
    number: 3,
    key: "sources",
    label: "Sources",
    placeholder: "",
  },
  {
    number: 4,
    key: "expectations",
    label: "Expectations",
    placeholder: "",
  },
];

const SECTION_STATE_STYLES = {
  // Not reached yet
  empty: "tw-bg-secondary-gray tw-border-dashed tw-bg-labGr italic",

  // Currently being answered
  active: "tw-bg-labYellow tw-border-darkLine tw-not-italic",

  // Submitted and locked into prompt viewer
  locked: "tw-bg-success tw-border-hoverSuccess tw-not-italic",
};

const PromptViewer = ({
  sections = GCSE_SECTIONS,
  values = {},
  activeKey = "goal",
  lockedKeys = [],
}) => {
  return (
    <div className="tw-bg-white tw-rounded-xl tw-border-solid tw-border-secondary-gray tw-shadow-sm tw-px-7 tw-py-6">
      <div className="tw-text-base tw-font-bold  tw-text-darkGray tw-uppercase tw-tracking-wider tw-mb-4 tw-pb-2.5 tw-border-b-2 tw-border-darkGray">
        Prompt
      </div>

      <p className="tw-text-sm tw-leading-[2.4] tw-italic">
        {sections.map((section, index) => {
          const currentValue = values[section.key];
          const isLocked = lockedKeys.includes(section.key);
          const isActive = section.key === activeKey;

          let variantClass;
          if (isLocked) {
            variantClass = SECTION_STATE_STYLES.locked;
          } else if (isActive) {
            variantClass = SECTION_STATE_STYLES.active;
          } else {
            variantClass = SECTION_STATE_STYLES.empty;
          }

          const displayText = currentValue ?? section.placeholder;

          return (
            <span key={section.key}>
              <span className="tw-inline-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-border-darkLine tw-text-[10px] tw-font-bold tw-mx-1.5 tw-align-middle tw-flex-shrink-0">
                {section.number}
              </span>

              <span
                className={`tw-inline tw-rounded-md tw-px-2 tw-py-0.5 tw-mx-0.5 tw-leading-relaxed ${variantClass}`}
              >
                {displayText}
              </span>

              {index < sections.length - 1 && (
                <span className="tw-text-[4px] tw-text-transparent tw-select-none">
                  &nbsp;&nbsp;
                </span>
              )}
            </span>
          );
        })}
      </p>
    </div>
  );
};

PromptViewer.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ).isRequired,

  values: PropTypes.objectOf(PropTypes.string).isRequired,
  activeKey: PropTypes.string.isRequired,
  lockedKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PromptViewer.defaultProps = {
  sections: GCSE_SECTIONS,
  values: {},
  activeKey: "goal",
  lockedKeys: [],
};

export default PromptViewer;
