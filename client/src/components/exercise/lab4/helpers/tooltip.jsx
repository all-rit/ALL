import PropTypes from "prop-types";
import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const TooltipWithTab = ({ tab, disabled }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <div style={{ display: "inline-block" }} tabIndex={tab} onFocus={toggle}>
      <span
        style={{ textDecoration: "underline", color: "blue" }}
        href="#"
        id="DisabledAutoHideExample"
      >
        hint
      </span>
      <Tooltip
        placement="top"
        style={{ display: "block" }}
        isOpen={tooltipOpen}
        autohide={true}
        target="DisabledAutoHideExample"
        toggle={toggle}
        disabled={disabled}
      >
        Color must be &quot;violet&quot;
      </Tooltip>
    </div>
  );
};

TooltipWithTab.propTypes = {
  tab: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TooltipWithTab;
