import React, { useEffect, useState } from "react";
import { labData } from "../../../../../constants/lab0/DevelopALab/LabTableData";
import { DARK } from "../../../../../constants/themes";
import { LABELS, ANSWERS } from "../../../../../constants/lab0";
import {
  SQLText,
  JSONText,
  CommentText,
} from "../../../../all-components/CodeBlock/StyleComponents";
import PropTypes from "prop-types";
import {
  CodeDropdown,
  CodeLine,
} from "../../../../all-components/CodeBlock/Components";

const DataRepair = (props) => {
  const { setRepairComplete } = props;

  const {
    INITIAL_SHORT_NAME_LABEL,
    INITIAL_WALKTHROUGH_VIDEO_LABEL,
    INITIAL_CATEGORY_LABEL,
    INITIAL_SHORT_DESCRIPTION_LABEL,
  } = LABELS;

  const {
    CORRECT_SHORT_NAME,
    CORRECT_CATEGORY,
    CORRECT_WALKTHROUGH_VIDEO,
    CORRECT_SHORT_DESCRIPTION,
  } = ANSWERS;

  const CORRECT_REPAIR = {
    shortName: CORRECT_SHORT_NAME,
    category: CORRECT_CATEGORY,
    walkthroughVideo: CORRECT_WALKTHROUGH_VIDEO,
    shortDescription: CORRECT_SHORT_DESCRIPTION,
  };

  const [dataRepair, setDataRepair] = useState({
    shortName: "",
    category: "",
    walkthroughVideo: "",
    shortDescription: "",
  });

  const SHORT_NAME_OPTIONS = [
    "Working with Really Awesome Focus Orders",
    CORRECT_SHORT_NAME,
    "Focus",
  ];

  const CATEGORY_OPTIONS = [CORRECT_CATEGORY, "AI/ML", "Tutorial"];

  const DESCRIPTION_OPTIONS = [
    CORRECT_SHORT_DESCRIPTION,
    "Focus order is important.",
    "Have you ever heard of Focus Order?",
  ];

  const WALKTHROUGH_OPTIONS = [
    CORRECT_WALKTHROUGH_VIDEO,
    "../../assets/videos/lab-14-walkthrough.mp4",
  ];

  const [shortNameDropdownOpen, setShortNameDropdownOpen] = useState(false);
  const [walkthroughDropdownOpen, setWalkthroughDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [descriptionDropdownOpen, setDescriptionDropdownOpen] = useState(false);

  useEffect(() => {
    const complete =
      JSON.stringify(dataRepair) === JSON.stringify(CORRECT_REPAIR);
    setRepairComplete(complete);
  }, [dataRepair]);

  const toggleShortNameDropdown = () => {
    setShortNameDropdownOpen(!shortNameDropdownOpen);
  };

  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };

  const toggleDescriptionDropdown = () => {
    setDescriptionDropdownOpen(!descriptionDropdownOpen);
  };

  const toggleWalkthroughDropdown = () => {
    setWalkthroughDropdownOpen(!walkthroughDropdownOpen);
  };

  const updateShortName = (option) => {
    setDataRepair((prev) => ({
      ...prev,
      shortName: option,
    }));
  };

  const updateWalkthrough = (option) => {
    setDataRepair((prev) => ({
      ...prev,
      walkthroughVideo: option,
    }));
  };

  const updateCategory = (option) => {
    setDataRepair((prev) => ({
      ...prev,
      category: option,
    }));
  };

  const updateDescription = (option) => {
    setDataRepair((prev) => ({
      ...prev,
      shortDescription: option,
    }));
  };

  return (
    <div
      className={
        "code_editor__code tw-w-full tw-h-full tw-p-5 tw-rounded-lg tw-text-[14px]"
      }
    >
      <div className={"tw-flex tw-w-full tw-flex-wrap"}>
        <SQLText> INSERT INTO public.labs (</SQLText>
        {labData.map((data, index) => {
          return (
            <div key={index} className={"tw-flex"}>
              <div className={"tw-mr-[-3px]"}>
                <SQLText>{data.name}</SQLText>
              </div>
              {index < labData.length - 1 && <SQLText>,</SQLText>}
            </div>
          );
        })}
        <SQLText>)</SQLText>
      </div>
      <div className={"tw-w-full"}>
        <SQLText> VALUES (</SQLText>
        <div className={"tw-flex tw-flex-col"}>
          <JSONText>14,</JSONText>
          <CodeLine>
            <JSONText>&apos;Accessibility to Focus Order&apos;,</JSONText>
          </CodeLine>
          <CodeLine>
            <CodeDropdown
              toggle={toggleShortNameDropdown}
              isOpen={shortNameDropdownOpen}
              initialLabel={INITIAL_SHORT_NAME_LABEL}
              options={SHORT_NAME_OPTIONS}
              setSelection={updateShortName}
              selectionCorrect={dataRepair.shortName === CORRECT_SHORT_NAME}
              theme={DARK}
            />
            <JSONText>,</JSONText>
            <CommentText>
              &#47;&#47; Enter the correct short name for this lab
            </CommentText>
          </CodeLine>
          <CodeLine>
            <CodeDropdown
              toggle={toggleCategoryDropdown}
              isOpen={categoryDropdownOpen}
              initialLabel={INITIAL_CATEGORY_LABEL}
              options={CATEGORY_OPTIONS}
              setSelection={updateCategory}
              selectionCorrect={dataRepair.category === CORRECT_CATEGORY}
              theme={DARK}
            />
            <JSONText>,</JSONText>
            <CommentText>
              &#47;&#47; Enter the correct category for this lab
            </CommentText>
          </CodeLine>
          <JSONText>&apos;/focusOrderThumbnail.jpeg&apos;,</JSONText>
          <div className={"tw-flex tw-w-full tw-items-center"}>
            <CodeDropdown
              toggle={toggleDescriptionDropdown}
              isOpen={descriptionDropdownOpen}
              initialLabel={INITIAL_SHORT_DESCRIPTION_LABEL}
              options={DESCRIPTION_OPTIONS}
              setSelection={updateDescription}
              selectionCorrect={
                dataRepair.shortDescription === CORRECT_SHORT_DESCRIPTION
              }
              theme={DARK}
            />
            <JSONText>,</JSONText>
            <CommentText>
              &#47;&#47; Enter the correct short description for this lab
            </CommentText>
          </div>
          <CodeLine>
            <JSONText>...</JSONText>
          </CodeLine>
          <JSONText>1,</JSONText>
          <JSONText>&apos;ALL_Lab_1_Lecture_Slides.pptx&apos;,</JSONText>
          <div className={"tw-flex tw-w-full tw-items-center"}>
            <CodeDropdown
              toggle={toggleWalkthroughDropdown}
              isOpen={walkthroughDropdownOpen}
              initialLabel={INITIAL_WALKTHROUGH_VIDEO_LABEL}
              options={WALKTHROUGH_OPTIONS}
              setSelection={updateWalkthrough}
              selectionCorrect={
                dataRepair.walkthroughVideo === CORRECT_WALKTHROUGH_VIDEO
              }
              theme={DARK}
            />
            <JSONText>,</JSONText>
            <CommentText>
              &#47;&#47; Enter the correct URL for the walkthrough video
            </CommentText>
          </div>
          <SQLText>true</SQLText>
          <SQLText>);</SQLText>
        </div>
      </div>
    </div>
  );
};

DataRepair.propTypes = {
  repairComplete: PropTypes.bool,
  setRepairComplete: PropTypes.func,
};

export default DataRepair;
