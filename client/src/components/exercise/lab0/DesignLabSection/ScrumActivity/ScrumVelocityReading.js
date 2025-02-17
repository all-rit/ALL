import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { color, children } = props;

  return (
    <div className={`tw-rounded-xl tw-bg-primary-yellow ${color}`}>
      {children}
    </div>
  );
};

const ScrumVelocityReading = () => {
  return (
    <div className={"tw-p-3 tw-text-left"}>
      <h2 className={"tw-title"}> Scrum Velocity </h2>
      <p className={"tw-py-3 tw-body-text"}>
        Great job getting your development schedule set up. But one sprint
        looked a little different than the others. Take a look at the sprint
        cards below. What do you see that’s different?
      </p>
      <p className={"tw-body-text"}>
        The story velocity in the purple story card on the left has double the
        number of stories (or velocity) of the green sprint card. When
        scheduling a sprint, its imperative to not overload developers or make
        unrealistic expectations. Below, you’ll see much a much more attainable
        goal.
      </p>
      <Card>This is a card</Card>
      <p className={"tw-py-3 tw-body-text"}>
        That looks much better. Lets update our sprint board from the previous
        activity to accommodate this added sprint. Click the Next button to move
        on.
      </p>
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
};

export default ScrumVelocityReading;
