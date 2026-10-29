import React, { useContext } from "react";
import PropTypes from "prop-types";
import Repair from "src/components/body/Repair/Repair";
import { EXERCISE_STATES } from "src/constants/lab17";
import {
  TASK_REPAIR_FILE_NAME,
  getTaskRepairInputData,
} from "src/constants/lab17/TaskRepair";
import useMainStateContext from "src/reducers/MainContext";
import ExerciseStateContext from "../Lab17Context";
import useTaskRepairService from "../hooks/useTaskRepairService";
import TaskRepairImplementation from "../pages/repairs/TaskRepairImplementation";

// render the repair view for the currently selected task
const TaskRepairContent = ({ task, onClose, onComplete }) => {
  const { state } = useMainStateContext();
  const user = state?.main?.user;

  // create the single-input repair state using this task's correctChoice
  const defaultInputs = getTaskRepairInputData(task.correctChoice, task.id);

  const { data, functions } = useTaskRepairService(
    user,
    EXERCISE_STATES.MODEL_REPAIR,
    defaultInputs,
    onComplete,
  );

  return (
    <div className="tw-relative">
      {/* modal close button */}
      <button
        type="button"
        onClick={onClose}
        className="tw-absolute tw-top-0 tw-right-0 hover:tw-text-gray-600 tw-text-3xl tw-font-bold tw-bg-transparent tw-border-none tw-cursor-pointer tw-leading-none"
        aria-label="Close"
      >
        &times;
      </button>
      {/* shared repair component */}
      <Repair
        data={data}
        functions={functions}
        headingText={task.title}
        repairText={[
          task.description ||
            "Update the configuration below to assign the best computer type for this task.",
        ]}
        files={[
          {
            fileId: 0,
            fileName: TASK_REPAIR_FILE_NAME,
            implementation: TaskRepairImplementation,
          },
        ]}
        navigateNext={onClose}
      />
    </div>
  );
};

TaskRepairContent.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    correctChoice: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

const TaskRepairModal = () => {
  const { activeTask, setActiveTask, setTasks } =
    useContext(ExerciseStateContext) || {};

  // do not render when no task is active
  if (!activeTask) return null;

  // clear the active task to close the modal
  const handleClose = () => {
    setActiveTask?.(null);
  };

  // save the user's submitted choice and correctness for this task in context
  const handleComplete = ({ userChoice, isCorrect }) => {
    setTasks?.((prev) => ({
      ...prev,
      [activeTask.id]: {
        ...(prev?.[activeTask.id] || {}),
        completed: true,
        userChoice,
        isCorrect,
      },
    }));
  };

  return (
    <>
      {/* backdrop overlay */}
      <div
        className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-[100]"
        onClick={handleClose}
      />
      {/* centered scrollable modal container */}
      <div className="tw-fixed tw-inset-0 tw-z-[101] tw-flex tw-items-center tw-justify-center tw-pointer-events-none">
        <div
          className="tw-bg-white tw-mt-16 tw-p-5 tw-rounded-xl tw-shadow-xl tw-w-full tw-max-w-6xl tw-mx-4 tw-pointer-events-auto tw-max-h-[70vh] tw-overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={activeTask.title}
        >
          <TaskRepairContent
            key={activeTask.id}
            task={activeTask}
            onClose={handleClose}
            onComplete={handleComplete}
          />
        </div>
      </div>
    </>
  );
};

export default TaskRepairModal;
