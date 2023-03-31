import React from "react";
import "../../../../../../src/assets/stylesheets/components/PawPrintFeed.scss";
import Layout from "../../components/Layout";
import Comment from "../../components/Comment";
import PropTypes from "prop-types";
import ReplyComment from "../../components/ReplyComment";
import Post from "../../components/Post";

const Feed = (props) => {
  const { data } = props;

  return (
    <Layout data={data}>
      <div>
        <div className="main-div">
          <div className="content-div">

            <Post />
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
