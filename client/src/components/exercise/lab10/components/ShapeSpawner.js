import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import {
  COLORS,
  IMG_SIZE,
  SIMULATION_STARTED,
  SIZE,
  SPAWN_INTERVAL,
  SPEED,
  SPEED_STEP,
} from "../../../../constants/lab10";
import PropTypes from "prop-types";
import Shape from "./Shape";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { RandomRoundRobin } from "round-robin-js";
import { twMerge } from "tailwind-merge";

/**
 * Sorts the colors based on their weight in descending order and returns heaviest color
 */
const getHeaviestColor = (weights) => {
  const keys = Object.keys(weights ?? {}).sort((a, b) => {
    const weightA = weights[a],
      weightB = weights[b];

    if (weightA === weightB) {
      return 0;
    }

    return weightA < weightB ? 1 : -1;
  });

  return _.isEmpty(keys) ? "" : keys[0];
};

/**
 * For a specified index, return the specified shape and its neighbors
 */
const getShapeAndNeighbors = (shapeIndex, shapes) => {
  const shape = shapes[shapeIndex];
  const leftShape = shapeIndex === 0 ? null : shapes[shapeIndex - 1];
  const rightShape =
    shapeIndex === shapes.length - 1 ? null : shapes[shapeIndex + 1];
  return {
    shape,
    leftShape,
    rightShape,
  };
};

/**
 * Create a Shape Object, randomly.
 */
const generateRandomShape = (currentPosition, color) => {
  const size = SIZE;
  const [x, y] = [currentPosition, 0];
  const randomShape = () => {
    switch (_.random(1)) {
      /* Circle */
      case 1:
        return "tw-absolute tw-border-solid tw-rounded-full";
      /* Square */
      default:
        return "tw-absolute tw-border-solid tw-rounded";
    }
  };
  return { color, size, x, y, className: twMerge(randomShape(), color) };
};

/**
 * True if the Moving Object is overlapping with a Falling Shape on the X Plane.
 */
const isTouchingX = (objectPosition, x, size) => {
  return (
    (objectPosition + IMG_SIZE >= x && objectPosition <= x) ||
    (objectPosition >= x && objectPosition + IMG_SIZE <= x + size) ||
    (objectPosition <= x + size && objectPosition + IMG_SIZE >= x + size)
  );
};

/**
 * True if the Moving Object is overlapping with a Falling Shape on the Y Plane.
 */
const isTouchingY = (height, y, size) => {
  return y + size >= height - IMG_SIZE;
};

/**
 * ShapeSpawner component responsible for the spawning of shapes
 * Be cautious when updating logic here
 */
const ShapeSpawner = (props) => {
  const [shapes, setShapes] = useState([]);
  const fpsRef = useRef(60);
  const intervalRef = useRef(null);
  const requestRef = useRef(null);

  /**
   * Update reference value when prop value is updated
   */
  useEffect(() => {
    if (props.fps !== fpsRef.current) {
      fpsRef.current = props.fps;
    }
  }, [props.fps]);

  /**
   * Dependency on Shapes for whenever a Y value is updated.
   * Dependency on Object Position for whenever its X value is updated.
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

      if (shapesCollided && props.collectWeights) {
        props.actions.updateColorWeight(color);
      }

      return !shapesCollided;
    });

    !_.isEqual(newShapes, shapes) && setShapes(newShapes);
  }, [shapes, props.objectPosition]);

  /**
   * AI Logic.
   * Moves towards an empty slot if one exist.
   * Otherwise, do not touch the color with the heaviest weight.
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

    if (props.simulationStatus === SIMULATION_STARTED && props.ai) {
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

      if (!_.isEmpty(shapes)) {
        /* If there is a Shape at every column */
        if (closestGapIndex === null) {
          /* Avoid the color with the heaviest weight */
          // const heaviestColor = getHeaviestColor(props.weights);
          // let index = 0, l = 0, r = shapes.length - 1;
          //
          // const {leftShape, rightShape} = getShapeAndNeighbors(index, shapes);
          // const onShape = withinBounds(leftShape, rightShape);
          // console.log(onShape)
          // if (onShape) {
          //     if (leftShape === null) {
          //         /* Move to the right shape */
          //         const safe = withinBounds(null, rightShape);
          //         if (!safe) {
          //             props.handleShiftRight();
          //         }
          //
          //     } else {
          //         /* Move to the left shape */
          //         const safe = withinBounds(leftShape, null);
          //         if (!safe) {
          //             props.handleShiftLeft();
          //         }
          //     }
          // }
        } else {
          /* Gap exist at closestGapIndex  */
          const { leftShape, shape, rightShape } = getShapeAndNeighbors(
            closestGapIndex,
            shapes
          );
          const safe = withinBounds(leftShape, rightShape);
          /* Move until you are at the shape */
          if (!safe) {
            if (shape.x <= props.objectPosition) {
              props.handleShiftLeft();
            } else {
              props.handleShiftRight();
            }
          }
        }
      }
    }
  }, [props.simulationStatus, shapes, props.ai]);

  /**
   * Updates Shapes Y Position for smooth animation of falling shapes.
   * Takes advantage of the requestAnimationFrame API.
   */
  const updateFallingShapes = useCallback(async () => {
    setShapes((shapes) => {
      const newShapes = [];
      for (const shape of shapes) {
        const newY = shape.y + (SPEED_STEP * SPEED) / (fpsRef.current / 2);
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

  /**
   * Spawns an array of Shapes.
   * For every column, 1/4 probability of the slot being empty.
   */
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

      const heaviestColor = getHeaviestColor(props.weights);
      const colors = COLORS.flatMap((element) => element[0]);
      let colorOptions = [];

      if (props.ai) {
        /* Increase odds of spawning a shape with the heaviest color */
        const filteredColors = new RandomRoundRobin(
          colors.filter((color) => color !== heaviestColor)
        );
        const thirdFrac = numberOfShapes / 3;
        /* 2/3 will be the heaviest color */
        for (let i = 0; i < numberOfShapes; i++) {
          if (i < thirdFrac) {
            colorOptions.push(filteredColors.next().value);
          } else {
            colorOptions.push(heaviestColor);
          }
        }
      } else {
        /* Random/Equal probability of all colors */
        colorOptions = colors;
      }

      const randomRoundRobin = new RandomRoundRobin(colorOptions);
      for (let i = 0; i < numberOfShapes; i++) {
        /* 1/2 of an empty shape */
        const ignoreColumn = _.random(6);
        if (ignoreColumn === 0) {
          newShapes.push({
            ...generateRandomShape(currentPosition),
            empty: true,
          });
        } else {
          const color = randomRoundRobin.next().value;
          newShapes.push(generateRandomShape(currentPosition, color));
        }
        currentPosition += gap + SIZE;
      }
      return [...prev, ...newShapes];
    });
  }, [setShapes, props.ai]);

  /**
   * Starts the simulation when the status is updated to SIMULATION_STARTED.
   */
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
  const { simulationStatus, objectPosition, weights, ai, collectWeights } =
    state.exercise10;
  return { simulationStatus, objectPosition, weights, ai, collectWeights };
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
  ai: PropTypes.bool,
  collectWeights: PropTypes.bool,
  fps: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShapeSpawner);
