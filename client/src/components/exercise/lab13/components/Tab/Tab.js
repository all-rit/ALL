import { useContext, useEffect } from "react";
import { TabsContext } from "./TabsContext";
import PropTypes from "prop-types";

export const Tab = ({ label, children }) => {
    /**
     * A component that defines a singular tab
     * @param {string} label - Name of the tab
     * @param {object} children - Content of the tab
     */

    const { logTab } = useContext(TabsContext);

    // Log tab once it appears on the screen, and update when children change
    useEffect(() => {
        logTab({ label, content: children });
    }, [children, logTab]);

    return null;
};

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
