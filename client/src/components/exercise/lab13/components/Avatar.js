import React from "react";
import PropTypes from "prop-types";
import RobotImage from "../../../../assets/images/lab13/robot.png";
import { AvatarType } from "../../../../constants/lab13/AvatarType";
import UserPfp from "src/components/all-components/UserPfp";

const Avatar = ({ type, size = 40 }) => {
  const isAI = type === AvatarType.AI;

  return (
    <div
      className="tw-flex-shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: isAI ? "#FACE35" : "#0144D5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: isAI ? "white" : "black",
        fontSize: size * 0.5,
        border: "0.5px solid #9ABDDC",
      }}
    >
      {isAI ? (
        <img
          src={RobotImage}
          alt="AI Avatar"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      ) : (
        <UserPfp />
      )}
    </div>
  );
};

Avatar.propTypes = {
  type: PropTypes.oneOf([AvatarType.AI, AvatarType.User]).isRequired,
  size: PropTypes.number,
};

export default Avatar;
