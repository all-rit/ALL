import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { IMG_SIZE } from "../../../../constants/lab10";

const WalkingMan = (props) => {
  /**
   * Handle keyboard key presses and shift object accordingly
   * @param e event data
   */
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "a":
      case "ArrowLeft":
        props.handleShiftLeft();
        break;
      case "d":
      case "ArrowRight":
        props.handleShiftRight();
        break;
    }
  };

  /**
   * Calculates whether the object is at the edge of the Simulation Box Area
   * If it is, at either direction, set its position to the edge of the Simulation Box Area
   */
  const handleEdgeTouch = () => {
    const leftEdge = 0;
    const rightEdge = props?.parentBox?.width;
    if (props.positionRef.current <= leftEdge) {
      props.updatePosition(leftEdge);
    } else if (props.positionRef.current + IMG_SIZE >= rightEdge) {
      props.updatePosition(rightEdge - IMG_SIZE);
    }
  };

  /**
   * Run edge touch validation whenever the object's position is updated
   */
  useEffect(() => {
    handleEdgeTouch();
  }, [props.objectPosition]);

  /**
   * Add event listeners onMount
   * Remove event listeners onDismount
   */
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleEdgeTouch);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", handleEdgeTouch);
    };
  });

  return (
    <img
      ref={props.childRef}
      style={{ left: props.positionRef.current, bottom: 0 }}
      className={
        "tw-transform tw-absolute tw-transition-all tw-duration-150 tw-border-solid"
      }
      alt={"Man Walking SVG"}
      src={props.objectImage}
      height={IMG_SIZE}
      width={IMG_SIZE}
    />
  );
};

const mapStateToProps = (state) => {
  const { objectPosition, objectImage } = state.exercise10;
  return {
    objectPosition,
    objectImage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

WalkingMan.propTypes = {
  childRef: PropTypes.object,
  updatePosition: PropTypes.func,
  positionRef: PropTypes.object,
  handleShiftLeft: PropTypes.func,
  handleShiftRight: PropTypes.func,
  parentBox: PropTypes.object,
  objectPosition: PropTypes.number,
  objectImage: PropTypes.string,
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalkingMan);
