import React from "react";
import WhatsAvailable from "./WhatsAvailable";
import ResourcesHeader from "./ResourcesHeader";
import ResourcesSection from "./ResourcesSection";
import GettingInvolved from "../../all-components/GettingInvolved";
import AboutUs from "../../all-components/AboutUs";

const EducatorResources = () => {
  return (
    <div className={"tw-w-full tw-leading-snug"}>
      <ResourcesHeader />
      <WhatsAvailable />
      <ResourcesSection />
      <AboutUs />
      <GettingInvolved />
    </div>
  );
};

export default EducatorResources;
