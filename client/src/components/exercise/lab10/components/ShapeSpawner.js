import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import { COLORS, SIZE, SPAWN_INTERVAL } from "../../../../constants/lab10";
import PropTypes from "prop-types";
import Shape from "./Shape";
import { connect } from "react-redux";

const ShapeSpawner = (props) => {
  const [shapes, setShapes] = useState([]);
  const intervalRef = useRef(null);

  const spawnShape = useCallback(() => {
    const parentAttributes = props.parentRef.current.getBoundingClientRect();
    console.log(parentAttributes.width);
    const color = _.sample(COLORS);
    const [width, height] = _.sample(SIZE);
    const x = _.random(parentAttributes.width);
    console.log(x, parentAttributes.width);
    setShapes((prev) => [...prev, { color, width, height, x }]);
  }, [setShapes]);

  useEffect(() => {
    if (props.simulationStarted) {
      intervalRef.current = setInterval(spawnShape, SPAWN_INTERVAL);
    }
  }, [spawnShape, props.simulationStarted]);

  return (
    props.simulationStarted && (
      <div>
        {shapes.map(({ color, width, height, x }, index) => {
          return (
            <Shape
              key={`shape-${index}`}
              color={color}
              width={width}
              height={height}
              x={x}
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
