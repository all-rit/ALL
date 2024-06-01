/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";
import API from "../../../services/API";

const LoginButton = ({ enabled }) => {
  const handleLogin = async () => {
    if (enabled) {
      await API.postWithBody(`${process.env.REACT_APP_SERVER_URL}/url`, {
        url: window.location.href,
      });
      if (process.env.NODE_ENV === "development") {
        try {
          console.warn("Attempting mock login...");
          await API.postWithBody(
            `${process.env.REACT_APP_SERVER_URL}/mockAuthenticate`,
          );
        } catch (error) {
          console.error(error, "Mock login failed.");
        }
      }
      window.location.href = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
    }
  };

  return enabled ? (
    <a onClick={handleLogin}>
      <div className="google__button" />
    </a>
  ) : (
    <div className="google__button google__button--disabled" />
  );
};

LoginButton.propTypes = {
  enabled: PropTypes.bool.isRequired,
};

export default LoginButton;
