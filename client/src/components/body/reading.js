import React, {useEffect} from "react";
import "../../assets/stylesheets/components/css/agency.min.css";
import "../../assets/stylesheets/components/css/style.css";
import CaseStudy from "../../pages/CaseStudy";
import {LAB_ID} from '../../constants';
import UserLabService from '../../services/UserLabService';

const Reading = ({ title, description, links }) => {
  if (links === undefined) {
    links = [null, null, null];
  }
  useEffect(() => {
    return () => {
      UserLabService.complete_reading(LAB_ID);
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
                Treasure Hunter: Reading
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div>
        <CaseStudy />
      </div>
    </div>
  );
};

export default Reading;
