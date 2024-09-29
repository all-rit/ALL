import React from "react";
import NavigationPane from "../../all-components/Lab/NavigationPane";
import LabScreen from "../../all-components/Lab/LabScreen";

const Main = () => {
  return (
    <div className={"tw-flex tw-mx-12"}>
      <NavigationPane />
      <LabScreen />
    </div>
  );
};

export default Main;
