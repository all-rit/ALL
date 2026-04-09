import React, { useState } from "react";
import PropTypes from "prop-types";
import useMainStateContext from "src/reducers/MainContext";
import Logo from "../../assets/images/logos/ALL_Logo.svg";
import { navigate } from "@reach/router";
import MenuIcon from "@mui/icons-material/Menu";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import BrandedALLModal from "../all-components/BrandedALLModal";
import LoginBody from "../body/login/LoginBody";
import {
  ERROR,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  SUCCESS,
} from "../../constants/notifications";

const Header = ({ isImagine }) => {
  const { state, actions } = useMainStateContext();

  const [linksCollapseOpen, setLinksCollapseOpen] = useState(false);
  const [profileCollapseOpen, setProfileCollapseOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleLinksCollapse = () => {
    setLinksCollapseOpen(!linksCollapseOpen);
    setProfileCollapseOpen(false);
  };

  const toggleProfileCollapse = () => {
    setLinksCollapseOpen(false);
    setProfileCollapseOpen(!profileCollapseOpen);
  };

  const toggleSignInShown = () => {
    setShowSignIn(!showSignIn);
  };

  const renderCommonLinks = () => {
    return (
      <ul className="tw-h-full tw-py-2 tw-flex tw-flex-col tw-items-start tw-justify-center lg:tw-flex-row lg:tw-items-center lg:tw-justify-end tw-px-4 lg:tw-px-0 *:tw-py-2 lg:*:tw-py-0 lg:*:tw-px-4 lg:*:tw-border-solid lg:*:tw-border-0 lg:*:tw-border-r-2 lg:*:tw-border-primary-blue">
        <li className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
          <a
            className="hover:tw-text-labYellow tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text tw-transition-colors"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
          <a
            className="hover:tw-text-labYellow tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text tw-transition-colors"
            href="/Labs"
          >
            Labs
          </a>
        </li>
        <li className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
          <a
            className="hover:tw-text-labYellow tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text tw-transition-colors"
            href="/about-us"
          >
            About Us
          </a>
        </li>
        <li className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
          <a
            className="hover:tw-text-labYellow tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text tw-transition-colors tw-leading-5"
            href="/EducatorResources"
          >
            Educator Resources
          </a>
        </li>
        {!state.main.user?.email1 && (
          <li className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
            <button
              type="button"
              className="tw-bg-transparent tw-border-0 hover:tw-text-labYellow tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text tw-transition-colors tw-text-left lg:tw-text-center"
              onClick={toggleSignInShown}
            >
              Sign In
            </button>
          </li>
        )}
      </ul>
    );
  };

  const renderProfileLinks = () => {
    return (
      <ul className="tw-h-full tw-py-2 tw-flex tw-flex-col tw-items-start tw-justify-center tw-px-4 *:tw-py-2">
        <li className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
          <a
            className="hover:tw-text-labYellow tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text tw-transition-colors"
            href="/Profile"
          >
            Profile
          </a>
        </li>
        <li className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
          <a
            className="hover:tw-text-labYellow tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text tw-transition-colors"
            href="/Profile#MyLabs"
          >
            My Labs
          </a>
        </li>
        <li className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
          <a
            className="hover:tw-text-labYellow tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text tw-transition-colors"
            href="/Profile#MyGroups"
          >
            My Groups
          </a>
        </li>
        <li className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
          <button
            type="button"
            className="tw-bg-transparent tw-border-0 hover:tw-text-labYellow tw-text-primary-blue tw-font-poppins tw-font-bold tw-body-text tw-transition-colors"
            onClick={logout}
          >
            Logout
          </button>
        </li>
      </ul>
    );
  };

  const logout = () => {
    try {
      actions.showSnackbar(LOGOUT_SUCCESS, SUCCESS);
      window.location.href = `${import.meta.env.VITE_SERVER_URL}/logout`;
    } catch {
      actions.showSnackbar(LOGOUT_ERROR, ERROR);
    }
  };

  return (
    <div
      className={`tw-h-[5rem] tw-my-0 ${isImagine ? "tw-h-[8rem] tw-mb-[0.5rem]" : ""}`}
    >
      {/* Shadow & Positioning*/}
      <div
        className={`tw-flex tw-bg-white tw-z-30 tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-shadow-lg tw-pl-5 lg:tw-pl-12`}
      >
        {/* Logo */}
        <a onClick={() => !isImagine && navigate("/")}>
          <img
            className={`${!isImagine && "tw-cursor-pointer"} tw-max-h-[5rem]`}
            src={Logo}
            alt="Accessible Learning Labs"
          />
        </a>

        {/* Desktop Site Links */}
        {!isImagine && (
          <div className="tw-hidden lg:tw-block tw-mx-6 tw-my-3 tw-grow tw-border-solid tw-border-labYellow tw-rounded-bl-md tw-border-[0.25rem] tw-border-t-0 tw-border-r-0">
            {renderCommonLinks()}
          </div>
        )}

        {/* Mobile Site Links */}
        {!isImagine && (
          <ClickAwayListener onClickAway={() => setLinksCollapseOpen(false)}>
            <div className="tw-relative lg:tw-hidden tw-grow tw-flex tw-justify-end tw-items-center">
              <MenuIcon
                onClick={toggleLinksCollapse}
                fontSize="large"
                className="tw-mr-6 tw-cursor-pointer"
              />

              <Fade in={linksCollapseOpen}>
                <div className="tw-absolute tw-top-[100%] tw-right-0 tw-bg-white tw-grow tw-border-solid tw-border-labYellow tw-rounded-bl-md tw-border-[0.25rem] tw-border-t-0 tw-border-r-0">
                  {renderCommonLinks()}
                </div>
              </Fade>
            </div>
          </ClickAwayListener>
        )}

        {/* Profile Links */}
        {state.main.user?.email1 && !isImagine && (
          <ClickAwayListener onClickAway={() => setProfileCollapseOpen(false)}>
            <div className="tw-flex tw-justify-center tw-items-center tw-mr-6">
              <button
                className="tw-h-[3rem] tw-aspect-square tw-rounded-full tw-border-solid tw-border-4 tw-border-primary-blue tw-overflow-hidden tw-cursor-pointer"
                onClick={toggleProfileCollapse}
              >
                <img src={state.main.user?.userpfp} />
              </button>

              <Fade in={profileCollapseOpen}>
                <div className="tw-absolute tw-top-[100%] tw-right-0 tw-bg-white tw-grow tw-border-solid tw-border-labYellow tw-rounded-bl-md tw-border-[0.25rem] tw-border-t-0 tw-border-r-0">
                  {renderProfileLinks()}
                </div>
              </Fade>
            </div>
          </ClickAwayListener>
        )}

        {/* Sign In Modal */}
        <BrandedALLModal
          direction={"row"}
          isOpen={showSignIn}
          toggle={toggleSignInShown}
        >
          <LoginBody />
        </BrandedALLModal>
      </div>
    </div>
  );
};

Header.propTypes = {
  isImagine: PropTypes.bool,
};

export default Header;
