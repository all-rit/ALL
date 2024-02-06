import React, { useEffect, useState } from "react";
import { Button, Popover, PopoverBody } from "reactstrap";
import {
  timePerWord,
  minFontNotif,
  maxFontNotif,
} from "../../../../constants/lab5";
import PropTypes from "prop-types";

/**
 * Notification component displays a notification message in a popover.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - message {string} - The notification message.
 *   - fontSize {string} - The font size of the notification message.
 *   - timeout {string} - The timeout duration for the notification.
 * @returns {JSX.Element} The rendered Notification component.
 */
const Notification = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  let { message, fontSize, timeout } = props;
  fontSize = parseInt(fontSize);
  timeout = parseInt(timeout);
  const time = timeout ? timeout : message.split(" ").length * timePerWord;
  let actualFontSize;
  if (fontSize) {
    if (fontSize >= minFontNotif && fontSize <= maxFontNotif) {
      actualFontSize = fontSize;
    } else {
      actualFontSize = minFontNotif;
    }
  }
  /**
   * Toggles the popover open state and updates the opened state.
   */
  const toggle = () => {
    if (!opened) {
      setPopoverOpen(!popoverOpen);
      setOpened(true);
    }
  };
  useEffect(() => {
    let interval = null;
    if (popoverOpen) {
      interval = setInterval(() => setPopoverOpen(false), time);
    }
    return () => {
      clearInterval(interval);
    };
  }, [popoverOpen, time]);

  return (
    <div>
      <Button
        id="Popover1"
        type="button"
        className="btn btn-second text-black btn-xl text-uppercase "
      >
        Notification
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        {/* <PopoverHeader>Notification</PopoverHeader>*/}
        <PopoverBody style={{ fontSize: actualFontSize }}>
          {message}
        </PopoverBody>
      </Popover>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  fontSize: PropTypes.string,
  timeout: PropTypes.string,
};

export default Notification;
