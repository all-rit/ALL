import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Avatar from "avataaars";
import { ThumbUp } from "@material-ui/icons";
import Heart from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import createAvatarData from "../../../body/lab/GridImages/createAvatarData";
import kitty from "../../../../assets/images/lab9/kitty.png";

const Post = (props) => {
  const { avatarData } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(avatarData ? avatarData : createAvatarData(1)[0]);
  }, []);

  return (
    <div className="user-post">
      <div className="tw-inline-flex tw-font-bold">
        {data && (
          <Avatar
            alt={"posting user"}
            className={"poster-image"}
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
  );
};

Post.propTypes = {
  avatarData: PropTypes.object,
};
export default Post;
