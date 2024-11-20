import React from "react";
import WhatsAvailable from "./WhatsAvailable";
import ResourcesHeader from "./ResourcesHeader";
import ResourcesSection from "./ResourcesSection";
import GettingInvolved from "../../all-components/GettingInvolved";
import YellowBlockSection from "../../all-components/YellowBlockSection";
import DevPartners from "../landingpage/DevPartners";
import Carousel from "../../all-components/carousel";

const EducatorResources = () => {
  return (
    <div className={"tw-w-full tw-leading-snug"}>
      <ResourcesHeader />
      <WhatsAvailable />
      <ResourcesSection />
      <YellowBlockSection
        title={"About Us"}
        body={
          "Learn more about the team at Accessible Learning Labs and the amazing things we have in the works!"
        }
      />
      <DevPartners />
      <Carousel />
      <GettingInvolved />
    </div>
  );
};

export default EducatorResources;
