import React, {useEffect, useState} from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Notification = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [opened, setOpened] = useState(false);

    const {message, time} = props;
    let interval = null;
    const toggle = () => {
        if(!opened){
            setPopoverOpen(!popoverOpen);
            setOpened(true);
        }

    }
    useEffect(() => {
        if(popoverOpen){
            interval = setInterval(
                () => setPopoverOpen(false),
                time
            );
        }
        return () => {
            clearInterval(interval);
        }
    }, [popoverOpen]);

    return (
        <div>
            <Button id="Popover1" type="button" className="btn btn-second text-black btn-xl text-uppercase js-scroll-triggergreen">
                Notification
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                {/*<PopoverHeader>Notification</PopoverHeader>*/}
                <PopoverBody>{message}</PopoverBody>
            </Popover>
        </div>
    );
}

export default Notification;