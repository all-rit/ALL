/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useCallback, useState } from "react";
import clsx from "clsx";
import createAvatarData from "../../../body/lab/GridImages/createAvatarData";
import Avatar from "avataaars";
import LongHorizontalLine from "../../../../common/HorizontalLine/LongHorizontalLine";
import Recomendation from "./Recomendation";

const GridApplicants = (props) => {
  const { numApplicants, setSelection, weightedValues,favorable } = props;
  const [currentFile, setCurrentFile] = useState([]);
  const [id, setId] = useState([]);

  const gridImagesClassnames = clsx({
    "tw-cursor-pointer tw-w-full tw-rounded tw-max-w-full tw-h-auto ": true,
  });

  //need to create a set applicant
  const [applicants, setApplicants] = useState([]);

  //added use Effect for setApplicant
  //may need more under useEffect?
  useEffect(() => {
    let createdAvatarData = weightedValues === undefined ? createAvatarData(50) : createAvatarData(50,weightedValues);
    setApplicants(createdAvatarData.slice(0, numApplicants));
    setCurrentFile([]);
    setId([]);
  }, [numApplicants]);

  useEffect(() => {
    setSelection(currentFile);
    console.log(currentFile, "cF");
  }, [currentFile]);

  const handleGridImage = useCallback(
    (imgId) => {
      if (id.length <= 3) {
        setId((prevState) => [...prevState, imgId]);
      }
      const selectImg = applicants.filter((img) => img.id === imgId)?.[0];
      if (currentFile.length <= id.length <= 3 && !id.includes(selectImg.id)) {
        setCurrentFile((prevState) => [...prevState, selectImg]);
      } else {
        if (id?.includes(selectImg.id)) {
          setCurrentFile((prevState) =>
            prevState.filter((file) => file.id !== selectImg.id)
          );
          setId((prevState) => prevState.filter((id) => id !== selectImg.id));
        }
      }
    },
    [id, currentFile]
  );

  //changed dan mock data into [varName]
  console.log(currentFile, "cF");
  return (
    <div className="gridApplicants tw-inline-flex">
      <div className="tw-mr-4">
            {/* Number determines alignment of long horizontals*/}
            <ul className="gridApplicants-content tw-bg-bgwhite tw-mt-60">
              <li className="tw-p-4">Gender</li>
              <li className="tw-p-4">Experience</li>
              <li className="tw-p-4">Availability</li>
              <li className="tw-p-4">Pay</li>
            </ul>
          </div>

      <div className="tw-flex tw-gap-x-4">
        {favorable &&(
          <ul>
            <li>
              <Recomendation aiRecommendation/>
            </li>
            <ul htmlFor="applicant" className="candidate__col">
              <li className="candidate__image_container">
                <li
                  className="candidate__image"
                  alt="default_img"
                  style={{
                    backgroundImage:
                      "url('https://login.vivaldi.net/profile/avatar/default-avatar.png",
                  }}
                />
              </li>
              <li className="tw-p-4">Unimportant</li>
              <LongHorizontalLine/>
              <li className="tw-p-4">1-3 years</li>
              <LongHorizontalLine/>
              <li className="tw-p-4">Full-Time</li>
              <LongHorizontalLine/>
              <li className="tw-p-4">$25-32/hr</li>
          </ul>
        </ul>
        )}
        {applicants?.map((data) => (
          <ul>
            <li>
              <Recomendation aiRecommendation={data?.ai == "Yes" ? true : false}/>
            </li>
            <ul htmlFor="applicant" 
                className={`candidate__col ${
                  id.includes(data.id)
                    ? "tw-opacity-75 tw-border-solid tw-border-7"
                    : ""
                }`}
              onClick={() => handleGridImage(data?.id)}
              >
              <li className="candidate__image_container">
                <Avatar
                  className="candidate__image"
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
              </li>
              <li className="tw-p-4">{data?.gender}</li>
              <LongHorizontalLine/>
              <li className="tw-p-4">{data?.years}</li>
              <LongHorizontalLine/>
              <li className="tw-p-4">{data?.availability}</li>
              <LongHorizontalLine/>
              <li className="tw-p-4">{data?.pay}</li>
            </ul>
          </ul>
          // <ul
          //   key={data?.id}
          //   onClick={() => handleGridImage(data?.id)}
          //   className={`gridApplicants-content tw-bg-bgwhite tw-w-40 ${
          //     id.includes(data.id)
          //       ? "tw-opacity-75 tw-border-solid tw-border-8"
          //       : ""
          //   }`}
          // >
          //   <Avatar
          //     className="tw-w-40 tw-h-40"
          //     alt={data.name}
          //     avatarStyle="Square"
          //     topType={data.avatarAttributes.topType}
          //     accessoriesType={data.avatarAttributes.accessoriesType}
          //     hairColor={data.avatarAttributes.hairColor}
          //     facialHairType={data.avatarAttributes.facialHairType}
          //     clotheType={data.avatarAttributes.clotheType}
          //     clotheColor={data.avatarAttributes.clotheColor}
          //     eyeType={data.avatarAttributes.eyeType}
          //     eyebrowType={data.avatarAttributes.eyebrowType}
          //     mouthType={data.avatarAttributes.mouthType}
          //     skinColor={data.avatarAttributes.skinColor}
          //   />
          //   <li className="tw-p-4">{data?.years}</li>
          //   <li className="tw-p-4">{data?.availability}</li>
          //   <li className="tw-p-4">{data?.pay}</li>
          //   <li className="tw-p-4">{data?.ai}</li>
          // </ul>
        ))}
      </div>
    </div>
  );
};

export default GridApplicants;
