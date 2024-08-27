/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logos/FinalALLLogo.png";
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
import useMainStateContext from "src/reducers/MainContext";

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

const navigate = (state, reduxState, actions, body, lab = state.main.lab) => {
  if (!alert_check(state, reduxState)) {
    handleRedirect(actions, lab, body);
  }
};

const alert_check = (state, reduxState) => {
  if (
    getExerciseState(state, reduxState) !== "EXERCISE_IDLE" &&
    state.main.body === 2
  ) {
    alert("The exercise is still in progress! Please complete the exercise");
    return true;
  }
  return false;
};

const Header = (props) => {
  const context = useMainStateContext();
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = { color: "#F3F3F3" };
  const toggle = () => setIsOpen(!isOpen);

  const closeNav = () => setIsOpen(false);
  const { state, actions } = context;
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
    getExerciseState(state, props.state) === EXERCISE_IDLE ||
    state.main.body !== 2;

  return (
    <Navbar
      id="navHeader"
      dark
      expand="lg"
      className="tw-pt-3 poppins tw-font-bold mb-0"
    >
      <div className=" tw-z-30 tw-text-2xl shadow tw-bg-labGray tw-fixed tw-top-0 p-3 tw-left-0 tw-right-0 w-100 d-flex flex-row justify-content-between align-items-between">
        <a
          href="# "
          onClick={() =>
            (state.main.lab === 0 ? state.main.body === 3 : false)
              ? reachNavigate("/Imagine/UserID")
              : navigate(state, props.state, actions, 0, 0)
          }
        >
          <img
            className="logo tw-cursor-pointer"
            src={Logo}
            alt="Computing Accessibility"
          />
        </a>

        {/* TODO figure out a way to consolidate repeated code*/}
        {/* Landing Page NavBar */}

        <div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            {state.main.lab === 0 ? (
              <Nav className="ml-auto tw-items-end tw-flex-wrap" navbar>
                {state.main.body === 0 ? (
                  <Nav
                    className="ml-auto tw-items-end dropdown-menu-wrap"
                    navbar
                  >
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
                    <NavItem onClick={closeNav} className="navbar-collapse ">
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
                        href="#contact"
                        style={link === 3 ? activeStyle : { color: "#fff" }}
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
                            onClick={() =>
                              navigate(state, props.state, actions, 0, 0)
                            }
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
                            onClick={() =>
                              navigate(state, props.state, actions, 1, 0)
                            }
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
                    <NavItem className="collapse navbar-collapse">
                      <NavLink
                        className="nav-link "
                        href="# "
                        style={
                          state.main.body === 2
                            ? activeStyle
                            : { color: "#fff" }
                        }
                        onClick={() =>
                          navigate(state, props.state, actions, 2, 0)
                        }
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
                      onClick={() =>
                        navigate(state, props.state, actions, 0, 0)
                      }
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
                      onClick={() => navigate(state, props.state, actions, 0)}
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
                      onClick={() => navigate(state, props.state, actions, 1)}
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
                      onClick={() => navigate(state, props.state, actions, 2)}
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
                      onClick={() => navigate(state, props.state, actions, 3)}
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
                      onClick={() => navigate(state, props.state, actions, 4)}
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
                        onClick={() =>
                          navigate(state, props.state, actions, 2, 0)
                        }
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
      </div>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
