import React, { useEffect, useState } from "react";
import "../../../../../../src/assets/stylesheets/components/PawPrintFeed.scss";
import Layout from "../../components/Layout";
import Comment from "../../components/Comment";
import PropTypes from "prop-types";
import ReplyComment from "../../components/ReplyComment";
import Post from "../../components/Post";
import { EXERCISE_PLAYING } from "../../../../../constants/lab9";

const Feed = (props) => {
  const { data, actions } = props;

  const [comments, setComments] = useState([<Comment key={0}/>]);
  const [updateComments, setUpdateComments] = useState(false);

  useEffect(() => {actions.updateState(EXERCISE_PLAYING);}, [actions]);

  useEffect(() => {setUpdateComments(false)}, [updateComments]);

  return (
    <Layout data={data}>
      <div>
        <div className="main-div">
          <div className="content-div">
            <Post />
            <ReplyComment avatarData={data} comments={comments} setUpdateComments={setUpdateComments} setComments={setComments}/>
          </div>
          <div className={"comment-section"}>
            {comments.map((comment) =>{
              return comment
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
