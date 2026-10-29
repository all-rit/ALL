import React from "react";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { ExerciseService } from "src/services/lab17/ExerciseService";
import TaskCard from "../components/TaskCard";
import TaskRepairModal from "../components/TaskRepairModal";

const QvCGameStage = () => {
  const { state } = useMainStateContext();
  const userid = state?.main?.user?.userid;

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
      <div
        data-stage-container
        className="tw-relative tw-bg-primary-blue tw-rounded-2xl tw-min-h-[32rem] tw-p-8 tw-my-6 tw-flex tw-flex-col tw-justify-between"
      >
        <div className="tw-flex tw-justify-center">
          <TaskCard
            id="task-top"
            title="Top Task"
            description="Testing popover placement when the card is at the top."
            correctChoice="quantum"
          />
        </div>

        <div className="tw-flex tw-justify-between tw-items-center tw-my-8">
          <TaskCard
            id="task-left"
            title="Left Task"
            description="Testing popover placement when the card is on the left."
            correctChoice="classical"
          />
          <TaskCard
            id="task-right"
            title="Right Task"
            description="Testing popover placement when the card is on the right."
            correctChoice="quantum"
          />
        </div>

        <div className="tw-flex tw-justify-center">
          <TaskCard
            id="task-bottom"
            title="Bottom Task"
            description="Testing popover placement when the card is at the bottom."
            correctChoice="classical"
          />
        </div>
      </div>
      
      <TaskRepairModal />
      <div className="tw-flex tw-justify-evenly">
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

export default QvCGameStage;

