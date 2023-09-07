import React, { useRef, useState } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import WalkingMan from "./WalkingMan";
import PropTypes from "prop-types";
import { SIMULATION_STARTED, STEP_COUNT } from "../../../../constants/lab10";
import MovementKeys from "./MovementKeys";
import SimulationCover from "./SimulationCover";
import useWindowSize from "../../../../use-hooks/useWindow";
import ShapeSpawner from "./ShapeSpawner";
import ProgressBar from "./ProgressBar";
import KeyboardGuide from "./KeyboardGuide";

const Simulation = (props) => {
  // Allows the object's position to be updated when the window size is updated
  // Utilizing this hook allows components to rerender
  useWindowSize();

  const [displayStartButton, setDisplayStartButton] = useState(true);

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

  const onComplete = () => {
    props.actions.endSimulation();
    setDisplayStartButton(false);
  };

  return (
    <div className={"tw-mt-6"}>
      {/* Progress Bar */}
      {props.simulationStatus === SIMULATION_STARTED && (
        <ProgressBar
          className={"tw-mb-6"}
          duration={props.trainingDuration}
          onComplete={onComplete}
        />
      )}

      {/* Simulation Box Area */}
      <div
        ref={parentRef}
        className={
          "tw-relative tw-flex tw-flex-col tw-shadow-xl tw-border-solid tw-border-2 tw-border-[#BFBFBF] tw-bg-[#F8F8F8] tw-rounded tw-h-[32rem] tw-overflow-hidden"
        }
      >
        {/* Simulation Cover */}
        {!props.hideCoverOverride && (
          <SimulationCover displayStartButton={displayStartButton} />
        )}

        {/* Falling object section */}
        <ShapeSpawner
          handleShiftLeft={handleShiftLeft}
          handleShiftRight={handleShiftRight}
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

      {/* On-screen coordinates */}
      <div className={"tw-mt-3 tw-flex tw-justify-center"}>
        <div>
          <p className={"tw-text-xl tw-font-bold"}>Current Coordinates: </p>
        </div>
        <div className={"tw-ml-3 tw-self-center"}>
          <span className={"tw-text-lg"}>
            (X: {Math.floor(props.objectPosition)}, Y: {Math.floor(childBox?.y)}
            )
          </span>
        </div>
      </div>

      {/* On-screen arrow Keys */}
      <div className={"tw-space-x-12"}>
        <MovementKeys
          handleShiftLeft={handleShiftLeft}
          handleShiftRight={handleShiftRight}
        />
        <KeyboardGuide />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    objectPosition,
    userInputDisabled,
    simulationStatus,
    trainingDuration,
    weights,
  } = state.exercise10;
  return {
    objectPosition,
    userInputDisabled,
    simulationStatus,
    trainingDuration,
    weights,
  };
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
  simulationStatus: PropTypes.string,
  trainingDuration: PropTypes.number,
  weights: PropTypes.object,
  hideCoverOverride: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Simulation);
