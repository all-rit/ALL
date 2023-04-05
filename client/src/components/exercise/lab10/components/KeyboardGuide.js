import React from "react";
import ArrowKey from "../../../../assets/images/lab10/arrow-key.png";
import { KEY_SIZE } from "../../../../constants/lab10";
import AKey from "../../../../assets/images/lab10/a-key.png";
import DKey from "../../../../assets/images/lab10/d-key.png";

const KeyboardGuide = () => {
  return (
    <div className={"tw-flex tw-justify-around tw-mt-3"}>
      <div>
        <div>
          <p className={"tw-text-xl tw-font-bold"}>Move Left</p>
        </div>
        <hr className={"tw-my-1.5"} />
        <div className={"tw-flex tw-gap-x-12"}>
          <div>
            <img
              alt={"Keyboard Left Arrow Key"}
              src={ArrowKey}
              height={KEY_SIZE}
              width={KEY_SIZE}
            />
            <p className={"tw-text-lg tw-font-bold"}>Left Arrow Key</p>
          </div>
          <div>
            <img
              alt={"Keyboard A Key"}
              src={AKey}
              height={KEY_SIZE}
              width={KEY_SIZE}
            />
            <p className={"tw-text-lg tw-font-bold"}>A Key</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className={"tw-text-xl tw-font-bold"}>Move Right</p>
        </div>
        <hr className={"tw-my-1.5"} />
        <div className={"tw-flex tw-gap-x-12"}>
          <div>
            <img
              style={{ rotate: "180deg" }}
              alt={"Keyboard Right Key"}
              src={ArrowKey}
              height={KEY_SIZE}
              width={KEY_SIZE}
            />
            <p className={"tw-text-lg tw-font-bold"}>Right Arrow Key</p>
          </div>
          <div>
            <img
              alt={"Keyboard D Key"}
              src={DKey}
              height={KEY_SIZE}
              width={KEY_SIZE}
            />
            <p className={"tw-text-lg tw-font-bold"}>D Key</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardGuide;
