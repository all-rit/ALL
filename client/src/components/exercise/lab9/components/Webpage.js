import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import uni from "../../../../assets/images/lab9/uni.jpeg";
import PropTypes from "prop-types";
import NewsletterForm from "./webpage-subcomponents/NewsletterForm";
import WebpageNav from "./webpage-subcomponents/WebpageNav";
import WebpageHeader from "./webpage-subcomponents/WebpageHeader";
import WebpageSidebar from "./webpage-subcomponents/WebpageSidebar";
import { ExerciseService } from "../../../../services/lab9/ExerciseService";
import Button from "src/components/all-components/Navigation/Button";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * Webpage is a reusable component used to display
 * the ALL University's website homepage.
 * The webpage features a navbar, header, form, and sidebar,
 * each of which are sub-components.
 * @returns rendered webpage
 */
const Webpage = (props) => {
  const { user } = props;
  const { actions } = useMainStateContext();
  const [isNavComplete, setNavComplete] = useState(false);
  const [isDateComplete, setDateComplete] = useState(false);
  const [isAddressComplete, setAddressComplete] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  /**
   * handleComplete(): is a function that is responsible for
   * performing the action of setting the viewed state of the
   * page component to know to reset the exercise on the next
   * play through.
   */
  const handleComplete = async () => {
    if (isComplete) {
      // navigate to the conclusion page
      // only when all repairs are completed
      const body = {
        userid: user.userid,
        isAddressComplete: isAddressComplete,
        isDateComplete: isDateComplete,
        isNavComplete: isNavComplete,
        isExerciseComplete: isComplete,
        hasViewed: true,
      };
      await ExerciseService.submitExercise(body);
      navigate("/Lab9/Exercise/Conclusion");
    }
  };

  /**
   * resetData(): helper function that is responsible for
   * clearing the state of the component. and pushing the new
   * body to the db.
   */
  const resetData = async () => {
    const body = {
      userid: user.userid,
      isAddressComplete: false,
      isDateComplete: false,
      isNavComplete: false,
      isExerciseComplete: false,
      hasViewed: false,
    };
    setIsComplete(false);
    setAddressComplete(false);
    setDateComplete(false);
    setNavComplete(false);
    // to create initial exercise to db
    await ExerciseService.submitExercise(body);
  };
  /**
   * dataHandling(): is a function that is responsible for getting and
   * retrieving data when the exercise is in progress. This allows for fetching the
   * state of the user from the database, then if the user either has completed their game
   * or is starting a new exercise we can set the state of the user properly.
   */
  const dataHandling = async () => {
    try {
      const newState = await ExerciseService.fetchExercise(user);
      // if the data returned null then reset data
      if (!newState) {
        resetData();
      } else {
        const {
          isNavComplete,
          isDateComplete,
          isAddressComplete,
          isExerciseComplete,
          hasViewed,
        } = newState;
        setNavComplete(isNavComplete);
        setDateComplete(isDateComplete);
        setAddressComplete(isAddressComplete);
        setIsComplete(isExerciseComplete);
        // other reset state to handle if the user has completed what they were doing.
        if (isExerciseComplete && hasViewed) {
          resetData();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    dataHandling();
  }, []);

  return (
    <div>
      <div className="tw-bg-white tw-flex tw-flex-col pb-5">
        <div className="tw-flex-col tw-bg-white tw-relative tw-flex tw-min-h-[1024px] tw-w-full">
          <img
            loading="lazy"
            src={uni}
            className="tw-absolute tw-h-full tw-w-full tw-object-cover tw-object-center"
          />
          <WebpageNav repairComplete={isNavComplete} />
          <WebpageHeader />
          <div
            className="tw-flex tw-bg-[#260D0D] tw-w-full tw-flex-row tw-mt-60"
            style={{ zIndex: 1 }}
          >
            <div className="tw-w-full tw-flex tw-flex-row tw-mt-10">
              <div className="tw-flex tw-w-1/4 tw-ml-5">
                <WebpageSidebar />
              </div>
              <div className="tw-flex tw-w-3/4 tw-mr-5">
                <NewsletterForm
                  isDateRepaired={isDateComplete}
                  isAddressRepaired={isAddressComplete}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isComplete && <Button onClick={handleComplete} buttonText="Continue" />}
    </div>
  );
};

Webpage.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.string,
  props: PropTypes.object,
};

export default Webpage;
