/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE, LAB_ID } from "../../../../../constants/lab3/index";
import UserLabService from "../../../../../services/UserLabService";
class AdvancedExerciseConclusion extends Component {
<<<<<<< HEAD
<<<<<<< HEAD
   constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  
  handleSubmit() {
    navigate("/Lab3/Exercise");
  }

  handleNext() {
    navigate("/Lab3/Reinforcement");
  }

=======
  handleSubmit() {
    navigate("/Lab3/Exercise");
  }
>>>>>>> a1f93297d5b58032f71a700b729806cd88f14691
=======
  handleSubmit() {
    navigate("/Lab3/Exercise");
  }
>>>>>>> a1f93297d5b58032f71a700b729806cd88f14691
  componentDidMount() {
    const { actions, user } = this.props;
    actions.updateState(EXERCISE_IDLE);
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
  }
  render() {
    return (
      <div className={"tw-p-6"}>
        <h2 className="tw-title tw-text-left">Advanced Exercise Complete</h2>
        <br />
        <p className={"tw-body-text tw-font-medium tw-text-left"}>
          Congratulations! You have successfully completed the Screen Readers
          Exercise!
        </p>
        <br />
        <p className={"tw-body-text tw-font-medium tw-text-left"}>
          Click the <strong> Return to Exercise Start </strong> button below to
<<<<<<< HEAD
<<<<<<< HEAD
          restart the exercise, or click the <strong> Next</strong> button on the right to continue to the Reinforcement section.
        </p>
        <br />
        <div className="tw-flex tw-justify-center tw-items-center tw-gap-4 tw-mt-6">
      <button
          className="btn tw-shadow-md tw-bg-secondary-gray tw-h-[4rem] text-uppercase hover:tw-bg-primary-yellow hover:tw-shadow-lg"
          onClick={this.handleSubmit}
          key="start"
      >
      Return to Exercise Start
      </button>

      <button
          className="btn tw-shadow-md tw-bg-secondary-gray tw-h-[4rem] tw-w-[8rem] text-uppercase hover:tw-bg-primary-yellow hover:tw-shadow-lg"
          onClick={this.handleNext}
      >
       Next
      </button>
      </div>
      </div>
    );
    
    
=======
=======
>>>>>>> a1f93297d5b58032f71a700b729806cd88f14691
          restart the exercise, or click the <strong> Next</strong> button in
          the bottom right.
        </p>
        <br />
        <button
          className="btn tw-shadow-md tw-bg-secondary-gray tw-h-[4rem] text-uppercase hover:tw-bg-primary-yellow hover:tw-shadow-lg"
          onClick={this.handleSubmit}
          key="start"
        >
          Return to Exercise Start
        </button>
      </div>
    );
<<<<<<< HEAD
>>>>>>> a1f93297d5b58032f71a700b729806cd88f14691
=======
>>>>>>> a1f93297d5b58032f71a700b729806cd88f14691
  }
}

export default AdvancedExerciseConclusion;
