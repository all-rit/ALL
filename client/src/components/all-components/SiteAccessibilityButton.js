import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as appActions } from "../../reducers/lab1/AppReducer";
import { actions as mainActions } from "../../reducers/MainReducer";
import ColorPicker from "@rc-component/color-picker"; // Updated from deprecated 'rc-color-picker'
import AccessibilityImage from "../../assets/images/accessibility_icon.png";
import { Collapse, Card, CardHeader, CardBody } from "reactstrap";
import "@rc-component/color-picker/assets/index.css";
import {
  changeTSize,
  setTextColor,
  setBackgroundColor,
} from "../footer/edit/editPage";
import SquircleButton from "../../assets/stylesheets/components/SquircleButton";

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
    setTextColor(obj.toHexString());
    state = { ...state, color: obj.toHexString() };
  }

  function onBgColorChange(obj) {
    setBackgroundColor(obj.toHexString());
    state = { ...state, backgroundColor: obj.toHexString() };
  }

  return (
    <div className="tw-flex tw-flex-row-reverse tw-items-end tw-gap-4 tw-fixed tw-bottom-0 tw-mb-6 tw-mr-6 tw-right-0 tw-z-50">
      <SquircleButton onClick={(e) => toggleCollapse(e)}>
        <img className="" src={AccessibilityImage} />
      </SquircleButton>
      <Collapse className="" isOpen={open}>
        <Card
          className="tw-bg-white tw-flex tw-flex-col tw-shadow-lg tw-shadow-labGray tw-w-[20rem]"
          outline
          color="light"
        >
          <CardHeader className="tw-bg-primary-blue">
            <h3 className="tw-title tw-text-xl tw-font-bold tw-text-white tw-text-center">
              Accessibility Tools
            </h3>
          </CardHeader>
          <CardBody className="tw-p-2">
            <p className="tw-text-left tw-body-text tw-px-3">
              Text Size Adjuster
            </p>
            <div className="tw-flex tw-flex-row tw-justify-evenly tw-gap-2 tw-my-2">
              <button
                className="tw-bg-primary-blue tw-flex tw-justify-center tw-items-center tw-w-10 tw-aspect-square tw-border-none tw-rounded-full"
                onClick={() => changeSize(1)}
              >
                <p className="tw-text-white tw-title tw-leading-4 tw-text-center">
                  +
                </p>
              </button>
              <button
                className="tw-bg-primary-blue tw-flex tw-justify-center tw-items-center tw-w-10 tw-aspect-square tw-border-none tw-rounded-full"
                onClick={() => changeSize(-1)}
              >
                <p className="tw-text-white tw-title tw-leading-4 tw-text-center">
                  -
                </p>
              </button>
            </div>
            <p className="tw-text-left tw-body-text tw-my-2 tw-px-3">
              Text Color Adjuster
            </p>
            <div className={"tw-w-full tw-flex tw-justify-center"}>
              {/* <ColorPicker
                disableAlpha={true}
                defaultValue={"#345679"}
                value={state.color}
                onChange={onTextColorChange.bind(this)}
              /> */}
              <ColorPicker
                defaultValue={"#345679"}
                onChange={onTextColorChange.bind(this)}
              />
            </div>
            <p className="tw-text-left tw-body-text tw-my-2 tw-text-nowrap tw-px-3">
              Background Color Adjuster
            </p>
            <div className={"tw-w-full tw-flex tw-justify-center"}>
              <ColorPicker
                enableAlpha={false}
                defaultColor={"#345679"}
                color={state.backgroundColor}
                onChange={onBgColorChange.bind(this)}
              />
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SiteAccessibilityButton);
