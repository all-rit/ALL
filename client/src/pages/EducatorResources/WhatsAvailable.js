import React from "react";
import ALLButton from "../../components/all-components/ALLButton";
import Educator from "../../assets/images/stockImages/Girl3.png";
import { navigate } from "@reach/router";
const WhatsAvailable = () => {
  const handleProfileNav = () => {
    navigate("/Profile");
  };
  return (
    <div className={"tw-h-[30rem] tw-w-full tw-mb-[5rem] tw-relative"}>
      <img
        src={Educator}
        className={
          "tw-absolute tw-top-[-27rem] tw-right-[10rem] xs:tw-w-0 md:tw-w-[18rem] tw-z-1"
        }
      />

      <div
        className={
          "tw-h-full tw-border-t-[4rem] tw-border-r-[1.5rem] tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-yellow tw-bg-primary-yellow"
        }
      >
        <div
          className={
            "tw-h-full tw-flex tw-flex-row tw-justify-center tw-align-middle tw-border-t-[.75rem] tw-border-r-[.75rem] tw-rounded-tr-lg tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-blue tw-bg-white"
          }
        >
          <div
            className={`tw-flex tw-flex-row tw-text-left sm:tw-w-full lg:tw-w-1/2`}
          >
            <div
              className={
                "tw-flex tw-flex-col tw-w-full tw-h-full tw-justify-center tw-p-6"
              }
            >
              <p
                className={
                  "tw-title xs:tw-text-[1.5rem] md:tw-text-[1.5rem] tw-my-3 tw-font-poppins md:lg:tw-w-1/2 tw-leading-tight"
                }
              >
                {" "}
                What is Available to Educators?
              </p>
              <div
                className={
                  "tw-flex xs:tw-flex-col md:tw-flex-row tw-items-center"
                }
              >
                <p className={"tw-body-text tw-leading-normal tw-w-5/6"}>
                  {" "}
                  Whether you want to implement our labs in your course
                  curriculum, join the Accessible Learning Labs development
                  partners or anything in between, you can click here to log in
                  and learn more!
                </p>
                <div
                  className={
                    "tw-h-full tw-w-full tw-flex tw-flex-row tw-justify-end tw-py-5"
                  }
                >
                  <ALLButton
                    label={"Learn More"}
                    onClick={handleProfileNav}
                  ></ALLButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAvailable;
