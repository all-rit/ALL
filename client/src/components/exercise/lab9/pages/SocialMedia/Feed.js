import React, { Component } from "react";
import "../../../../../../src/assets/stylesheets/components/PawPrintFeed.scss";
import user939 from "../../../../../assets/images/lab9/user939.png";
import user828 from "../../../../../assets/images/lab9/user828.png";
import Heart from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import { ThumbUp } from "@material-ui/icons";
import profilepic from "../../../../../assets/images/lab9/profilepic.png";
import kitty from "../../../../../assets/images/lab9/kitty.png";

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-div">
        <div className="content-div">
          <span className="user-post">
            <div>
              <div className="post-text guidance tw-font-bold">
                <img
                  className={"poster-image"}
                  alt="posting-user"
                  src={user828}
                />
                <p className="tw-font-bold ">
                  User828 Posted: This cat is the cutest!
                </p>
                <span className={"button-row"}>
                  <Button
                    className={"button-design"}
                    color={"primary"}
                    startIcon={<ThumbUp />}
                  ></Button>
                  <Button
                    className={"button-design"}
                    color="secondary"
                    size={"large"}
                    startIcon={<Heart />}
                  ></Button>
                </span>
              </div>
              <div>
                <img className={"kitty-image"} alt="kitty" src={kitty} />
              </div>
            </div>
          </span>

          <span className={"reply tw-ml-3 tw-mt-3"}>
            <img
              src={profilepic}
              alt="welcome logo"
              className="profile-pic tw-rounded-3xl"
            />
            <p className={"tw-font-bold tw-ml-5"}> Add a Comment... </p>
            <Button className={"reply-button "}>Reply</Button>
          </span>
        </div>
        <div className="comment-section">
          <div className="comment-div">
            <span className="comment-contents">
              <img className="commenter-image" alt="userpic" src={user939} />
              <p className="guidance tw-font-bold">
                {" "}
                User 939 barked: &quot;Awe, thats adorbes!&quot;{" "}
              </p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Feed;
