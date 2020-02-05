import React, { Component } from "react";
import "./../../assets/stylesheets/main.scss";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

import { connect } from "react-redux";

import Main from "./../../pages/Main";

class Game extends Component {
  render() {
    return (
      <div class="container">
        <section class="page-section" style={{ paddingBottom: "25px" }}>
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <br />
                <br />
                <h2 class="section-heading text-uppercase">
                  Treasure Hunter: Game
                </h2>
              </div>
            </div>
          </div>
        </section>
        <div class="row">
          <Main path="/" />
        </div>
      </div>
    );
  }
}
export default connect(null)(Game);
