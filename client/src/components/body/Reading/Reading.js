/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from "react";
import UserLabService from "../../../services/UserLabService";
import LabService from "../../../services/LabService";
import { Pie } from "react-chartjs-2";
import useScroll from "../../../use-hooks/useScroll";
import StudyList from "./studylist";
import NonBulletList from "./NonBulletList";
import Image from "./Image";
import Spinner from "../../../common/Spinner/Spinner";
import LinkFooter from "./LinkFooter";
import Links from "./Links";
import OrderedList from "./OrderedList";
import ReadMoreButton from "../../imagine23/components/LearnMoreButton";
import ImagineService from "src/services/ImagineService";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

const Reading = (props) => {
  const { user, labID, isImagine, userID } = props;
  const [readingData, setReadingData] = useState("");
  const [modalOpen, setModalOpen] = useState(true);
  let [scrollPositionPercentage, setScrollPositionPercentage] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [pagePosition, setPagePosition] = useState([]);
  let [saveData, setSaveData] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  useScroll();

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
    UserLabService.complete_reading(labID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_reading(user.userid, labID);
    }
    LabService.getLabReading(labID).then((data) => {
      setReadingData(data[0].reading);
    });

    if (isImagine) {
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
        console.log(
          "Scroll position percentage: " +
            JSON.stringify(pagePosition) +
            "\n" +
            "at " +
            seconds +
            " seconds",
        );
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }

    if (isImagine && saveData) {
      ImagineService.readingSectionPagePosition(userID, pagePosition);
      setSaveData(false);
    }
  }, [
    user,
    labID,
    isImagine,
    saveData,
    userID,
    pagePosition,
    seconds,
    scrollPositionPercentage,
  ]);

  if (!readingData) {
    return (
      <div className="landingpage__row">
        <Spinner />
      </div>
    );
  }

  const handleNext = () => {
    console.log("Scroll position percentage: " + JSON.stringify(pagePosition));
    setSaveData(true);
    navigate("/Imagine/PostSurvey");
  };

  return (
    <div>
      <div className="tw-relative tw-bg-labYellow p-3 tw-rounded-3xl shadow">
        <div className="study tw-bg-white p-5 tw-rounded-2xl shadow">
          {readingData?.description !== "" ? (
            <>
              <h3>{readingData?.description.header}</h3>
              <p>{readingData?.description.content}</p>
            </>
          ) : (
            <></>
          )}
          {readingData?.piechart?.header && (
            <>
              <h3 className={isImagine && "tw-text-[4vw] lg:tw-text-[3.5vh]"}>
                {readingData?.piechart.header}
              </h3>
              <div className="flex">
                <Pie
                  data={readingData?.piechart.data}
                  height={!isImagine && 100}
                  options={isImagine && { maintainAspectRatio: false }}
                />
              </div>
            </>
          )}
          {readingData?.piechart.caption !== "" ? (
            readingData?.piechart.caption.map((data, index) => {
              return (
                <div
                  key={index}
                  id={"caption"}
                  className={
                    isImagine ? "tw-text-[3vw] lg:tw-text-[2.25vh]" : ""
                  }
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
                  {data.header !== "" && (
                    <h3
                      className={
                        isImagine && "tw-text-[4vw] lg:tw-text-[3.5vh]"
                      }
                    >
                      {data.header}
                    </h3>
                  )}
                  {data.type === "" && (
                    <>
                      {data.content.map((content, index) => {
                        return (
                          <p
                            key={index}
                            className={
                              isImagine && "tw-text-[3vw] lg:tw-text-[2.25vh]"
                            }
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
                    <NonBulletList data={data.content} isImagine={isImagine} />
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
            <LinkFooter data={readingData?.footer.links} />
          ) : (
            <></>
          )}
        </div>

        {isImagine ? (
          <Modal isOpen={modalOpen}>
            <ModalHeader>Expand Window</ModalHeader>
            <ModalBody>Please expand your window to fit the screen.</ModalBody>
            <ModalFooter>
              <Button onClick={closeModal}> Close </Button>
            </ModalFooter>
          </Modal>
        ) : (
          <></>
        )}
      </div>
      {isImagine && readingData?.footer !== "" && (
        <div>
          <ReadMoreButton userID={userID} data={readingData?.footer.links} />
          <button
            className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
            onClick={handleNext}
          >
            Continue to Post Survey
          </button>
        </div>
      )}
    </div>
  );
};

Reading.propTypes = {
  user: PropTypes.object,
  userID: PropTypes.string,
  labID: PropTypes.number,
  isImagine: PropTypes.bool,
  data: PropTypes.array,
};

export default Reading;
