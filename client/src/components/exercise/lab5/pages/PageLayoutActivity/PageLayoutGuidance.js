/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";

class PageLayoutGuidance extends Component {
  constructor(props) {
    super(props);
    this.state = { componentName: "PageLayoutGuidance" };
  }
  handleNav() {
    navigate("/Lab5/Exercise/PageLayoutRepair");
  }

  render() {
    const { actions } = this.props;
    return (
      <Fragment>
        <div className="center-div mb-5">
          <h2 className={"tw-title tw-text-left"}> Page Layout Explanation </h2>
          <div className="tw-body-text tw-my-6 tw-text-left">
            The text you read was meant to stimulate what an individual with
            cognitive disability experiences. As read earlier, these individuals
            have a hard time reading under time constraint and interpreting the
            text.
            <div className="lowercontent tw-my-6">
              To optimize their experience, W3 recommends using:
            </div>
            <ul className={"tw-px-6"}>
              <li className={"tw-list-disc"}>
                Short paragraphs and sentences to reduce cognitive load
              </li>
              <li className={"tw-list-disc"}>Consistent font</li>
              <li className={"tw-list-disc"}>Proper headings/subheadings</li>
            </ul>
            <div className="lowercontent tw-my-6">
              Let’s continue on and make the changes. Click 'Next'
            </div>
            <div className="flex tw-w-full tw-justify-center">
              <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick={this.handleNav}
                key="Next"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <PageServiceTimer actions={actions} name={this.state.componentName} />
      </Fragment>
    );
  }
}

export default PageLayoutGuidance;
