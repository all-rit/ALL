import React from "react";
import PropTypes from "prop-types";
import Avatar from "avataaars";
import { Button } from "@material-ui/core";

const ReplyComment = (props) => {
    const { avatarData } = props;

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
            <Button className={"button-design tw-mr-2"}>Reply</Button>
        </span>
);
};

ReplyComment.propTypes = {
    avatarData: PropTypes.object,
};

export default ReplyComment;