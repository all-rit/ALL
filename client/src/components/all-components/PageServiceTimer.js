import { useState, useEffect } from "react";
import { PageService } from "../../services/PageService";
import PropTypes from "prop-types";
import useMainStateContext from "src/reducers/MainContext";

/**
 * A component that tracks the time elapsed and creates a page service on unmount.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the page.
 * @returns {null}
 */
const PageServiceTimer = ({ name }) => {
  const {state} = useMainStateContext();
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  useEffect(() => {
    return () => {
      PageService.createPage(name, secondsElapsed, state.main.lab);
    };
  }, [name, secondsElapsed, state.main.lab]); // This effect runs on unmount and whenever name, secondsElapsed, or state.main.lab changes


  return null;
};

PageServiceTimer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PageServiceTimer;