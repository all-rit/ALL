import React, {useEffect} from "react";
import {LAB_ID} from '../../../constants/lab3';
import UserLabService from '../../../services/UserLabService';
const Reinforcement = (props) => {
    const {user}=props;
    useEffect(() => {
        return () => {
            UserLabService.complete_reinforcement(LAB_ID);
            if(user.firstname !== null){
              UserLabService.user_complete_reinforcement(user.userid,LAB_ID);
            }
        }
    }, [user]);
  return (
      <div>
      <div className="row">
        <h4>Here is some supplemental material to reinforce the topic.</h4>
      </div>
      <div className="row">
        <iframe
    title="Accessibility for Blind/Visually-Impaired Users"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/1by5J7c5Vz4"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    />
      </div>
      <div className="row">
        <p>Accessibility for Blind/Visually-Impaired Users</p>
      </div>
      <div className="row">
        <iframe
    title="How a blind developer uses accessibility features in Visual Studio"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/94swlF55tVc?"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    />
      </div>
      <div className="row">
        <p>How a blind developer uses accessibility features in Visual Studio</p>
      </div>
    </div>
  );
};

export default Reinforcement;
