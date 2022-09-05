import React, { useEffect, useState } from "react";
import Spinner from "../../common/Spinner/Spinner";
import LabService from "../../services/LabService";
import UserLabService from "../../services/UserLabService";
import useScroll from "../../use-hooks/useScroll";

const About = (props) => {
  const { user, labID } = props;
  const [aboutText, setAboutText] = useState(null);

  useScroll();

  useEffect(() => {
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_about(user.userid, labID);
    }
    UserLabService.complete_about(labID);
    LabService.getLabAbout(labID).then((data) => {
      setAboutText(data[0]);
    });
  }, [user, labID]);

  if (!aboutText) {
    return (
      <div className="landingpage__row">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="study">
      <p>{aboutText?.about}</p>
    </div>
  );
};

export default About;
