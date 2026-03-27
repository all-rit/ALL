import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { GCSE_SECTIONS, DEFAULT_ACTIVE_KEY } from "../../../../constants/lab15";

const ANIM_NONE = "";
const ANIM_FADE_IN = "pv-fade-in";
const ANIM_LOCK_POP = "pv-lock-pop";
const ANIM_FADE_DURATION_MS = 400;
const ANIM_POP_DURATION_MS = 450;

const KEYFRAME_CSS = `
  @keyframes pv-fadeSlideIn {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pv-lockPop {
    0%   { transform: scale(1); }
    35%  { transform: scale(1.04); }
    100% { transform: scale(1); }
  }
  .pv-fade-in  { animation: pv-fadeSlideIn 0.32s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
  .pv-lock-pop { animation: pv-lockPop 0.38s ease both; }
`;

const SECTION_STATE_STYLES = {
  // Not reached yet
  empty:
    "tw-bg-secondary-gray tw-outline tw-outline-1 tw-outline-labGray [box-decoration-break:clone] [-webkit-box-decoration-break:clone] tw-bg-labGray tw-transition-all tw-duration-300 tw-italic",
  // Currently being answered
  active:
    "tw-bg-labYellow tw-outline tw-outline-1 tw-outline-darkLine [box-decoration-break:clone] [-webkit-box-decoration-break:clone] tw-transition-all tw-duration-300 tw-not-italic",
  // Submitted and locked into prompt viewer
  locked:
    "tw-bg-success tw-outline tw-outline-1 tw-outline-hoverSuccess [box-decoration-break:clone] [-webkit-box-decoration-break:clone] tw-transition-all tw-duration-300 tw-not-italic",
};

const PromptViewer = ({
  sections,
  values,
  activeKey,
  lockedKeys,
  justLockedKey,
}) => {
  // Animation class states
  const [goalAnimClass, setGoalAnimClass] = useState("");
  const [contextAnimClass, setContextAnimClass] = useState("");
  const [sourcesAnimClass, setSourcesAnimClass] = useState("");
  const [expectationsAnimClass, setExpectationsAnimClass] = useState("");

  const animClasses = {
    goal: goalAnimClass,
    context: contextAnimClass,
    sources: sourcesAnimClass,
    expectations: expectationsAnimClass,
  };

  const animSetters = useRef({
    goal: setGoalAnimClass,
    context: setContextAnimClass,
    sources: setSourcesAnimClass,
    expectations: setExpectationsAnimClass,
  });

  const prevValues = useRef({
    goal: null,
    context: null,
    sources: null,
    expectations: null,
  });

  useEffect(() => {
    GCSE_SECTIONS.forEach((section) => {
      const newValue = values[section.key];
      const oldValue = prevValues.current[section.key];

      if (newValue && newValue !== oldValue) {
        const setAnim = animSetters.current[section.key];

        setAnim(ANIM_FADE_IN);
        const timer = setTimeout(
          () => setAnim(ANIM_NONE),
          ANIM_FADE_DURATION_MS,
        );

        prevValues.current[section.key] = newValue;
        return () => clearTimeout(timer);
      }
    });
  }, [values]);

  useEffect(() => {
    if (!justLockedKey) return;

    const setAnim = animSetters.current[justLockedKey];
    if (!setAnim) return;

    setAnim(ANIM_LOCK_POP);
    const timer = setTimeout(() => setAnim(ANIM_NONE), ANIM_POP_DURATION_MS);

    return () => clearTimeout(timer);
  }, [justLockedKey]);

  return (
    <div className="tw-bg-white tw-rounded-xl tw-border-solid tw-border-darkGray tw-px-7 tw-py-6 tw-shadow-md tw-shadow-black/30">
      <style dangerouslySetInnerHTML={{ __html: KEYFRAME_CSS }} />
      <div className="tw-text-lg tw-text-left tw-font-bold tw-text-darkGray tw-uppercase tw-tracking-wider">
        Prompt
      </div>

      {/* Divider */}
      <hr className="tw-border-2 tw-border-black"></hr>

      <p className="tw-text-sm tw-text-left tw-leading-[2.4] tw-italic">
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
              <span className="tw-inline-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-rounded-full tw-border-solid tw-border-darkLine tw-text-[10px] tw-font-bold tw-mx-1.5 tw-align-middle tw-flex-shrink-0">
                {section.number}
              </span>

              <span
                className={`tw-inline tw-text-left tw-rounded-md tw-px-2 tw-py-0.5 tw-mx-0.5 tw-leading-relaxed ${variantClass} ${animClasses[section.key]}`}
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
  justLockedKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
};

PromptViewer.defaultProps = {
  sections: GCSE_SECTIONS,
  values: {},
  activeKey: DEFAULT_ACTIVE_KEY,
  lockedKeys: [],
  justLockedKey: null,
};

export default PromptViewer;
