/* eslint-disable react/no-unescaped-entities */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

class CatClickFirstNavigate extends Component {
  constructor(props) {
    super(props);
    const { path } = this.props;
    CatClickFirstNavigate.handleOnclick =
      CatClickFirstNavigate.handleOnclick.bind(this, path);
  }

  static handleOnclick(path) {
    console.log(path);
    navigate(path);
  }

  render() {
    return (
      <div id={"catClickMessage"}>
        <p
          aria-label={
            "Cat clicked! Please click the 'next' button to continue."
          }
        >
          Cat clicked! Please click the 'next' button to continue.
        </p>
        <br />
        <button
          onClick={CatClickFirstNavigate.handleOnclick}
          className="btn btn-primary tw-w-1/4 tw-h-[4rem] text-uppercase"
        >
          Next
        </button>
      </div>
    );
  }
}

CatClickFirstNavigate.propTypes = {
  path: PropTypes.string,
};

export default CatClickFirstNavigate;
