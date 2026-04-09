import { useContext, useEffect, useRef } from "react";
import { TabsContext } from "./TabsContext";
import PropTypes from "prop-types";

export const Tab = ({ label, children }) => {
  const { logTab } = useContext(TabsContext);

  // Use ref to track if this is the first render
  const isFirstRender = useRef(true);
  const prevChildrenRef = useRef(children);

  useEffect(() => {
    // Only log if children actually changed or first render
    if (isFirstRender.current || prevChildrenRef.current !== children) {
      logTab({ label, content: children });
      prevChildrenRef.current = children;
      isFirstRender.current = false;
    }
  }, [children, label, logTab]);

  return null;
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
