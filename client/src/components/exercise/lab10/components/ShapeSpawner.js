import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import {
  COLORS,
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
  const [width, height] = _.sample(SIZE);
  const x = _.random(parentAttributes.width);
  const y = 0;
  return { color, width, height, x, y };
};

const ShapeSpawner = (props) => {
  const [shapes, setShapes] = useState([]);
  const intervalRef = useRef(null);
  const requestRef = useRef(null);

  const advanceStep = useCallback(() => {
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
      requestRef.current = requestAnimationFrame(advanceStep);
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
      requestRef.current = requestAnimationFrame(advanceStep);
    }
  }, [advanceStep, spawnShape, props.simulationStarted]);

  return (
    props.simulationStarted && (
      <div className={"tw-relative"}>
        {shapes.map(({ color, width, height, x, y }, index) => {
          return (
            <Shape
              key={`shape-${index}`}
              color={color}
              width={width}
              height={height}
              x={x}
              y={y}
            />
          );
        })}
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  const { simulationStarted } = state.exercise10;
  return { simulationStarted };
};

ShapeSpawner.propTypes = {
  parentRef: PropTypes.object,
  simulationStarted: PropTypes.bool,
};

export default connect(mapStateToProps)(ShapeSpawner);
