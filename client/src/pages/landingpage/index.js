/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import LabGeneration from "../../components/body/lab/LabGeneration";
import GettingInvolved from "../../components/all-components/GettingInvolved";
import DevPartners from "./DevPartners";
import Carousel from "src/components/all-components/carousel";
import Girl3 from "../../assets/images/stockImages/Girl3.png";
import Girl2 from "../../assets/images/stockImages/Girl2.png";
import ALLButton from "../../components/all-components/ALLButton";
import labService from "src/services/LabService";
import useMainStateContext from "src/reducers/MainContext";
import YellowBlockSection from "../../components/all-components/YellowBlockSection";

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
    const lab12 = allLabs[11];
    const lab11 = allLabs[10];

    setFeaturedLabs([lab12, lab11]);
  };

  useEffect(() => {
    getFeaturedLabs();
  }, []);

  // TODO: Site Accessibility Settings does nothing atm (header + footer)
  // TODO: Get the real images
  // TODO: Get the correct anchors
  // TODO: Footer text is still lorem ipsum

  return (
    <div className="landingpage">
      {/* Header */}
      <div className="tw-relative tw-flex tw-flex-col">
        <section className="tw-flex tw-bg-primary-blue tw-justify-center tw-items-center tw-py-[75px] sm:tw-py-[150px]">
          <div className="tw-grid tw-w-full tw-h-1/2">
            <div className="tw-bg-primary-yellow tw-w-11/12 tw-h-full tw-justify-self-end tw-self-end tw-relative tw-rounded-bl-lg tw-rounded-r-none">
              <div className="tw-bg-white tw-w-full tw-h-full tw-px-8 tw-py-10 md:tw-px-16 md:tw-py-10 tw-justify-self-end tw-self-center tw-rounded-bl-lg tw-relative tw-bottom-5 tw-left-4 tw-flex tw-items-start tw-flex-col tw-gap-8">
                <h1 className="tw-title">
                  Welcome to Accessible Learning Labs
                </h1>
                <p className="sm:tw-max-w-[90%] md:tw-max-w-128 tw-text-wrap tw-text-left tw-body-copy xs:tw-text-[1rem] md:tw-text-[1.125rem]">
                  Accessible Learning Labs is an NSF funded initiative aimed at
                  empowering inclusive software and fostering STEM proficiency.
                  We are dedicated to equipping users with the skills and
                  knowledge to create accessible software solutions. Through our
                  interactive and intuitive labs, we aim to make the internet a
                  more equitable place for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="tw-bg-white tw-h-32"></div>
        <img
          src={Girl2}
          className="tw-absolute tw-h-[70%] tw-right-[5rem] tw-object-left-bottom tw-object-cover tw-invisible xl:tw-visible tw-bottom-0"
        ></img>
      </div>

      {/* Are you a Student? */}
      <section className="tw-bg-primary-yellow tw-flex tw-justify-start tw-pb-0 tw-pt-16">
        <div className="tw-bg-white tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-mr-10 tw-p-4 sm:tw-p-8 tw-border-solid tw-border-b-0 tw-border-l-0 tw-border-t-12 tw-border-r-12 tw-rounded-tr-lg tw-border-primary-blue">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center md:tw-items-start tw-gap-4 md:tw-gap-16 tw-mt-4">
            <div className="tw-flex tw-flex-col">
              <h1 className="tw-text-center sm:tw-text-left tw-mb-4 tw-title">
                Are You a Student?
              </h1>
              <p className="tw-text-wrap tw-text-left tw-max-w-80 tw-body-copy">
                Use the code that your instructor has provided to join a group!
                If not, please explore all of the labs that are available for
                everyone, including our featured labs.
              </p>
              <h1 className="tw-text-center sm:tw-text-left tw-mt-16 tw-mb-4 tw-title tw-hidden md:tw-block">
                Featured Labs
              </h1>
            </div>
            <div className="tw-flex tw-flex-row md:tw-flex-col tw-gap-4">
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
            <h1 className="tw-text-center sm:tw-text-left tw-mt-16 tw-mb-4 tw-title tw-block md:tw-hidden">
              Featured Labs
            </h1>
          </div>
          <div className="tw-grid">
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
      <div className="tw-relative tw-flex tw-flex-col">
        <section className="tw-flex tw-bg-primary-blue tw-justify-center tw-items-center tw-py-[75px] sm:tw-py-[150px]">
          <div className="tw-grid tw-w-full tw-h-1/2">
            <div className="tw-bg-primary-yellow tw-w-11/12 tw-h-4/5 tw-justify-self-end tw-self-end tw-rounded-bl-lg tw-relative">
              <div className="tw-bg-white tw-w-full tw-h-[120%] tw-p-10 tw-justify-self-end tw-self-center tw-rounded-bl-lg tw-relative tw-bottom-14 tw-left-4 tw-flex tw-items-start tw-flex-col tw-gap-8">
                <h1 className="tw-title">Are You an Educator?</h1>
                <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 sm:tw-gap-16">
                  <p className="sm:tw-max-w-[90%] md:tw-max-w-128 tw-text-wrap tw-text-left tw-body-copy">
                    Access the ability to create groups for your students, track
                    their lab progress, date of completion, and quiz grade. Find
                    more information and resources under our Educator Resources
                    page.
                  </p>
                  <ALLButton
                    label={"Educator Resources"}
                    onClick={handleNavEducators}
                  ></ALLButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        <img
          src={Girl3}
          className="tw-absolute tw-h-[100%] tw-right-[5rem] tw-object-left-bottom tw-object-cover tw-invisible xxl:tw-visible"
        ></img>
      </div>

      {/* About Us */}
      <YellowBlockSection
        title="About Us"
        body={
          "Learn more about the team at Accessible Learning Labs and the amazing things we have in the works!"
        }
      />
      <DevPartners />

      {/* Participating Schools */}
      <Carousel />
      <div className="tw-bg-white tw-h-32"></div>

      {/* Getting Involved */}
      <GettingInvolved />
    </div>
  );
};

export default Home;
