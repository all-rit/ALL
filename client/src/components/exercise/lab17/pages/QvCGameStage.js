import React from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import TaskCard from "../components/TaskCard";
import useMainStateContext from "src/reducers/MainContext";
import { ExerciseService } from "src/services/lab17/ExerciseService";
import { STAGE_1_TASKS } from "src/constants/lab17";

// 5 tasks will be passed into the stage for each round
const QvCGameStage = ({ stageTasks = STAGE_1_TASKS }) => {
  const { state } = useMainStateContext();
  const userid = state?.main?.user?.userid;
  const [task1, task2, task3, task4, task5] = stageTasks;

  // TODO: update this in future when making real stages so the exercise is only marked complete when all tasks are finished
  const handleContinue = async () => {
    try {
      if (userid) {
        const exerciseData = await ExerciseService.fetchExercise({ userid });
        await ExerciseService.submitExercise({
          userid,
          isExerciseComplete: true,
          hasViewed: exerciseData?.hasViewed || false,
        });
      }
    } catch (error) {
      console.error(error);
    }
    navigate("/Lab17/Exercise/Conclusion");
  };

  return (
    <div className="center-div">
      <h1 className="tw-title tw-text-left">QvCGameStage</h1>
      <div className="tw-relative tw-bg-primary-blue tw-rounded-lg tw-min-h-[36rem] tw-p-6 md:tw-p-8 tw-my-6 tw-flex tw-flex-col lg:tw-flex-row tw-gap-6">
        {/* FLEXBOX --> left column on large screens, top row on smaller screens: tasks list box + quantum/classical icons box */}
        <div className="tw-flex tw-flex-col sm:tw-flex-row lg:tw-flex-col tw-gap-6 lg:tw-w-1/3">

          {/* STUB : task list box*/}
          <div className="tw-flex-1 tw-bg-black tw-text-white tw-p-6 tw-rounded-lg tw-flex tw-flex-col tw-justify-center tw-items-center">
            <h2>Tasks</h2>
            <div>Task Info</div>
          </div>

          {/* STUB : quantum/classical icons box */}
          <div className="tw-flex-1 tw-border-4 tw-border-solid tw-border-lightBlue tw-p-6 tw-rounded-lg tw-flex tw-flex-col tw-justify-center tw-gap-4">
            <div>
              Classical Icon
            </div>
            <div>
              Quantum Icon
            </div>
          </div>
        </div>

        {/* TASK CARDS BOX */}
        <div className="tw-relative tw-flex-1 tw-border-4 tw-border-solid tw-border-lightBlue tw-rounded-lg tw-p-6 md:tw-p-8 tw-flex tw-flex-col tw-justify-between tw-gap-8 tw-min-h-[28rem]">
          {/* top task row */}
          <div className="tw-flex tw-justify-center">
            {task1 && <TaskCard {...task1} />}
          </div>

          {/* middle task row */}
          <div className="tw-flex tw-justify-between tw-items-center">
            {task2 && <TaskCard {...task2} />}
            {task3 && <TaskCard {...task3} />}
          </div>

          {/* bottom task row */}
          <div className="tw-flex tw-justify-between tw-items-end">
            {task4 && <TaskCard {...task4} />}
            {task5 && <TaskCard {...task5} />}
          </div>

          {/* avatar layer will be movable */}
          <div className="tw-absolute tw-bottom-6 tw-inset-x-0 tw-mx-auto tw-w-fit">
            Avatar
          </div>
        </div>
      </div>

      {/* continue button */}
      <div className="tw-flex tw-justify-evenly tw-mt-6">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="continue"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

QvCGameStage.propTypes = {
  stageTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      correctChoice: PropTypes.string || PropTypes.arrayOf(PropTypes.string),
      icon: PropTypes.node,
    }),
  ),
};

export default QvCGameStage;
