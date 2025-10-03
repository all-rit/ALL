import NavigationPane from "./NavigationPane";
import SiteAccessibilityButton from "../SiteAccessibilityButton";
import React from "react";
import PropTypes from "prop-types";
import LabFooter from "../../footer/LabFooter";

const LabWindow = (props) => {
  const {
    lab,
    title,
    context,
    quizCompleted,
    setQuizCompleted,
    isImagine,
    children,
    body,
  } = props;

  return (
    <div className={"tw-absolute tw-top-[3rem] tw-h-4/5"}>
      <div
        className={
          "xs:tw-flex md:tw-hidden tw-col-span-12 tw-justify-center tw-w-full"
        }
      >
        <div className={"tw-px-4 tw-z-10 "}>
          <h1 className={"tw-title tw-text-xl"}>{props.title} </h1>
        </div>
      </div>
      <div className={"tw-h-full"}>
        {/* Blue and Yellow stripes*/}
        <div
          className={
            "tw-absolute tw-grid tw-grid-cols-12 tw-w-lvw tw-gap-y-4 tw-inset-3 tw-grid-rows-6 tw-h-full"
          }
        >
          <div
            className={
              "tw-mt-16 tw-row-start-1 tw-col-start-1 tw-row-span-2 tw-col-span-12 tw-bg-primary-yellow tw-rounded-bl-lg tw-flex shadow"
            }
          />
          <div
            className={
              "tw-row-span-8 tw-col-span-12 tw-col-start-1 tw-bg-primary-blue tw-rounded-bl-lg tw-flex shadow"
            }
          />
        </div>
        {/* Nav Pane and Lab Window */}
        <div
          className={
            "tw-grid tw-grid-cols-12 tw-row-span-6 tw-p-3 tw-w-full tw-gap-x-[1rem] tw-h-full"
          }
        >
          <div
            className={
              "tw-flex tw-col-start-1 tw-mx-2 tw-col-span-2 tw-max-h-[40rem]"
            }
          >
            <NavigationPane
              labID={lab}
              title={title}
              context={context}
              quizCompleted={quizCompleted}
              setQuizCompleted={setQuizCompleted}
              isImagine={isImagine}
            />
            {body !== 2 && <SiteAccessibilityButton />}
          </div>
          <div
            className={
              "tw-flex tw-z-10 tw-max-h-[75vh] tw-relative xs:tw-col-start-1 md:tw-col-start-3 xs:tw-col-span-12 tw-p-3 md:tw-col-span-10 tw-bg-white shadow tw-border-solid tw-border-b-0 tw-border-l-0 tw-rounded-tr-xl tw-rounded-bl-xl tw-border-t-primary-blue tw-border-r-primary-blue tw-border-[.5rem] tw-text-center tw-overflow-y-hidden"
            }
          >
            {children}
          </div>
          <div className={"xs:tw-flex md:tw-hidden tw-col-span-12 tw-p-3"}>
            <LabFooter
              context={props.context}
              quizCompleted={props.quizCompleted}
              setQuizCompleted={props.setQuizCompleted}
              isImagine={props.isImagine}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

LabWindow.propTypes = {
  lab: PropTypes.number,
  title: PropTypes.string,
  context: PropTypes.shape({}),
  quizCompleted: PropTypes.bool,
  setQuizCompleted: PropTypes.func,
  isImagine: PropTypes.bool,
  children: PropTypes.any,
  body: PropTypes.number,
};

export default LabWindow;
