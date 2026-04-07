import React, { Fragment, useEffect, useState } from "react";
import UserLabService from "../../../services/UserLabService";
import LabService from "../../../services/LabService";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
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

const PIE_WINDOW_HEIGHT_PERCENTAGE = 0.7;
const PIE_WINDOW_RESIZE_WIDTH = 610;
const MAX_PIE_LABEL_LENGTH = 25;
const PX_SPACE_LEGEND_CHART = 50;
const PIE_SIZE = 300;

Chart.register(ArcElement, Tooltip, Legend);

const Reading = (props) => {
  const { user, labID, isImagine, userID, year } = props;
  const [readingData, setReadingData] = useState("");
  const [modalOpen, setModalOpen] = useState(true);
  const [mobileView, setMobileView] = useState(false);
  const [pieHeight, setPieHeight] = useState(
    window.innerHeight * PIE_WINDOW_HEIGHT_PERCENTAGE,
  );
  const [originalPieLabels, setOriginalPieLabels] = useState([]);
  const [mobileLabelWrap, setMobileLabelWrap] = useState(false);
  const [accessiblePieLabel, setAccessiblePieLabel] = useState("");
  let [scrollPositionPercentage, setScrollPositionPercentage] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [pagePosition, setPagePosition] = useState([]);
  let [saveData, setSaveData] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const mobileWrapOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          padding: 28,
          textAlign: "left",
        },
        position: "top",
        align: "start",
      },
      title: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          title: (ctx) => {
            return ctx.label;
          },

          label: (ctx) => {
            return ctx.parsed;
          },
        },
      },
    },
  };

  const mobileNoWrapOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "center",
      },
      tooltip: {
        callbacks: {
          title: (ctx) => {
            return ctx.label;
          },

          label: (ctx) => {
            return ctx.parsed;
          },
        },
      },
    },
  };

  const largeViewPortOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          title: (ctx) => {
            return ctx.label;
          },

          label: (ctx) => {
            return ctx.parsed;
          },
        },
      },
    },
  };

  const mobileLegendWrap = {
    id: "mobileLegendWrap",
    afterInit(chart) {
      const smallOriginalFit = chart.legend.fit;
      chart.legend.fit = function fit() {
        if (smallOriginalFit) {
          smallOriginalFit.call(this);
        }
        return (this.height += PX_SPACE_LEGEND_CHART);
      };
    },
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

  function labelFlip() {
    if (readingData.piechart) {
      if (!mobileView) {
        let newReadingData = readingData;
        newReadingData.piechart.data.labels = labelChecker(
          newReadingData.piechart.data.labels,
        );
        setReadingData(newReadingData);
      } else {
        let newReadingData = readingData;
        newReadingData.piechart.data.labels = originalPieLabels;
        setReadingData(newReadingData);
      }
    }
  }

  function labelChecker(labels) {
    const labelsForReturn = [];
    for (let label of labels) {
      if (label.length > MAX_PIE_LABEL_LENGTH) {
        setMobileLabelWrap(true);
        const spaces = [];
        for (let i = MAX_PIE_LABEL_LENGTH; i < label.length; i++) {
          if (label[i] == " ") {
            spaces.push(i);
            i += MAX_PIE_LABEL_LENGTH;
          } else {
            let cont = true;
            while (cont) {
              --i;
              if (label[i] == " ") {
                spaces.push(i);
                i += MAX_PIE_LABEL_LENGTH;
                cont = false;
              }
            }
          }
        }
        const newLabel = [];
        for (let j = 0; j <= spaces.length; j++) {
          if (j == 0) {
            newLabel.push(label.slice(0, spaces[j]).trim());
          } else if (j == spaces.length) {
            newLabel.push(label.slice(spaces[j - 1]).trim());
          } else {
            let t = j - 1;
            newLabel.push(label.slice(spaces[t], spaces[j]).trim());
          }
        }
        labelsForReturn.push(newLabel);
      } else {
        labelsForReturn.push(label);
      }
    }
    return labelsForReturn;
  }

  const createAccessiblePieLabel = (pieLabels, pieDataSet, pieTitle) => {
    let formattedLabel = "Pie chart titled '" + pieTitle + "' with data: ";
    for (let index = 0; index < pieLabels.length; index++) {
      if (index != pieLabels.length - 1) {
        formattedLabel += pieLabels[index] + ": " + pieDataSet[index] + ", ";
      } else {
        formattedLabel += pieLabels[index] + ": " + pieDataSet[index] + ".";
      }
    }
    setAccessiblePieLabel(formattedLabel);
  };

  useEffect(() => {
    const windowResizeEvent = () => {
      if (window.innerWidth > PIE_WINDOW_RESIZE_WIDTH) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
      setPieHeight(window.innerHeight * PIE_WINDOW_HEIGHT_PERCENTAGE);
    };
    window.addEventListener("resize", windowResizeEvent);
    windowResizeEvent();
    return () => window.removeEventListener("resize", windowResizeEvent);
  });

  useEffect(() => {
    const readingAnalytics = async () => {
      await UserLabService.complete_reading(labID);
      if (user?.firstname !== null && user !== null) {
        await UserLabService.user_complete_reading(user.userid, labID);
      }
      LabService.getLabReading(labID).then((data) => {
        if (data[0].reading.piechart) {
          setOriginalPieLabels(data[0].reading.piechart.data.labels);
          if (window.innerWidth < PIE_WINDOW_RESIZE_WIDTH) {
            data[0].reading.piechart.data.labels = labelChecker(
              data[0].reading.piechart.data.labels,
            );
          }
        }
        createAccessiblePieLabel(
          data[0].reading.piechart.data.labels,
          data[0].reading.piechart.data.datasets[0].data,
          data[0].reading.piechart.header,
        );
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

  useEffect(() => {
    labelFlip();
  }, [mobileView]);

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
      className={
        "tw-w-full tw-flex tw-flex-col tw-align-top tw-justify-center tw-p-[3rem]"
      }
    >
      <h1 className={"tw-title tw-text-left"}>Reading</h1>
      <div className="tw-w-full">
        <div className="study tw-bg-white p-1 tw-rounded-lg">
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
              {mobileView ? (
                <>
                  <h3 className={"tw-title"}>{readingData?.piechart.header}</h3>
                  <div className="flex tw-body-text">
                    {readingData.piechart && (
                      <Pie
                        className="tw-w-auto"
                        data={readingData?.piechart?.data}
                        options={
                          mobileLabelWrap
                            ? mobileWrapOptions
                            : mobileNoWrapOptions
                        }
                        height={!isImagine ? pieHeight : ""} // Converted to turnery so it never evaluates to boolean
                        plugins={mobileLabelWrap ? [mobileLegendWrap] : []}
                      />
                    )}
                  </div>
                  {readingData?.piechart?.caption !== "" &&
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
                    })}
                </>
              ) : (
                <>
                  <h3 className={"tw-title"}>{readingData?.piechart.header}</h3>
                  <div className="flex tw-body-text">
                    <Pie
                      data={readingData?.piechart.data}
                      options={largeViewPortOptions}
                      height={!isImagine ? PIE_SIZE : ""} // Converted to turnery so it never evaluates to boolean
                      aria-label={accessiblePieLabel}
                      role="img"
                    />
                  </div>
                  {readingData?.piechart?.caption !== "" &&
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
                    })}
                </>
              )}
            </>
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
                      <div className="tw-w-full tw-flex tw-justify-center">
                        <div className="flex tw-body-text">
                          <Pie
                            data={data.content.data}
                            height={!isImagine && 100}
                            options={
                              isImagine && { maintainAspectRatio: false }
                            }
                          />
                        </div>
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
