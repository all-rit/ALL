import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../components/PageServiceTimer";

class PageLayoutGuidance extends Component {
  handleNav() {
    navigate("/Lab5/Game/PageLayoutRepair");
  }

  render() {
    const {actions} = this.props;
    return (
      
      <Fragment>
        <div className="center-div">
          <div className="guidance">
              The text you read was meant to stimulate what an individual with cognitive disability experiences. As read earlier, these individuals have a hard time reading under time constraint and interpreting the text.
              <div className="lowercontent">To optimize their experience, W3 recommends using:</div>
              <ul>
                <li>
                  short paragraphs and sentences to reduce cognitive load
                </li>
                <li>
                  consistent font
                </li>
                <li>
                  proper headings/subheadings
                </li>
              </ul>
              <div className="lowercontent">Let’s continue on and make the changes. Click 'Next'</div>
              <div className = "flex">
                  <button
                      className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen"
                      onClick = {this.handleNav}
                      key="Next"
                  >
                      Next
                  </button>
              </div>
          </div>

        </div>
          <PageServiceTimer actions={actions} name={this.constructor.name} />
      </Fragment>
    );
  }
}

export default PageLayoutGuidance;
