import React from "react";
import WhatsAvailable from "./WhatsAvailable";
import ResourcesHeader from "./ResourcesHeader";
import ResourcesSection from "./ResourcesSection";
import GettingInvolved from "../../all-components/GettingInvolved";
import AboutUs from "../../all-components/YellowBlockSection";
import DevPartners from "../landingpage/DevPartners";
import Carousel from "../../all-components/carousel";

const EducatorResources = () => {
  return (
    <div className={"tw-w-full tw-leading-snug"}>
      <ResourcesHeader />
      <WhatsAvailable />
      <ResourcesSection />
      <AboutUs />
      <DevPartners />
      <Carousel />
      <GettingInvolved />
    </div>
  );
};

export default EducatorResources;
