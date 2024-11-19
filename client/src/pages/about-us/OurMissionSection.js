import React from "react";
import SomeKid from "../../assets/images/ui-refresh/some_kid.png";
import ALLButton from "src/components/all-components/ALLButton";

const OurMissionSection = () => {
  return (
    <section
      id={"our-mission"}
      className={
        "tw-min-h-screen tw-flex tw-flex-col tw-bg-primary-yellow tw-justify-center"
      }
    >
      <div
        className={
          "tw-flex tw-justify-center tw-bg-white tw-mr-16 tw-border-8 tw-border-l-0 tw-border-solid tw-border-primary-blue tw-rounded-r-lg"
        }
      >
        <div
          className={
            "tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-16 tw-max-w-[64rem]"
          }
        >
          <div className={"tw-flex tw-flex-col tw-gap-y-6 tw-text-left"}>
            <h2 className={"tw-title-styling-name"}>Our Mission</h2>
            <div className={"tw-grid tw-grid-cols-8 tw-items-center"}>
              <p className={"tw-col-span-6 tw-body-styling-name"}>
                Quisque justo tortor, tincidunt sed auctor et, semper at risus.
                Praesent et molestie lorem. Aliquam ultricies, orci ut aliquam
                rhoncus, est leo ultrices risus, quis placerat arcu eros sed
                dolor. Curabitur bibendum ipsum odio, vehicula hendrerit ante
                porttitor rutrum. Donec blandit nisi sed ex laoreet venenatis.
                Praesent fermentum volutpat finibus. Donec suscipit porta tellus
                a ullamcorper. Proin sed est mauris.
              </p>
              <ALLButton label="Learn More" />
            </div>
          </div>
          <div>
            <img src={SomeKid} alt={"some kid"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
