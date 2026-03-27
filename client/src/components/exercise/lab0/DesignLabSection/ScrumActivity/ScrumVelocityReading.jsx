import React, { useContext } from "react";
import PropTypes from "prop-types";
import Lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";

const Card = (props) => {
  const { color, children, velocity } = props;

  return (
    <div
      className="tw-rounded-xl tw-p-3 tw-w-[12rem] tw-h-[15rem] tw-flex tw-flex-col tw-text-white"
      style={{ backgroundColor: color }}
    >
      <strong>Total Points: {velocity}</strong>
      {children}
    </div>
  );
};

const ScrumVelocityReading = () => {
  const { handleNav } = useContext(Lab0Context);

  const navigateToScrumVeloActivity = () => {
    handleNav("ScrumVelocityActivity");
  };

  return (
    <div className={"tw-p-3 tw-text-left"}>
      <h2 className={"tw-title"}> Story Points </h2>
      <p className={"tw-py-3 tw-body-text"}>
        Great job getting your development schedule set up!{" "}
        <strong>STORY POINTS</strong> are a unit of measure used in a project to
        estimate the effort required to implement a single user story. These are
        assigned based on complexity, amount of work, and potential challenges,
        not necessarily time.
      </p>
      <p className={"tw-py-3 tw-body-text"}>
        Each sprint card below displays its <strong>TOTAL STORY POINTS</strong>,
        which represents the amount of work that the Scrum team will do in that
        sprint. Story points can be used to calculate <strong>VELOCITY</strong>,
        which is determined by summing the story points from fully completed
        user stories across recent sprints, then dividing by the number of
        sprints. It&apos;s basically the average amount of work that the team
        can do in a sprint, and is a super helpful value for future sprint
        planning. Take a look at the sprint cards below and their story points:
        one sprint looks quite different than the other. What do you see that’s
        different?
      </p>
      <div className={"tw-flex tw-flex-row tw-gap-x-6 tw-justify-center"}>
        <Card color={"#6D67E6"} velocity={"28"}>
          <ul className={"tw-px-3 tw-text-xs"}>
            <li className={"tw-list-decimal"}>
              Create Skeleton for Exercise Structure (3)
            </li>
            <li className={"tw-list-decimal"}>
              Create Exercise Introduction (5)
            </li>
            <li className={"tw-list-decimal"}>Display Blurred Webpage (5)</li>
            <li className={"tw-list-decimal"}>Create Screen Reader (8)</li>
            <li className={"tw-list-decimal"}> Create Tab through Nav (2)</li>
            <li className={"tw-list-decimal"}>
              Create Out of Order Tab Nav (5)
            </li>
          </ul>
        </Card>
        <Card color={"#37AA67"} velocity={"13"}>
          <ul className={"tw-px-3  tw-text-xs"}>
            <li className={"tw-list-decimal"}>
              Write an Explanation of Disordered Focus (5)
            </li>
            <li className={"tw-list-decimal"}>
              Explain the Issue of Hearing Mismatched Labels (5)
            </li>
            <li className={"tw-list-decimal"}>
              Write an Explanation of the Inaccessibility (3)
            </li>
          </ul>
        </Card>
      </div>
      <p className={"tw-body-text tw-py-6"}>
        The story velocity in the purple story card on the left has almost
        double the total story points of the green sprint card. When scheduling
        a sprint, its imperative to not overload developers or make unrealistic
        expectations. Generally, sprints should have a similar total number of
        story points each, aligning closely with the team&apos;s velocity.
        Below, you&apos;ll see a much more attainable goal.
      </p>
      <div className={"tw-flex tw-flex-row tw-gap-x-6 tw-justify-center"}>
        <Card color={"#6D67E6"} velocity={"13"}>
          <ul className={"tw-px-4 tw-text-sm"}>
            <li className={"tw-list-decimal"}>
              Create Skeleton for Exercise Structure (3)
            </li>
            <li className={"tw-list-decimal"}>
              Create Exercise Introduction (5)
            </li>
            <li className={"tw-list-decimal"}>Display Blurred Webpage (5)</li>
          </ul>
        </Card>
        <Card color={"#FC7AAC"} velocity={"15"}>
          <ul className={"tw-px-4 tw-text-sm"}>
            <li className={"tw-list-decimal"}>Create Screen Reader (8)</li>
            <li className={"tw-list-decimal"}>Create Tab through Nav (2)</li>
            <li className={"tw-list-decimal"}>
              Create Out of Order Tab Nav (5)
            </li>
          </ul>
        </Card>
        <Card color={"#37AA67"} velocity={"13"}>
          <ul className={"tw-px-4 tw-text-sm"}>
            <li className={"tw-list-decimal"}>
              {" "}
              Write an Explanation of Disordered Focus (5)
            </li>
            <li className={"tw-list-decimal"}>
              Explain the Issue of Hearing Mismatched Labels (5)
            </li>
            <li className={"tw-list-decimal"}>
              Write an Explanation of the Inaccessibility (3)
            </li>
          </ul>
        </Card>
      </div>
      <p className={"tw-py-3 tw-body-text"}>
        That looks much better. Lets update Sprint 1 and Sprint 2 from the
        previous activity to ensure that user stories are properly allocated.
        Click the <strong>Next</strong> button to move on.
      </p>
      <div className={"tw-w-full tw-flex tw-justify-center tw-py-6"}>
        <LabButton label={"Next"} onClick={navigateToScrumVeloActivity} />
      </div>
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
  velocity: PropTypes.string,
};

export default ScrumVelocityReading;
