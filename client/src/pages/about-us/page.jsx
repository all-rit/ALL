import React from "react";
import SomeKid from "../../assets/images/ui-refresh/some_kid.png";

const AboutUsPage = () => {
  return (
    <div>
      {/* is padding/margin for sections appropriate? */}
      <section
        id={"about-us"}
        className={"tw-min-h-screen tw-py-52 tw-flex tw-flex-col"}
      >
        <div
          className={
            "tw-relative tw-bg-primary-blue tw-flex-1 tw-flex tw-flex-col tw-justify-center"
          }
        >
          <div className={"tw-relative tw-ml-64"}>
            <div
              className={
                "tw-z-1 tw-relative tw-grid tw-grid-cols-12 tw-min-w-full tw-bg-white tw-rounded-l-md"
              }
            >
              <div
                className={
                  "tw-col-span-5 tw-flex tw-flex-col tw-gap-y-6 tw-py-12 tw-px-20 tw-text-left"
                }
              >
                <h2 className={"tw-title-styling-name"}>About Us</h2>
                <p className={"tw-body-styling-name"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur nisl in tortor tincidunt pharetra. Donec accumsan
                  libero in sem luctus mollis.
                </p>
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
      <section
        id={"our-mission"}
        className={"tw-min-h-screen tw-flex tw-flex-col tw-bg-primary-yellow"}
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
                  Quisque justo tortor, tincidunt sed auctor et, semper at
                  risus. Praesent et molestie lorem. Aliquam ultricies, orci ut
                  aliquam rhoncus, est leo ultrices risus, quis placerat arcu
                  eros sed dolor. Curabitur bibendum ipsum odio, vehicula
                  hendrerit ante porttitor rutrum. Donec blandit nisi sed ex
                  laoreet venenatis. Praesent fermentum volutpat finibus. Donec
                  suscipit porta tellus a ullamcorper. Proin sed est mauris.
                </p>
                <div className={"tw-col-span-2 tw-flex tw-justify-center"}>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            <div>
              <img src={SomeKid} alt={"some kid"} />
            </div>
          </div>
        </div>
      </section>
      <section
        id={"investigators"}
        className={"tw-min-h-screen tw-flex tw-flex-col tw-bg-primary-blue"}
      >
        <div className={"tw-flex tw-justify-center tw-bg-white tw-ml-16"}>
          <div className={"tw-flex tw-flex-col tw-gap-y-6 tw-text-left"}>
            <h2 className={"tw-title-styling-name"}>
              Meet Our Principal Investigators
            </h2>
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
              <div className={"tw-col-span-2 tw-flex tw-justify-center"}>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id={"student-team"}
        className={"tw-min-h-screen tw-bg-primary-yellow"}
      ></section>
      <section
        id={"getting-involved"}
        className={"tw-min-h-screen tw-bg-primary-blue"}
      ></section>
    </div>
  );
};

export default AboutUsPage;
