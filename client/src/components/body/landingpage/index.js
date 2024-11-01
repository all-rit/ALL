/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import nsf from "../../../assets/images/logos/nsf.png";
import rit from "../../../assets/images/logos/RIT.png";
import LabGeneration from "../lab/LabGeneration";
import MainFooter from "../../footer/mainFooter";
import GettingInvolved from "../../all-components/GettingInvolved";
import AboutUs from "../../all-components/AboutUs";
import TEMPIMG from "../../../assets/images/landingpage/TEMP.png"
import ALLButton from "../../all-components/ALLButton";
import labService from "src/services/LabService";
import useMainStateContext from "src/reducers/MainContext";

const Home = () => {
  const { actions } = useMainStateContext();
  const handleNavEducators = () => {
    navigate("/#educators");
  };
  const handleNavGroups = () => {
    navigate("/#groups");
  };
  const handleNavLabs = () => {
    navigate("/#labs");
  };

  const [featuredLabs, setFeaturedLabs] = useState([]);

  useEffect(async () => {
    const allLabs = await labService.getAllLabs();
    const lab10 = allLabs[9];
    const lab11 = allLabs[10];

    setFeaturedLabs([lab10, lab11]);
  }, []);


  return (
    <div className="landingpage">
      {/* Header */}
      <div className="tw-relative tw-flex tw-flex-col">
        <section className="tw-flex tw-bg-labBlue tw-justify-end">
          <div className="tw-bg-white tw-rounded-tl-md tw-rounded-bl-md tw-w-5/6 tw-flex tw-items-start tw-flex-col tw-gap-8">
            <h1 className="tw-mt-10 tw-ml-10">Welcome to Accessible Learning Labs</h1>
            <p className="tw-mb-10 tw-ml-10 tw-max-w-[35%] tw-text-wrap tw-text-left">Lorem Ipsum Dolor sit amet blah blah blah blah blab lhaihfio wheg </p>
          </div>
        </section>
        <div className="tw-bg-white tw-h-32"></div>
        <img src={TEMPIMG} className="tw-absolute tw-h-[100%] tw-right-0 tw-object-left-bottom tw-object-scale-down"></img>
      </div>
        
      {/* Are you a Student? */}
      {/* TODO: Add conditional join a group */}
      <section className="tw-bg-labYellow tw-flex tw-justify-start tw-pb-0 tw-pt-16">
        <div className="tw-bg-white tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-mr-10 tw-py-8 tw-border-solid tw-border-b-0 tw-border-l-0 tw-border-t-12 tw-border-r-12 tw-rounded-tr-lg tw-border-labBlue">
          <div className="tw-flex tw-flex-row tw-items-start tw-gap-16 tw-mt-4">
            <div className="tw-flex tw-flex-col tw-gap-8">
              <h1 className="tw-text-left">
                Are You a Student?
              </h1>
              <p className="tw-text-wrap tw-text-left tw-max-w-80">
                Look through the featured labs here, or click the button on the right to see all labs. 
              </p>
              <h1 className="tw-text-left tw-mt-16 tw-mb-4">Featured Labs</h1>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-6">
              <ALLButton
                label={"Join a Group"}
                onClick={handleNavGroups}
              ></ALLButton>
              <ALLButton
                label={"Explore Labs"}
                onClick={handleNavLabs}
              ></ALLButton>
            </div>             
          </div> 
          {/* TODO: make these only the labs assigned to students */}
          <div className="landingpage__row md:lg:tw-flex md:lg:tw-grid-cols-3 md:lg:tw-justify-center sm:tw-grid-cols-2">
            <LabGeneration actions={actions} labids={featuredLabs} progressState={"FEATURED_LABS"} />
          </div>
        </div>
      </section>
      <div className="tw-bg-white tw-h-32"></div>
        
      {/* Are you an Educator? */}
      <section className="tw-flex tw-bg-labBlue tw-justify-end">
        <div className="tw-bg-white tw-rounded-tl-md tw-rounded-bl-md tw-w-5/6 tw-flex tw-items-start tw-flex-col tw-gap-8">
          <h1 className="tw-mt-10 tw-ml-10">Are You an Educator?</h1>
          <div className="tw-flex tw-flex-row tw-gap-16">
            <p className="tw-mb-10 tw-ml-10 tw-max-w-[35%] tw-text-wrap tw-text-left">Lorem Ipsum Dolor sit amet blah blah blah blah blab lhaihfio wheg </p>
            <ALLButton
              label={"Educator Resources"}
              onClick={handleNavEducators}
            ></ALLButton>
          </div>
        </div>
      </section>

      {/* About Us */}
      <AboutUs />
      <div className="tw-bg-white tw-h-32"></div>

      {/* Development Partners */}
      {/* TODO: Add the development partners component */}

      {/* Participating Schools */}
      {/* TODO: Add the participating schools component */}
      <div className="tw-bg-white tw-h-32"></div>

      {/* Getting Involved */}
      <GettingInvolved />
      <div className="tw-bg-white tw-h-32 tw-mb-8 tw-gap-4 tw-flex tw-justify-center tw-items-center tw-flex-col">
        <div className="tw-flex tw-flex-row tw-gap-8">
          <a
            href="https://www.nsf.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="d-block mx-auto landingpage__logo"
              src={nsf}
              alt="National Science Foundation"
            />
          </a>
          <a
            href="https://www.rit.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className=" d-block mx-auto landingpage__logo"
              src={rit}
              alt="Rochester Institute Of Technology"
            />
          </a>
        </div>
        <p>Available under the Federal Government License</p>
      </div>


      <MainFooter />
    </div>
  );
};

export default Home;
