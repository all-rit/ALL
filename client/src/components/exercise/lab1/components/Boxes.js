import React from "react";
import Box from "./Box";
import PropTypes from "prop-types";

/**
 * Renders a set of boxes based on the provided elements.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Determines if the boxes should be visible or not.
 * @param {Object} props.elements - The elements to render as boxes.
 * @param {Function} props.clickHandler - The click handler function for the boxes.
 * @returns {JSX.Element|null} The rendered boxes or null if not visible.
 */
const Boxes = (props) => {
  const { visible, elements, clickHandler } = props;
  const boxElements = Object.keys(elements).map((box) => {
    return (
      <Box
        key={box}
        number={box}
        clickHandler={clickHandler.bind(null, parseInt(box))}
        state={elements[box]}
      />
    );
  });

  if (!visible) return null;

  return <div className="exercise__boxes">{boxElements}</div>;
};

Boxes.propTypes = {
  visible: PropTypes.bool.isRequired,
  elements: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Boxes;
