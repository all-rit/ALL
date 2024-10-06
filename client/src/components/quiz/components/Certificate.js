/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { connect } from "react-redux";
import { actions as appActions } from "../../../reducers/lab1/AppReducer";
import { bindActionCreators } from "redux";
import logo from "../../../assets/images/logos/FinalALLLogo.png";
import { Sections } from "../../../constants/index";
import PropTypes from "prop-types";

const mapStateToProps = (state) => {
  return {
    // General
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(appActions, dispatch),
});

class Certificate extends Component {
  getColor = () => {
    let score = this.props.quizResult;
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
    // console.log(this.props);
    const { state, isImagine } = this.props;
    const today = new Date();
    // console.log(state.exercise.results);
    const date =
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          padding: "20px",
          border: "10px solid #787878",
          borderRadius: "28px",
          backgroundColor: "white",
        }}
      >
        <div
          className="tw-rounded-3xl"
          style={{ width: "100%", height: "auto", border: "5px solid #787878" }}
        >
          <div style={{ width: "50%", margin: "auto" }}>
            <span
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Certificate of Completion
            </span>
          </div>
          <br />
          <br />
          <span
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
          </span>
          <br />
          <br />
          <span
            style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}
          >
            {isImagine ? (
              <p style={{ fontSize: "50px", textAlign: "center" }}>
                Empathy Immersion
              </p>
            ) : (
              Sections[this.props.lab].fullname
            )}
          </span>{" "}
          <br />
          <br />
          <span
            style={{ fontSize: "25px", textAlign: "center", padding: "20px" }}
          >
            with a score of{" "}
            <b style={{ color: this.getColor() }}>{this.props.quizResult}</b>
          </span>{" "}
          <br />
          <br />
          <span
            style={{ fontSize: "25px", textAlign: "center", padding: "20px" }}
          >
            <i>Completed on:</i>
          </span>
          <br />
          <span
            style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}
          >
            {date}
          </span>
          <br />
          <br />
          <div className="p-3 tw-bg-labGray tw-rounded-b-2xl">
            <img
              src={logo}
              alt="logo"
              style={{
                height: "140px",
                width: "500px",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Certificate.propTypes = {
  quizResult: PropTypes.string,
  state: PropTypes.shape({
    main: PropTypes.shape({
      user: PropTypes.number,
    }),
  }),
  isImagine: PropTypes.bool,
  lab: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Certificate);
