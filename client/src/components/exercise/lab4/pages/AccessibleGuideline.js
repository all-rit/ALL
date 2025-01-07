import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const AccessibleGuideline = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleSubmit = () => {
    navigate("/Lab4/Exercise/CodeChangeAccessible");
  };
  return (
    <div className={"tw-p-6"}>
      <h2 className="tw-title tw-text-left tw-my-6">Was That Difficult?</h2>
      <p className="tw-body-text tw-text-left">
        People with mobile dexterity disabilities sometimes use a keyboard to
        navigate the page. It is imperative that elements that are accessible
        through mouse are also navigable by keyboard. Software should follow the{" "}
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
          target="_blank"
          rel="noopener noreferrer"
          className={"tw-text-primary-blue tw-underline"}
        >
          {" "}
          WGAC Guideline 2.1.1 Keyboard Accessible
        </a>
        : Make all functionality available from a keyboard.
      </p>
      <p className={"tw-my-6 tw-body-text tw-text-left"}>
        Go ahead and make the changes to the code by clicking “continue”.
      </p>

      <button
        href="#"
        onClick={handleSubmit}
        className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase"
      >
        Continue
      </button>
    </div>
  );
};

export default AccessibleGuideline;
