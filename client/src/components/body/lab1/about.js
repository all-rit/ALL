import React, {useEffect} from "react";
import "../../../assets/stylesheets/components/App.scss"
import {LAB_ID} from '../../../constants/lab1';
import UserLabService from '../../../services/UserLabService';

const About = ({ title, description, links }) => {
  if (links === undefined) {
    links = [null, null, null];
  }
  useEffect(() => {
      return () => {
          UserLabService.complete_about(LAB_ID);
      }
  });

  return (
    <div className="container">
      <section className="page-section" style={{ paddingBottom: "25px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <br />
              <br />
              <h2 className="section-heading text-uppercase">
                Treasure Hunter: About
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="study">
      <p>
        In this lab, you will learn why it is important to create software
        that is accessible to users with hearing impairments.
        You will learn how organizations like the National Association of the Deaf (NAD)
        fought for easier access for hearing impaired individuals,
        increase your understanding through an interactive module about hearing impairments,
        watch related videos, and take a quiz to test your knowledge. Click "Next" to start!
      </p>
      </div>
    </div>
  );
};

export default About;
