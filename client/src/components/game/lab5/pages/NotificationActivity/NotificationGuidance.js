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
              The activity you completed was meant to stimulate what an individual with dyslexia experiences
              <div className="lowercontent">Common challenges include:</div>
              <ul>
                  <li>
                      Distinguishing among homophones such as "their" and "there"
                  </li>
                  <li>
                      Reading quickly
                  </li>
                  <li>
                      Spelling highly phonetic words
                  </li>
              </ul>
              <div className="lowercontent">To optimize their experience, W3 recommends:</div>
              <ul>
                <li>
                    Providing users enough time to read and use content
                </li>
                <li>
                    Default fonts are no smaller than 12px
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
          <PageServiceTimer actions={actions} name={this.constructor.name}/>
      </Fragment>
    );
  }
}

export default PageLayoutGuidance;
