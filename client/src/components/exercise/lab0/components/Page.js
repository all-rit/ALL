import React, { useContext } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import Button from "../../../all-components/LabButton";
import Lab0Context from "../Lab0Context";
import { SECTION_STATUSES } from "../../../../constants/lab0";
import StatusBanner from "../../../all-components/StatusBanner";
const PageHeader = ({ children, className }) => {
  return (
    <div
      id="page-header"
      aria-label="Page Header"
      className={twMerge("tw-flex tw-flex-col tw-gap-y-3", className)}
    >
      {children}
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const PageHeaderTitle = ({ children, className }) => {
  return (
    <h1
      id="page-header-title"
      aria-label="Page Header Title"
      className={twMerge("tw-title", className)}
    >
      {children}
    </h1>
  );
};

PageHeaderTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const PageHeaderDescription = ({ children, className }) => {
  return (
    <p
      id="page-header-description"
      aria-label="Page Header Description"
      className={twMerge("tw-body-text", className)}
    >
      {children}
    </p>
  );
};

PageHeaderDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const PageBody = ({ children, className }) => {
  return (
    <div
      id="page-body"
      aria-label="Page Body"
      className={twMerge("tw-flex tw-flex-col tw-gap-y-3 tw-py-9", className)}
    >
      {children}
    </div>
  );
};

PageBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const PageFooter = ({ children, className }) => {
  return (
    <div
      id="page-footer"
      aria-label="Page Footer"
      className={twMerge("tw-flex tw-flex-col tw-text-left", className)}
    >
      {children}
    </div>
  );
};

PageFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const Page = ({
  children,
  className,
  completed = false,
  nextPage = null,
  exercise = false,
}) => {
  const { handleNav, updateSectionStatus, section } = useContext(Lab0Context);

  const handleNext = async () => {
    if (completed) {
      await updateSectionStatus(section, SECTION_STATUSES.SECTION_COMPLETED);
    }

    handleNav(nextPage);
  };

  return (
    <div
      id="page"
      aria-label="Page"
      className={twMerge(
        "tw-flex tw-flex-col tw-text-left tw-body-text",
        className,
      )}
    >
      {children}
      {nextPage && (
        <Page.Footer className="tw-items-center">
          {exercise && completed && (
            <StatusBanner style={"tw-bg-success"}>
              Exercise Complete!
            </StatusBanner>
          )}
          <Button disabled={!completed} onClick={handleNext} label="Next" />
        </Page.Footer>
      )}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  nextPage: PropTypes.string,
  completed: PropTypes.bool,
  exercise: PropTypes.bool,
};

PageHeader.Title = PageHeaderTitle;
PageHeader.Description = PageHeaderDescription;
Page.Header = PageHeader;
Page.Body = PageBody;
Page.Footer = PageFooter;
