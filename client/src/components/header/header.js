/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../../assets/images/logos/ALL_Logo.svg";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../reducers/MainReducer";
import { navigate as reachNav } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import BrandedALLModal from "../all-components/BrandedALLModal";
import LoginBody from "../body/login/LoginBody";
import PropTypes from "prop-types";
import handleRedirect from "../../helpers/Redirect";
import getExerciseState from "../../helpers/GetReducer";
import {
  ERROR,
  EXERCISE_IN_PROGRESS,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  SUCCESS,
} from "../../constants/notifications";
import UserPfp from "../all-components/UserPfp";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mainActions, dispatch),
  };
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Header = (props) => {
  const { state, actions } = useMainStateContext();
  const user = state.main.user;
  const [isSmallWindow, setisSmallWindow] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const toggleSignIn = () => {
    setSignInModalOpen(!signInModalOpen);
  };

  const signInModal = () => {
    return (
      <BrandedALLModal
        direction={"row"}
        isOpen={signInModalOpen}
        toggle={toggleSignIn}
      >
        <LoginBody />
      </BrandedALLModal>
    );
  };

  const logout = async () => {
    try {
      actions.showSnackbar(LOGOUT_SUCCESS, SUCCESS);
      window.location.href = `${process.env.REACT_APP_SERVER_URL}/logout`;
    } catch (e) {
      actions.showSnackbar(LOGOUT_ERROR, ERROR);
      console.error(e, "Could not log out.");
    }
  };

  const alert_check = (state, reduxState) => {
    if (
      getExerciseState(state, reduxState) !== "EXERCISE_IDLE" &&
      state.main.body === 2
    ) {
      actions.showSnackbar(EXERCISE_IN_PROGRESS, ERROR);
      return true;
    }
    return false;
  };

  const navigate = (state, reduxState, actions, body, lab = state.main.lab) => {
    if (!alert_check(state, reduxState)) {
      handleRedirect(actions, lab, body);
    }
  };

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const windowSize = useWindowSize();

  if (isSmallWindow == false && windowSize[0] < 1000) {
    setisSmallWindow(true);
  } else if (isSmallWindow == true && windowSize[0] >= 1000) {
    setisSmallWindow(false);
  }

  const loggedIn = state.main?.user?.email1 !== null;

  return (
    <Navbar
      id="navHeader"
      expand="lg"
      className={`tw-h-[8rem] tw-body-text tw-font-bold tw-my-0 ${props.isImagine && "tw-mb-[0.5rem]"}`}
    >
      <div
        className={`tw-flex tw-flex-col tw-z-30 tw-bg-white tw-fixed tw-top-0 tw-left-0 tw-right-0  tw-shadow-md tw-px-5 lg:tw-px-12`}
      >
        <div
          className={`${isSmallWindow ? "tw-flex tw-flex-row tw-justify-between tw-items-center" : "tw-flex tw-flex-row tw-gap-4 tw-items-center"}`}
        >
          <a
            className={""}
            onClick={() => {
              !props.isImagine && reachNav("/#");
            }}
          >
            <img
              className={`${!props.isImagine && "tw-cursor-pointer"} ${props.isImagine ? "xs:tw-max-h-[6rem] sm:tw-max-h-[4rem] tw-mt-[0.75rem]" : "xs:tw-max-h-[7rem] sm:tw-max-h-[7rem]"}`}
              src={Logo}
              alt="Computing Accessibility"
            />
          </a>

          <NavbarToggler
            className={`${isSmallWindow ? "tw-z-20 tw-h-1/2" : "tw-hidden"}`}
            onClick={toggleNavbar}
          />
          <Collapse
            className={`${isSmallWindow ? "tw-absolute tw-bg-white tw-right-0 tw-top-[100%] tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-[0.5rem] tw-rounded-bl-md tw-border-l-labYellow tw-border-b-labYellow" : "tw-flex tw-flex-grow tw-justify-end"}`}
            isOpen={navbarOpen}
          >
            {!props.isImagine && (
              <Nav
                className={`${isSmallWindow ? "tw-relative tw-flex-col" : "tw-flex tw-flex-grow tw-justify-end tw-flex-row tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-4 tw-rounded-bl-sm tw-border-l-labYellow tw-border-b-labYellow tw-h-[4rem]"}`}
              >
                <NavItem
                  className={`${"px-4"} ${!isSmallWindow && "tw-text-primary-blue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}
                >
                  <NavLink
                    className="tw-flex tw-items-center tw-justify-center tw-p-0 tw-cursor-pointer"
                    onClick={() => reachNav("/#")}
                  >
                    <p className="tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text">
                      Home
                    </p>
                  </NavLink>
                </NavItem>
                <NavItem
                  className={`${"px-4"} ${!isSmallWindow && " tw-text-primary-blue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid "}`}
                >
                  <NavLink
                    className="tw-flex tw-items-center tw-justify-center tw-p-0"
                    href="/Labs"
                  >
                    <p className="tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text">
                      Labs
                    </p>
                  </NavLink>
                </NavItem>
                <NavItem
                  className={`${"px-4"} ${!isSmallWindow && "tw-text-primary-blue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}
                >
                  <NavLink
                    className="tw-flex tw-items-center tw-justify-center tw-p-0"
                    href="/about-us"
                  >
                    <p className="tw-text-primary-blue tw-font-bold tw-font-poppins tw-body-text">
                      About Us
                    </p>
                  </NavLink>
                </NavItem>
                <NavItem
                  className={`${"px-4"} ${!isSmallWindow && "tw-text-primary-blue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}
                >
                  <NavLink
                    className="tw-flex tw-items-center tw-justify-center tw-p-0"
                    href="/EducatorResources"
                  >
                    <p className="tw-text-primary-blue tw-font-bold tw-font-poppins tw-body-text">
                      Educator Resources
                    </p>
                  </NavLink>
                </NavItem>
                <NavItem className="tw-px-4 tw-py-2 tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
                  {loggedIn && user ? (
                    // TO-DO: PROFILE LINK HERE
                    <NavLink className="tw-object-cover tw-w-[3rem] tw-h-[3rem] tw-p-0 tw-border-solid tw-border-4 tw-text-primary-blue tw-rounded-full tw-overflow-hidden">
                      <UserPfp onClick={() => navigate(state, props.state, actions, 2, 99)} />
                    </NavLink>
                  ) : (
                    <NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0 tw-cursor-pointer">
                      <p
                        className="tw-text-primary-blue tw-font-bold tw-font-poppins tw-cursor-pointer tw-body-text"
                        onClick={toggleSignIn}
                      >
                        Sign In
                      </p>
                      {signInModal()}
                    </NavLink>
                  )}
                </NavItem>
                <NavItem>
                  {isSmallWindow && loggedIn ? (
                    <NavLink>
                      <button className={"log_out-google-btn"} onClick={logout}>
                        {" "}
                        Logout{" "}
                      </button>
                    </NavLink>
                  ) : (
                    <></>
                  )}
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </div>
      </div>
    </Navbar>
  );
};

Header.propTypes = {
  state: PropTypes.shape({}),
  isImagine: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
