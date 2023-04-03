import React, { useEffect, useState } from "react";
import "../../../../../../src/assets/stylesheets/components/PawPrintFeed.scss";
import Layout from "../../components/Layout";
import Comment from "../../components/Comment";
import PropTypes from "prop-types";
import ReplyComment from "../../components/ReplyComment";
import Post from "../../components/Post";
import ALLModal from "../../../../all-components/ALLModal";
import { EXERCISE_PLAYING } from "../../../../../constants/lab9";

const Feed = (props) => {
  const { data, actions } = props;

  const [comments, setComments] = useState([<Comment key={0} />]);
  const [updateComments, setUpdateComments] = useState(false);

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  useEffect(() => {
    setUpdateComments(false);
  }, [updateComments]);

  return (
    <Layout data={data}>
      <ALLModal
        status={false}
        showFooter
        showHeader
        canClose
        showStatusIcon
        header={"Alert"}
        failedStatusTitle={"Successfully rejected!"}
        statusTitle={"Successfully accepted!"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum nunc. Consequat id porta nibh venenatis."
        }
      />
      <div>
        <div className="main-div">
          <div className="content-div">
            <Post />
            <ReplyComment
              avatarData={data}
              comments={comments}
              setUpdateComments={setUpdateComments}
              setComments={setComments}
            />
          </div>
          <div className={"comment-section"}>
            {comments.map((comment) => {
              return comment;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

Feed.propTypes = {
  data: PropTypes.object,
  actions: PropTypes.object,
};

export default Feed;
