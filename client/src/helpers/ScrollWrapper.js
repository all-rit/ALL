import { useEffect } from "react";
import PropTypes from "prop-types";

/** Causes all pages inside to automatically scroll to the top when routing.
 * Must be a child of Router.
 */

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
