import React from "react";
import LandingSection from "./LandingSection";
import InvestigatorsSection from "./InvestigatorsSection";
import StudentTeamSection from "./StudentTeamSection";
import GettingInvolved from "src/components/all-components/GettingInvolved";
import YellowBlockSection from "../../components/all-components/YellowBlockSection";

const AboutUsPage = () => {
  return (
    <div>
      <LandingSection />
      <YellowBlockSection
        title={"Our Mission"}
        body={
          "Accessible Learning Labs is an NSF funded initiative aimed at empowering inclusive software education and fostering STEM proficiency."
        }
      />
      <InvestigatorsSection />
      <StudentTeamSection />
      <GettingInvolved />
    </div>
  );
};

export default AboutUsPage;
