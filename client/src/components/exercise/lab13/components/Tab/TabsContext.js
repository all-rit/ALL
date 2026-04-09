import { createContext } from "react";

export const TabsContext = createContext({
  /**
   * Shares the context and current active tab inbetween all
   * Tabs components
   */
  // Function tabs will call to log themselves as a new tab
  logTab: () => {},
  activeTab: 0,
  setActiveTab: () => {},
});
