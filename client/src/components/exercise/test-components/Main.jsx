import React from "react";
import NavigationPane from "../../all-components/Lab/NavigationPane";
import LabScreen from "../../all-components/Lab/LabScreen";

const title = "Sample Lab Name Here This Long";

const Main = () => {
  return (
    <div className={"tw-flex tw-mx-12"}>
      <NavigationPane title={title} />
      <LabScreen />
    </div>
  );
};

export default Main;
