import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import {
  COLORS,
  IMG_SIZE,
  SECOND,
  SIZE,
  SPAWN_INTERVAL,
  SPEED,
  SPEED_STEP,
} from "../../../../constants/lab10";
import PropTypes from "prop-types";
import Shape from "./Shape";
import { connect } from "react-redux";

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
  useEffect(() => {
    shapes.map(({ x, y, size, color }) => {
      const touchingX =
        (props.objectPosition + IMG_SIZE >= x && props.objectPosition <= x) ||
        (props.objectPosition >= x &&
          props.objectPosition + IMG_SIZE <= x + size) ||
        (props.objectPosition <= x + size &&
          props.objectPosition + IMG_SIZE >= x + size);
      const touchingY =
        y + size >= props?.parentRef?.current?.offsetHeight - IMG_SIZE;
      if (touchingX && touchingY) {
        console.log(`hitting ${color}`);
      }
    });
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
    setShapes((prev) => [...prev, generateRandomShape(parentAttributes)]);
  }, [setShapes]);

  useEffect(() => {
    if (props.simulationStarted) {
      intervalRef.current = setInterval(spawnShape, SPAWN_INTERVAL);
      requestRef.current = requestAnimationFrame(updateFallingShapes);
    }
  }, [updateFallingShapes, spawnShape, props.simulationStarted]);

  return (
    props.simulationStarted && (
      <div className={"tw-relative"}>
        {shapes.map((shape, index) => {
          return <Shape key={`shape-${index}`} {...shape} />;
        })}
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  const { simulationStarted, objectPosition } = state.exercise10;
  return { simulationStarted, objectPosition };
};

ShapeSpawner.propTypes = {
  parentRef: PropTypes.object,
  childBox: PropTypes.object,
  positionRef: PropTypes.object,
  objectPosition: PropTypes.number,
  simulationStarted: PropTypes.bool,
};

export default connect(mapStateToProps)(ShapeSpawner);
