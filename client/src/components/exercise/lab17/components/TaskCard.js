import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import TableChartIcon from "@mui/icons-material/TableChart";
import ExerciseStateContext from "../Lab17Context";
import ToggleTip from "./ToggleTip";

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

  const triggerRef = useRef(null);

  const isPopoverOpen = openTaskId === id;
  const taskState = tasks[id] || DEFAULT_TASK_STATE;

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

  return (
    <div
      className={`tw-relative tw-inline-flex tw-flex-col tw-items-center ${className}`}
    >
      {/* button inside task card */}
      <button
        ref={triggerRef}
        type="button"
        onClick={handleTogglePopover}
        aria-expanded={isPopoverOpen}
        aria-label={title}
        data-completed={taskState.completed}
        className="tw-w-12 tw-h-16 tw-p-2 tw-bg-primary-blue tw-border-2 tw-border-solid tw-border-lightBlue tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-shadow-md focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-primary-yellow"
      >
        {icon || (
          <TableChartIcon className="tw-text-primary-yellow tw-text-2xl" />
        )}
      </button>

      <ToggleTip
        isOpen={isPopoverOpen}
        onClose={() => setOpenTaskId?.(null)}
        triggerRef={triggerRef}
        placement={placement}
        title={title}
        description={description}
        buttonText={buttonText}
        onButtonClick={handleRepairClick}
      />
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