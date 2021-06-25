import React, { useState } from 'react';
import {Button,Popover, PopoverBody, PopoverHeader } from 'reactstrap';

const ProgressBarBar = (props)=>{
        const [popoverOpen, setPopoverOpen] = useState(false);
        const toggle = () => setPopoverOpen(!popoverOpen);
        const {data,index} = props;
       
        if(data===true){
            return(
                <li key={index}>
                    <Button tabIndex="0" id={"PopoverCompleted"+index} type="button" className="progressBar__bar progressBar__completed"/>
                    <Popover trigger="legacy" placement="top" isOpen={popoverOpen} target={"PopoverCompleted"+index} toggle={toggle}>
                        <PopoverHeader>Lab</PopoverHeader>
                        <PopoverBody>Completed</PopoverBody>
                    </Popover>
                </li>
            );
        } else{
            return(
                <li>
                    <Button tabIndex="0" id={"PopoverNotCompleted"+index} type="button" className="progressBar__bar progressBar__notCompleted"/>
                    <Popover trigger="legacy" placement="top" isOpen={popoverOpen} target={"PopoverNotCompleted"+index} toggle={toggle}>
                        <PopoverHeader>Lab</PopoverHeader>
                        <PopoverBody>Not Completed</PopoverBody>
                    </Popover>
                </li>
            )
        }
}

export default ProgressBarBar;
