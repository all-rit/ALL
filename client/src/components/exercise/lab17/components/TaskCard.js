import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TableChartIcon from "@mui/icons-material/TableChart";
import ExerciseStateContext from "../Lab17Context";

const DEFAULT_TASK_STATE = { completed: false };

const TaskCard = ({
  id,
  title = "Task",
  description = "",
  correctChoice = "",
  icon,
  buttonText = "Repair",
  onRepair,
  placement = "auto",
  className = "",
}) => {
  const {
    tasks = {},
    setActiveTask,
    openTaskId,
    setOpenTaskId,
  } = useContext(ExerciseStateContext) || {};

  // default popover placement is top unless specified
  const [resolvedPlacement, setResolvedPlacement] = useState(
    placement === "auto" ? "top" : placement,
  );

  const triggerRef = useRef(null);
  const popoverRef = useRef(null);

  const isPopoverOpen = openTaskId === id;
  const taskState = tasks[id] || DEFAULT_TASK_STATE;
  const isPlacedBelow = resolvedPlacement === "bottom";

  // calculate whether the popover should appear above or below the card
  const updatePlacement = () => {
    if (placement !== "auto") {
      setResolvedPlacement(placement);
      return;
    }
    if (!triggerRef.current || !popoverRef.current) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const containerRect = triggerRef.current
      .closest("[data-stage-container]")
      ?.getBoundingClientRect();

    const topBoundary = Math.max(0, containerRect?.top ?? 0);
    const bottomBoundary = Math.min(
      window.innerHeight,
      containerRect?.bottom ?? window.innerHeight,
    );

    const spaceAbove = triggerRect.top - topBoundary;
    const spaceBelow = bottomBoundary - triggerRect.bottom;
    const popoverHeight = popoverRef.current.offsetHeight;

    const shouldPlaceBelow =
      spaceAbove < popoverHeight && spaceBelow > spaceAbove;
    setResolvedPlacement(shouldPlaceBelow ? "bottom" : "top");
  };

  // toggle this popover (automatically closes any other open card)
  const handleTogglePopover = () => {
    setOpenTaskId?.(isPopoverOpen ? null : id);
    
  };

  // set this task as active in context and run the begin callback
  const handleRepairClick = () => {
    const taskPayload = {
      id,
      title,
      description,
      correctChoice,
      ...taskState,
    };

    setOpenTaskId?.(null);
    setActiveTask?.(taskPayload);
    onRepair?.(taskPayload);
  };

  // recalculate placement whenever the popover opens
  useEffect(() => {
    if (isPopoverOpen) {
      updatePlacement();
    }
  }, [isPopoverOpen, placement]);

  return (
    <div
      className={`tw-relative tw-inline-flex tw-flex-col tw-items-center ${className}`}
    >
      {/* popover */}
      {isPopoverOpen && (
        <div
          ref={popoverRef}
          className={`tw-absolute ${
            isPlacedBelow ? "tw-top-full tw-mt-5" : "tw-bottom-full tw-mb-5"
          } tw-z-10 tw-w-60 md:tw-w-64 tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-3 tw-flex tw-flex-col tw-items-center tw-text-center`}
          role="dialog"
          aria-label={title}
        >
          <h3 className="tw-font-poppins tw-font-bold tw-text-2xl tw-text-black tw-mt-0 tw-mb-1">
            {title}
          </h3>
          {description && (
            <p className="tw-body-text tw-text-center tw-text-black tw-text-sm md:tw-text-base tw-mt-0 tw-mb-2.5">
              {description}
            </p>
          )}
          <button
            type="button"
            onClick={handleRepairClick}
            className="btn tw-bg-primary-yellow hover:tw-bg-labYellow tw-text-black tw-px-6 tw-py-1.5 tw-border-0 tw-cursor-pointer"
          >
            {buttonText}
          </button>

          {/* speech bubble pointer */}
          <div
            className={`tw-absolute tw-left-0 tw-right-0 tw-mx-auto tw-w-0 tw-h-0 tw-border-l-[14px] tw-border-l-transparent tw-border-r-[14px] tw-border-r-transparent tw-border-solid ${
              isPlacedBelow
                ? "tw-bottom-full tw-border-b-[20px] tw-border-b-white tw-border-t-0"
                : "tw-top-full tw-border-t-[20px] tw-border-t-white tw-border-b-0"
            }`}
          />
        </div>
      )}

      {/* button inside task card */}
      <button
        ref={triggerRef}
        type="button"
        onClick={handleTogglePopover}
        aria-expanded={isPopoverOpen}
        aria-label={title}
        data-completed={taskState.completed}
        className="tw-w-20 tw-h-28 tw-p-2 tw-bg-primary-blue tw-border-4 tw-border-solid tw-border-lightBlue tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-shadow-md focus:tw-outline-none"
      >
        {icon || (
          <TableChartIcon className="tw-text-primary-yellow tw-text-5xl" />
        )}
      </button>
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  correctChoice: PropTypes.string,
  icon: PropTypes.node,
  buttonText: PropTypes.string,
  onRepair: PropTypes.func,
  placement: PropTypes.oneOf(["auto", "top", "bottom"]),
  className: PropTypes.string,
};

export default TaskCard;