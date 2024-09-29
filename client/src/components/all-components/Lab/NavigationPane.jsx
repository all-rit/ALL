import React from "react";
import { twMerge } from "tailwind-merge";

const lab_number = "Lab 101";

const lab_name = "Sample Lab Name Here This Long";
const table_of_contents = [
  {
    title: "Reading",
    subTitle: "Learn About Branding",
    selected: false,
  },
  {
    title: "Exercise",
    subTitle: "Lorem ipsum dolor",
    selected: false,
  },
  {
    title: "Lab Takeaways",
    subTitle: "Lorem ipsum dolor",
    selected: true,
  },
  {
    title: "Reinforcement",
    subTitle: "Keep practicing",
    selected: false,
  },
  {
    title: "Quiz",
    subTitle: "Test your knowledge",
    selected: false,
  },
];

const NavigationPane = () => {
  return (
    <div
      className={
        "tw-flex tw-flex-col tw-gap-y-24 tw-max-w-[16rem] tw-text-left"
      }
    >
      <h1
        className={
          "tw-title-styling-name tw-text-2xl tw-p-6 tw-border-12 tw-border-l-0 tw-border-b-0 tw-border-solid tw-border-primary-blue tw-rounded-tr-lg"
        }
      >
        {lab_number}: {lab_name}
      </h1>
      <div
        className={
          "tw-flex tw-flex-col tw-gap-y-6 tw-py-9 tw-px-0 tw-border-12 tw-border-l-0 tw-border-b-0 tw-border-solid tw-border-primary-yellow tw-rounded-tr-lg"
        }
      >
        <h2 className={"tw-sub-title-styling-name tw-font-bold tw-pl-6"}>
          Table of Contents
        </h2>
        <div className={"tw-flex tw-flex-col tw-gap-y-9"}>
          {table_of_contents.map(({ title, subTitle, selected }) => {
            return (
              <div
                key={title}
                className={
                  "tw-flex tw-flex-col tw-items-start tw-leading-tight"
                }
              >
                <div
                  className={twMerge(
                    "tw-font-semibold tw-px-6 tw-transition-all tw-ease-in-out",
                    selected ? "tw-bg-primary-yellow" : "",
                  )}
                >
                  {title}
                </div>
                <div className={"tw-pl-6"}>{subTitle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationPane;
