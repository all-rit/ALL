import React from "react";
import ALLCardRow from "../../all-components/ALLCardRow";

const StartExercise = () => {
  return (
    <div className={"tw-p-3"}>
      <div className={"tw-flex tw-flex-col"}>
        <h2 className={"tw-title tw-text-left"}>Start Exercise</h2>
        <p className={"tw-py-6 tw-body-text"}>
          You will now have the opportunity to learn how to build the lab from
          inception, ideation, and planning, all the way to development and
          becoming deeply familiar with our internal component library, best
          practices, and tech stack.
        </p>
      </div>

      {/* TEMPORARY FOR TESTING THIS PR */}
      <ALLCardRow
        title="Testing 123"
        imageURL={"/img/lab_thumbnails/wrench.jpg"}
        circlesLabel="Completed"
        circles={1}
        circlesFilled={1}
        mode="custom"
        buttonLabel="Jump To"
        buttonStyle="tw-cursor-pointer tw-bg-darkGray poppins tw-text-white tw-font-medium tw-border-0 tw-px-3 tw-m-0 tw-text-xs md:tw-text-xl"
        onClick={() => alert("Clicked!")}
      />
    </div>
  );
};

export default StartExercise;
