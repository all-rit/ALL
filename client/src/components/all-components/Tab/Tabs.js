import React, { useState, useCallback } from "react";
import { TabsContext } from "./TabsContext";
import PropTypes from "prop-types";
import "./Tabs.css";

export const Tabs = ({
  children,
  activeTab: externalActiveTab,
  onTabChange,
}) => {
  // Store tab(s) that log themselves in Tabs parent
  const [tabs, setTabs] = useState([]);

  // Use external activeTab or fall back to first tab
  const activeTabIndex = tabs.findIndex(
    (tab) => tab.label === externalActiveTab,
  );
  const currentActiveIndex = activeTabIndex !== -1 ? activeTabIndex : 0;

  // Memoize logTab to prevent infinite loops
  const logTab = useCallback((tab) => {
    setTabs((prev) => {
      const existingIndex = prev.findIndex((t) => t.label === tab.label);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = tab;
        return updated;
      }
      return [...prev, tab];
    });
  }, []); // Empty dependency array since it only uses setTabs

  const handleTabClick = (index) => {
    if (onTabChange) {
      onTabChange(tabs[index].label);
    }
  };

  return (
    <TabsContext.Provider
      value={{ logTab, activeTab: currentActiveIndex, setActiveTab: () => {} }}
    >
      <div className="tabs-container">
        {/* Populate headers with buttons for logged tabs */}
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <div
              className={`tab-shadow-wrapper ${index === currentActiveIndex ? "active" : ""}`}
              key={index}
            >
              <button
                className={`${index === currentActiveIndex ? "active" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                <span className="tab-label">{tab.label}</span>
              </button>
            </div>
          ))}
        </div>
        {/* Populate with tab content */}
        <div className="tab-panels">
          {tabs.map((tab, index) =>
            index === currentActiveIndex ? (
              <div key={index}>{tab.content}</div>
            ) : null,
          )}
        </div>
      </div>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
};
