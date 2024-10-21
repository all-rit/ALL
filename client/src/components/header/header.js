/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
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
        body={<LoginBody />}
      />
    );
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

  const navigate = (state, reduxState, actions, body, lab = state.main.lab) => {
    if (!alert_check(state, reduxState)) {
      handleRedirect(actions, lab, body);
    }
  };

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const windowSize = useWindowSize();

  if (isSmallWindow == false && windowSize[0] < 840) {
    setisSmallWindow(true);
  } else if (isSmallWindow == true && windowSize[0] >= 840) {
    setisSmallWindow(false);
  }

  // user is logged in if their profile image isn't null, kinda scuffed but lmk if there's a simpler way
  // (state.main.user is never null)
  const loggedIn = state.main.user?.userpfp !== null;

  return (
    <Navbar
      id="navHeader"
      expand="lg"
      className="tw-font-poppins tw-font-bold tw-my-0"
    >
      <div
        className={`tw-flex tw-flex-col tw-gap-2 tw-z-30 tw-text-2xl tw-bg-white tw-fixed tw-top-0 tw-left-0 tw-right-0 d-flex xxs:tw-h-[15%] lg:tw-h-36`}
      >
        <div
          className={`${isSmallWindow ? "tw-flex tw-flex-row tw-justify-between tw-items-center" : "tw-flex tw-flex-row tw-gap-4 tw-items-center"}`}
        >
          <a onClick={() => reachNav("/#")}>
            <img
              className="tw-cursor-pointer xs:tw-max-h-[6rem] sm:tw-max-h-[10rem]"
              src={Logo}
              alt="Computing Accessibility"
            />
          </a>

          <NavbarToggler
            className={`${isSmallWindow ? "tw-m-4 tw-z-20 tw-h-1/2" : "tw-hidden"}`}
            onClick={toggleNavbar}
          />
          <Collapse
            className={`${isSmallWindow ? "tw-absolute tw-bg-white tw-right-0 tw-top-[100%] tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-8 tw-rounded-bl-md tw-border-l-labYellow tw-border-b-labYellow" : "tw-flex tw-flex-grow tw-justify-end"}`}
            isOpen={navbarOpen}
          >
            <Nav
              className={`${isSmallWindow ? "tw-relative tw-flex-col" : "tw-flex tw-flex-grow tw-justify-end tw-flex-row tw-items-center tw-border-solid tw-border-t-0 tw-border-r-0 tw-border-8 tw-rounded-bl-md tw-border-l-labYellow tw-border-b-labYellow tw-h-[5rem] tw-pb-2"}`}
            >
              <NavItem
                className={`${"px-4"} ${!isSmallWindow && "tw-cursor-pointer tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}
              >
                <NavLink
                  className="tw-flex tw-items-center tw-justify-center tw-p-0"
                  onClick={() => reachNav("/#")}
                >
                  <p className="tw-text-base tw-text-labBlue tw-font-bold">
                    Home
                  </p>
                </NavLink>
              </NavItem>
              <NavItem
                className={`${"px-4"} ${!isSmallWindow && "tw-cursor-pointer tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid "}`}
              >
                <NavLink
                  className="tw-flex tw-items-center tw-justify-center tw-p-0"
                  href="#labs"
                >
                  <p className="tw-text-base tw-text-labBlue tw-font-bold">
                    Labs
                  </p>
                </NavLink>
              </NavItem>
              <NavItem
                className={`${"px-4"} ${!isSmallWindow && "tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}
              >
                <NavLink
                  className="tw-flex tw-items-center tw-justify-center tw-p-0"
                  href="#about"
                >
                  <p className="tw-text-base tw-text-labBlue tw-font-bold">
                    About Us
                  </p>
                </NavLink>
              </NavItem>
              <NavItem
                className={`${"px-4"} ${!isSmallWindow && "tw-border-labBlue tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-r-2 tw-border-solid"}`}
              >
                <NavLink
                  className="tw-flex tw-items-center tw-justify-center tw-p-0"
                  href="#resources"
                >
                  <p className="tw-text-base tw-text-labBlue tw-font-bold">
                    Educator Resources
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="tw-px-4 tw-py-2 tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
                {loggedIn && user ? (
                  // TO-DO: PROFILE LINK HERE
                  <NavLink className="tw-object-cover tw-w-[3rem] tw-h-[3rem] tw-p-0 tw-border-solid tw-border-4 tw-border-labBlue tw-rounded-full tw-overflow-hidden">
                    <div
                      onClick={() =>
                        navigate(state, props.state, actions, 2, 0)
                      }
                      aria-label="Google Profile Photo"
                      className="tw-h-12 tw-object-cover"
                      style={{
                        backgroundImage: `url(${user?.userpfp}`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </NavLink>
                ) : (
                  <NavLink className="tw-flex tw-items-center tw-justify-center tw-p-0 tw-cursor-pointer">
                    <a
                      className="tw-text-base tw-text-labBlue tw-font-bold"
                      onClick={toggleSignIn}
                    >
                      Sign In
                    </a>
                    {signInModal()}
                  </NavLink>
                )}
              </NavItem>
              <NavItem className="tw-flex tw-justify-center tw-items-center">
                {isSmallWindow && (
                  <a className="tw-flex tw-justify-end tw-no-underline tw-items-center tw-text-labBlue tw-cursor-pointer">
                    <p className="tw-text-xs">Site Accessibility Settings</p>
                  </a>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </div>
        {!isSmallWindow && (
          <a className="tw-no-underline tw-items-center tw-text-labBlue tw-cursor-pointer tw-absolute tw-bottom-0 tw-right-3">
            <p className="tw-text-xs">Site Accessibility Settings</p>
          </a>
        )}
      </div>
    </Navbar>
  );
};

Header.propTypes = {
  state: PropTypes.shape({}),
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
