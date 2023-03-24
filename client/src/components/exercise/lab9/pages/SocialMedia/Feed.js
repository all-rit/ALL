import React, { Component } from "react";
import "../../../../../../src/assets/stylesheets/components/PawPrintFeed.scss";


class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-div">
        <div className="content-div">
            <span className="user-post">
              <div className="post-text guidance">
                <h1 className="tw-font-bold tw">Feed</h1>
              </div>
            </span>
        </div>
        <div className="comment-div">
          <span className="comment-contents">
            <img alt="userpic"/>
            <p>
              User Comment
            </p>
          </span>
        </div>
      </div>

    )
  }
}
export default Feed;
