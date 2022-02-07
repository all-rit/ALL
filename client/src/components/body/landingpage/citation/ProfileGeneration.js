import React, { Component } from "react";
import Profile from "./Profile";
import TeamMemberService from "../../../../services/TeamMemberService";


function renderProfileData(profileInformation) {
    return profileInformation.map((profileInfo, index) => {
        const {imageURL, firstName,lastName,title,work,datesActive,websiteURL,network,socials} = profileInfo //destructuring
        return (
                <Profile 
                    key={index}
                    profile_image= {imageURL} 
                    name= {firstName +" "+lastName} 
                    title= {title} 
                    work={work}
                    datesActive={datesActive}
                    socials={socials}
                    website={websiteURL}
                    network={network}
                />
        );
    })
  }

function renderSlideset(information){
    let profiles = renderProfileData(information);
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
        <div key={index} alt="students" className="slide active">
            <div key={index} alt="students" className="landingpage__row">
              {rows}
            </div>
        </div>
      )})
}

let slideshowInterval='';
let slideshows='';

function initSlideShow(slideshow) {
    const slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
    let index = 0, time = 5000;
    if(slideshowInterval===''){
      slides.forEach((slide)=>{
        slide.classList.remove('active');
      })
      slides[index].classList.add('active');
        slideshowInterval= setInterval( () => {
                slides[index].classList.remove('active');
                index++;
                if (index === slides.length) index = 0;
                slides[index].classList.add('active');
        }, time)
  }
} 

class ProfileGeneration extends Component{
    constructor(props) {
      super(props);
      this.state = {teamInformation: [],professorInformation:[]};
    }

    setTeamInformation=(data)=>{
      this.setState({teamInformation: data})
    }
    setProfessorInformation=(data)=>{
      this.setState({professorInformation: data})
    }

    componentDidMount() {
        if(this.state.professorInformation.length===0){
          async function fetchProfessors() {
              return TeamMemberService.getAllProfessors();
          }
          fetchProfessors().then((data) => {
            this.setProfessorInformation(data);
          });
        }
        if(this.state.teamInformation.length===0){
          async function fetchTeam() {
              return TeamMemberService.getAllTeamMembers();
          }
          fetchTeam().then((data) => {
            this.setTeamInformation(data);
            slideshows = document.querySelectorAll('[data-component="slideshow"]');
            slideshows.forEach(initSlideShow);
          });
        }
        clearInterval(slideshowInterval);
        slideshowInterval='';
    }

    componentWillUnmount() {
        clearInterval(slideshowInterval);
        slideshowInterval='';
    }
    
    render(){
        return(
           <section className="page-section landingpage__pagesection" >
             <div className="container" >
                 <div className="row">
                   <div className="col-lg-12 text-center">
                     <h2 className="section-heading text-uppercase">Team Members</h2>
       
                     <h3 className="section-subheading " >
                       Meet our team.
                     </h3>
                   </div>
                 </div>
                 <div className="landingpage__row">
                   <div alt="professors" className="landingpage__row">
                     {renderProfileData(this.state.professorInformation)}
                   </div>
                 </div>
       
                 <div id="slideshow" alt="students" className="landingpage__row" data-component="slideshow">
                     <div role="list">
                       {renderSlideset(this.state.teamInformation)}
                     </div>
                 </div>
             </div>
           </section>
        );
    }
}

export default ProfileGeneration;