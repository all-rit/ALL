import React, { useCallback, useEffect } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const WalkingMan = (props) => {
  const handleKeyDown = useCallback(
    (e) => {
      //console.log("handleKeyDown", props.hittingLeft, props.hittingRight);
      //console.log(props.hittingLeft);
      switch (e.key) {
        case "a":
        case "ArrowLeft":
          props.actions.decrementObjectPositionX();
          props.actions.setActionLeft();
          break;
        case "d":
        case "ArrowRight":
          props.actions.incrementObjectPositionX();
          props.actions.setActionRight();
          break;
      }
    },
    [props.hittingLeft, props.hittingRight]
  );

  const handleKeyUp = useCallback(() => {
    //console.log("handleKeyUp", props.hittingLeft, props.hittingRight);
  });

  useEffect(() => {
    //console.log('updated useeffect 1');
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    //console.log('updated useeffect 2');
    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div>
      <img
        id={"child"}
        ref={props.refObject}
        style={{ left: props.objectPositionX }}
        className={"tw-transform tw-relative tw-transition-all tw-duration-150"}
        alt={"Man Walking SVG"}
        src={props.objectImage}
        height={96}
        width={96}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    objectPositionX,
    objectImage,
    objectAtEdge,
    action,
    objectAtEdgeLeft,
    objectAtEdgeRight,
  } = state.exercise10;
  return {
    objectPositionX,
    objectImage,
    objectAtEdge,
    action,
    objectAtEdgeLeft,
    objectAtEdgeRight,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

WalkingMan.propTypes = {
  refObject: PropTypes.object,
  objectPositionX: PropTypes.number,
  objectImage: PropTypes.string,
  objectAtEdge: PropTypes.bool,
  action: PropTypes.string,
  objectAtEdgeLeft: PropTypes.bool,
  objectAtEdgeRight: PropTypes.bool,
  actions: PropTypes.object,
  hittingLeft: PropTypes.bool,
  hittingRight: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalkingMan);
