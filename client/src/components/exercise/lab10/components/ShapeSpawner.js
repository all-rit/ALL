/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */

import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import {
  COLORS,
  IMG_SIZE,
  SECOND,
  SIMULATION_STARTED,
  SIZE,
  SPAWN_INTERVAL,
  SPEED,
  SPEED_STEP,
  STEP_COUNT,
} from "../../../../constants/lab10";
import PropTypes from "prop-types";
import Shape from "./Shape";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { RandomRoundRobin } from "round-robin-js";

const generateRandomShape = (currentPosition, color) => {
  const size = SIZE;
  const [x, y] = [currentPosition, 0];
  return { color, size, x, y };
};

/**
 * True if the Moving Object is overlapping with a Falling Shape on the X Plane
 */
const isTouchingX = (objectPosition, x, size) => {
  return (
    (objectPosition + IMG_SIZE >= x && objectPosition <= x) ||
    (objectPosition >= x && objectPosition + IMG_SIZE <= x + size) ||
    (objectPosition <= x + size && objectPosition + IMG_SIZE >= x + size)
  );
};

/**
 * True if the Moving Object is overlapping with a Falling Shape on the Y Plane
 */
const isTouchingY = (height, y, size) => {
  return y + size >= height - IMG_SIZE;
};

const ShapeSpawner = (props) => {
  const [shapes, setShapes] = useState([]);
  const intervalRef = useRef(null);
  const requestRef = useRef(null);

  /**
   * Dependencies on shapes, for whenever a Y value is updated,
   * and the Moving Object, for whenever its X value is updated
   */
  useEffect(() => {
    const newShapes = shapes.filter(({ x, y, size, color, empty }) => {
      if (empty) {
        return true;
      }

      const touchingX = isTouchingX(props.objectPosition, x, size);
      const touchingY = isTouchingY(
        props?.parentRef?.current?.offsetHeight,
        y,
        size
      );
      const shapesCollided = touchingX && touchingY;

      if (shapesCollided) {
        props.actions.updateColorWeight(color);
      }

      return !shapesCollided;
    });

    !_.isEqual(newShapes, shapes) && setShapes(newShapes);
  }, [shapes, props.objectPosition]);

  /**
   * This will have to be smoother
   */
  const updateMove = useCallback(
    (direction) => {
      direction === "right"
        ? props.handleShiftRight()
        : props.handleShiftLeft();
    },
    [props.handleShiftLeft, props.handleShiftRight]
  );

  /**
   * AI Logic
   */
  useEffect(() => {
    const withinBounds = (leftShape, rightShape) => {
      if (leftShape === null) {
        return props.objectPosition + IMG_SIZE < rightShape.x;
      } else if (rightShape === null) {
        return props.objectPosition > leftShape.x + leftShape.size;
      } else {
        return (
          props.objectPosition + IMG_SIZE < rightShape.x &&
          props.objectPosition > leftShape.x + leftShape.size
        );
      }
    };

    if (props.simulationStatus === SIMULATION_STARTED) {
      let minDifference = Infinity;
      let closestGapIndex = null;
      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        if (shape.empty) {
          const absoluteDifference = Math.abs(props.objectPosition - shape.x);
          if (absoluteDifference < minDifference) {
            minDifference = absoluteDifference;
            closestGapIndex = i;
          }
        }
      }
      /* Shape at every column */
      if (closestGapIndex === null) {
        /* Avoid the heaviest color */
      } else {
      /* Gap exist at closestGapIndex  */
        const shape = shapes[closestGapIndex];
        const leftShape =
          closestGapIndex === 0 ? null : shapes[closestGapIndex - 1];
        const rightShape =
          closestGapIndex === shapes.length - 1
            ? null
            : shapes[closestGapIndex + 1];
        const safe = withinBounds(leftShape, rightShape);
        if (!safe) {
          const direction = shape.x <= props.objectPosition ? "left" : "right";
          updateMove(direction);
        }
      }
    }
  }, [shapes]);

  const updateFallingShapes = useCallback(() => {
    setShapes((shapes) => {
      const newShapes = [];
      for (const shape of shapes) {
        const newY = shape.y + (SPEED_STEP * SPEED) / SECOND;
        if (newY <= props.parentRef.current.offsetHeight) {
          newShapes.push({
            ...shape,
            y: newY,
          });
        }
      }
      requestRef.current = requestAnimationFrame(updateFallingShapes);
      return newShapes;
    });
  }, [setShapes]);

  const spawnShape = useCallback(() => {
    const parentAttributes = props.parentRef.current.getBoundingClientRect();
    setShapes((prev) => {
      const newShapes = [];
      const width = parentAttributes?.width;
      /* How many shapes to spawn. Calculated by the simulation width and size of each shape (including a gap). */
      const numberOfShapes = Math.floor(width / SIZE) - 1;
      /* Calculate how much space is left at the end of the shapes. */
      const remainingGap = width - numberOfShapes * SIZE;
      /* Calculate gap between shapes. Adding 1 to consider space for the last shape. */
      const gap = remainingGap / (numberOfShapes + 1);
      /* Randomly determine a number to leave an empty space. */
      let currentPosition = gap;
      let colors = new RandomRoundRobin([...COLORS]);
      for (let i = 0; i < numberOfShapes; i++) {
        /* 1/4 of an empty shape */
        const ignoreColumn = _.random(3);
        if (ignoreColumn === 0) {
          newShapes.push({
            ...generateRandomShape(currentPosition),
            empty: true,
          });
        } else {
          const color = colors.next().value;
          newShapes.push(generateRandomShape(currentPosition, color));
        }
        currentPosition += gap + SIZE;
      }
      return [...prev, ...newShapes];
    });
  }, [setShapes]);

  useEffect(() => {
    const end = () => {
      intervalRef.current && clearInterval(intervalRef.current);
      requestRef.current && cancelAnimationFrame(requestRef.current);
      setShapes([]);
    };

    if (props.simulationStatus === SIMULATION_STARTED) {
      spawnShape();
      intervalRef.current = setInterval(spawnShape, SPAWN_INTERVAL);
      requestRef.current = requestAnimationFrame(updateFallingShapes);
    } else {
      end();
    }

    return () => end();
  }, [updateFallingShapes, spawnShape, props.simulationStatus]);

  return (
    <div className={"tw-relative"}>
      {shapes
        .filter((shape) => !shape.empty)
        .map((shape, index) => {
          return <Shape key={`shape-${index}`} {...shape} />;
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { simulationStatus, objectPosition, weights } = state.exercise10;
  return { simulationStatus, objectPosition, weights };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

ShapeSpawner.propTypes = {
  actions: PropTypes.object,
  parentRef: PropTypes.object,
  childBox: PropTypes.object,
  positionRef: PropTypes.object,
  objectPosition: PropTypes.number,
  simulationStatus: PropTypes.string,
  weights: PropTypes.object,
  handleShiftRight: PropTypes.func,
  handleShiftLeft: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShapeSpawner);
