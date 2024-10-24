import React from "react";
import WhatsAvailable from "./WhatsAvailable";
import ResourcesHeader from "./ResourcesHeader";
import ResourcesSection from "./ResourcesSection";

const EducatorResources = () => {
  return (
    <div className={"tw-w-full"}>
      <ResourcesHeader />
      <br />
      <br />
      <br />
      <WhatsAvailable />
      <br />
      <br />
      <br />
      <ResourcesSection />
    </div>
  );
};

export default EducatorResources;
