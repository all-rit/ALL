import React from "react";
import NavigationPane from "../../all-components/Lab/NavigationPane";
import LabScreen from "../../all-components/Lab/LabScreen";
import Carousel from "../../all-components/ParticipatingSchools.js";

const title = "Sample Lab Name Here This Long";

const Main = () => {
  return (
    <div>
      <div className={"tw-flex tw-mx-12"}>
        <NavigationPane title={title} />
        <LabScreen />
      </div>
      <Carousel />
    </div>
  );
};

export default Main;
