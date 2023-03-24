/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar } from "avataaars";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import LongHorizontalLine from "../../../../common/HorizontalLine/LongHorizontalLine";

const Applicant = (props) => {
  const { type, gender, age, years, availability, pay, ai, data } = props;

  switch (type) {
    case "key":
      return (
        <>
          <div className="candidate__key__container">
            <ul className="candidate__key__col">
              <li className="candidate__data">{gender}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{age}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{years}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{availability}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{pay}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{ai}</li>
            </ul>
          </div>
        </>
      );
    case "applicant":
      return (
        <ul>
          <li className="candidate__container">
            <ul htmlFor="applicant" className="candidate__col">
              <li className="candidate__image" alt="krutz">
                <Avatar
                  className="tw-w-16 tw-h-16"
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
              </li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{gender}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{age}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{years}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{availability}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{pay}</li>
              <li>
                <LongHorizontalLine />
              </li>
              <li className="candidate__data">{ai}</li>
            </ul>
          </li>
          <li>
            <Input
              id="applicant"
              name="applicant"
              type="checkbox"
              className=""
            />
          </li>
        </ul>
      );
    default:
      return <></>;
  }
};

export default Applicant;
