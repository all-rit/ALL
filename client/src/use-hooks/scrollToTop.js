import { useEffect } from "react";
import PropTypes from "prop-types";

const ScrollToTop = ({ location, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

ScrollToTop.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node,
};

export default ScrollToTop;
