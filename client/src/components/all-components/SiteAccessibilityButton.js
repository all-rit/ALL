import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as appActions } from "../../reducers/lab1/AppReducer";
import { actions as mainActions } from "../../reducers/MainReducer";
import { Panel as ColorPickerPanel } from "rc-color-picker";
import AccessibilityImage from "../../assets/images/accessibility_icon.png";
import { Collapse, Card, CardHeader, CardBody } from "reactstrap";
import {
  changeTSize,
  setTextColor,
  setBackgroundColor,
} from "../footer/edit/editPage";

const mapStateToProps = (state) => {
  return {
    // General
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...appActions, ...mainActions }, dispatch),
  };
};

const SiteAccessibilityButton = () => {
  const [open, setOpen] = useState(false);
  const toggleCollapse = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setOpen(!open);
    }
  };

  let state = {
    fontSize: 0,
    textColor: false,
    bgColor: false,
    displayColorPalette: false,
    backgroundColor: null,
    color: null,
  };

  function changeSize(size) {
    const state_size = state.fontSize;
    changeTSize(size);
    state = { ...state, fontSize: state_size + size };
  }

  function onTextColorChange(obj) {
    setTextColor(obj.color);
    state = { ...state, color: obj.color };
  }

  function onBgColorChange(obj) {
    setBackgroundColor(obj.color);
    state = { ...state, backgroundColor: obj.color };
  }

  return (
    <button
      className="tw-fixed tw-right-0 tw-bottom-0 tw-m-8 tw-max-w-20 tw-aspect-square tw-bg-primary-yellow tw-border-none tw-rounded-full tw-p-4 tw-z-50 tw-shadow-md tw-shadow-labGray"
      onClick={(e) => toggleCollapse(e)}
    >
      <img
        className="tw-aspect-square tw-pointer-events-none"
        src={AccessibilityImage}
      />
      <Collapse isOpen={open}>
        <Card
          className="tw-absolute tw-bottom-[100%] tw-right-[100%] tw-bg-white tw-flex tw-flex-col tw-shadow-lg tw-shadow-labGray"
          outline
          color="light"
        >
          <CardHeader className="tw-bg-darkGray">
            <h3 className="tw-sub-title-styling-name tw-font-bold tw-text-white tw-p-4">
              Accessibility Tools
            </h3>
          </CardHeader>
          <CardBody>
            <p className="tw-text-left tw-underline">Text Size Adjuster</p>
            <div className="tw-flex tw-flex-row tw-gap-2 tw-mt-2 tw-mb-4">
              <button
                className="tw-bg-darkGray tw-border-none tw-px-4 tw-py-2 tw-rounded-md tw-text-white tw-font-semibold"
                onClick={() => changeSize(-1)}
              >
                Decrease(-)
              </button>
              <button
                className="tw-bg-darkGray tw-border-none tw-px-4 tw-py-2 tw-rounded-md tw-text-white tw-font-semibold"
                onClick={() => changeSize(1)}
              >
                Increase(+)
              </button>
            </div>
            <p className="tw-text-left tw-underline tw-my-4">
              Text Color Adjuster
            </p>
            <ColorPickerPanel
              enableAlpha={false}
              defaultColor={"#345679"}
              color={state.color}
              onChange={onTextColorChange.bind(this)}
            />
            <p className="tw-text-left tw-underline tw-my-4">
              Background Color Adjuster
            </p>
            <ColorPickerPanel
              enableAlpha={false}
              defaultColor={"#345679"}
              color={state.backgroundColor}
              onChange={onBgColorChange.bind(this)}
            />
          </CardBody>
        </Card>
      </Collapse>
    </button>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SiteAccessibilityButton);
