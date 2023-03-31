import React, { useRef } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import WalkingMan from "./WalkingMan";
import PropTypes from "prop-types";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { STEP_COUNT } from "../../../../../constants/lab10";

const Game = (props) => {
  /* Let's not re-render */
  const parent = useRef(null);
  const child = useRef(null);

  let hittingLeft = false;
  let hittingRight = false;

  if (parent.current && child.current) {
    const parentBox = parent.current.getBoundingClientRect();
    const childBox = child.current.getBoundingClientRect();

    /* Hitting left div */
    if (childBox.left - STEP_COUNT <= parentBox.left) {
      hittingLeft = true;
    } else if (childBox.right + STEP_COUNT >= parentBox.right) {
      /* Hitting right div */
      hittingRight = true;
    } else {
      hittingLeft = false;
      hittingRight = false;
    }
    //const objectAtEdge = childBox.left - STEP_COUNT * 2 < parentBox.left || childBox.right + STEP_COUNT * 2 > parentBox.right;
    //objectAtEdge ? props.actions.setObjectAtEdgeTrue() : props.actions.setObjectAtEdgeFalse();
  }

  return (
    <div>
      {/* Simulation Box Area */}
      <div
        ref={parent}
        className={
          "tw-flex tw-flex-col tw-shadow-xl tw-border-solid tw-border-2 tw-border-[#BFBFBF] tw-bg-[#F8F8F8] tw-rounded tw-h-96"
        }
      >
        {/* Falling object section */}
        <div></div>

        {/* Walking man section */}
        <div className={"tw-mt-auto tw-pt-6"}>
          <WalkingMan
            hittingLeft={hittingLeft}
            hittingRight={hittingRight}
            refObject={child}
          />
        </div>
      </div>
      {/* On-screen arrow Keys */}
      <div className={"tw-space-x-12 tw-mt-6"}>
        <button
          className={"btn btn-primary tw-w-32  tw-h-12"}
          onClick={props.actions.decrementObjectPositionX}
        >
          <span>
            <KeyboardArrowLeft />
          </span>
        </button>
        <button
          className={"btn btn-primary tw-w-32 tw-h-12"}
          onClick={props.actions.incrementObjectPositionX}
        >
          <span>
            <KeyboardArrowRight />
          </span>
        </button>
      </div>
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

Game.propTypes = {
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
