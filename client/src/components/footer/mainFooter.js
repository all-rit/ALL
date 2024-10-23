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
import { Nav, NavItem, NavLink } from "reactstrap";
import logo from "../../assets/images/logos/ALL_White.svg";
import handleRedirect from "../../helpers/Redirect";

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
class MainFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 0,
      textColor: false,
      bgColor: false,
      displayColorPalette: false,
      backgroundColor: null,
      color: null,
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
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

  render() {
    return (
      <>
        <section className="tw-px-12 tw-bg-labGray tw-text-white tw-pb-1">
          <div className="tw-flex tw-justify-between tw-flex-wrap">
            <div className="tw-object-left tw-max-w-80">
              <div className="tw-flex">
                <a href="#">
                  <img
                    className="logo tw-flex tw-h-auto"
                    src={logo}
                    alt="ALL Logo"
                  />
                </a>
              </div>

              <h2 className="tw-flex tw-justify-left tw-text-lg tw-font-bold">
                About Us
              </h2>
              <div className="tw-text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <br />
              <h2 className="tw-flex tw-justify-left tw-text-lg tw-font-bold">
                {" "}
                Contact Us
              </h2>
              <div className="tw-flex tw-justify-left tw-whitespace-pre">
                1 Lomb Memorial Dr
                <br />
                Rochester, NY 14623
              </div>
              <br />
              {/*make mail:to link*/}
              <a
                href="mailto:Daniel.Krutz@rit.edu"
                className="tw-text-white tw-no-underline"
              >
                <text className="tw-flex tw-justify-left ">
                  Daniel.Krutz@rit.edu
                </text>
              </a>
              <text className="tw-flex tw-justify-left ">585-123-4567</text>
              <div className="tw-flex tw-justify-left tw-pt-4 tw-space-x-4">
                <svg
                  className="tw-fill-white tw-w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  {/*Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <a
                    className="tw-fill-white"
                    href="https://www.linkedin.com/company/accessible-learning-labs-rit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </a>
                </svg>
                <svg
                  className="tw-fill-white tw-w-11"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  {/*Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <a
                    className="tw-fill-white"
                    href="https://www.youtube.com/@accessibilitylearninglabs5949"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </a>
                </svg>
              </div>
            </div>
            <div className="tw-object-right tw-max-w-80 tw-justify-end">
              <h1 className="tw-flex tw-justify-right tw-text-3xl tw-font-bold">
                Reach out to us:
              </h1>
              <text className=" tw-flex tw-text-left tw-pb-6">
                Aenean a venenatis metus, ut varius quam. Venenatis metus.
              </text>
              <div className="tw-space-y-6">
                <input
                  className=" tw-flex tw-w-full tw-rounded tw-bg-labGray tw-border-white tw-border tw-text-white tw-p-1"
                  type="text"
                  placeholder={"Name"}
                  required={true}
                  title={"Must enter name"}
                  id="Name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
                <input
                  className=" tw-flex tw-w-full tw-rounded tw-bg-labGray tw-border-white tw-border tw-text-white tw-p-1"
                  type="email"
                  placeholder={"Email"}
                  required={true}
                  title={"Must enter email"}
                  id="Email"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
                <input
                  className=" tw-flex tw-w-full tw-rounded tw-bg-labGray tw-border-white tw-border tw-text-white tw-p-1 tw-pb-32"
                  type="text"
                  placeholder={"Message"}
                  required={true}
                  title={"Must enter message"}
                  id="Message"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
                <button
                  className=" tw-flex tw-w-full tw-rounded tw-bg-white tw-border-white
                    tw-border tw-text-black tw-p-1 tw-justify-center tw-font-semibold"
                  type="button"
                  title={"Send message"}
                  onClick={this.handleSubmit.bind(this)}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="tw-pt-6 tw-pb-16">
            <Nav>
              <NavItem className="tw-pr-6">
                <NavLink
                  className="tw-flex tw-items-center tw-justify-center tw-p-0"
                  href="#"
                >
                  <p className="tw-text-base tw-text-white tw-font-bold">
                    Home
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="px-4 tw-border-solid tw-border-white tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
                <NavLink
                  className="tw-flex tw-items-center tw-justify-center tw-p-0"
                  href="#labs"
                >
                  <p className="tw-text-base tw-text-white tw-font-bold">
                    Labs
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="px-4 tw-border-solid tw-border-white tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
                <NavLink
                  className="tw-flex tw-items-center tw-justify-center tw-p-0"
                  href="#about"
                >
                  <p className="tw-text-base tw-text-white tw-font-bold">
                    About Us
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="px-4 tw-border-solid tw-border-white tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
                <NavLink
                  className="tw-flex tw-items-center tw-justify-center tw-p-0"
                  href="#resources"
                >
                  <p className="tw-text-base tw-text-white tw-font-bold">
                    Educator Resources
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="px-4 tw-border-solid tw-border-white tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
                <NavLink
                  className="tw-flex tw-items-center tw-justify-center tw-p-0"
                  href="#"
                  onClick={() => handleRedirect(mainActions, 0, 1)}
                >
                  <p className="tw-text-base tw-text-white tw-font-bold">
                    Site Map
                  </p>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className=" tw-w-full tw-bg-white tw-h-px" />
          <div className="tw-flex tw-justify-between tw-flex-wrap tw-py-16">
            <div className="tw-flex">Versioning Information Goes Here</div>
            <a href="#" className="tw-text-white tw-no-underline">
              <div className="tw-flex">Site Accessibility Settings</div>
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter);
