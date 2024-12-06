import React from "react";
import WhatsAvailable from "./WhatsAvailable";
import ResourcesSection from "./ResourcesSection";
import GettingInvolved from "../../components/all-components/GettingInvolved";
import YellowBlockSection from "../../components/all-components/YellowBlockSection";
import DevPartners from "../landingpage/DevPartners";
import Carousel from "../../components/all-components/ParticipatingSchools";
import LandingSection from "../../components/all-components/LandingSection";

const EducatorResources = () => {
  return (
    <div className={"tw-w-full tw-leading-snug tw-pt-[2rem]"}>
      <LandingSection
        title={"Educator Resources"}
        body={`Welcome to Accessible Learning Labs Educators Resources! Below, you
            will find everything you need to begin using our interactive,
            intuitive learning labs, including lab structure, walkthrough
            videos, lecture slides, and how to create learning groups!`}
      />
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
