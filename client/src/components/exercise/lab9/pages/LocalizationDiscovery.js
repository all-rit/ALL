import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const Discovery = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleNext = () => {
    // navigate to the webpage
    navigate("/Lab9/Exercise/page");
  };

  return (
    <>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <h2 className="playthrough__title">Did You Notice?</h2>
          <div className="playthrough__sentence">
            Did you notice the three sections of the website that aren&#39;t
            localized? The first section is the navigation bar, which uses only
            text for the navigation menu items. To reach a wider audience, the
            navigation bar should also include icons next to every navigation
            menu item so that the items are more globally recognizable.
          </div>
          <div className="playthrough__sentence">
            The second section that isn&#39;t localized is the date at the top
            of the weekly newsletter. Date formats can vary globally, so the
            date needs to be localized.
          </div>
          <div className="playthrough__sentence">
            The third section that isn&#39;t localized is the subscription form.
            The form collects the user&#39;s address and phone number, the
            formats of which can both vary globally. To be accessible to all
            users, the form should be localized.
          </div>
        </div>
      </div>
      <div className="playthrough__sentence">
        In the next section of the exercise, you will click on each section of
        the website that isn&#39;t localized and repair that section. Click
        &#34;Continue&#34; to begin!
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleNext}
        key="continue"
      >
        Continue
      </button>
    </>
  );
};

Discovery.propTypes = {
  actions: PropTypes.object,
};

export default Discovery;
