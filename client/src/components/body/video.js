import React, {useEffect} from "react";

import {LAB_ID} from '../../constants';
import UserLabService from '../../services/UserLabService';
const Video = ({ link, title }) => {
    useEffect(() => {
        return () => {
            UserLabService.complete_video(LAB_ID);
        }
    });
  return (
    <div class="container">
      <section class="page-section" style={{ paddingBottom: "25px" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <br />
              <br />
              <h2 class="section-heading text-uppercase">
                Treasure Hunter: Video
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div class="row">
        <h4>Here are some videos to aid in understanding the material.</h4>
      </div>
      <div class="row">
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
      <div class="row">
        <p>Audio Cues</p>
      </div>
      <div class="row">
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
      <div class="row">
        <p>Audio Cues Lecture</p>
      </div>
    </div>
  );
};

export default Video;
