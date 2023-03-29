import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import WalkingManImageRight from "../../../../../assets/images/lab10/walking-man-right.svg";
import WalkingManImageLeft from "../../../../../assets/images/lab10/walking-man-left.svg";
import { actions as exerciseActions } from "../../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { STEP_COUNT } from "../../../../../constants/lab10";

const actionMap = {
  ArrowLeft: (x) => x - STEP_COUNT,
  ArrowRight: (x) => x + STEP_COUNT,
};

const WalkingMan = () => {
  const [x, setX] = useState(0);
  const [action, setAction] = useState("");

  const handleKeyPress = (e) => {
    const actionX = actionMap[e.key];
    setAction(e.key);
    actionX && setX(actionX);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      style={{ left: x }}
      className={"tw-relative tw-transition-all tw-duration-150"}
    >
      <img
        className={"tw-transform tw-scale-y--100"}
        alt={"Man Walking SVG"}
        src={
          action === "ArrowLeft" ? WalkingManImageLeft : WalkingManImageRight
        }
        height={96}
        width={96}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.exercise10;
  // return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

WalkingMan.propTypes = {
  x: PropTypes.number,
  action: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalkingMan);
