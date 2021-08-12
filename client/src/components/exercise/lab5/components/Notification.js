import React, {useEffect, useState} from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';
import { timePerWord, minFontNotif, maxFontNotif} from '../../../../constants/lab5'

const Notification = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [opened, setOpened] = useState(false);

    let {message, fontSize, timeout} = props;
    fontSize = parseInt(fontSize);
    timeout = parseInt(timeout);
    let time = timeout ? timeout : message.split(" ").length * timePerWord;
    let actualFontSize;
    if(fontSize){
        if (fontSize >=minFontNotif && fontSize <= maxFontNotif){
            actualFontSize = fontSize;
        }
        else{
            actualFontSize = minFontNotif;
        }
    }
    const toggle = () => {
        if(!opened){
            setPopoverOpen(!popoverOpen);
            setOpened(true);
        }

    }
    useEffect(() => {
        let interval = null;
        if(popoverOpen){
            interval = setInterval(
                () => setPopoverOpen(false),
                time
            );
        }
        return () => {
            clearInterval(interval);
        }
    }, [popoverOpen, time]);

    return (
        <div >
            <Button id="Popover1" type="button" className="btn btn-second text-black btn-xl text-uppercase ">
                Notification
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle} >
                {/*<PopoverHeader>Notification</PopoverHeader>*/}
                <PopoverBody style={{fontSize: actualFontSize}}>{message}</PopoverBody>
            </Popover>
        </div>
    );
}

export default Notification;