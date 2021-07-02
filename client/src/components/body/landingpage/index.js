import React from "react";
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch)
  };
};

function renderProfileData(profileInformation) {
  return profileInformation.map((profileInfo, index) => {
      const {profile_image, name,title,bio,socials,network} = profileInfo //destructuring
      return (
              
              <Profile 
                  key={index}
                  profile_image= {profile_image} 
                  name= {name} 
                  title= {title} 
                  bio={bio}
                  socials={socials}
                  network={network}
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

function renderSlideset(){
  let profiles = renderProfileData(studentInformation);
  let rows =[];
  let profile_row=[];
  for(let i in profiles){
    profile_row.push(profiles[i]);
    if(profile_row.length ===3){
      rows.push(profile_row);
      profile_row=[];
    } 
  }
  if(profile_row.length!==0){
    rows.push(profile_row);
  }
  return rows.map((rows,index)=>{
    return(
      <div key={index} alt="students" class="slide active">
          <div key={index} alt="students" class="landingpage__row">
            {rows}
          </div>
      </div>
    )})
}

let slideshowInterval='';

function initSlideShow(slideshow) {
    const slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
    let index = 0, time = 5000;
    if(slideshowInterval===''){
      slides.forEach((slide)=>{
        slide.classList.remove('active');
      })
      slides[index].classList.add('active');
      slideshowInterval=setInterval( () => {
        slides[index].classList.remove('active');
        index++;
        if (index === slides.length) index = 0;
        slides[index].classList.add('active');
    }, time);
  }
} 


const Home = (props) => {
  
  const {actions} = props;
  let slideshows = document.querySelectorAll('[data-component="slideshow"]');
  slideshows.forEach(initSlideShow);
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
              {renderLabData()}
          </div>
        </div>
      </section>
      {/* Team Citation */}
      <div id="citation"/>
       <hr class="horiz" />
      <section class="page-section landingpage__pagesection" >
        <div class="container" >
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Team Members</h2>
  
                <h3 class="section-subheading " >
                  Meet our team.
                </h3>
              </div>
            </div>
            <div class="landingpage__row">
              <div alt="professors" class="landingpage__row">
                {renderProfileData(professorInformation)}
              </div>
            </div>
  
            <div id="slideshow" alt="students" class="landingpage__row" data-component="slideshow">
                <div role="list">
                  {renderSlideset()}
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