import React, { useEffect, useRef, useState } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import WalkingMan from "./WalkingMan";
import PropTypes from "prop-types";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { STEP_COUNT } from "../../../../../constants/lab10";

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

const Game = (props) => {
  // Allows the object's position to be updated when the window size is updated
  // Utilizing this hook allows components to rerender
  // eslint-disable-next-line no-unused-vars
  const windowSize = useWindowSize();

  // Create a reference to obtain attributes of the Simulation Box Area
  const parent = useRef();
  // Create a reference of the object's position
  const positionRef = useRef(props.objectPosition);
  // Obtain the attributes of the Simulation Box Area
  const parentBox = parent?.current?.getBoundingClientRect();

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
    updatePosition(positionRef.current - STEP_COUNT);
    props.actions.setImageLeft();
  };

  /**
   * Handle the object shift to the right by incrementing its position
   * Updates the object's image as well
   */
  const handleShiftRight = () => {
    updatePosition(positionRef.current + STEP_COUNT);
    props.actions.setImageRight();
  };

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
            updatePosition={updatePosition}
            positionRef={positionRef}
            handleShiftLeft={handleShiftLeft}
            handleShiftRight={handleShiftRight}
            parentBox={parentBox}
          />
        </div>
      </div>
      {/* On-screen arrow Keys */}
      <div className={"tw-space-x-12 tw-mt-6"}>
        <button
          onClick={handleShiftLeft}
          className={"btn btn-primary tw-w-32 tw-h-12"}
        >
          <KeyboardArrowLeft />
        </button>
        <button
          onClick={handleShiftRight}
          className={"btn btn-primary tw-w-32 tw-h-12"}
        >
          <KeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { objectPosition } = state.exercise10;
  return { objectPosition };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

Game.propTypes = {
  objectPosition: PropTypes.number,
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
