import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "avataaars";
import { Button } from "@material-ui/core";
import Comment from "./Comment";
import ALLModal from "../../../all-components/ALLModal";

const ReplyComment = (props) => {
  const { avatarData, comments, setComments, setUpdateComments } = props;

  const [showModal, setShowModal] = useState(false);

  const handleReply = () => {
    setShowModal(true);
    let newComments = comments;
    newComments.unshift(
      <Comment avatarData={avatarData} key={newComments.length} />
    );
    setComments(newComments);
    setUpdateComments(true);
  };

  const ReplyModalBody = () => {
    return (
      <div className="tw-p-4">
        <div className="tw-relative tw-max-w-xs tw-mx-auto tw-mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tw-absolute tw-top-0 tw-bottom-0 tw-w-6 tw-h-6 tw-my-auto tw-text-textGray tw-right-2.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <select className="tw-w-full tw-p-2.5 tw-text-textGray tw-bg-white tw-border tw-rounded-md tw-shadow-sm tw-outline-none tw-appearance-none focus:tw-border-selectedBlue">
            <option>Project manager</option>
            <option>Software engineer</option>
            <option>IT manager</option>
            <option>UI / UX designer</option>
          </select>
        </div>
        <div className="tw-flex tw-justify-center">
          My pet is better than your silly cat
        </div>
      </div>
    );
  };

  return (
    <>
      <ALLModal
        show={showModal}
        setShow={setShowModal}
        showHeader
        header={"Reply"}
        canClose
        customBody={<ReplyModalBody />}
      />
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
    </>
  );
};

ReplyComment.propTypes = {
  avatarData: PropTypes.object,
  setComments: PropTypes.func,
  comments: PropTypes.array,
  setUpdateComments: PropTypes.func,
};

export default ReplyComment;
