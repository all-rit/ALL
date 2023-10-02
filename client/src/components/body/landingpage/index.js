/* eslint-disable react/prop-types */
import React from "react";
import nsf from "../../../assets/images/logos/nsf.png";
import rit from "../../../assets/images/logos/RIT.png";
import handleRedirect from "../../../helpers/Redirect";
import { actions as mainActions } from "../../../reducers/MainReducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LabGeneration from "../lab/LabGeneration";
import ProfileGeneration from "./citation/ProfileGeneration";
import HorizontalLine from "../../../common/HorizontalLine/HorizontalLine";

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
              Welcome to the Accessible Learning Labs (ALL)!
            </div>
            <div id="goals" />
          </div>
        </div>
      </header>
      {/* Goals */}
      <section className="page-section landingpage__pagesection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Lab Goals</h2>
              <h3 className="section-subheading lab-section-subheading">
                To provide activities that incorporate accessibility education
                and accessible design.
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
      <div id="labs" />
      <HorizontalLine />

      <section className="page-section landingpage__pagesection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Labs</h2>

              <h3 className="section-subheading ">
                Explore the available labs below.
              </h3>
            </div>
          </div>
          <div className="landingpage__row">
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
      {/* Contact */}
      <section className="page-section landingpage__pagesection" id="contact">
        <div className="container">
          <div className="row contact">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading" id={"connect-text"}>
                Connect with us if you have questions. <br />
                <br />
                Contact Dr. Daniel Krutz at
                <a
                  className="landingpage__contact"
                  href="mailto:aware@mail.rit.edu "
                >
                  {" "}
                  aware@mail.rit.edu
                </a>
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <ul className="list-inline quicklinks">
          <li className="list-inline-item">
            <a
              href="https://www.nsf.gov/pubs/2016/nsf16009/nsf16009.jsp#q37"
              target="_blank"
              rel="noopener noreferrer"
            >
              Available under the Federal Government License
            </a>
          </li>
          <li>
            <a onClick={() => handleRedirect(actions, 0, 1)} href="# ">
              Site Map
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Home);
