import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import { COLORS, SIZE, SPAWN_INTERVAL } from "../../../../constants/lab10";
import PropTypes from "prop-types";
import Shape from "./Shape";

const ShapeSpawner = (props) => {
  const [shapes, setShapes] = useState([]);
  const intervalRef = useRef(null);

  const spawnShape = useCallback(() => {
    const parentAttributes = props.parentRef.current.getBoundingClientRect();
    const color = _.sample(COLORS);
    const [width, height] = _.sample(SIZE);
    const x = _.random(parentAttributes.width - parentAttributes.left / 1.25);
    setShapes((prev) => [...prev, { color, width, height, x }]);
  }, [setShapes]);

  useEffect(() => {
    intervalRef.current = setInterval(spawnShape, SPAWN_INTERVAL);
  }, [spawnShape]);

  return (
    <div>
      {shapes.map(({ color, width, height, x }, index) => {
        return (
          <Shape
            key={`shape-${index}`}
            color={color}
            width={width}
            height={height}
            x={x}
            parentRef={props.parentRef}
          />
        );
      })}
    </div>
  );
};

ShapeSpawner.propTypes = {
  parentRef: PropTypes.object,
};

export default ShapeSpawner;
