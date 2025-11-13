import React, { useState } from "react";
import { TabsContext } from "./TabsContext";
import PropTypes from "prop-types";
import "./Tabs.css";

export const Tabs = ({ children }) => {
  /**
   * A component that displays and holds tabs
   *
   * @param {object} children - Tab components placed inside Tabs
   * @returns {JSX.Element}
   */

  // State storing index of current active tab
  const [activeTab, setActiveTab] = useState(0); // First tab is active by default
  // Store tab(s) that log themselves in Tabs parent
  const [tabs, setTabs] = useState([]);

  // Add newly register tabs to existing tab array
  const logTab = (tab) => {
    setTabs((prev) => {
      if (prev.some((t) => t.label === tab.label)) return prev;
      return [...prev, tab];
    });
  };

  return (
    <TabsContext.Provider value={{ logTab, activeTab, setActiveTab }}>
      <div className="tabs-container">
        {/* Populate headers with buttons for logged tabs */}
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={index === activeTab ? "active" : ""}
              // Change tab to associate index-tab when tab header is clicked
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
          {/* Fills space to the right of div */}
          <div className="fill-space"></div>
        </div>
        {/* Populate with tab content */}
        <div className="tab-panels">
          {tabs.map((tab, index) =>
            index === activeTab ? <div key={index}>{tab.content}</div> : null,
          )}
        </div>
      </div>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};
