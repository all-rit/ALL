import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Avatar from "avataaars";
import createAvatarData from "../../../body/lab/GridImages/createAvatarData";

const Comment = (props) => {
  const { avatarData } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(avatarData ? avatarData : createAvatarData(1)[0]);
  }, []);

  return (
    <div className="comment-div">
      <span className="comment-contents">
        {data && (
          <Avatar
            alt={"comment avatar"}
            className={"tw-w-10 tw-h-10 tw-mr-3 tw-ml-3"}
            avatarStyle="Circle"
            topType={data.avatarAttributes.topType}
            accessoriesType={data.avatarAttributes.accessoriesType}
            hairColor={data.avatarAttributes.hairColor}
            facialHairType={data.avatarAttributes.facialHairType}
            clotheType={data.avatarAttributes.clotheType}
            clotheColor={data.avatarAttributes.clotheColor}
            eyeType={data.avatarAttributes.eyeType}
            eyebrowType={data.avatarAttributes.eyebrowType}
            mouthType={data.avatarAttributes.mouthType}
            skinColor={data.avatarAttributes.skinColor}
          />
        )}
        <p className="guidance tw-font-bold">
          {" "}
          User {Math.floor(Math.random() * 100 + 100)} barked: &quot;Awe, thats
          adorbes!&quot;{" "}
        </p>
      </span>
    </div>
  );
};

Comment.propTypes = {
  avatarData: PropTypes.object,
};

export default Comment;
