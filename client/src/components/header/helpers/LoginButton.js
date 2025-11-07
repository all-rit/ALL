/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from "react";
import API from "../../../services/API";
import GoogleLogin from "../../../assets/images/google_buttons/Google_Sign_In.svg";
import Avatar from "avataaars";
import { AvatarData } from "../../body/login/AvatarData";
import UserService from "../../../services/UserService";

const LoginButton = (props) => {
  const { enabled } = props;

  const isDev = process.env.NODE_ENV === "development";

  console.warn(isDev);

  const developmentLogin = async (id) => {
    const user = await UserService.getUser(id);
    console.warn(user);
    return user;
  };

  const devLogin = () => {
    return (
      <div
        className={"tw-flex tw-flex-col tw-w-full tw-h-full tw-items-center"}
      >
        <p>Who would you like to log in as?</p>
        <div className={"tw-flex tw-justify-between"}>
          {AvatarData.map((data, index) => {
            return (
              <div
                onClick={() => developmentLogin(data.id)}
                key={index}
                className={
                  "tw-flex tw-flex-col tw-items-center tw-rounded-full hover:tw-shadow tw-p-2"
                }
              >
                <Avatar
                  className={"tw-rounded-full tw-border-8 tw-w-3/4 tw-h-3/4"}
                  alt={data.name}
                  avatarStyle="Square"
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
                {data.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const prodLogin = () => {
    return (
      <a
        href="# "
        onClick={() =>
          API.postWithBody(process.env.REACT_APP_SERVER_URL + "/url", {
            url: window.location,
          }).then(() => {
            window.location.href =
              process.env.REACT_APP_SERVER_URL + "/auth/google";
          })
        }
      >
        <img src={GoogleLogin} />
      </a>
    );
  };

  if (enabled) {
    return isDev ? devLogin() : prodLogin();
  }

  return <div className="google__button google__button--disabled" />;
};

export default LoginButton;
