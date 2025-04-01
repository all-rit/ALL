import React, { useContext } from "react";
import PropTypes from "prop-types";
import Lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";

const Card = (props) => {
  const { color, children, velocity } = props;

  return (
    <div
      className={`tw-rounded-xl tw-bg-[${color}] tw-p-3 tw-w-[12rem] tw-h-[15rem] tw-flex tw-flex-col tw-text-white`}
    >
      <strong>Velocity: {velocity}</strong>
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
      <h2 className={"tw-title"}> Sprint Velocity </h2>
      <p className={"tw-py-3 tw-body-text"}>
        Great job getting your development schedule set up. But one sprint
        looked a little different than the others. Take a look at the sprint
        cards below. What do you see that’s different?
      </p>
      <div className={"tw-flex tw-flex-row tw-gap-x-6 tw-justify-center"}>
        <Card color={"#6D67E6"} velocity={"6"}>
          <ul className={"tw-px-4 tw-text-xs"}>
            <li className={"tw-list-decimal"}>
              Create Skeleton for Exercise Structure
            </li>
            <li className={"tw-list-decimal"}>Create Exercise Introduction</li>
            <li className={"tw-list-decimal"}>Display Blurred Webpage</li>
            <li className={"tw-list-decimal"}>Create Screen Reader</li>
            <li className={"tw-list-decimal"}> Create Tab through Nav</li>
            <li className={"tw-list-decimal"}>Create Out of Order Tab Nav</li>
          </ul>
        </Card>
        <Card color={"#37AA67"} velocity={"3"}>
          <ul className={"tw-px-4  tw-text-sm"}>
            <li className={"tw-list-decimal"}>
              Explanation of Disordered Focus
            </li>
            <li className={"tw-list-decimal"}>Hearing Mismatched Labels</li>
            <li className={"tw-list-decimal"}>
              Explanation of the Inaccessibility
            </li>
          </ul>
        </Card>
      </div>
      <p className={"tw-body-text tw-py-6"}>
        The story velocity in the purple story card on the left has double the
        number of stories (or velocity) of the green sprint card. When
        scheduling a sprint, its imperative to not overload developers or make
        unrealistic expectations. Below, you’ll see a much more attainable goal.
      </p>
      <div className={"tw-flex tw-flex-row tw-gap-x-6 tw-justify-center"}>
        <Card color={"#6D67E6"} velocity={"3"}>
          <ul className={"tw-px-4 tw-text-sm"}>
            <li className={"tw-list-decimal"}>
              Create Skeleton for Exercise Structure
            </li>
            <li className={"tw-list-decimal"}>Create Exercise Introduction</li>
            <li className={"tw-list-decimal"}>Display Blurred Webpage</li>
          </ul>
        </Card>
        <Card color={"#FC7AAC"} velocity={"3"}>
          <ul className={"tw-px-4 tw-text-sm"}>
            <li className={"tw-list-decimal"}>Create Screen Reader</li>
            <li className={"tw-list-decimal"}> Create Tab through Nav</li>
            <li className={"tw-list-decimal"}>Create Out of Order Tab Nav</li>
          </ul>
        </Card>
        <Card color={"#37AA67"} velocity={"3"}>
          <ul className={"tw-px-4 tw-text-sm"}>
            <li className={"tw-list-decimal"}>
              {" "}
              Explanation of Disordered Focus
            </li>
            <li className={"tw-list-decimal"}>Hearing Mismatched Labels</li>
            <li className={"tw-list-decimal"}>
              Explanation of the Inaccessibility
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
