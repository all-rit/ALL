import React from "react";
import PropTypes from "prop-types";
import Avatar from "avataaars";
import { Button } from "@material-ui/core";
import Comment from "./Comment";

const ReplyComment = (props) => {
  const { avatarData, comments, setComments, setUpdateComments } = props;

  const handleReply = () => {
    let newComments = comments;
    newComments.unshift(
      <Comment avatarData={avatarData} key={newComments.length} />
    );
    setComments(newComments);
    setUpdateComments(true);
    console.log(newComments);
  };

  return (
    <span className="reply tw-ml-3 tw-mt-3">
      {avatarData && (
        <Avatar
          alt={"user avatar"}
          className={"profile-pic"}
          avatarStyle="Circle"
          topType={avatarData.avatarAttributes.topType}
          accessoriesType={avatarData.avatarAttributes.accessoriesType}
          hairColor={avatarData.avatarAttributes.hairColor}
          facialHairType={avatarData.avatarAttributes.facialHairType}
          clotheType={avatarData.avatarAttributes.clotheType}
          clotheColor={avatarData.avatarAttributes.clotheColor}
          eyeType={avatarData.avatarAttributes.eyeType}
          eyebrowType={avatarData.avatarAttributes.eyebrowType}
          mouthType={avatarData.avatarAttributes.mouthType}
          skinColor={avatarData.avatarAttributes.skinColor}
        />
      )}
      <p className={"tw-font-bold tw-ml-5"}> Add a Comment... </p>
      <Button onClick={handleReply} className={"button-design tw-mr-2"}>
        Reply
      </Button>
    </span>
  );
};

ReplyComment.propTypes = {
  avatarData: PropTypes.object,
  setComments: PropTypes.func,
  comments: PropTypes.array,
  setUpdateComments: PropTypes.func,
};

export default ReplyComment;
