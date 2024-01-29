/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from "react";
import UserLabService from "./../../../services/UserLabService";
import LabService from "./../../../services/LabService";
import { Pie } from "react-chartjs-2";
import useScroll from "./../../../use-hooks/useScroll";
import StudyList from "../../body/Reading/studylist";
import NonBulletList from "../../body/Reading/NonBulletList";
import Image from "../../body/Reading/Image";
import Spinner from "./../../../common/Spinner/Spinner";
import Links from "../../body/Reading/Links";
import OrderedList from "../../body/Reading/OrderedList";
import ReadMoreButton from "../components/LearnMoreButton";
import { navigate } from "@reach/router";
import ImagineService from "../../../services/ImagineService";

const Reading = (props) => {
  const { user, userID, labID } = props;
  const [readingData, setReadingData] = useState("");
  const [labShortName, setLabShortname] = useState(null);
  let [scrollPositionPercentage, setScrollPositionPercentage] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [pagePosition, setPagePosition] = useState([]);
  let [saveData, setSaveData] = useState(false);

  useScroll();
  useEffect(() => {
    UserLabService.complete_reading(labID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_reading(user.userid, labID);
    }
    LabService.getLabReading(labID).then((data) => {
      setReadingData(data[0].reading);
    });
    LabService.getLabShortName(labID).then((data) => {
      setLabShortname(data[0].labShortName);
    });
  }, [user, labID]);

  const screenPositionPercentage = (scrollPosition) => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollPosition / totalHeight) * 100;

    if (percentage > 100) {
      setScrollPositionPercentage(100);
    } else {
      setScrollPositionPercentage(percentage);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((pre) => pre + 1);
      const scrollPosition = document.documentElement.scrollTop;
      screenPositionPercentage(scrollPosition);

      setPagePosition((prevPagePosition) => [
        ...prevPagePosition,
        {
          second: seconds,
          positionPercentage: scrollPositionPercentage,
        },
      ]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [screenPositionPercentage]);

  const handleNext = () => {
    setSaveData(true);
    navigate("/Imagine/Quiz");
  };

  useEffect(() => {
    if (saveData) {
      ImagineService.readingSectionPagePosition(userID, pagePosition);
      setSaveData(false);
    }
  }, [saveData, userID, pagePosition]);

  if (!readingData) {
    return (
      <div className="landingpage__row">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <div className="page-section">
        {/* change this h2 tag font size */}
        <h2 className="section-heading text-uppercase tw-text-[5vw] md:tw-text-[5vw] lg:tw-text-[2vw]">
          {labShortName}: READING
        </h2>
      </div>

      <div className="study">
        {readingData?.description !== "" ? (
          <>
            {/* change these */}
            <h3>{readingData?.description.header}</h3>
            <p className="tw-text-xl lg:tw-text-xl">
              {readingData?.description.content}
            </p>
          </>
        ) : (
          <></>
        )}
        {/* change this font size */}
        <h3 className="tw-text-[4vw] md:tw-text-[4vw] lg:tw-text-[1.5vw]">
          {readingData?.piechart.header}
        </h3>
        <div className="flex">
          <Pie
            data={readingData?.piechart.data}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        {readingData?.piechart.caption !== "" ? (
          readingData?.piechart.caption.map((data, index) => {
            return (
              <div
                key={index}
                id={"caption"}
                className="tw-text-[3vw] md:tw-text-[2.75vw] lg:tw-text-[1vw]"
              >
                {data}
              </div>
            );
          })
        ) : (
          <></>
        )}
        {readingData?.body !== "" ? (
          readingData?.body.map((data, index) => {
            return (
              <Fragment key={index}>
                {/* change this h3 tag font size */}
                {data.header !== "" && (
                  <h3 className="tw-text-[4vw] md:tw-text-[4vw] lg:tw-text-[1.5vw]">
                    {data.header}
                  </h3>
                )}
                {data.type === "" && (
                  <>
                    {data.content.map((content, index) => {
                      return (
                        <p
                          className="tw-text-[3vw] md:tw-text-[2.75vw] lg:tw-text-[1vw]"
                          key={index}
                        >
                          {content}
                        </p>
                      );
                    })}
                  </>
                )}
                {data.type === "study__list" && (
                  <StudyList data={data.content} />
                )}
                {data.type === "ordered-list" && (
                  <OrderedList data={data.content} />
                )}
                {data.type === "non-bullet-list" && (
                  <NonBulletList data={data.content} />
                )}
                {data.type === "image" && <Image data={data.content} />}
                {data.type === "links" && <Links data={data.content} />}
              </Fragment>
            );
          })
        ) : (
          <></>
        )}
        {readingData?.footer !== "" ? (
          <ReadMoreButton userID={userID} data={readingData?.footer.links} />
        ) : (
          <></>
        )}
        <button
          className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
          onClick={handleNext}
        >
          Continue to Quiz
        </button>
      </div>
    </div>
  );
};

export default Reading;
