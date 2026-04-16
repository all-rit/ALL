import { useEffect } from "react";
import PropTypes from "prop-types";

const ScrollWrapper = ({ location, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

ScrollWrapper.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node,
};

export default ScrollWrapper;
