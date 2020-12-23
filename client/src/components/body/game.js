import React, { Component } from "react";
import "./../../assets/stylesheets/main.scss";
import "../../assets/stylesheets/components/css/style.css";
import "../../assets/stylesheets/components/css/agency.min.css";

import { connect } from "react-redux";

import Main from "./../../pages/Main";

class Game extends Component {
  render() {
    return (
      <div className="container">
        <section className="page-section" style={{ paddingBottom: "0" }}>
          <div className="container">
            <div className="row no-margin">
              <div className="col-lg-12 text-center">
                <br />
                <br />
                <h2 className="section-heading text-uppercase">
                  Treasure Hunter: Game
                </h2>
              </div>
            </div>  
          </div>
        </section>
        <div className="row">
          <Main path="/" />
        </div>
      </div>
    );
  }
}
export default connect(null)(Game);
