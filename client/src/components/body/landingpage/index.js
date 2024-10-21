/* eslint-disable react/prop-types */
import React from "react";
import nsf from "../../../assets/images/logos/nsf.png";
import rit from "../../../assets/images/logos/RIT.png";
// import handleRedirect from "../../../helpers/Redirect";
import { actions as mainActions } from "../../../reducers/MainReducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LabGeneration from "../lab/LabGeneration";
import ProfileGeneration from "./citation/ProfileGeneration";
import HorizontalLine from "../../../common/HorizontalLine/HorizontalLine";
import MainFooter from "../../footer/mainFooter";

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

const Home = (props) => {
  const { actions } = props;
  return (
    <div className="landingpage">
      {/* Header */}
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading text-uppercase">
              Welcome to the <br /> Accessible Learning Labs (ALL)
            </div>
            <div />
          </div>
        </div>
      </header>
      {/* Goals */}
      <section className="page-section landingpage__pagesection" id="goals">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Lab Goals</h2>
              <h3 className="section-subheading lab-section-subheading">
                Accessible Learning Labs is an NSF funded initiative aimed at
                empowering inclusive software education and fostering STEM
                proficiency. We are dedicated to equipping users with the skills
                and knowledge to create accessible software solutions. Through
                our interactive and intuitive labs, we aim to make the internet
                a more equitable place for everyone.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <h5 className="service-heading landingpage__leftalign">
                Create easily adoptable labs (only a browser is needed)
              </h5>
            </div>

            <div className="vertical-line col-md-4 ">
              <h5 className="service-heading landingpage__leftalign">
                Inform students how to create accessible software
              </h5>
            </div>

            <div className="vertical-line col-md-4 ">
              <h5 className="service-heading landingpage__leftalign">
                Demonstrate the importance of creating accessible software
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* Labs */}
      <div />
      <HorizontalLine />

      <section
        className="tw-p-3 page-section landingpage__pagesection"
        id="labs"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> Labs</h2>

              <h3 className="section-subheading ">
                Explore the available labs below.
              </h3>
            </div>
          </div>
          <div className="landingpage__row md:lg:tw-flex md:lg:tw-grid-cols-3 md:lg:tw-justify-center sm:tw-grid-cols-2">
            <LabGeneration actions={actions} />
          </div>
        </div>
      </section>
      {/* Team Citation */}
      <div id="citation" />

      <HorizontalLine />

      <ProfileGeneration />
      <HorizontalLine />

      {/* Clients */}
      <section className="py-5">
        <div className="container">
          <div className="row landingpage__logos">
            <div className="col-sm-4">
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
            </div>
            <div className="col-sm-4">
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
          </div>
        </div>
      </section>
      <MainFooter />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Home);
