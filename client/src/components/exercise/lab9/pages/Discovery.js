import { navigate } from "@reach/router";
import React, {useEffect} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as exerciseActions } from "../../../../reducers/lab9/ExerciseReducer";
import { EXERCISE_PLAYING } from "../../../../constants/lab9";
import PropTypes from "prop-types";

const Discovery = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
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
  actions: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Discovery);
