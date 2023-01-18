/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import { SocialIcon } from "react-social-icons";

const Profile = (props) => {
  const { profile_image, name, title, work, datesActive, socials } = props;
  return (
    <ul id={name} className="citation module__col">
      <li id="profile_image">
        <div
          alt={name + "Profile Image"}
          className="img-fluid module__image module__profile_image"
          style={{
            backgroundImage: "url(/img/profileImages" + profile_image + ")",
          }}
        />
      </li>
      <li className="module__profile_caption">
        <ul>
          <li id={name} className="citation__name">
            {name}
          </li>
          <li id={title} className="module__title">
            {title}
          </li>
          <li id="work" className="module__work">
            {datesActive}
          </li>
          <li id="work" className="module__work">
            {work}
          </li>
        </ul>
      </li>

      <li id="social_media">
        <ul className="landingpage__row citation__social_row">
          {socials.map((social, index) => {
            return (
              <li key={index} className="citation__social_media">
                <SocialIcon
                  url={social.link}
                  network={social.network}
                  target="__blank"
                />
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};

export default Profile;
