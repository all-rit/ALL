import React, { Component } from "react";

class LoginButton extends Component {
  render() {
    const { enabled } = this.props;
    if (enabled) {
      return (
        <a href={process.env.REACT_APP_SERVER_URL + "/auth/google"}>
          <div
            className="google__button"
            aria-label={"Google SignIn Button"}
            tabIndex={"0"}
          />
        </a>
      );
    }

    return (
      <div
        className="google__button google__button--disabled"
        aria-label={"Google SignIn Button"}
        tabIndex={"0"}
      />
    );
  }
}

export default LoginButton;
