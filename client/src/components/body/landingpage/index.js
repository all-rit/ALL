import React from "react";
import "../../../assets/stylesheets/pages/LandingPage.scss"
import eye from "../../../assets/images/labs/eye.jpg";
import ear from "../../../assets/images/labs/ear.jpg";
import cognitive from "../../../assets/images/labs/cognitiveimpairment.jpg";
import braille from "../../../assets/images/labs/braille.jpg";
import hand from "../../../assets/images/labs/hand.jpg";
import nsf from "../../../assets/images/logos/nsf.png";
import rit from "../../../assets/images/logos/RIT.png";
import handleRedirect from "../../../helpers/Redirect";
import {actions as mainActions} from "../../../reducers/MainReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

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
            Welcome to the Accessibility Learning Labs (ALL) Project!
          </div>
          <div class="intro-heading text-uppercase">
            Learn about Accessibility
          </div>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" id={"tell-me-more-btn"} href="#goals">
            Tell Me More
          </a>
        </div>
      </div>
    </header>
    {/* Services */}
    <section class="page-section landingpage__pagesection" id="goals">
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
    <hr class="horiz" />
    {/* Portfolio Grid */}
    <section class="page-section landingpage__pagesection" id="labs">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Labs</h2>

            <h3 class="section-subheading " >
              Explore the available labs below.
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 portfolio-item">
            <a
              class="portfolio-link"
              onClick={() => handleRedirect(actions,1)}
              href="# "

            >
              <img
                class="img-fluid landingpage__image"
                src={ear}
                alt="Deaf and Hard of Hearing Activity Thumbnail"
              />
              {/* <!--Image= https://www.pikrepo.com/fiyzt/left-human-ear--> */}
            </a>
            <div class="portfolio-caption">
              <h4>
                <a onClick={() => handleRedirect(actions,1)} href="# "
                  >Accessibility to Sound and Speech</a>
              </h4>
              <p class="">
                Learn about designing the web for the Deaf and Hard-of-Hearing community.
              </p>
            </div>
          </div>
          <div
           class="col-md-4 offset-md-4 portfolio-item">
            <a
              class="portfolio-link"
              onClick={() => handleRedirect(actions,2)}
              href="# "
            >
              <img
                class="img-fluid landingpage__image"
                src={eye}
                alt="Color Blindness Activity Thumbnail"
              />
              {/* <!--Image= https://commons.wikimedia.org/wiki/File:Human_eye_iris_5.jpg--> */}
            </a>
            <div class="portfolio-caption">
              <h4>
                <a onClick={() => handleRedirect(actions,2)} href="# "
                >Accessibility to Color Blindness
                </a>
              </h4>
              <p class="">
                Learn more about designing the web for color blind individuals.
              </p>
            </div>
          </div>
          </div>

          <div class="row">
            <div class="col-md-4 portfolio-item">
              <a
                class="portfolio-link"
                onClick={() => handleRedirect(actions,3)}
                href="# "
              >
                <img
                  class="img-fluid landingpage__image"
                  src={braille}
                  alt="Screen Reader Activity Thumbnail"
                />
                {/* <!--Image= https://www.flickr.com/photos/quinnanya/4698378320/sizes/l/--> */}
              </a>
              <div class="portfolio-caption">
                <h4>
                  <a onClick={() => handleRedirect(actions,3)} href="# "
                  >Accessibility with Screen Readers</a
                  >
                </h4>
                <p class="">
                  Learn more about Screen Readers.
                </p>
              </div>
            </div>
            <div
             class="col-md-4 offset-md-4 portfolio-item">
              <a
                class="portfolio-link"
                onClick={() => handleRedirect(actions,4)}
                href="# "
              >
                <img
                  class="img-fluid landingpage__image"
                  src={hand}
                  alt="Dexterity activity Thumbnail"
                />
                {/* --Image= https://www.needpix.com/photo/1179306/hand-finger-symbol-gesture-characters-note-show-exhort-suggest-- */}
              </a>
              <div class="portfolio-caption">
                <h4>
                  <a
                    onClick={() => handleRedirect(actions,4)} href="# "
                    >Accessibility to Dexterity</a
                  >
                </h4>
                <p class="">
                  Learn more about designing the web for individuals with motor and dexterity impairments.
                </p>
              </div>
            </div>
            </div>
            <div class="row">
              <div
                  className="col-md-4 portfolio-item">
                <a
                    className="portfolio-link"
                    onClick={() => handleRedirect(actions, 5)}
                    href="# "
                >
                  <img
                      className="img-fluid landingpage__image"
                      src={cognitive}
                      alt="Cognitive Accessibility Thumbnail"
                  />
                  {/* <!--Image= https://compote.slate.com/images/fb3403a0-6ffc-471a-8568-b0f01fa3bd6b.jpg?width=960--> */}
                </a>
                <div className="portfolio-caption">
                  <h4>
                    <a onClick={() => handleRedirect(actions, 5)} href="# "
                    >Accessibility to Cognitive Impairments
                    </a>
                  </h4>
                  <p className="">
                    Learn more about designing the web for cognitively impaired users.
                  </p>
                </div>
              </div>
              <div
                  className="col-md-4 offset-md-4 portfolio-item">
              {/*  Placeholder*/}
              </div>
            </div>
      </div>
    </section>
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
              Connect with us if you have questions. Contact Dr. Daniel Krutz at
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
