/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import API from "../../../services/API";

class LoginButton extends Component {
  render() {
    const { enabled } = this.props;
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
          {/* <a href= {process.env.REACT_APP_SERVER_URL + '/auth/google'}>*/}
          <div className="google__button" />
        </a>
      );
    }

    return <div className="google__button google__button--disabled" />;
  }
}

export default LoginButton;
