import React, {useEffect} from "react";

import {LAB_ID} from '../../../constants/lab1';
import UserLabService from '../../../services/UserLabService';
const Video = ({ link, title }) => {
    useEffect(() => {
        return () => {
            UserLabService.complete_video(LAB_ID);
        }
    });
  return (
    <div className="container">
      <section className="page-section" style={{ paddingBottom: "25px" }}>
          <div className="row">
            <div className="col-lg-12 text-center">
              <br />
              <br />
              <h2 className="section-heading text-uppercase">
                Treasure Hunter: Video
              </h2>
            </div>
          </div>
      </section>
      <div className="row">
        <h4>Here are some videos to aid in understanding the material.</h4>
      </div>
      <div className="row">
        <iframe
          title="Audio Cues"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vU_Di8EtF3M"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="row">
        <p>Audio Cues</p>
      </div>
      <div className="row">
        <iframe
          title="Audio Cues Lecture"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Wlf8A0w66o0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="row">
        <p>Audio Cues Lecture</p>
      </div>
    </div>
  );
};

export default Video;
