/* eslint-disable react/prop-types */
import React from "react";
import API from "../../../services/API";
import GoogleLogin from "../../../assets/images/google_buttons/Google_Sign_In.svg";

const LoginButton = (props) => {
  const { enabled } = props;

  if (enabled) {
    return (
      <a
        href="# "
        onClick={() =>
          API.postWithBody(import.meta.env.VITE_SERVER_URL + "/url", {
            url: window.location,
          }).then(() => {
            window.location.href =
              import.meta.env.VITE_SERVER_URL + "/auth/google";
          })
        }
      >
        <img src={GoogleLogin} />
      </a>
    );
  }

  return <div className="google__button google__button--disabled" />;
};

export default LoginButton;
