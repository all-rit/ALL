/* eslint-disable no-unused-vars */

import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import {
  COLORS,
  IMG_SIZE,
  SECOND,
  SIMULATION_STARTED,
  SIZE,
  SPAWN_AMOUNT,
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

const generateRandomShape = (parentAttributes, i) => {
  const color = _.sample(COLORS);
  const size = SIZE;
  const x = i * (size + STEP_COUNT);
  const y = 0;
  return { color, size, x, y };
};

const ShapeSpawner = (props) => {
  const [shapes, setShapes] = useState([]);
  const intervalRef = useRef(null);
  const requestRef = useRef(null);

  /* Dependencies on shapes, for whenever a Y value is updated, and the Moving Object, for whenever its X value is updated */
  useEffect(() => {
    const newShapes = shapes.filter(({ x, y, size, color }) => {
      const touchingX =
        (props.objectPosition + IMG_SIZE >= x && props.objectPosition <= x) ||
        (props.objectPosition >= x &&
          props.objectPosition + IMG_SIZE <= x + size) ||
        (props.objectPosition <= x + size &&
          props.objectPosition + IMG_SIZE >= x + size);
      /* True if the Moving Object is overlapping with a Falling Shape on the Y Plane */
      const touchingY =
        y + size >= props?.parentRef?.current?.offsetHeight - IMG_SIZE;

      const shapesCollided = touchingX && touchingY;
      //const avoidColor = "tw-bg-[#34A853]"
      if (shapesCollided) {
        props.actions.updateColorWeight(color);
      }
      return !shapesCollided;
    });

    !_.isEqual(newShapes, shapes) && setShapes(newShapes);
  }, [shapes, props.objectPosition]);

  const [working, setWorking] = useState(false);
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [max, setMax] = useState(null);
  const [, setRight] = useState(null);
  useEffect(() => {
    if (props.simulationStatus === SIMULATION_STARTED) {
      shapes.map(({ x, size }) => {
        const touchingX = (newObjectPosition) =>
          (newObjectPosition + IMG_SIZE >= x && props.objectPosition <= x) ||
          (newObjectPosition >= x &&
            newObjectPosition + IMG_SIZE <= x + size) ||
          (newObjectPosition <= x + size &&
            newObjectPosition + IMG_SIZE >= x + size);
        if (touchingX(props.objectPosition)) {
          let shiftLeft = 0,
            shiftRight = 0,
            direction = "";
          // while (true) {
          //     let newPosition = props.objectPosition;
          //
          //     shiftLeft += STEP_COUNT;
          //     newPosition = props.objectPosition - shiftLeft;
          //     if (newPosition >= 0 && !touchingX(newPosition)) {
          //         direction = 'left';
          //         break;
          //     }
          //
          //     shiftRight += STEP_COUNT;
          //     newPosition = props.objectPosition + shiftLeft;
          //     if (newPosition <= 1110 && !touchingX(newPosition)) {
          //         direction = 'right';
          //         break;
          //     }
          //
          //     if (shiftLeft >= 1000 || shiftRight >= 1000)
          //         break;
          // }
          // console.log(`Move ${direction}`);
        }
      });
    }
  }, [props.simulationStatus, working, shapes]);

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
      const numberOfShapes = Math.floor(parentAttributes?.width / SIZE);
      for (let i = 0; i < numberOfShapes; i++) {
        newShapes.push(generateRandomShape(parentAttributes, i));
      }
      return [...prev, ...newShapes];
    });
  }, [setShapes]);

  useEffect(() => {
    const end = () => {
      intervalRef.current && clearInterval(intervalRef.current);
      requestRef.current && cancelAnimationFrame(requestRef.current);
    };

    if (props.simulationStatus === SIMULATION_STARTED) {
      intervalRef.current = setInterval(spawnShape, SPAWN_INTERVAL);
      requestRef.current = requestAnimationFrame(updateFallingShapes);
    } else {
      end();
    }

    return () => end();
  }, [updateFallingShapes, spawnShape, props.simulationStatus]);

  return (
    <div className={"tw-relative"}>
      {shapes.map((shape, index) => {
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
