import LandingSection from '@all-components/LandingSection';
import InvestigatorsSection from './InvestigatorsSection';
import StudentTeamSection from './StudentTeamSection';
import GettingInvolved from '@all-components/GettingInvolved';
import YellowBlockSection from '@all-components/YellowBlockSection';
import {
  ABOUT_US_BODY,
  ABOUT_US_TITLE,
  OUR_MISSION_BODY,
  OUR_MISSION_TITLE,
} from '@/constants/sections';

const AboutUsPage = () => {
  return (
    <div>
      <LandingSection title={ABOUT_US_TITLE} body={ABOUT_US_BODY} />
      <YellowBlockSection title={OUR_MISSION_TITLE} body={OUR_MISSION_BODY} />
      <InvestigatorsSection />
      <StudentTeamSection />
      <GettingInvolved />
    </div>
  );
};

export default AboutUsPage;
