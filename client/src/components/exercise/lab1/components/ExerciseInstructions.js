import React, { useState, useEffect } from "react";
import Image1 from "../../../../assets/images/lab1/exercise/1.jpg";
import Image2 from "../../../../assets/images/lab1/exercise/2.jpg";
import Image3 from "../../../../assets/images/lab1/exercise/3.jpg";
import Image4 from "../../../../assets/images/lab1/exercise/4.jpg";
import Image5 from "../../../../assets/images/lab1/exercise/5.jpg";
import Image6 from "../../../../assets/images/lab1/exercise/6.jpg";
import Image7 from "../../../../assets/images/lab1/exercise/7.jpg";
import Image8 from "../../../../assets/images/lab1/exercise/8.jpg";
import { useLab1StateContext } from "src/reducers/lab1/Lab1Context";

/**
 * Renders the exercise instructions component.
 * This component displays a series of slides with instructions for the exercise.
 * It allows the user to navigate between slides using keyboard controls or by clicking on navigation buttons.
 * @returns {JSX.Element|null} The exercise instructions component.
 */
const ExerciseInstructions = () => {
  const { state, actions } = useLab1StateContext();
  const { closeHandler } = actions;

  const [currentSlide, setCurrentSlide] = useState(1);
  const MIN_VALUE = 1;
  const MAX_VALUE = 8;

  useEffect(() => {
    window.addEventListener("keydown", controls, false);
    return () => {
      window.removeEventListener("keydown", controls, false);
    };
  }, []);

  /**
   * Handles keyboard controls for the exercise instructions.
   * @param {Event} event - The keyboard event object.
   */
  const controls = (event) => {
    if (event.keyCode === 37) {
      navigatePrevSlide();
    } else if (event.keyCode === 39) {
      navigateNextSlide();
    } else if (event.keyCode === 27) {
      closeHandler();
    }
  };

  /**
   * Navigates to the previous slide.
   */
  const navigatePrevSlide = () => {
    if (currentSlide > MIN_VALUE) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  /**
   * Navigates to the next slide if the current slide is less than the maximum value.
   */
  const navigateNextSlide = () => {
    if (currentSlide < MAX_VALUE) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  if (!state.instructionsVisible) return null;

  let image = "";
  let alt = "";

  switch (currentSlide) {
    case 2:
      image = Image2;
      alt =
        "One of the four boxes will contain a treasure and you need to guess which.";
      break;

    case 3:
      image = Image3;
      alt =
        "The time is limited in the exercise, play fast to get a lot of points.";
      break;

    case 4:
      image = Image4;
      alt =
        "There is a hint box in the exercise and you can click on it to get a possible hint.";
      break;

    case 5:
      image = Image5;
      alt =
        'After the hint box is used, it will "think" and the boxes are locked.';
      break;

    case 6:
      image = Image6;
      alt = "Either it will show no hint";
      break;

    case 7:
      image = Image7;
      alt = "Or reveal the location of the treasure!";
      break;

    case 8:
      image = Image8;
      alt = "Good luck!";
      break;

    default:
      image = Image1;
      alt =
        "Image of the exercise showing a hint box, four boxes, statistics (score/correct answers/incorrect answers/round number), and a message indicating the goal to find the box with the treasure.";
  }

  return (
    <div className="instructions">
      <div className="instructions__content">
        <div className="instructions__prev" onClick={navigatePrevSlide}>
          <span>&#10096;</span>
        </div>

        <img src={image} alt={alt} className="instructions__image" />

        <div className="instructions__next" onClick={navigateNextSlide}>
          <span>&#10097;</span>
        </div>
      </div>

      <div className="instructions__background" onClick={closeHandler} />
    </div>
  );
};

export default ExerciseInstructions;
