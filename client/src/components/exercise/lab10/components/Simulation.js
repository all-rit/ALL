import React, { useRef } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import WalkingMan from "./WalkingMan";
import PropTypes from "prop-types";
import { STEP_COUNT } from "../../../../constants/lab10";
import MovementKeys from "./MovementKeys";
import SimulationCover from "./SimulationCover";
import useWindowSize from "../../../../use-hooks/useWindow";
import ShapeSpawner from "./ShapeSpawner";

const Simulation = (props) => {
  // Allows the object's position to be updated when the window size is updated
  // Utilizing this hook allows components to rerender
  // eslint-disable-next-line no-unused-vars
  useWindowSize();

  // Create a reference to obtain attributes of the Simulation Box Area
  const parentRef = useRef();
  // Create a reference of the object's position
  const positionRef = useRef(props.objectPosition);
  // Create a reference to obtain attributes of the Moving Object
  const childRef = useRef();
  // Obtain the attributes of the Simulation Box Area
  const parentBox = parentRef?.current?.getBoundingClientRect();
  // Obtain the attributes of the Moving Object
  const childBox = childRef?.current?.getBoundingClientRect();

  /**
   * Update the object's position reference and state with new position
   * @param data object's new position
   */
  const updatePosition = (data) => {
    positionRef.current = data;
    props.actions.setObjectPosition(data);
  };

  /**
   * Handle the object shift to the left by decrementing its position
   * Updates the object's image as well
   */
  const handleShiftLeft = () => {
    if (!props.userInputDisabled) {
      updatePosition(positionRef.current - STEP_COUNT);
      props.actions.setImageLeft();
    }
    props.actions.incrementUserAttempts();
  };

  /**
   * Handle the object shift to the right by incrementing its position
   * Updates the object's image as well
   */
  const handleShiftRight = () => {
    if (!props.userInputDisabled) {
      updatePosition(positionRef.current + STEP_COUNT);
      props.actions.setImageRight();
    }
    props.actions.incrementUserAttempts();
  };

  return (
    <div className={"tw-mt-6"}>
      {/* Simulation Box Area */}
      <div
        ref={parentRef}
        className={
          "tw-relative tw-flex tw-flex-col tw-shadow-xl tw-border-solid tw-border-2 tw-border-[#BFBFBF] tw-bg-[#F8F8F8] tw-rounded tw-h-[38rem] tw-overflow-hidden"
        }
      >
        {/* Simulation Cover */}
        <SimulationCover />

        {/* Falling object section */}
        <ShapeSpawner
          parentRef={parentRef}
          childBox={childBox}
          positionRef={positionRef}
        />

        {/* Walking man section */}
        <WalkingMan
          childRef={childRef}
          updatePosition={updatePosition}
          positionRef={positionRef}
          handleShiftLeft={handleShiftLeft}
          handleShiftRight={handleShiftRight}
          parentBox={parentBox}
        />
      </div>

      {/* On-screen arrow Keys */}
      <div className={"tw-space-x-12 tw-mt-6"}>
        <MovementKeys
          handleShiftLeft={handleShiftLeft}
          handleShiftRight={handleShiftRight}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { objectPosition, userInputDisabled } = state.exercise10;
  return { objectPosition, userInputDisabled };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

Simulation.propTypes = {
  objectPosition: PropTypes.number,
  actions: PropTypes.object,
  userInputDisabled: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Simulation);
