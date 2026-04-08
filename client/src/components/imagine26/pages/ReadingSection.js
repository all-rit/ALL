import React from "react";
import { Frame } from "../components/Frame";
import { navigate } from "@reach/router";
import ImagineHeader from "../components/ImagineHeader";

const ReadingSection = () => {
  return (
    <>
      <div className="tw-flex tw-flex-col tw-h-full tw-w-full">
        {/* <div className="tw-mb-6 tw-pt-2">
          <ImagineHeader title="DeepFake 101" />
        </div> */}

        {Frame(
          <div className="tw-flex tw-flex-col tw-h-full tw-w-full">
            <div className="tw-flex-1 tw-overflow-y-auto tw-px-6 tw-pb-6">
              <div className="tw-w-full tw-max-w-3xl tw-mx-auto tw-space-y-6">
                  <div className="tw-top-3 tw-w-[96%] tw-mb-[-5%]">
                      <h3 className={"tw-title tw-pb-3"}>Deepfake 101</h3>
                  <div className={"tw-flex tw-justify-center"}>
                    <hr className={"tw-w-3/5 tw-bg-labLightGray"} />
                  </div>
              </div>
                <section className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
                  <p className="tw-body-text tw-leading-8">
                    <strong>What is a deepfake?</strong> A deepfake is
                    AI-generated media that can replace, manipulate, or create
                    entirely new faces. This also applies to text, audio, and
                    video. Deepfakes are created using existing images, video,
                    or audio which are processed to learn a person&apos;s unique
                    features and apply that information to other clips.
                  </p>
                </section>

                <section className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
                  <p className="tw-body-text tw-leading-8">
                    <strong>How easy is it to create deepfakes?</strong> Anyone
                    can create a deepfake using a variety of websites and tools
                    available online. There are also many tutorials that explain
                    how to create deepfake media. However, creating a highly
                    realistic deepfake often requires hundreds of images.
                  </p>
                </section>

                <section className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
                  <p className="tw-body-text tw-leading-8 tw-mb-4">
                    <strong>How can you spot a deepfake?</strong> There are a
                    few common signs to look for:
                  </p>

                  <ul className="tw-body-text tw-list-disc tw-pl-6 tw-space-y-3 tw-leading-8">
                    <li>
                      <strong>Facial transformation:</strong> unusual changes to
                      the skin, eyebrows, or facial hair
                    </li>
                    <li>
                      <strong>Source:</strong> check where the media came from
                      and whether it is from a trustworthy source
                    </li>
                    <li>
                      <strong>Unnatural movements:</strong> awkward posture or
                      unnatural mouth and facial movements
                    </li>
                  </ul>
                </section>

                <section className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
                  <p className="tw-body-text tw-leading-8">
                    There are many industries in which deepfake technology is
                    currently being used. For example, it is used in Hollywood
                    to de-age actors. Other applications include health
                    campaigns in which actors modify their voices to speak a
                    variety of different languages.
                  </p>
                </section>

                <section className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
                  <p className="tw-body-text tw-leading-8">
                    In the healthcare industry, deepfake technology has been
                    used to help people with amyotrophic lateral sclerosis (ALS)
                    speak using versions of their own voices. Other examples
                    include using deepfake technology to support patients in
                    grief counseling or post-traumatic stress disorder (PTSD)
                    treatment.
                  </p>
                </section>

                <section className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
                  <p className="tw-body-text tw-leading-8">
                    Although there are many positive uses for deepfake
                    technology, there are also harmful ones. Deepfakes can be
                    used to spread misinformation online, especially about
                    important issues, and can also be used to harass or
                    intimidate others.
                  </p>
                </section>

                <section className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
                  <p className="tw-body-text tw-leading-8">
                    A real-world example occurred in 2024 when a finance worker
                    at Arup approved a $25.6 million transaction after a
                    deepfake video call that appeared to include the
                    company&apos;s CFO and other staff members. The employee had
                    already been suspicious after receiving an email from the
                    CFO, but after the video call the money was transferred.
                  </p>
                </section>
              </div>
            </div>
          </div>,
          () => navigate("/Imagine2026/PostSurvey"),
        )}
      </div>
    </>
  );
};

export default ReadingSection;
