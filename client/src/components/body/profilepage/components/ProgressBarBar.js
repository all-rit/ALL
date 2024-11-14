import React, { useState } from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import PropTypes from "prop-types";

const ProgressBarBar = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const { data, index, labID, hasLabel } = props;
  const formatDate = (date) => {
    if (!date) return "";
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  if (data[1]) {
    return (
      <li key={index} className={"tw-flex tw-flex-col tw-items-center"}>
        {hasLabel ? <p className={"tw-text-xs"}>{data[0]}</p> : <></>}
        <Button
          tabIndex="0"
          id={`PopoverCompleted${index}${labID}`}
          type="button"
          className={`progressBar__bar progressBar__completed ${hasLabel ? "tw-w-[3rem] tw-h-[1rem] tw-m-2" : ""}`}
        />
        {hasLabel ? (
          <p className={"tw-text-xs"}>{formatDate(data[1]).split("T")[0]}</p>
        ) : (
          <></>
        )}
        <Popover
          trigger="legacy"
          placement="top"
          isOpen={popoverOpen}
          target={`PopoverCompleted${index}${labID}`}
          toggle={toggle}
        >
          <PopoverHeader>{data[0]}</PopoverHeader>
          <PopoverBody>
            Completed on {String(data[1]).split("T")[0]}
          </PopoverBody>
        </Popover>
      </li>
    );
  } else {
    return (
      <li className={"tw-flex tw-flex-col tw-items-center"}>
        {hasLabel ? <p className={"tw-text-xs"}>{data[0]}</p> : <></>}
        <Button
          tabIndex="0"
          id={`PopoverNotCompleted${index}${labID}`}
          type="button"
          className={`progressBar__bar progressBar__notCompleted tw-border-1 tw-border-darkGray ${hasLabel ? "tw-w-[3rem] tw-h-[1rem] tw-m-2" : ""}`}
        />
        <Popover
          trigger="legacy"
          placement="top"
          isOpen={popoverOpen}
          target={`PopoverNotCompleted${index}${labID}`}
          toggle={toggle}
        >
          <PopoverHeader>{data[0] || "Unknown"}</PopoverHeader>
          <PopoverBody>Not Completed</PopoverBody>
        </Popover>
      </li>
    );
  }
};

ProgressBarBar.propTypes = {
  data: PropTypes.array,
  index: PropTypes.number,
  labID: PropTypes.number,
  hasLabel: PropTypes.bool,
};

export default ProgressBarBar;
