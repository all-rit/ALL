import React, { Component } from "react";
import { connect } from "react-redux";
import { actions as appActions } from "../../../reducers/lab1/AppReducer";
import { bindActionCreators } from "redux";
import logo from "../../../assets/images/logos/ALL_White.svg";
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
    const { state, isImagine, lab } = this.props;
    const today = new Date();
    const date =
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
    return (
      <div
        className={
          "tw-flex tw-flex-col tw-align-middle tw-justify-center tw-items-center tw-gap-y-4 tw-p-6"
        }
      >
        <div
          className={
            "tw-w-full tw-flex tw-flex-row tw-align-middle tw-justify-center tw-items-center"
          }
        >
          <div className="tw-rounded-xl tw-w-full tw-border-solid tw-border-[0.75rem] tw-border-primary-blue tw-bg-white">
            <div className={"tw-py-6"}>
              <p
                className={
                  "tw-title xs:tw-text-[1.125rem] md:tw-text-[2rem] tw-text-center"
                }
              >
                Certificate of Completion
              </p>
            </div>
            <div className={"tw-body-text tw-text-center tw-pb-[2rem]"}>
              {state.main.user !== null && state.main.user.firstname ? (
                <p>
                  This is to certify that <b>{state.main.user.firstname}</b> has
                  completed the course:
                </p>
              ) : (
                <p>This is to certify that you have completed the course:</p>
              )}
            </div>
            <br />
            <div
              className={
                "tw-title xs:tw-text-[1.125rem] md:tw-text-[2rem] tw-text-center tw-w-full"
              }
            >
              {isImagine ? <p>Empathy Immersion</p> : Sections[lab].fullname}
            </div>{" "}
            <br />
            <br />
            <p className={"tw-body-text tw-text-center tw-pb-[1rem]"}>
              with a score of{" "}
              <b style={{ color: this.getColor() }}>{this.props.quizResult}</b>
            </p>{" "}
            <div
              className={"tw-body-text tw-text-center tw-pb-[2rem] tw-w-full"}
            >
              <i>Completed on:</i>
              <p
                className={
                  "tw-text-[1.50rem] tw-text-center tw-pb-[2rem] tw-font-calibri tw-font-normal"
                }
              >
                {date}
              </p>
            </div>
            <div className=" tw-bg-primary-blue tw-flex tw-justify-center">
              <img src={logo} alt="logo" className={"tw-w-[40%]"} />
            </div>
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
  setViewCertificate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Certificate);
