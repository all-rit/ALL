import React from "react";
import { PropTypes } from "prop-types";

const LandingSection = (props) => {
  const { title, body, img } = props;
  return (
    <section
      className={
        "tw-flex tw-flex-col tw-bg-primary-blue tw-h-3/4 tw-mb-20 tw-py-20 tw-relative"
      }
    >
      {img && (
        <img
          src={img}
          className={
            "tw-absolute tw-bg-none xs:tw-hidden md:tw-flex md:tw-w-[25rem] tw-bottom-0 tw-right-0 tw-z-10"
          }
        />
      )}
      <div className={"tw-flex tw-flex-col tw-justify-center"}>
        <div className={"tw-relative tw-flex tw-ml-[20%]"}>
          <div
            className={
              "tw-z-1 tw-relative tw-min-w-full tw-bg-white tw-rounded-l-md"
            }
          >
            <div
              className={
                "tw-flex tw-flex-col tw-gap-y-6 tw-py-12 tw-px-6 tw-text-left"
              }
            >
              <h2 className={"tw-title xs:tw-text-xl md:tw-text-[2rem]"}>
                {title}
              </h2>
              <p className={"tw-body-text md:tw-w-1/2 lg:tw-w-3/5"}>{body}</p>
            </div>
          </div>
          <div
            className={
              "tw-absolute -tw-bottom-4 -tw-left-4 tw-right-0 tw-h-[12rem] tw-min-w-full tw-bg-primary-yellow tw-rounded-bl-lg"
            }
          />
        </div>
      </div>
    </section>
  );
};

LandingSection.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default LandingSection;
