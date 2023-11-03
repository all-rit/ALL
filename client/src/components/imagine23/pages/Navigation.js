/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { navigate } from "@reach/router";
import React from "react";

const Navigation = (props) => {
  const handleExpression = () => {
    props.setIsExperiential(false);
    navigate("/Imagine/ExpressionStart");
  };
  const handleExperiential = () => {
    props.setIsExperiential(true);
    navigate("/Imagine/ExperientialStart");
  };

  return (
    <>
      <h2 className="playthrough__title">NAVIGATION</h2>

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
  );
};

export default Navigation;
