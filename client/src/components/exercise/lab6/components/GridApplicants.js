/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useCallback, useState } from "react";
import { danMockData } from "../../../mockData/danMockData";
import clsx from "clsx";
import createAvatarData from "../../../body/lab/GridImages/createAvatarData";
import Avatar from "avataaars";

const GridApplicants = (props) => {
  const { numApplicants, setSelection } = props;
  const [currentFile, setCurrentFile] = useState([]);
  const [id, setId] = useState([]);

  const gridImagesClassnames = clsx({
    "tw-cursor-pointer tw-w-full tw-rounded tw-max-w-full tw-h-auto ": true,
  });

  //need to create a set applicant
  const [applicant, setApplicant] = useState([]);

  //added use Effect for setApplicant
  //may need more under useEffect?
  useEffect(() => {
    let avatarData = createAvatarData(50);
    setApplicant(avatarData.slice(0, numApplicants));
  }, [numApplicants]);

  useEffect(() => {
    setSelection(currentFile);
  }, [currentFile]);

  const handleGridImage = useCallback(
    (imgId) => {
      if (id.length <= 3) {
        setId((prevState) => [...prevState, imgId]);
      }
      const selectImg = danMockData.filter((img) => img.id === imgId)?.[0];
      if (currentFile.length <= 3 && !id.includes(selectImg.id)) {
        setCurrentFile((prevState) => [...prevState, selectImg]);
        setSelection((prevState) => [...prevState, selectImg]);
      }

      //is buggy, but need to get ai recommendation tracked so then create an event with the modal footer
      else {
        if (id?.includes(selectImg.id)) {
          setCurrentFile((prevState) =>
            prevState.filter((file) => file.id !== selectImg.id)
          );
          setSelection((prevState) =>
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
    <div className="gridApplicants tw-flex">
      <div className="tw-mr-4">
        <ul className="gridApplicants-content tw-bg-bgwhite tw-mt-40">
          <li className="tw-p-4">Gender</li>
          <li className="tw-p-4">Years of Experience</li>
          <li className="tw-p-4">Availability</li>
          <li className="tw-p-4">Expected Pay</li>
          <li className="tw-p-4">AI Recommendation</li>
        </ul>
      </div>

      <div className="tw-flex tw-gap-x-4">
        {applicant?.map((data) => (
          <ul
            onClick={() => handleGridImage(data?.id)}
            className={`gridApplicants-content tw-bg-bgwhite tw-w-40 ${
              id.includes(data.id)
                ? "tw-opacity-75 tw-border-solid tw-border-8"
                : ""
            }`}
          >
            <Avatar
              className="tw-w-40 tw-h-40"
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
            <li className="tw-p-4">{data?.gender}</li>
            <li className="tw-p-4">{data?.years}</li>
            <li className="tw-p-4">{data?.availability}</li>
            <li className="tw-p-4">{data?.pay}</li>
            <li className="tw-p-4">{data?.ai}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default GridApplicants;
