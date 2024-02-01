import { navigate } from "@reach/router";
import React from "react";
import PropTypes from "prop-types";

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

Navigation.propTypes = {
  setIsExperiential: PropTypes.func,
};

export default Navigation;
