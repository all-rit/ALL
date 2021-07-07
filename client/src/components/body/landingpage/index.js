import React from "react";
import nsf from "../../../assets/images/logos/nsf.png";
import rit from "../../../assets/images/logos/RIT.png";
import handleRedirect from "../../../helpers/Redirect";
import {actions as mainActions} from "../../../reducers/MainReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import LabGeneration from "./lab/LabGeneration";
import ProfileGeneration from "./citation/ProfileGeneration";

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch)
  };
};

const Home = (props) => {
  
  const {actions} = props;
  return (
    <div class="landingpage">
      {/* Header */}
        <header class="masthead">
        <div class="container">
          <div class="intro-text">
            <div class="intro-lead-in">
              Welcome to the Accessible Learning Labs (ALL) Project!
            </div>
            <div class="intro-heading text-uppercase" >
              Learn about Accessibility
            </div>
            <div id="goals"/>
          </div >
        </div>
      </header>
      {/* Goals */}
      <section class="page-section landingpage__pagesection" >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Lab Goals</h2>
              <h3 class="section-subheading lab-section-subheading">
                To provide activities that incorporate accessibility education and accessible design.
              </h3>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <h5 class="service-heading landingpage__leftalign" >
                Create easily adoptable labs (only a browser is needed)
              </h5>
            </div>
  
            <div class="vertical-line col-md-4 ">
              <h5 class="service-heading landingpage__leftalign" >
                Inform students how to create accessible software
              </h5>
            </div>
  
            <div class="vertical-line col-md-4 ">
              <h5 class="service-heading landingpage__leftalign">
                Demonstrate the importance of creating accessible software
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* Labs */}
      <div id="labs"/>
      <hr class="horiz" />
      <section class="page-section landingpage__pagesection">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Labs</h2>
  
              <h3 class="section-subheading " >
                Explore the available labs below.
              </h3>
            </div>
          </div>
          <div class="landingpage__row">
              <LabGeneration actions={actions}/>
          </div>
        </div>
      </section>
      {/* Team Citation */}
      <div id="citation"/>
      <hr class="horiz" />
        <ProfileGeneration />
      <hr class="horiz" />
      {/* Clients */}
      <section class="py-5">
        <div class="container">
          <div
            class="row landingpage__logos"
          >
            <div class="col-sm-4">
              <a href="https://www.nsf.gov" target="_blank" rel="noopener noreferrer">
                <img
                  class="d-block mx-auto landingpage__logo"
                  src={nsf}
                  alt="National Science Foundation"
                />
              </a>
            </div>
            <div class="col-sm-4 landingpage__ritlogo">
              <a href="https://www.rit.edu" target="_blank" rel="noopener noreferrer">
                <img
                  class=" d-block mx-auto landingpage__logo"
                  src={rit}
                  alt="Rochester Institute Of Technology"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section class="page-section landingpage__pagesection" id="contact">
        <div class="container">
          <div class="row contact">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Contact Us</h2>
              <h3 class="section-subheading" id={"connect-text"}>
                Connect with us if you have questions. <br/><br/>
                Contact Dr. Daniel Krutz at
                <a class="landingpage__contact" href="mailto:aware@mail.rit.edu "> aware@mail.rit.edu</a>
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer class="footer">
        <ul class="list-inline quicklinks">
          <li class="list-inline-item">
            <a
              href="https://www.nsf.gov/pubs/2016/nsf16009/nsf16009.jsp#q37" target="_blank" rel="noopener noreferrer"
              >Available under the Federal Government License</a
            >
          </li>
          <li>
            <a onClick={() => handleRedirect(actions,0,1)} href="# ">
              Site Map
            </a>
          </li>
        </ul>
      </footer>
      </div>
    );
  };
  
  export default connect(
      null, mapDispatchToProps
  )(Home);