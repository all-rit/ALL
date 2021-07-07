import React, { Component } from "react";
import Profile from "./Profile";
import studentInformation from "./studentInfomation";
import professorInformation from "./professorInformation";

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
    componentDidMount() {
        clearInterval(slideshowInterval);
        slideshowInterval='';
        slideshows = document.querySelectorAll('[data-component="slideshow"]');
        slideshows.forEach(initSlideShow);
    }

    componentWillUnmount() {
        clearInterval(slideshowInterval);
        slideshowInterval='';
    }
    
    render(){
        return(
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
        );
    }
}

export default ProfileGeneration;