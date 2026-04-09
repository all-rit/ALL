/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import { actions as appActions } from "../../reducers/lab1/AppReducer";
import { actions as mainActions } from "../../reducers/MainReducer";
import { bindActionCreators } from "redux";
import {
  setTextColor,
  setBackgroundColor,
  onNextPageChangeTSize,
} from "./edit/editPage";
import { Nav, NavItem, NavLink } from "reactstrap";
import logo from "../../assets/images/logos/ALL_White.svg";
import handleRedirect from "../../helpers/Redirect";
import nsf from "../../assets/images/logos/nsf.png";
import rit from "../../assets/images/logos/RIT.png";
// import ContactUs from "./contactUs";

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
    };
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

  render() {
    return (
      <>
        {!this.props.isImagine && (
          <>
            {/* Gray Footer */}
            <div className="tw-px-12 tw-py-12 tw-bg-labGray tw-text-white tw-mt-[5rem]">
              <div className="tw-flex tw-justify-between tw-w-full">
                <div className="tw-flex xs:tw-flex-col md:tw-flex-row tw-justify-between">
                  {/*Left Side*/}
                  <div className="tw-flex tw-flex-col xs:tw-w-full md:tw-w-1/4 tw-items-start">
                    <a href="#">
                      <img
                        className="logo tw-flex tw-h-auto"
                        src={logo}
                        alt="ALL Logo"
                      />
                    </a>
                    <div className="container">
                      <div className="tw-flex tw-flex-row tw-items-center tw-gap-4">
                        <div className="col-lg-4 tw-p-0">
                          <a
                            href="https://www.nsf.gov"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="tw-object-cover tw-w-full tw-max-w-[10rem]"
                              src={nsf}
                              alt="National Science Foundation"
                            />
                          </a>
                        </div>
                        <div className="col-lg-7 tw-p-0">
                          <a
                            href="https://www.rit.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="tw-object-cover tw-w-full tw-max-w-[16rem]"
                              src={rit}
                              alt="Rochester Institute Of Technology"
                            />
                          </a>
                        </div>
                      </div>
                      <p
                        className={
                          "tw-pt-2 tw-body-text tw-text-center tw-font-medium "
                        }
                      >
                        Available under the Federal Government License
                      </p>
                      <p
                        className={
                          "tw-pt-2 tw-body-text tw-text-center tw-font-medium "
                        }
                      >
                        This work is supported by the US National Science
                        Foundation Under Grants: #1825023, #2111152, #2336941
                      </p>
                    </div>
                  </div>
                  {/*Right side*/}
                  <div className={"xs:tw-w-full md:tw-w-1/4 tw-px-6 tw-mt-6"}>
                    <p className="tw-font-poppins tw-font-bold">About Us</p>
                    <p className="tw-body-text">
                      Accessible Learning Labs is an NSF funded initiative aimed
                      at fostering STEM proficiency.
                    </p>
                    <br />
                    <p className="tw-font-poppins tw-font-bold"> Contact Us</p>
                    <p className="tw-body-text">
                      1 Lomb Memorial Dr
                      <br />
                      Rochester, NY 14623
                    </p>
                    <br />
                    {/*make mail:to link*/}
                    <a
                      href="mailto:dxkvse@rit.edu"
                      className="tw-text-white tw-no-underline"
                    >
                      <p className="tw-flex tw-justify-left ">dxkvse@rit.edu</p>
                    </a>
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
                </div>
                <div>{/*<ContactUs/>*/}</div>
              </div>
              <div className="tw-pt-6 tw-pb-16">
                <Nav>
                  <NavItem className="tw-pr-6">
                    <NavLink
                      className="tw-flex tw-items-center tw-justify-center tw-p-0"
                      href="/#"
                    >
                      <p className="tw-text-base tw-text-white tw-font-bold">
                        Home
                      </p>
                    </NavLink>
                  </NavItem>
                  <NavItem className="px-4 tw-border-solid tw-border-white tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
                    <NavLink
                      className="tw-flex tw-items-center tw-justify-center tw-p-0"
                      href="/Labs"
                    >
                      <p className="tw-text-base tw-text-white tw-font-bold">
                        Labs
                      </p>
                    </NavLink>
                  </NavItem>
                  <NavItem className="px-4 tw-border-solid tw-border-white tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
                    <NavLink
                      className="tw-flex tw-items-center tw-justify-center tw-p-0"
                      href="/about-us"
                    >
                      <p className="tw-text-base tw-text-white tw-font-bold">
                        About Us
                      </p>
                    </NavLink>
                  </NavItem>
                  <NavItem className="px-4 tw-border-solid tw-border-white tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-2">
                    <NavLink
                      className="tw-flex tw-items-center tw-justify-center tw-p-0"
                      href="/EducatorResources"
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
              <div className="tw-flex tw-justify-left tw-mt-12">
                <div className="tw-flex">Version 2.0</div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter);
