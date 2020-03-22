import React from "react";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

const About = ({ title, description, links }) => {
  if (links === undefined) {
    links = [null, null, null];
  }

  return (
    <div class="container">
      <section class="page-section" style={{ paddingBottom: "25px" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <br />
              <br />
              <h2 class="section-heading text-uppercase">
                Treasure Hunter: About
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div class="row">
        In this lab, you will learn about why it is important to create software
        that is accessible to users with hearing impairments.
        You will learn how organizations like the National Association of the Deaf (NAD)
        fought for easier access for hearing impaired individuals,
        utilize your knowledge in a game about hearing impairments,
        watch several related videos, and take a quiz. Click "Next" to start!
      </div>
    </div>
  );
};

export default About;
