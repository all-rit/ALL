import React, {useState} from "react";
import "../../../assets/stylesheets/pages/LandingPage.scss"
import nsf from "../../../assets/images/logos/nsf.png";
import rit from "../../../assets/images/logos/RIT.png";
import handleRedirect from "../../../helpers/Redirect";
import {actions, actions as mainActions} from "../../../reducers/MainReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Profile from "./citation/Profile";
import studentInformation from "./citation/studentInfomation";
import professorInformation from "./citation/professorInformation";
import labInformation from "./lab/labInformation";
import Lab from "./lab/lab";
import ReactCardFlip from 'react-card-flip';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch)
  };
};

// function renderProfileComponent(key) {
//   return (
//       <Profile 
//           profile_image= {ear} 
//           name= {key.name} 
//           title= {key.title} 
//           bio={key.bio}
//       />
//   );
// }

function renderProfileData(profileInformation) {
  return profileInformation.map((profileInfo, index) => {
      const {profile_image, name,title,bio,socials} = profileInfo //destructuring
      return (
              
              <Profile 
                  key={index}
                  profile_image= {profile_image} 
                  name= {name} 
                  title= {title} 
                  bio={bio}
                  socials={socials}
              />
      );
  })
}


function renderLabData() {
  return labInformation.map((labInfo, index) => {
    const { alt,lab, name, bio , image} = labInfo //destructuring
      return (
              
              <Lab 
                  key={index}
                  alt= {alt} 
                  lab={lab}
                  name= {name} 
                  bio={bio}
                  image= {image} 
                  actions={actions}
              />
      );
  })
}


const Home = (props) => {
  const {actions} = props;
  const [isFlipped,setIsFlipped] = useState(false);
  function renderStudentCards(){
    let profiles = renderProfileData(studentInformation);
    let rows =[];
    let profile_cards=[];
    for(let i in profiles){
      profile_cards.push(profiles[i]);
      if(profile_cards.length ===2){
        rows.push(profile_cards);
        let temp=[];
        profile_cards=temp;
      } 
    }
    if(profile_cards.length!==0){
      rows.push(profile_cards);
    }
    return rows.map((rows,index)=>{
      return (
        <ReactCardFlip key = {index} flipSpeedBackToFront={4} flipSpeedFrontToBack={4} isFlipped={isFlipped} flipDirection="horizontal">
          {rows[0]}
          {rows[1]}
        </ReactCardFlip>
      )})
  }
  const handleFlip=()=>{
    setIsFlipped(!isFlipped);
  }
  setInterval(handleFlip, 7500);
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
        <div class="landingpage__row">
            {renderLabData()}
        </div>
      </div>
    </section>
     {/* Team Citation */}
     <hr class="horiz" />
    <section class="page-section landingpage__pagesection" id="citation">
      <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Team Members</h2>

              <h3 class="section-subheading " >
                Meet Our Team of Developers
              </h3>
            </div>
          </div>
          <div alt="professors"class="landingpage__row">
            {renderProfileData(professorInformation)}
          </div>
          <div alt="students" class="landingpage__row">
            {renderStudentCards()}
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
