import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ALLCardRow from "../../all-components/ALLCardRow";
import LabButton from "../../all-components/LabButton";
import Lab0Context from "./Lab0Context";
import { SECTIONS, SECTION_STATUSES } from "../../../constants/lab0/index";
import ProgressService from "../../../services/lab0/ProgressService";
import useMainStateContext from "../../../reducers/MainContext";
import StatusBanner from "../../all-components/StatusBanner";
import { EXERCISE_IDLE } from "../../../constants";

const StartExercise = (props) => {
  const { state, actions } = useMainStateContext();
  const { handleNav } = useContext(Lab0Context);
  const [categories, setCategories] = useState(null);
  const [nextSection, setNextSection] = useState(null);
  const verb = props.verb || "Start";

  async function getProgress() {
    if (!state.main.user || categories !== null) return;
    const result = await ProgressService.getProgress(state.main.user.userid);
    const progress = result.progress === null ? {} : result.progress;

    let map = {};
    let next = null;
    Object.values(SECTIONS).forEach((section) => {
      if (!(section.category in map)) {
        map[section.category] = [];
      }

      if (
        progress[section.name] !== SECTION_STATUSES.SECTION_COMPLETED &&
        next === null
      ) {
        next = section.name;
      }

      map[section.category].push({
        ...section,
        sectionStatus: progress[section.name],
      });
    });

    setCategories(map);
    setNextSection(next);
  }

  useEffect(() => {
    getProgress();
    if (nextSection === null) {
      actions.updateUserState(EXERCISE_IDLE);
    }
  }, [state.main.user]);

  const getCardRowButtonLabel = (section) => {
    switch (section.sectionStatus) {
      case SECTION_STATUSES.SECTION_COMPLETED:
        return "Redo";
      case SECTION_STATUSES.SECTION_IN_PROGRESS:
        return "Continue";
      default:
        return "Jump To";
    }
  };

  return (
    <div className={"tw-p-3"}>
      <div className={"tw-flex tw-flex-col"}>
        <h2 className={"tw-title tw-text-left"}>{verb} Exercise</h2>
        <p className={"tw-py-6 tw-body-text"}>
          {verb === "Start"
            ? "You will now have the opportunity to learn how to build the lab from \
            inception, ideation, and planning, all the way to development and \
            becoming deeply familiar with our internal component library, best \
            practices, and tech stack. Click “Start” to begin with lab design!"
            : "Welcome back! Here, you have the opportunity to jump to any section to \
            learn more about each one. If you are onboarding a team, it is recommended \
            to proceed in order. Click “Continue” to start the next section!"}
        </p>
      </div>

      {categories &&
        Object.keys(categories).map((category) => {
          return (
            <div key={category}>
              <p className="tw-text-left tw-text-lg tw-font-bold">{category}</p>
              {categories[category].map((section) => {
                return (
                  <ALLCardRow
                    key={section.name}
                    title={section.displayName}
                    imageURL={section.imageURL}
                    circlesLabel="Completed"
                    circles={1}
                    circlesFilled={
                      section.sectionStatus ===
                      SECTION_STATUSES.SECTION_COMPLETED
                        ? 1
                        : 0
                    }
                    buttonLabel={getCardRowButtonLabel(section)}
                    buttonStyle="tw-cursor-pointer tw-bg-darkGray poppins tw-text-white tw-font-medium tw-border-0 tw-px-3 tw-m-0 tw-text-xs md:tw-text-xl"
                    onClick={() => handleNav(section.name)}
                  />
                );
              })}
            </div>
          );
        })}
      {nextSection ? (
        <LabButton
          label={verb.toUpperCase()}
          onClick={() => handleNav(nextSection)}
          disabled={nextSection === null}
        />
      ) : (
        <StatusBanner style={"tw-bg-success"}>
          All exercises complete! You may now move on to the reinforcement
          section!
        </StatusBanner>
      )}
    </div>
  );
};

StartExercise.propTypes = {
  verb: PropTypes.string,
};

export default StartExercise;
