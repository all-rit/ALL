import React, { useState } from "react";
import AccessibilityImage from "../../assets/images/accessibility_icon.png";
import { Collapse, Card, CardHeader, CardBody } from "reactstrap";

const SiteAccessibilityButton = () => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <button
      className="tw-fixed tw-right-0 tw-bottom-0 tw-m-8 tw-max-w-20 tw-aspect-square tw-bg-[#fb923c] tw-border-none tw-rounded-full tw-p-4 tw-z-50"
      onClick={toggleCollapse}
    >
      <img className="tw-w-full tw-object-fill" src={AccessibilityImage} />
      <Collapse isOpen={open}>
        <Card className="tw-absolute tw-bottom-[100%] tw-right-[100%] tw-bg-white tw-flex tw-flex-col tw-drop-shadow-sm">
          <CardHeader>
            <h3>Accessibility Tools</h3>
          </CardHeader>
          <CardBody>
            <p>Text Size Adjuster</p>
            <div className="tw-flex tw-flex-row">
              <button>Decrease(-)</button>
              <button>Increase(+)</button>
            </div>
            <p>Text Color Adjuster</p>
            {/* funny guy */}
            <p>Background Color Adjuster</p>
            {/* funny guy 2 */}
          </CardBody>
        </Card>
      </Collapse>
    </button>
  );
};

export default SiteAccessibilityButton;
