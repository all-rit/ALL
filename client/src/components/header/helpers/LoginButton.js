import React from "react";
import API from "../../../services/API";
import PropTypes from "prop-types";

const LoginButton = (props) => {
  const { enabled } = props;

  if (enabled) {
    return (
      <a
        href="# "
        onClick={() =>
          API.postWithBody(process.env.REACT_APP_SERVER_URL + "/url", {
            url: window.location,
          }).then(() => {
            window.location.href =
              process.env.REACT_APP_SERVER_URL + "/auth/google";
          })
        }
      >
        <div className="google__button" />
      </a>
    );
  }

  return <div className="google__button google__button--disabled" />;
};

LoginButton.propTypes = {
  enabled: PropTypes.bool,
};

export default LoginButton;
