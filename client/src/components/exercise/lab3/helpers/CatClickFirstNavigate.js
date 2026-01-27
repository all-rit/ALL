/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import LabButton from "../../../all-components/LabButton";

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
          className={"tw-body-text tw-text-2xl tw-text-center tw-py-6"}
          aria-label={
            "Cat clicked! Please click the 'next' button to continue."
          }
        >
          Cat clicked! Please click the 'next' button to continue.
        </p>
        <br />
        <LabButton onClick={CatClickFirstNavigate.handleOnclick} label={"Next"}>
          Next
        </LabButton>
      </div>
    );
  }
}

CatClickFirstNavigate.propTypes = {
  path: PropTypes.string,
};

export default CatClickFirstNavigate;
