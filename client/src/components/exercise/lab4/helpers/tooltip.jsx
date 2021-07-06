import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const Toolitip = (tab) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <div style={{display:"inline-block"}} tabIndex={tab.tab} onFocus={toggle}>
            <span style={{textDecoration: "underline", color:"blue"}}  href="#" id="DisabledAutoHideExample">hint</span>
            <Tooltip placement="top" style={{display:"block"}} isOpen={tooltipOpen} autohide={true} target="DisabledAutoHideExample" toggle={toggle}>
                Color must be "violet"
            </Tooltip>
        </div>
    );
};

export default Toolitip;