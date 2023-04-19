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
} from "../../../../constants/lab10";
import PropTypes from "prop-types";
import Shape from "./Shape";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";

const generateRandomShape = (parentAttributes) => {
  const color = _.sample(COLORS);
  const size = _.sample(SIZE);
  const x = _.random(parentAttributes.width);
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
      if (shapesCollided) {
        props.actions.updateColorWeight(color);
      }
      return !shapesCollided;
    });
    !_.isEqual(newShapes, shapes) && setShapes(newShapes);
  }, [shapes, props.objectPosition]);

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
      for (let i = 0; i < SPAWN_AMOUNT; i++) {
        newShapes.push(generateRandomShape(parentAttributes));
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
  const { simulationStatus, objectPosition } = state.exercise10;
  return { simulationStatus, objectPosition };
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ShapeSpawner);
