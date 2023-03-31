import React, { useEffect, useState } from "react";
import "../../../../../../src/assets/stylesheets/components/PawPrintFeed.scss";
import Heart from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import { ThumbUp } from "@material-ui/icons";
import Layout from "../../components/Layout";
import kitty from "../../../../../assets/images/lab9/kitty.png";
import Comment from "../../components/Comment";
import createAvatarData from "../../../../body/lab/GridImages/createAvatarData";
import Avatar from "avataaars";
import PropTypes from "prop-types";
import ReplyComment from "../../components/ReplyComment";

const Feed = (props) => {
  const { data } = props;
  const [posterData, setPosterData] = useState(null);

  useEffect(() => {
    setPosterData(createAvatarData(1)[0]);
  }, []);

  return (
    <Layout data={data}>
      <div>
        <div className="main-div">
          <div className="content-div">
            <div className="user-post">
              <div className="tw-inline-flex tw-font-bold">
                {data && (
                  <Avatar
                    alt={"posting user"}
                    className={"poster-image"}
                    avatarStyle="Circle"
                    topType={posterData.avatarAttributes.topType}
                    accessoriesType={
                      posterData.avatarAttributes.accessoriesType
                    }
                    hairColor={posterData.avatarAttributes.hairColor}
                    facialHairType={posterData.avatarAttributes.facialHairType}
                    clotheType={posterData.avatarAttributes.clotheType}
                    clotheColor={posterData.avatarAttributes.clotheColor}
                    eyeType={posterData.avatarAttributes.eyeType}
                    eyebrowType={posterData.avatarAttributes.eyebrowType}
                    mouthType={posterData.avatarAttributes.mouthType}
                    skinColor={posterData.avatarAttributes.skinColor}
                  />
                )}
                <p className="tw-font-bold tw-self-center">
                  User828 Posted: This cat is the cutest!
                </p>
                <div className={"button-row"}>
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
                </div>
              </div>

              <div>
                <img src={kitty} alt="kitty" className={"kitty-image"} />
              </div>
            </div>

            {/* <span className={"reply tw-ml-3 tw-mt-3"}>
                <img
                  src={profilepic}
                  alt="welcome logo"
                  className="profile-pic tw-rounded-3xl"
                />
                <p className={"tw-font-bold tw-ml-5"}> Add a Comment... </p>
                <Button className={"button-design tw-mr-2"}>Reply</Button>
              </span> */}
            <ReplyComment avatarData={data} />
          </div>
          <div className={"comment-section"}>
            {/** Insert user reply here */}
            <Comment />
          </div>
        </div>
      </div>
    </Layout>
  );
};

Feed.propTypes = {
  data: PropTypes.object,
};

export default Feed;
