/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { connect } from "react-redux";
import { actions as appActions } from "../../../reducers/lab1/AppReducer";
import { bindActionCreators } from "redux";
import logo from "../../../assets/images/logos/ALL_White.svg";
import { Sections } from "../../../constants/index";
import PropTypes from "prop-types";
import ALLButton from "../../all-components/ALLButton";

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
    const { state, isImagine, lab, setViewCertificate } = this.props;
    const today = new Date();
    const date =
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
    return (
      <div
        className={
          "tw-flex tw-flex-col tw-align-middle tw-justify-center tw-items-center tw-gap-y-4 tw-max-h-[37rem] tw-overflow-y-scroll"
        }
      >
        <div
          className={
            "tw-w-3/5 tw-flex tw-flex-row tw-align-middle tw-justify-center tw-items-center tw-mt-[3rem]"
          }
        >
          <div className="tw-rounded-xl tw-w-full tw-border-solid tw-border-[0.75rem] tw-border-primary-blue">
            <div className={"tw-py-6"}>
              <span className={"tw-title-styling-name"}>
                Certificate of Completion
              </span>
            </div>
            <span
              className={
                "tw-text-[1.25rem] tw-text-center tw-pb-[2rem] tw-font-calibri tw-font-normal"
              }
            >
              {state.main.user !== null && state.main.user.firstname ? (
                <p>
                  This is to certify that <b>{state.main.user.firstname}</b> has
                  completed the course:
                </p>
              ) : (
                <p>This is to certify that you have completed the course:</p>
              )}
            </span>
            <br />
            <span className={"tw-title-styling-name tw-text-[1.5rem]"}>
              {isImagine ? (
                <p style={{ fontSize: "50px", textAlign: "center" }}>
                  Empathy Immersion
                </p>
              ) : (
                Sections[lab].fullname
              )}
            </span>{" "}
            <br />
            <br />
            <p
              className={
                "tw-text-[1.25rem] tw-text-center tw-pb-[1rem] tw-font-calibri tw-font-normal"
              }
            >
              with a score of{" "}
              <b style={{ color: this.getColor() }}>{this.props.quizResult}</b>
            </p>{" "}
            <span
              className={
                "tw-text-[1.25rem] tw-text-center tw-pb-[2rem] tw-font-calibri tw-font-normal"
              }
            >
              <i>Completed on:</i>
            </span>
            <br />
            <span
              className={
                "tw-text-[1.50rem] tw-text-center tw-pb-[2rem] tw-font-calibri tw-font-normal"
              }
            >
              {date}
            </span>
            <br />
            <br />
            <div className=" tw-bg-primary-blue">
              <img src={logo} alt="logo" className={"tw-w-[40%]"} />
            </div>
          </div>
        </div>
        <ALLButton
          label={"View Results"}
          onClick={() => setViewCertificate(false)}
        />
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
  setViewCertificate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Certificate);
