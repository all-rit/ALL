import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import TableChartIcon from "@mui/icons-material/TableChart";
import Repair from "src/components/body/Repair/Repair";
import { EXERCISE_STATES } from "src/constants/lab17";
import {
  TASK_REPAIR_FILE_NAME,
  getTaskRepairInputData,
} from "src/constants/lab17/TaskRepair";
import useMainStateContext from "src/reducers/MainContext";
import ALLModal from "../../../all-components/ALLModal";
import ExerciseStateContext from "../Lab17Context";
import useTaskRepairService from "../hooks/useTaskRepairService";
import TaskRepairImplementation from "../pages/repairs/TaskRepairImplementation";
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
  modalBody,
  placement = "auto",
  className = "",
}) => {
  const {
    tasks = {},
    setTasks,
    activeTask,
    setActiveTask,
    openTaskId,
    setOpenTaskId,
  } = useContext(ExerciseStateContext) || {};
  const { state } = useMainStateContext();
  const user = state?.main?.user;

  const triggerRef = useRef(null);

  const isPopoverOpen = openTaskId === id;
  const isModalOpen = activeTask?.id === id;
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

  // close the repair modal for this task
  const handleCloseModal = () => {
    setActiveTask?.(null);
  };

  // save the user's submitted choice and correctness for this task in context
  const handleCompleteTask = ({ userChoice, isCorrect } = {}) => {
    setTasks?.((prev) => ({
      ...prev,
      [id]: {
        ...(prev?.[id] || taskState),
        completed: true,
        userChoice,
        isCorrect,
      },
    }));
  };

  const defaultInputs = getTaskRepairInputData(correctChoice, id);
  const { data, functions } = useTaskRepairService(
    user,
    EXERCISE_STATES.MODEL_REPAIR,
    defaultInputs,
    handleCompleteTask,
  );

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
      >
        <button
          type="button"
          onClick={handleRepairClick}
          className="btn tw-font-poppins tw-font-medium tw-bg-primary-yellow hover:tw-bg-labYellow tw-text-black tw-px-6 tw-py-1.5 tw-rounded-md tw-shadow-md tw-border-0 tw-cursor-pointer"
        >
          {buttonText}
        </button>
      </ToggleTip>

      <ALLModal
        show={isModalOpen}
        setShow={(show) => !show && handleCloseModal()}
        showHeader
        header={title}
        canClose
        canDismiss
        width="72rem"
        // too much padding when you combine ALLModal and Repair, so its adjusted here
        customBody={
          <div className="tw-max-h-[50vh] tw-overflow-y-auto -tw-mx-4 tw-px-4 [&_p.tw-body-text]:tw-pt-0">
            {modalBody || (
              <Repair
                data={data}
                functions={functions}
                repairText={[
                  description ||
                    "Update the configuration below to assign the best computer type for this task.",
                ]}
                files={[
                  {
                    fileId: 0,
                    fileName: TASK_REPAIR_FILE_NAME,
                    implementation: TaskRepairImplementation,
                  },
                ]}
                navigateNext={handleCloseModal}
              />
            )}
          </div>
        }
        showFooter={false}
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
  modalBody: PropTypes.element,
  placement: PropTypes.oneOf(["auto", "top", "bottom"]),
  className: PropTypes.string,
};

export default TaskCard;
