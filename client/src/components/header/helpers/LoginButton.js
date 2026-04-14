/* eslint-disable react/prop-types */
import React from "react";
import API from "../../../services/API";
import GoogleLogin from "../../../assets/images/google_buttons/Google_Sign_In.svg";
import Avatar from "avataaars";
import { AvatarData } from "../../body/login/AvatarData";
import useMainStateContext from "../../../reducers/MainContext";
import PropTypes from "prop-types";

const LoginButton = (props) => {
  const { enabled } = props;
  const { actions } = useMainStateContext();

  const isDev = import.meta.env.DEV;

  const developmentLogin = (userId) => {
    actions.developmentLogin(userId);
    props.closeModal();
  };

  const devLogin = () => {
    return (
      <div
        className={"tw-flex tw-flex-col tw-w-full tw-h-full tw-items-center"}
      >
        <p>Who would you like to log in as?</p>
        <div className={"tw-flex tw-justify-between tw-p-5 tw-gap-x-6"}>
          {AvatarData.map((data, index) => {
            return (
              <div
                onClick={() => developmentLogin(data.id)}
                key={index}
                className={
                  "tw-flex tw-flex-col tw-items-center tw-rounded-full hover:tw-cursor-pointer"
                }
              >
                <Avatar
                  className={
                    "tw-rounded-full tw-border-8 tw-w-[4rem] tw-h-[4rem]"
                  }
                  alt={data.name}
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
          API.postWithBody(import.meta.env.VITE_SERVER_URL + "/url", {
            url: window.location,
          }).then(() => {
            window.location.href =
              import.meta.env.VITE_SERVER_URL + "/auth/google";
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

LoginButton.propTypes = {
  closeModal: PropTypes.function,
};

export default LoginButton;
