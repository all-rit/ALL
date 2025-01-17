import React from "react";
import ALLButton from "../all-components/ALLButton";

const UpdateId = () => {
  return (
    <div className={"tw-flex tw-gap-y-6 tw-flex-col"}>
      <h2 className={"tw-title"}> Welcome to Accessible Learning Labs! </h2>
      <h2 className={"tw-sub-title"}>
        {" "}
        Click the <strong> Get Started </strong> below to begin the exercise!{" "}
      </h2>
      <ALLButton label={"Get Started"} large={true} />
    </div>
  );
};

export default UpdateId;
