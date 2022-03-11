import React, { useEffect } from "react";
import useScroll from "../../../use-hooks/useScroll";
import {LAB_ID} from '../../../constants/lab7';
import UserLabService from '../../../services/UserLabService';
const Reinforcement = (props) => {
    const {user}=props;
    useScroll();
    useEffect(() => {
        return () => {
            UserLabService.complete_reinforcement(LAB_ID);
            if(user?.firstname !== null && user!==null){
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
          title="title"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9XiHhQikNrY"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="row">
        <p>Heading</p>
      </div>
      <div className="row">
        <iframe
          title="title"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OknYVKtn-Cc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="row">
        <p>
          Cybersecurity AI - An Introduction to Machine Learning and
          Autonomous Systems
        </p>
      </div>
    </div>
  );
};

export default Reinforcement;
