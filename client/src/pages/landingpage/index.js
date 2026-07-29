import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import LabGeneration from "../../components/body/lab/LabGeneration";
import GettingInvolved from "../../components/all-components/GettingInvolved";
import DevPartners from "./DevPartners";
import Carousel from "src/components/all-components/ParticipatingSchools";
import Girl3 from "../../assets/images/stockImages/Girl3.png";
import Girl2 from "../../assets/images/stockImages/Girl2.png";
import ALLButton from "../../components/all-components/ALLButton";
import labService from "src/services/LabService";
import useMainStateContext from "src/reducers/MainContext";
import YellowBlockSection from "../../components/all-components/YellowBlockSection";
import LandingSection from "../../components/all-components/LandingSection";
import {
  ABOUT_US_BODY,
  ABOUT_US_TITLE,
  ARE_YOU_AN_EDUCATOR_BODY,
  ARE_YOU_AN_EDUCATOR_TITLE,
  WELCOME_TO_ALL_BODY,
  WELCOME_TO_ALL_TITLE,
} from "../../constants/sections";

const Home = () => {
  const { actions } = useMainStateContext();
  const handleNavEducators = () => {
    navigate("/EducatorResources");
  };
  const handleNavGroups = () => {
    navigate("/Profile");
  };
  const handleNavLabs = () => {
    navigate("/Labs");
  };

  const [featuredLabs, setFeaturedLabs] = useState([]);

  const getFeaturedLabs = async () => {
    const allLabs = await labService.getAllLabs();
    let lab14;
    let lab15;

    allLabs.map((lab) => {
      if (lab.labShortName == "Quantum") {
        lab14 = lab;
      } else if (lab.labShortName == "AI Hallucinations") {
        lab15 = lab;
      }
    });

    setFeaturedLabs([lab15, lab14]);
  };

  const endImagine = () => actions.setIsImagine(false);

  useEffect(() => {
    endImagine();
    getFeaturedLabs();
  }, []);

  return (
    <div>
      {/* Header */}
      <LandingSection
        title={WELCOME_TO_ALL_TITLE}
        body={WELCOME_TO_ALL_BODY}
        img={Girl2}
      />

      {/* Are you a Student? */}
      <section
        className="tw-bg-primary-yellow tw-flex tw-justify-start tw-pb-0 tw-pt-16"
        id="student"
      >
        <div className="tw-bg-white tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-mr-10 tw-p-4 sm:tw-p-8 tw-border-solid tw-border-b-0 tw-border-l-0 tw-border-t-12 tw-border-r-12 tw-rounded-tr-lg tw-border-primary-blue">
          <div className="tw-w-3/4 tw-flex tw-flex-col tw-justify-center">
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center md:tw-items-start tw-gap-4 md:tw-gap-16 tw-mt-4">
              <div className="tw-flex tw-flex-col">
                <h1 className="tw-text-center sm:tw-text-left tw-mb-4 tw-title">
                  Are You a Student?
                </h1>
                <p className="tw-text-wrap tw-text-left tw-max-w-80 tw-body-text">
                  Use the code that your instructor has provided to join a
                  group! If not, please explore all of the labs that are
                  available for everyone, including our featured labs.
                </p>
                <h1 className="tw-text-center sm:tw-text-left tw-mt-16 tw-mb-4 tw-title tw-hidden md:tw-block">
                  Featured Labs
                </h1>
              </div>
              <div className="tw-flex tw-flex-row md:tw-flex-col tw-gap-4 tw-mt-6">
                <ALLButton
                  label={"Join a Group"}
                  onClick={handleNavGroups}
                  className="tw-mb-6"
                ></ALLButton>
                <ALLButton
                  label={"Explore Labs"}
                  onClick={handleNavLabs}
                ></ALLButton>
              </div>
              <h1 className="tw-text-left tw-mt-16 tw-mb-4 tw-title tw-block md:tw-hidden">
                Featured Labs
              </h1>
            </div>
            <LabGeneration
              actions={actions}
              labids={featuredLabs}
              progressState={"FEATURED_LABS"}
            />
          </div>
        </div>
      </section>
      <div className="tw-bg-white tw-h-32"></div>

      {/* Are you an Educator? */}
      <LandingSection
        title={ARE_YOU_AN_EDUCATOR_TITLE}
        body={ARE_YOU_AN_EDUCATOR_BODY}
        img={Girl3}
        hasButton={true}
        buttonLabel={"Educator Resources"}
        onClick={handleNavEducators}
        shrinkImg={true}
      />

      {/* About Us */}
      <YellowBlockSection
        title={ABOUT_US_TITLE}
        body={ABOUT_US_BODY}
        id="about-us"
      />
      <DevPartners id="dev-partners" />

      {/* Participating Schools */}
      <Carousel id="participating-schools" />

      {/* Getting Involved */}
      <GettingInvolved id="get-involved" />
    </div>
  );
};

export default Home;
