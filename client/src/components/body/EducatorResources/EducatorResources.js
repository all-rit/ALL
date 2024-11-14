import React from "react";
import WhatsAvailable from "./WhatsAvailable";
import ResourcesHeader from "./ResourcesHeader";
import ResourcesSection from "./ResourcesSection";
import GettingInvolved from "../../all-components/GettingInvolved";
import AboutUs from "../../all-components/AboutUs";
import DevPartners from "../landingpage/DevPartners";
import Carousel from "../../all-components/carousel";
import MainFooter from "../../footer/mainFooter";

const EducatorResources = () => {
  return (
    <div className={"tw-w-full tw-leading-snug"}>
      <ResourcesHeader />
      <WhatsAvailable />
      <ResourcesSection />
      <AboutUs />
      <DevPartners />
      <h2 className={"tw-py-6 tw-title-styling-name"}>
        {" "}
        Participating Schools{" "}
      </h2>
      <Carousel />
      <GettingInvolved />
      <MainFooter />
    </div>
  );
};

export default EducatorResources;
