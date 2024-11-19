/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../../../../assets/images/logos/ALL_Logo.svg";

const mapStateToProps = (state) => {
  return {
    // General
    state: state,
  };
};

class UserCertificate extends Component {
  getColor = () => {
    let score = this.props.quizScore;
    score = parseFloat(score);
    switch (true) {
      case score <= 40:
        return "crimson";
      case score <= 70:
        return "orange";
      default:
        return "chartreuse";
    }
  };

  render() {
    const { state } = this.props;

    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          padding: "20px",
          border: "10px solid #787878",
        }}
      >
        <ul
          style={{ width: "100%", height: "auto", border: "5px solid #787878" }}
        >
          <ul style={{ width: "100%", margin: "auto" }}>
            <li
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                textAlign: "center",
                padding: "20px",
              }}
            >
              Certificate of Completion
            </li>
          </ul>
          <li
            style={{ fontSize: "25px", textAlign: "center", padding: "20px" }}
          >
            {state.main.user !== null && state.main.user.firstname ? (
              <i>
                This is to certify that <b>{state.main.user.firstname}</b> has
                completed the course:
              </i>
            ) : (
              <i>This is to certify that you have completed the course:</i>
            )}
          </li>
          <li
            style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}
          >
            {this.props.labName}
          </li>
          <li
            style={{ fontSize: "25px", textAlign: "center", padding: "20px" }}
          >
            with a score of{" "}
            <b style={{ color: this.getColor() }}>{this.props.quizScore}%</b>
          </li>
          <li
            style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}
          >
            {String(this.props.labCompletionTime).split("T")[0]}
          </li>
          <ul style={{ backgroundColor: "rgb(61, 61, 61)" }}>
            <li style={{ textAlign: "center" }}>
              <img
                src={logo}
                alt="logo"
                style={{
                  height: "120px",
                  width: "500px",
                  padding: "15px",
                }}
              />
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserCertificate);
