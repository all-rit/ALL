import React, { useState } from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import PropTypes from "prop-types";

const ProgressBarBar = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const { data, index, labID } = props;

  if (!data || !Array.isArray(data)) {
    return null;
  }

  if (data[1]) {
    return (
      <li key={index}>
        <Button
          tabIndex="0"
          id={`PopoverCompleted${index}${labID}`}
          type="button"
          className="progressBar__bar progressBar__completed tw-border-0 tw-m-1"
        />
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
      <li>
        <Button
          tabIndex="0"
          id={`PopoverNotCompleted${index}${labID}`}
          type="button"
          className="progressBar__bar progressBar__notCompleted tw-border-0 tw-h-0.5"
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
};

export default ProgressBarBar;
