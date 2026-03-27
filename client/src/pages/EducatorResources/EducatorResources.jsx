import WhatsAvailable from './WhatsAvailable';
import ResourcesSection from './ResourcesSection';
import GettingInvolved from '../../components/all-components/GettingInvolved';
import YellowBlockSection from '../../components/all-components/YellowBlockSection';
import DevPartners from '../landingpage/DevPartners';
import Carousel from '../../components/all-components/ParticipatingSchools';
import LandingSection from '../../components/all-components/LandingSection';
import { ABOUT_US_BODY, ABOUT_US_TITLE } from '../../constants/sections';

const EducatorResources = () => {
  return (
    <div className={'tw-w-full tw-leading-snug'}>
      <LandingSection
        title={'Educator Resources'}
        body={`Welcome to Accessible Learning Labs Educators Resources! Below, you
            will find everything you need to begin using our interactive,
            intuitive learning labs, including lab structure, walkthrough
            videos, lecture slides, and how to create learning groups!`}
      />
      <WhatsAvailable />
      <ResourcesSection />
      <YellowBlockSection title={ABOUT_US_TITLE} body={ABOUT_US_BODY} />
      <DevPartners />
      <Carousel />
      <GettingInvolved />
    </div>
  );
};

export default EducatorResources;
