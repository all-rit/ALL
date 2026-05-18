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
import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import logo from "../../assets/images/logos/ALL_White.svg";
import nsf from "../../assets/images/logos/nsf.png";
import rit from "../../assets/images/logos/RIT.png";
import Version from "./versionComponent";
// import Version from "./versionComponent";

const MainFooter = () => {
  return (
    <div className="xs:tw-hidden md:tw-flex">
      <div className="tw-px-4 tw-pt-[1rem] tw-pb-0 tw-bg-labGray tw-text-white tw-mt-[5rem] tw-mb-0">
        {/*Column 1*/}
        <Row className="">
          <Col xs={2} lg={3} className="tw-pr-8 tw-align-top">
            <Col xs={9}>
              <a href="#">
                <img
                  className="logo tw-flex tw-h-auto"
                  src={logo}
                  alt="ALL Logo"
                />
              </a>
            </Col>
            <p className="tw-text-lg tw-text-left">
              Accessible Learning Labs is an NSF funded initiative aimed at
              fostering STEM proficiency.
            </p>
          </Col>
          {/*Column 2*/}
          <Col xs={4} className="tw-pr-8 tw-pt-1">
            <Row>
              <h3 className="tw-tittle tw-text-left tw-pt-[0.75rem]">
                <strong>Links</strong>
              </h3>
            </Row>
            <Row>
              <Col xs={6}>
                <Nav vertical>
                  <NavItem>
                    <NavLink
                      className="tw-flex tw-items-center tw-justify-left tw-p-0"
                      href="/#"
                    >
                      <p className="tw-text-base tw-text-white tw-pb-2 tw-font-semibold">
                        Home
                      </p>
                    </NavLink>
                  </NavItem>
                  <NavItem className="tw-border-solid tw-border-white tw-border-t-2 tw-border-r-0 tw-border-b-0 tw-border-l-0 tw-pt-2 tw-pb-2">
                    <NavLink
                      className="tw-flex tw-items-center tw-justify-left tw-p-0"
                      href="/Labs"
                    >
                      <p className="tw-text-base tw-text-white tw-font-semibold">
                        Labs
                      </p>
                    </NavLink>
                  </NavItem>
                  <NavItem className="tw-border-solid tw-border-white tw-border-l-0 tw-border-r-0 tw-border-b-0 tw-pt-2 tw-border-t-2">
                    <NavLink
                      className="tw-flex tw-items-center tw-justify-left tw-p-0"
                      href="/about-us"
                    >
                      <p className="tw-text-base tw-text-white tw-font-semibold">
                        About Us
                      </p>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col xs={6} className="max-[1112px]:tw-mt-auto">
                <Nav vertical>
                  <NavItem className="tw-pb-2 tw-border-solid tw-border-white tw-border-t-0 tw-border-r-0 tw-border-b-0 tw-border-l-0">
                    <NavLink
                      className="tw-flex tw-items-center tw-justify-start tw-p-0"
                      href="/EducatorResources"
                    >
                      <p className="tw-text-base tw-text-left tw-font-semibold tw-text-white">
                        Educator Resources
                      </p>
                    </NavLink>
                  </NavItem>
                  <NavItem className="tw-pt-2 tw-border-solid tw-border-white tw-border-t-2 tw-border-r-0 tw-border-b-0 tw-border-l-0">
                    <NavLink
                      className="tw-flex tw-items-center tw-justify-left tw-p-0"
                      href="/SiteMap"
                    >
                      <p className="tw-text-base tw-font-semibold tw-text-white">
                        Site Map
                      </p>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Col>
          {/*Column 3*/}
          <Col xs={3} lg={2} className="tw-pt-1">
            <Row>
              <h3 className="tw-tittle tw-text-left tw-pt-[0.75rem]">
                <strong>Contact</strong>
              </h3>
            </Row>
            <p className="tw-text-left tw-text-white tw-font-bold">
              1 Lomb Memorial Dr Rochester, NY 14623
            </p>
            <div className="tw-flex tw-justify-left tw-pt-4 tw-space-x-4 tw-items-center">
              <a
                className="tw-fill-white"
                href="https://www.linkedin.com/company/accessible-learning-labs-rit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="tw-fill-white tw-w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  {/*Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a
                className="tw-fill-white"
                href="https://www.youtube.com/@accessibilitylearninglabs5949"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="tw-fill-white tw-w-11"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  {/*Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </a>
              <a
                className="tw-text-white tw-no-underline"
                href="mailto:dxkvse@rit.edu"
              >
                <svg
                  className="tw-fill-white tw-w-11"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/*Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.*/}
                  <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" />
                </svg>
              </a>
            </div>
          </Col>
          {/*Column 4*/}
          <Col xs={3} className="tw-flex tw-flex-col tw-pt-2">
            <Container>
              <div className="tw-flex tw-flex-row tw-items-center tw-gap-4">
                <Col xs={2} className="tw-mr-5">
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
                </Col>
                <Col xs={5}>
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
                </Col>
              </div>
            </Container>
            <p className="tw-pt-2 tw-text-lg tw-text-left">
              Available under the Federal Government License. This work is
              supported by the US National Science Foundation Under Grants:
              #1825023, #2111152, #2336941
            </p>
          </Col>
        </Row>
        <div className="tw-w-full tw-bg-white tw-h-px" />
        <Row className="tw-mb-0">
          <Version className="tw-text-left tw-pt-2" />
        </Row>
      </div>
    </div>
  );
};
export default MainFooter;
