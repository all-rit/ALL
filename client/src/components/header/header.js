/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logos/ALL_Logo_Header.svg";
import "../../assets/stylesheets/components/Header.scss";
import WelcomeMessage from "./helpers/WelcomeMessage";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { EXERCISE_IDLE } from "../../constants/lab1";
import handleRedirect from "../../helpers/Redirect";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../reducers/MainReducer";
import getExerciseState from "../../helpers/GetReducer";

import { navigate as reachNavigate } from "@reach/router";

const mapStateToProps = (state) => {
  return {
    // General
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

const navigate = (state, actions, body, lab = state.main.lab) => {
  if (!alert_check(state)) {
    handleRedirect(actions, lab, body);
  }
};

const alert_check = (state) => {
  if (getExerciseState(state) !== "EXERCISE_IDLE" && state.main.body === 2) {
    alert("The exercise is still in progress! Please complete the exercise");
    return true;
  }
  return false;
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = { color: "#F3F3F3" };
  const toggle = () => setIsOpen(!isOpen);

  const closeNav = () => setIsOpen(false);
  const { state, actions } = props;
  const [link, setLink] = useState(0);
  const listenScrollEvent = (event) => {
    if (state.main.lab === 0 && state.main.body === 0) {
      if (window.scrollY < 800) {
        return setLink(0);
      } else if (window.scrollY < 2100) {
        return setLink(1);
      } else if (window.scrollY < 3500) {
        return setLink(2);
      } else {
        return setLink(3);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [state]);

  const count = state.main.body;
  const loginEnabled =
    state.main.lab === 0 ||
    getExerciseState(state) === EXERCISE_IDLE ||
    state.main.body !== 2;

  return (
    <Navbar
      id="navHeader"
      dark
      expand="lg"
      className="labnav"
      style={{
        boxShadow: "inset 0 0 0 2000px rgba(61, 61, 61, 100)",
        paddingTop: "1rem",
        opacity: "100%",
      }}
    >
      <div className="container">
        <a
          href="# "
          onClick={() =>
            (state.main.lab === 0 ? state.main.body === 3 : false)
              ? reachNavigate("/Imagine/UserID")
              : navigate(state, actions, 0, 0)
          }
        >
          <img
            className="logo img-fluid tw-cursor-pointer"
            src={Logo}
            alt="Computing Accessibility"
          />
        </a>

        {/* TODO figure out a way to consolidate repeated code*/}
        {/* Landing Page NavBar */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {state.main.lab === 0 ? (
            <Nav className="ml-auto tw-items-end tw-flex-wrap poppins" navbar>
              {state.main.body === 0 ? (
                <Nav className="ml-auto tw-items-end dropdown-menu-wrap" navbar>
                  <NavItem onClick={closeNav} className="navbar-collapse">
                    <NavLink
                      className="nav-link "
                      href="#goals"
                      style={link === 0 ? activeStyle : { color: "#fff" }}
                    >
                      <ul className="navbar-nav nav-font text-uppercase ml-auto">
                        <li className="nav-item">Goals</li>
                      </ul>
                    </NavLink>
                  </NavItem>
                  <NavItem onClick={closeNav} className="navbar-collapse">
                    <NavLink
                      className="nav-link "
                      href="#labs "
                      style={link === 1 ? activeStyle : { color: "#fff" }}
                    >
                      <ul className="navbar-nav nav-font text-uppercase ml-auto">
                        <li className="nav-item">Labs</li>
                      </ul>
                    </NavLink>
                  </NavItem>
                  <NavItem onClick={closeNav} className="navbar-collapse">
                    <NavLink
                      className="nav-link "
                      href="#citation"
                      style={link === 2 ? activeStyle : { color: "#fff" }}
                    >
                      <ul className="navbar-nav nav-font text-uppercase ml-auto">
                        <li className="nav-item">Team</li>
                      </ul>
                    </NavLink>
                  </NavItem>
                  <NavItem onClick={closeNav} className="navbar-collapse">
                    <NavLink
                      className="nav-link "
                      href="/Educators"
                      style={link === 3 ? activeStyle : { color: "#fff" }}
                    >
                      <ul className="navbar-nav nav-font text-uppercase ml-auto">
                        <li className="nav-item">Educators</li>
                      </ul>
                    </NavLink>
                  </NavItem>
                  <NavItem onClick={closeNav} className="navbar-collapse">
                    <NavLink
                      className="nav-link "
                      href="#contact"
                      id="#contact"
                      style={link === 4 ? activeStyle : { color: "#fff" }}
                    >
                      <ul className="navbar-nav nav-font text-uppercase ml-auto">
                        <li className="nav-item">Contact</li>
                      </ul>
                    </NavLink>
                  </NavItem>
                </Nav>
              ) : (
                /** Mobile NavBar */
                <Nav className="tw-items-end tw-flex-wrap ml-auto" navbar>
                  {state.main.body === 1 && (
                    <>
                      <NavItem onClick={closeNav} className="navbar-collapse">
                        <NavLink
                          className="nav-link "
                          href="# "
                          style={{ color: "#fff" }}
                          onClick={() => navigate(state, actions, 0, 0)}
                        >
                          <ul className="navbar-nav nav-font text-uppercase ml-auto">
                            <li className="nav-item">Home</li>
                          </ul>
                        </NavLink>
                      </NavItem>

                      <NavItem
                        onClick={closeNav}
                        className="collapse navbar-collapse"
                      >
                        <NavLink
                          className="nav-link "
                          href="# "
                          style={
                            state.main.body === 1
                              ? activeStyle
                              : { color: "#fff" }
                          }
                          onClick={() => navigate(state, actions, 1, 0)}
                        >
                          <ul className="navbar-nav nav-font text-uppercase ml-auto">
                            <li className="nav-item">Site Map</li>
                          </ul>
                        </NavLink>
                      </NavItem>
                    </>
                  )}
                </Nav>
              )}
              {state.main.user !== null &&
                state.main.user.firstname !== null && (
                  <NavItem
                    onClick={closeNav}
                    className="collapse navbar-collapse"
                  >
                    <NavLink
                      className="nav-link "
                      href="# "
                      style={
                        state.main.body === 2 ? activeStyle : { color: "#fff" }
                      }
                      onClick={() => navigate(state, actions, 2, 0)}
                    >
                      <ul className="navbar-nav nav-font text-uppercase ml-auto">
                        <li className="nav-item nav-last">Profile</li>
                      </ul>
                    </NavLink>
                  </NavItem>
                )}
              {(state.main.lab === 0 ? state.main.body !== 3 : true) && (
                <WelcomeMessage
                  user={state.main.user}
                  loginEnabled={loginEnabled}
                />
              )}
            </Nav>
          ) : (
            ({
              /** In-Lab NavBar */
            },
            (
              <Nav className="tw-items-end tw-flex-wrap ml-auto" navbar>
                <NavItem onClick={closeNav} className="navbar-collapse">
                  <NavLink
                    className="nav-link "
                    onClick={() => navigate(state, actions, 0, 0)}
                    href="# "
                    style={{ color: "#fff" }}
                  >
                    <ul className="navbar-nav nav-font text-uppercase ml-auto">
                      <li className="nav-item">Home</li>
                    </ul>
                  </NavLink>
                </NavItem>

                <NavItem onClick={closeNav} className="navbar-collapse">
                  <NavLink
                    className="nav-link "
                    onClick={() => navigate(state, actions, 0)}
                    href="# "
                    style={count === 0 ? activeStyle : { color: "#fff" }}
                  >
                    <ul className="navbar-nav nav-font text-uppercase ml-auto">
                      <li className="nav-item">About</li>
                    </ul>
                  </NavLink>
                </NavItem>

                <NavItem onClick={closeNav} className="navbar-collapse">
                  <NavLink
                    className="nav-link "
                    onClick={() => navigate(state, actions, 1)}
                    href="# "
                    style={count === 1 ? activeStyle : { color: "#fff" }}
                  >
                    <ul className="navbar-nav nav-font text-uppercase ml-auto">
                      <li className="nav-item">Reading</li>
                    </ul>
                  </NavLink>
                </NavItem>

                <NavItem onClick={closeNav} className="navbar-collapse">
                  <NavLink
                    className="nav-link "
                    onClick={() => navigate(state, actions, 2)}
                    href="# "
                    style={count === 2 ? activeStyle : { color: "#fff" }}
                  >
                    <ul className="navbar-nav nav-font text-uppercase ml-auto">
                      <li className="nav-item">Exercise</li>
                    </ul>
                  </NavLink>
                </NavItem>

                <NavItem onClick={closeNav} className="navbar-collapse">
                  <NavLink
                    className="nav-link "
                    onClick={() => navigate(state, actions, 3)}
                    href="# "
                    style={count === 3 ? activeStyle : { color: "#fff" }}
                  >
                    <ul className="navbar-nav nav-font text-uppercase ml-auto">
                      <li className="nav-item">Reinforcement</li>
                    </ul>
                  </NavLink>
                </NavItem>

                <NavItem onClick={closeNav} className="navbar-collapse">
                  <NavLink
                    className="nav-link "
                    onClick={() => navigate(state, actions, 4)}
                    href="# "
                    style={count === 4 ? activeStyle : { color: "#fff" }}
                  >
                    <ul className="navbar-nav nav-font text-uppercase ml-auto">
                      <li className="nav-item">Quiz</li>
                    </ul>
                  </NavLink>
                </NavItem>

                {state.main.user !== null && (
                  <NavItem
                    onClick={closeNav}
                    className="collapse navbar-collapse"
                  >
                    <NavLink
                      className="nav-link "
                      href="# "
                      style={{ color: "#fff" }}
                      onClick={() => navigate(state, actions, 2, 0)}
                    >
                      <ul className="navbar-nav nav-font text-uppercase ml-auto">
                        <li className="nav-item nav-last">Profile</li>
                      </ul>
                    </NavLink>
                  </NavItem>
                )}

                <WelcomeMessage
                  user={state.main.user}
                  loginEnabled={loginEnabled}
                  renderLink={true}
                />
              </Nav>
            ))
          )}
        </Collapse>
      </div>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
