import React, { useContext, useState } from "react";
import lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";
import ALLCardFlip from "../../../../all-components/ALLCardFlip";
import CodeBlock from "../../../../../assets/images/lab0/Lab0-CodeBlockComponent.PNG";
import HTTPRequest from "../../../../../assets/images/lab0/Lab0-HTTPRequestComponent.PNG";
import DragAndDrop from "../../../../../assets/images/lab0/Lab0-DragAndDropComponent.PNG";
import Avatar from "../../../../../assets/images/lab0/Lab0-AvatarComponent.PNG";
import labButton from "../../../../../assets/images/lab0/Lab0-LabButtonComponent.PNG";
import Figma from "../../../../../assets/images/lab0/Lab0-FigmaComponent.PNG";

const WireframeExercise = () => {
  const { handleNav } = useContext(lab0Context);
  const [complete, setComplete] = useState(false);

  const navigateNext = () => {
    handleNav("WireframeReinforceQuiz");
  };

  return (
    <div className={"tw-text-left"}>
      <h3 className="tw-text-2xl tw-font-bold tw-pt-4">Exercise</h3>
      <p className={"tw-body-text tw-pt-2"}>
        The <strong>Exercise</strong> section is an interactive activity that
        invites the user to apply the concepts they have learned throughout the
        lab. This can involve the user being prompted to enter information
        through text boxes, carry out an action, or interact with one of the
        multiple components that ALL provides.
      </p>
      <p className={"tw-body-text tw-pt-2"}>
        A key aspect of these exercises is their emphasis on empathy-based
        learning, which helps users understand the perspectives and experiences
        of others as they carry out tasks. By fostering a deeper sense of
        connection and awareness, these activities not only strengthen
        users&apos; technical or conceptual knowledge but also cultivate their
        ability to approach problems with compassion and insight. This approach
        enriches the learning experience, making it more impactful and
        meaningful beyond the immediate scope of the lab.
      </p>

      <p className={"tw-body-text tw-pt-2"}>
        Take a look at the component library that ALL has to offer for various
        exercises:
      </p>
      <div className={"tw-flex tw-w-10/12 tw-justify-self-center tw-pt-8"}>
        <ALLCardFlip
          width={3}
          height={3}
          onAllFlipped={() => setComplete(true)}
          gridStyle={"tw-gap-3"}
          cardStyle={"tw-rounded-[1.2rem]"}
          cards={[
            {
              id: 0,
              width: 1,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center"
                  }
                >
                  <div
                    className={"tw-w-full tw-flex tw-flex-col tw-flex-shrink"}
                  >
                    <h3
                      className={
                        "tw-sub-title tw-pl-2 xl:lg:md:tw-text-xl tw-font-bold sm:tw-text-lg"
                      }
                    >
                      Avatars
                    </h3>
                    <p
                      className={
                        "tw-max-h-[80%] tw-body-text xl:lg:tw-text-sm md:tw-text-xs/5 sm:tw-text-xs/3 tw-pt-1 tw-px-2 tw-leading-snug "
                      }
                    >
                      This component can be used to represent the user or a
                      hypothetical other person. It can be customized with a
                      variety of different attributes such as skin color and
                      accessories.
                    </p>
                  </div>
                  <div
                    className={
                      "tw-w-1/4 tw-object-bottom tw-content-center tw-justify-self-center tw-flex tw-flex-shrink"
                    }
                  >
                    <img
                      className={"tw-object-contain"}
                      src={Avatar}
                      alt={"Avatar Component"}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: 1,
              width: 2,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex xl:lg:md:tw-flex-row sm:xs:tw-flex-col tw-items-center"
                  }
                >
                  <div
                    className={
                      "xl:lg:md:tw-w-1/2 sm:xs:tw-w-full tw-flex tw-flex-col tw-flex-shrink"
                    }
                  >
                    <h3
                      className={
                        "tw-sub-title tw-pl-2 xl:lg:md:tw-text-xl tw-font-bold sm:tw-text-lg"
                      }
                    >
                      Code Block
                    </h3>
                    <div
                      className={
                        "tw-body-text xl:lg:md:tw-text-lg sm:tw-text-sm/6 tw-pt-2 tw-px-2"
                      }
                    >
                      This component represents a code file in which users can
                      edit specified values. Commonly this is used to have users
                      &quot;repair&quot; functionality.
                    </div>
                  </div>
                  <div
                    className={
                      "xl:lg:md:tw-w-1/2 sm:xs:tw-w-1/3 tw-content-center tw-justify-self-center tw-flex tw-flex-shrink"
                    }
                  >
                    <img
                      className={"tw-object-contain"}
                      src={CodeBlock}
                      alt={"Code Block Component"}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: 2,
              width: 2,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex xl:lg:md:tw-flex-row sm:xs:tw-flex-col tw-items-center"
                  }
                >
                  <div
                    className={
                      "xl:lg:md:tw-w-1/2 sm:xs:tw-w-full tw-flex tw-flex-col tw-flex-shrink"
                    }
                  >
                    <h3
                      className={
                        "tw-sub-title tw-pl-2 xl:lg:md:tw-text-xl tw-font-bold sm:tw-text-lg"
                      }
                    >
                      HTTP Request
                    </h3>
                    <div
                      className={
                        "tw-body-text xl:lg:md:tw-text-lg sm:tw-text-sm tw-pt-2 tw-px-2"
                      }
                    >
                      This component represents a mock HTTP request. This
                      component can be used to show the user the process and
                      expected results of an API request.
                    </div>
                  </div>
                  <div
                    className={
                      "xl:lg:md:tw-w-1/2 sm:xs:tw-w-1/3 tw-content-center tw-justify-self-center tw-flex tw-flex-shrink"
                    }
                  >
                    <img
                      className="tw-object-contain tw-max-h-60 tw-w-auto"
                      src={HTTPRequest}
                      alt="HTTP Request Component"
                    />
                  </div>
                </div>
              ),
            },
            {
              id: 3,
              width: 1,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center"
                  }
                >
                  <div
                    className={"tw-w-full tw-flex tw-flex-col tw-flex-shrink"}
                  >
                    <h3
                      className={
                        "tw-sub-title tw-pl-2 xl:lg:md:tw-text-xl tw-font-bold sm:tw-text-lg"
                      }
                    >
                      Lab Button
                    </h3>
                    <p
                      className={
                        "tw-max-h-[80%] tw-body-text xl:lg:tw-text-sm md:tw-text-xs/5 sm:tw-text-xs/3 tw-pt-1 tw-px-2 tw-leading-snug "
                      }
                    >
                      This is an example of the common button used throughout
                      labs to control routing and activity submission. It can be
                      customized to carry out lab specific actions.
                    </p>
                  </div>
                  <div
                    className={
                      "tw-w-1/4 tw-object-bottom tw-content-center tw-justify-self-center tw-flex tw-flex-shrink"
                    }
                  >
                    <img
                      className={"tw-object-contain"}
                      src={labButton}
                      alt={"Lab Button Component"}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: 4,
              width: 1,
              content: (
                <div
                  className={
                    "tw-w-full tw-h-full tw-p-1 tw-flex tw-flex-col tw-items-center"
                  }
                >
                  <div
                    className={"tw-w-full tw-flex tw-flex-col tw-flex-shrink"}
                  >
                    <h3
                      className={
                        "tw-sub-title tw-pl-2 xl:lg:md:tw-text-xl tw-font-bold sm:tw-text-lg"
                      }
                    >
                      Faux Figma
                    </h3>
                    <p
                      className={
                        "tw-max-h-[80%] tw-body-text xl:lg:tw-text-sm md:tw-text-xs/5 sm:tw-text-xs/3 tw-pt-1 tw-px-2 tw-leading-snug "
                      }
                    >
                      This component is a mock representation of Figma. It can
                      be used to show wireframes or designs of software UI.
                    </p>
                  </div>
                  <div
                    className={
                      "tw-w-3/4 tw-object-bottom tw-content-center tw-justify-self-center tw-flex tw-flex-shrink"
                    }
                  >
                    <img
                      className={"tw-object-contain"}
                      src={Figma}
                      alt={"Faux Figma Component"}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: 5,
              width: 2,
              content: (
                <div
                  className={
                    "tw-p-1 tw-flex xl:lg:md:tw-flex-row sm:xs:tw-flex-col tw-items-center"
                  }
                >
                  <div
                    className={
                      "xl:lg:md:tw-w-1/2 sm:xs:tw-w-full tw-flex tw-flex-col tw-flex-shrink"
                    }
                  >
                    <h3
                      className={
                        "tw-sub-title tw-pl-2 xl:lg:md:tw-text-xl tw-font-bold sm:tw-text-lg"
                      }
                    >
                      Drag and Drop
                    </h3>
                    <div
                      className={
                        "tw-body-text xl:lg:md:tw-text-lg sm:tw-text-sm/5 tw-pt-2 tw-px-2"
                      }
                    >
                      This component is a generic Drag and Drop activity. It
                      involves the user dragging cards from a bank to various
                      columns. It can be customized for a variety of
                      applications, as seen in this lab!
                    </div>
                  </div>
                  <div
                    className={
                      "xl:lg:md:tw-w-1/2 sm:xs:tw-w-1/3 tw-content-center tw-justify-self-center tw-flex tw-flex-shrink"
                    }
                  >
                    <img
                      className={"tw-object-contain"}
                      src={DragAndDrop}
                      alt={"Drag and Drop Component"}
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
      {complete && (
        <p className="tw-body-text tw-justify-self-center tw-pt-4">
          Click the <strong> Next</strong> button to continue.
        </p>
      )}
      <div className={"tw-flex tw-justify-center tw-py-6"}>
        <LabButton disabled={!complete} onClick={navigateNext} label={"Next"} />
      </div>
    </div>
  );
};

export default WireframeExercise;
