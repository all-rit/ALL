/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { navigate } from "@reach/router";
import React from "react";

export default function StartActivity() {
  const handleExpression = () => {
    navigate("/Intervention/Exercise/ExpressionActivity");
  };
  const handleExperiential = () => {
    navigate("/Intervention/Exercise/ExperientialStart");
  };

  return (
    <div className="container bottomSpace center-div">
      <>
        <p className={"tw-mb-5 tw-text-2xl"}>
          You will now have the opportunity to experience the same activity
          through two types of learning methods, experiential and expressive.
          Click one of the two buttons below to begin.
        </p>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
          onClick={handleExperiential}
        >
          Experiential
        </button>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
          onClick={handleExpression}
        >
          Expression
        </button>
      </>
    </div>
  );
}
