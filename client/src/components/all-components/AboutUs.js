import React, { useEffect, useRef, useState } from "react";
import ALLButton from "./ALLButton";
import { navigate } from "@reach/router";
const AboutUs = () => {
  const yellowBlock = useRef(null);
  const [width, setWidth] = useState(0);

  const handleNav = () => {
    navigate("/aboutus");
  };

  useEffect(() => {
    const changeWidth = () => {
      if (yellowBlock.current) {
        setWidth(yellowBlock.current.offsetWidth);
      }
    };
    changeWidth();
    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <div className={"tw-h-[30rem] tw-w-full"}>
      <div
        className={
          "tw-h-1/2 tw-border-t-[4rem] tw-border-r-[1.5rem] tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-yellow tw-bg-primary-yellow"
        }
      >
        <div
          className={
            "tw-h-full tw-flex tw-flex-row tw-justify-center tw-border-t-[.75rem] tw-border-r-[.75rem] tw-rounded-tr-lg tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-blue tw-bg-white"
          }
        >
          <div
            className={`tw-ml-[2.25rem] tw-flex tw-flex-row tw-text-left`}
            style={{
              width: `${width}px`,
            }}
          >
            <div
              className={
                "tw-flex tw-flex-col tw-w-1/2 tw-h-full tw-justify-center"
              }
            >
              <p
                className={
                  "tw-title-styling-name tw-text-2xl tw-my-3 tw-font-poppins"
                }
              >
                {" "}
                About Us
              </p>
              <p className={"tw-font-calibri tw-font-medium tw-text-sm"}>
                {" "}
                Learn more about the team at Accessible Learning Labs and the
                amazing things we have in the works!
              </p>
            </div>
            <div
              className={
                "tw-h-full tw-w-1/2 tw-flex tw-flex-col tw-justify-end tw-items-end tw-py-5"
              }
            >
              <ALLButton label={"Learn More"} onClick={handleNav}></ALLButton>
            </div>
          </div>
        </div>
      </div>
      <div
        className={"tw-w-full tw-h-1/2 tw-flex tw-flex-row tw-justify-center"}
      >
        <div
          ref={yellowBlock}
          className={"tw-bg-primary-yellow tw-w-1/2 tw-h-3/4"}
        >
          {/*TODO: Placeholder for Stock Image*/}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
