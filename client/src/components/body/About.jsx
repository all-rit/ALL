/* eslint-disable react/prop-types */
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
    <div className={"xs:tw-w-full tw-flex tw-flex-row tw-bg-white"}>
      <div className=" tw-p-[3rem] xs:tw-w-full ">
        <div className="tw-text-left tw-text-justify">
          <p className={"tw-font-bold tw-font-poppins md:tw-title tw-pb-6"}>
            {" "}
            About This Lab
          </p>
          <p className={"tw-font-medium tw-body-text"}>{aboutText?.about}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
