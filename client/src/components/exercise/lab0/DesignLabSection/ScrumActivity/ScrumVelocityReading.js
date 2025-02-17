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
    handleNav("ScrumVeloActivity");
  };

  return (
    <div className={"tw-p-3 tw-text-left"}>
      <h2 className={"tw-title"}> Scrum Velocity </h2>
      <p className={"tw-py-3 tw-body-text"}>
        Great job getting your development schedule set up. But one sprint
        looked a little different than the others. Take a look at the sprint
        cards below. What do you see that’s different?
      </p>
      <div className={"tw-flex tw-flex-row tw-gap-x-6 tw-justify-center"}>
        <Card color={"#6D67E6"} velocity={"6"}>
          This is a card
        </Card>
        <Card color={"#37AA67"} velocity={"3"}>
          This is a card
        </Card>
      </div>
      <p className={"tw-body-text tw-py-6"}>
        The story velocity in the purple story card on the left has double the
        number of stories (or velocity) of the green sprint card. When
        scheduling a sprint, its imperative to not overload developers or make
        unrealistic expectations. Below, you’ll see much a much more attainable
        goal.
      </p>
      <div className={"tw-flex tw-flex-row tw-gap-x-6 tw-justify-center"}>
        <Card color={"#6D67E6"} velocity={"3"}>
          This is a card
        </Card>
        <Card color={"#000000"} velocity={"3"}>
          This is a card
        </Card>
        <Card color={"#37AA67"} velocity={"3"}>
          This is a card
        </Card>
      </div>
      <p className={"tw-py-3 tw-body-text"}>
        That looks much better. Lets update our sprint board from the previous
        activity to accommodate this added sprint. Click the Next button to move
        on.
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
