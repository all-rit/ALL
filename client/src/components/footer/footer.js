/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import "../../assets/stylesheets/components/css/colorPicker.css";
import { connect } from "react-redux";
import { actions as appActions } from "../../reducers/lab1/AppReducer";
import { actions as mainActions } from "../../reducers/MainReducer";
import { bindActionCreators } from "redux";
import {
  changeTSize,
  setTextColor,
  setBackgroundColor,
  onNextPageChangeTSize,
} from "./edit/editPage";
import handleRedirect from "../../helpers/Redirect";
import getExerciseState from "../../helpers/GetReducer";
import { navigate } from "@reach/router";

const mapStateToProps = (state) => {
  return {
    // General
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...appActions, ...mainActions }, dispatch),
  };
};
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 0,
      textColor: false,
      bgColor: false,
      displayColorPalette: false,
      backgroundColor: null,
      color: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.state.main.body !== this.props.state.main.body ||
      prevProps.state.main.lab !== this.props.state.main.lab
    ) {
      this.adjustSizeColor(this.state.fontSize);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  changeSize = (size) => {
    const state_size = this.state.fontSize;
    changeTSize(size);
    this.setState({ fontSize: state_size + size });
  };
  adjustSizeColor = (fontSize) => {
    for (let x = 0; x < Math.abs(fontSize); x++) {
      if (fontSize < 0) {
        onNextPageChangeTSize(-1);
      } else {
        onNextPageChangeTSize(1);
      }
    }
    if (this.state.color) {
      setTextColor(this.state.color);
    }
    if (this.state.backgroundColor) {
      setBackgroundColor(this.state.backgroundColor);
    }
  };

  navigateHome = () => {
    this.props.setQuizCompleted(false);
    navigate("/# ");
  };

  disappearNext = (count) => {
    return count >= 4;
  };
  disappearBack = (count) => {
    return count <= 0;
  };

  renderTextColorPalette = () => {
    this.setState({
      // displayColorPalette: !this.state.displayColorPalette,
      textColor: !this.state.textColor,
      bgColor: false,
    });
  };
  renderBgColorPalette = () => {
    this.setState({
      bgColor: !this.state.bgColor,
      textColor: false,
    });
  };

  OnTextColorChange(obj) {
    setTextColor(obj.color);
    this.setState({ color: obj.color });
  }

  OnBgColorChange(obj) {
    setBackgroundColor(obj.color);
    this.setState({ backgroundColor: obj.color });
  }

  handleClick(e) {
    if (this.state.textColor) {
      if (e.target.tagName === "HTML") {
        this.setState({
          textColor: false,
        });
      } else if (e.target.parentNode.className) {
        if (
          !e.target.parentNode.className.includes("rc-color-picker") &&
          e.target.id !== "changeTextColor"
        ) {
          this.setState({
            textColor: false,
          });
        }
      }
    }
    if (this.state.bgColor) {
      if (e.target.tagName === "HTML") {
        this.setState({
          bgColor: false,
        });
      } else if (e.target.parentNode.className) {
        if (
          !e.target.parentNode.className.includes("rc-color-picker") &&
          e.target.id !== "changeBackgroundColor"
        ) {
          this.setState({
            bgColor: false,
          });
        }
      }
    }
  }

  render() {
    // const { state, actions } = this.props;
    const { state, actions } = this.props.context;
    const { quizCompleted } = this.props;
    const lab = state.main.lab;
    const body = state.main.body;
    const display =
      (getExerciseState(state, this.props.state) === "EXERCISE_IDLE" ||
        body !== 2) &&
      (lab === 0 ? body !== 3 : true);
    const hideOnLanding = lab === 0;

    // for buttons that should not be displayed on the landing page
    return (
      <>
        <div className="footer">
          {hideOnLanding ? (
            <></>
          ) : (
            <div>
              <span className="tw-absolute bottom leftBlueFooterLine tw-bg-labBlue"></span>
              <span className="tw-absolute bottom rightBlueFooterLine tw-bg-labBlue"></span>
              <span className="tw-absolute leftYellowFooterLine tw-bg-labYellow"></span>
              <span className="tw-absolute rightYellowFooterLine tw-bg-labYellow"></span>
            </div>
          )}
          <div
            className="tw-flex tw-justify-between tw-mx-8"
            style={{ display: display ? "block" : "none" }}
          >
			<button
				className="btn tw-w-32 tw-h-16 tw-bg-white tw-font-medium tw-rounded-none tw-rounded-bl-md tw-border-solid tw-border-l-8 tw-border-b-8 tw-border-r-0 tw-border-t-0 tw-border-labYellow"
				onClick={() => handleRedirect(actions, lab, body - 1)}
				style={{
					display:
					  this.disappearBack(body) || hideOnLanding
						? "none"
						: "block",
				  }}
            >
              BACK
            </button>

            {body === 4 && quizCompleted ? (
              <button
                href="# "
                className="btn tw-bg-labLightGray btn-xl text-uppercase next"
                onClick={this.navigateHome}
                style={{
                  display:
                    this.disappearBack(body) || hideOnLanding
                      ? "none"
                      : "block",
                }}
              >
                Return to Home
              </button>
            ) : (
				<button
					className="btn tw-w-32 tw-h-16 tw-bg-white tw-font-medium tw-rounded-none tw-rounded-tr-md tw-border-solid tw-border-l-0 tw-border-b-0 tw-border-r-8 tw-border-t-8 tw-border-labBlue"
					onClick={() => handleRedirect(actions, lab, body + 1)}
					style={{
						display:
						this.disappearBack(body) || hideOnLanding
							? "none"
							: "block",
					}}
				>
					NEXT
				</button>
            )}
          </div>
          <div
            className="container"
            style={{ display: display || hideOnLanding ? "none" : "block" }}
          >
            <div className="btn-information tw-mt-24">
              The previously available navigation and accessibility buttons are
              disabled until the exercise is complete.
            </div>
          </div>
        </div>
        <div className="footer" />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
