import React, {useEffect,useState} from "react";
import LabService from "../../services/LabService";
import UserLabService from "../../services/UserLabService";

const About = (props) => {
  const {user,labID} = props;
  const [aboutText,setAboutText] = useState('');
  useEffect(() => {
      return () => {
          if(user?.firstname !== null && user!==null){
            UserLabService.user_complete_about(user.userid,labID);
          }
          UserLabService.complete_about(labID);
          LabService.getLabAbout(labID).then((data)=>{
            setAboutText(data[0])
          })
      }
  }, [user,labID]);

  return (
      <div className="study">
        <p>
          {aboutText?.aboutPage}
        </p>
      </div>
  );
};

export default About;
