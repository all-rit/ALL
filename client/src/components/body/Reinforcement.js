/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import LabService from "../../services/LabService";
import UserLabService from "../../services/UserLabService";
import Spinner from "../../common/Spinner/Spinner";

const Reinforcement = (props) => {
  const { user, labID } = props;
  const [reinforcement, setReinforcement] = useState("");
  useEffect(() => {
    UserLabService.complete_reinforcement(labID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_reinforcement(user.userid, labID);
    }
    LabService.getLabReinforcement(labID).then((data) => {
      setReinforcement(data[0].reinforcement);
    });
  }, [user, labID]);

  if (!reinforcement) {
    return (
      <div className="landingpage__row">
        <Spinner />
      </div>
    );
  }

  return (
    <div className={"tw-p-[3rem]"}>
      <h1 className={"tw-title tw-text-left"}>Reinforcement</h1>
      <h4 className="tw-font-bold tw-text-center p-3">
        Here is some supplemental material to reinforce the topic.
      </h4>
      <div className={"tw-overflow-y-scroll tw-overflow-x-hidden"}>
        {reinforcement.map((data, index) => {
          return (
            <div key={index}>
              <div className="row tw-w-full">
                <h5 className="tw-font-bold poppins">{data.title}</h5>
              </div>
              <div className="row tw-rounded-4xl">
                <iframe
                  title={data.title}
                  className={
                    "xs:tw-h-full md:tw-h-[30rem] xs:tw-w-3/4 md:tw-w-full tw-px-[5rem] tw-rounded-4xl"
                  }
                  src={data.link}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reinforcement;
