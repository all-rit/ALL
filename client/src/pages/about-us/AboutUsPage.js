import React from "react";
import LandingSection from "../../components/all-components/LandingSection";
import InvestigatorsSection from "./InvestigatorsSection";
import StudentTeamSection from "./StudentTeamSection";
import GettingInvolved from "src/components/all-components/GettingInvolved";
import YellowBlockSection from "../../components/all-components/YellowBlockSection";

const AboutUsPage = () => {
  return (
    <div>
      <LandingSection
        title={"About Us"}
        body="Find out more about the team that makes Accessible Learning Labs
                possible. We're proud of our diverse group of principal
                investigators and advisors, as well as our fully undergraduate
                development team!"
      />
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
