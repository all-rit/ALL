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
import ReadMoreButton from "../../all-components/imagine-components/LearnMoreButton";
import ImagineService from "src/services/ImagineService";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

const Reading = (props) => {
  const { user, labID, isImagine, userID, year } = props;
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
    const readingAnalytics = async () => {
      await UserLabService.complete_reading(labID);
      if (user?.firstname !== null && user !== null) {
        await UserLabService.user_complete_reading(user.userid, labID);
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
        await ImagineService.readingSectionPagePosition(
          userID,
          pagePosition,
          year,
        );
        setSaveData(false);
      }
    };
    readingAnalytics().catch(console.error);
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
    navigate("/Imagine2023/PostSurvey");
  };

  const hasPiechartInBody = () => {
    return readingData?.body?.some((item) => item.type === "piechart");
  };

  return (
    <div
      className={"tw-w-full tw-flex tw-flex-col tw-align-top tw-justify-center tw-h-[35rem]"}
    >
      <h2
        className={
          "tw-title tw-text-left tw-bg-white tw-w-[100%] tw-px-10 tw-text-[2.5rem]"
        }
      >
        Reading
      </h2>
      <div className="tw-w-full tw-overflow-y-scroll">
        <div className="study tw-bg-white p-5 tw-rounded-lg">
          {readingData?.description !== "" ? (
            <>
              <h3 className={"tw-title"}>{readingData?.description.header}</h3>
              <p className={"tw-body-text"}>
                {readingData?.description.content}
              </p>
            </>
          ) : (
            <></>
          )}
          {!hasPiechartInBody() && readingData?.piechart?.header && (
            <>
              <h3 className={"tw-title"}>{readingData?.piechart.header}</h3>
              <div className="flex tw-body-text">
                <Pie
                  data={readingData?.piechart.data}
                  height={!isImagine && 100}
                  options={isImagine && { maintainAspectRatio: false }}
                />
              </div>
            </>
          )}
          {!hasPiechartInBody() && readingData?.piechart?.caption !== "" ? (
            readingData?.piechart?.caption.map((data, index) => {
              return (
                <div
                  key={index}
                  id={"caption"}
                  className={
                    "tw-body-text tw-text-[#666] tw-my-0 tw-text-sm tw-leading-snug tw-text-center"
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
                    <h3 className={"tw-title tw-text-left tw-leading-snug"}>
                      {data.header}
                    </h3>
                  )}
                  {data.type === "" && (
                    <>
                      {data.content.map((content, index) => {
                        return (
                          <p
                            key={index}
                            className={"tw-body-text tw-leading-snug"}
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
                  {data.type === "piechart" && data.content && (
                    <>
                      <div className="flex tw-body-text">
                        <Pie
                          data={data.content.data}
                          height={!isImagine && 100}
                          options={isImagine && { maintainAspectRatio: false }}
                        />
                      </div>
                      {data.content.caption && (
                        <div className="tw-body-text tw-text-[#666] tw-text-sm tw-text-center">
                          {data.content.caption}
                        </div>
                      )}
                    </>
                  )}
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
          <ReadMoreButton
            userID={userID}
            data={readingData?.footer.links}
            year={year}
          />
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
  year: PropTypes.number,
};

export default Reading;
