import React, {useEffect,useState } from "react";
import Profile from "./Profile";
import TeamMemberService from "../../../../services/TeamMemberService";
import Spinner from "../../../../common/Spinner/Spinner";
import SlideSet from "./SlideSet";



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
  
  const ProfileGeneration = (props) =>{
    //const {}=props;
    const [professorInformation,setProfessorInformation] = useState(null);
    const [teamInformation,setTeamInformation] = useState(null);

    useEffect(()=>{
        if(!professorInformation){
            TeamMemberService.getAllProfessors().then((data)=>{
                setProfessorInformation(data)
            })
        }
        if(!teamInformation){
            TeamMemberService.getAllTeamMembers().then((data)=>{
                setTeamInformation(data)
            })
        }
        // eslint-disable-next-line
    },[])
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
              {!professorInformation && !teamInformation ? 
                    <div className="landingpage__row">
                        <Spinner />
                    </div>:
                    <>
              <div className="landingpage__row">
                <div alt="professors" className="landingpage__row">
                  {renderProfileData(professorInformation)}
                </div>
              </div>
              <div className="landingpage__row">
                <SlideSet teamInformation={teamInformation} renderProfileData={renderProfileData}/>
              </div>
              </>}
          </div>
        </section>
     );
  }

export default ProfileGeneration;