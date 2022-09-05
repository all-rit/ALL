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
        <h4>Here is some supplemental material to reinforce the topic.</h4>
      </div>
      {reinforcement.map((data) => {
        return (
          <>
            <div className="row">
              <iframe
                title={data.title}
                width="560"
                height="315"
                src={data.link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="row">
              <p>{data.title}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Reinforcement;
