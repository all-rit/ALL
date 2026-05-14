import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { GCSE_SECTIONS, DEFAULT_ACTIVE_KEY } from "../../../../constants/lab15";
import {
  ANIM_NONE,
  ANIM_FADE_IN,
  ANIM_LOCK_POP,
  ANIM_FADE_DURATION_MS,
  ANIM_POP_DURATION_MS,
  KEYFRAME_CSS,
  SECTION_STATE_STYLES,
} from "../../../../constants/lab15/PromptViewer";

const PromptViewer = ({
  sections,
  values,
  activeKey,
  lockedKeys,
  justLockedKey,
  className,
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
    <div
      className={`tw-bg-white tw-rounded-xl tw-border-solid tw-border-darkGray tw-px-7 tw-py-8 tw-shadow-md tw-shadow-black/30 tw-flex tw-min-h-[350px] tw-flex-col ${className ?? ""}`}
    >
      <style dangerouslySetInnerHTML={{ __html: KEYFRAME_CSS }} />
      <div className="tw-text-lg tw-text-left tw-font-bold tw-text-darkGray tw-uppercase tw-tracking-wider">
        Prompt
      </div>

      {/* Divider */}
      <hr className="tw-border-2 tw-border-black"></hr>

      <p className="tw-text-sm tw-text-left tw-italic tw-leading-[3.5] tw-flex-1 tw-pt-3">
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
              <span className="tw-inline-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-full tw-border-solid tw-border-darkLine tw-text-sm tw-font-bold tw-mx-2 tw-align-middle tw-flex-shrink-0">
                {section.number}
              </span>

              <span
                className={`tw-inline tw-text-lg tw-text-left tw-rounded-md tw-px-2 tw-py-0.5 tw-mx-0.5 tw-leading-relaxed ${variantClass} ${animClasses[section.key]}`}
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
  className: PropTypes.string,
};

PromptViewer.defaultProps = {
  sections: GCSE_SECTIONS,
  values: {},
  activeKey: DEFAULT_ACTIVE_KEY,
  lockedKeys: [],
  justLockedKey: null,
  className: "",
};

export default PromptViewer;
