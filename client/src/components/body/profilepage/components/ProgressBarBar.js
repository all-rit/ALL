/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {Button, Popover, PopoverBody, PopoverHeader} from 'reactstrap';

const ProgressBarBar = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const {data, index, labID} = props;
  if (data[1] !== null) {
    return (
      <li key={index}>
        <Button
          tabIndex="0"
          id={'PopoverCompleted' + index + labID}
          type="button"
          className="progressBar__bar progressBar__completed"
        />
        <Popover
          trigger="legacy"
          placement="top"
          isOpen={popoverOpen}
          target={'PopoverCompleted' + index + labID}
          toggle={toggle}
        >
          <PopoverHeader>{data[0]}</PopoverHeader>
          <PopoverBody>
            Completed on {String(data[1]).split('T')[0]}
          </PopoverBody>
        </Popover>
      </li>
    );
  } else {
    return (
      <li>
        <Button
          tabIndex="0"
          id={'PopoverNotCompleted' + index + labID}
          type="button"
          className="progressBar__bar progressBar__notCompleted"
        />
        <Popover
          trigger="legacy"
          placement="top"
          isOpen={popoverOpen}
          target={'PopoverNotCompleted' + index + labID}
          toggle={toggle}
        >
          <PopoverHeader>{data[0]}</PopoverHeader>
          <PopoverBody>Not Completed</PopoverBody>
        </Popover>
      </li>
    );
  }
};

export default ProgressBarBar;
