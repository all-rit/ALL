import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import TeamMemberService from "../../../../services/TeamMemberService";
import Spinner from "../../../../common/Spinner/Spinner";
import SlideSet from "./SlideSet";



function renderProfileData(profileInformation) {
  return profileInformation.map((profileInfo, index) => {
    const { imageURL, firstName, lastName, title, work, datesActive, websiteURL, network, socials } = profileInfo //destructuring
    return (
      <Profile
        key={index}
        profile_image={imageURL}
        name={firstName + " " + lastName}
        title={title}
        work={work}
        datesActive={datesActive}
        socials={socials}
        website={websiteURL}
        network={network}
      />
    );
  })
}

const ProfileGeneration = (props) => {
  const [professorInformation, setProfessorInformation] = useState(null);
  const [teamInformation, setTeamInformation] = useState(null);
  const [alumniInformation, setAlumniInformation] = useState(null);

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
        if(!alumniInformation){
          TeamMemberService.getAllAlumni().then((data)=>{
                setAlumniInformation(data)
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
                  <div className="landingpage__row">
                    <div alt="professors" className="landingpage__row">
                      {!professorInformation ? <Spinner />:
                        <>
                          {professorInformation ? renderProfileData(professorInformation) : <Spinner />}
                        </> 
                      }
                    </div>
                  </div>
                  <div className="landingpage__row">
                    {!teamInformation ? <Spinner />:
                      <>
                        {teamInformation ? <SlideSet teamInformation={teamInformation} renderProfileData={renderProfileData} /> : <Spinner />}
                      </> 
                    }
                  </div>
                  <div className="alumni-row">
                    <div className="col-lg-12 text-center">
                      <h2 className="section-heading text-uppercase">Alumni</h2>
                      <h3 className="section-subheading " >
                        Meet the past members of our team.
                      </h3>
                    </div>
                  </div>
                  <div className="landingpage__row">
                  {!alumniInformation ? <Spinner />:
                      <>
                        {alumniInformation ? <SlideSet teamInformation={alumniInformation} renderProfileData={renderProfileData} /> : <Spinner />}
                      </> 
                    }
                  </div>
          </div>
      </section>
  );
}

export default ProfileGeneration;