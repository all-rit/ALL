/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import useScroll from "../../use-hooks/useScroll";
import LabService from "../../services/LabService";
import UserLabService from "../../services/UserLabService";
import Spinner from "../../common/Spinner/Spinner";

const Reinforcement = (props) => {
  const { user, labID } = props;
  const [reinforcement, setReinforcement] = useState("");
  useScroll();
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
    <div>
      <div className="row">
        <h4 className="tw-font-bold">
          Here is some supplemental material to reinforce the topic.
        </h4>
      </div>
      <div className="tw-position-relative tw-bg-labYellow tw-rounded-3xl shadow">
        {reinforcement.map((data) => {
          return (
            <div
              className="tw-position-absolute tw-rounded-3xl shadow p-3 m-3 tw-bg-labLightGray questionContainer"
              key={data.key}
            >
              <div className="row">
                <p className="tw-font-bold">{data.title}</p>
              </div>
              <div className="row">
                <iframe
                  className="tw-rounded-4xl"
                  title={data.title}
                  width="75%"
                  height="400"
                  src={data.link}
                  frameBorder="0"
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
