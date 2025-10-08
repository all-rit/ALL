import React, { useContext } from "react";
import Lab2Color from "../../../../../assets/images/lab0/Lab2Color.png";
import Lab2Colorblind from "../../../../../assets/images/lab0/Lab2ColorBlind.png";
import Lab2Codeblock from "../../../../../assets/images/lab0/Lab2Codeblock.png";
import LabButton from "../../../../all-components/LabButton";
import Lab0Context from "../../Lab0Context";

const ExperientialIntroduction = () => {
  const { handleNav } = useContext(Lab0Context);

  const navToExercise = () => {
    handleNav("ExperientialExercise");
  };

  return (
    <div className={"tw-flex tw-flex-col tw-text-left tw-body-text"}>
      <h2 className={"tw-title"}>Experiential Exercises Introduction</h2>
      <p className={"tw-py-6"}>
        The backbone of the Accessible Learning Labs experience and learning
        process is designing and developing experiential exercises for
        participants to gain a deeper understanding and empathetic view of the
        subject they are studying.
      </p>
      <p>
        For example, in the Accessibility to Colorblindness exercise, users are
        given the opportunity to play a game designed with poor color
        contrasting. Their first experience the poor design in standard color
        view, but are then asked to play the same game as someone who suffers
        from a color vision defect, rendering the activity unplayable as the
        colors appear identical.
      </p>
      <div className={"tw-grid tw-grid-cols-2 tw-gap-3 tw-py-6 "}>
        <img src={Lab2Color} alt={"Lab 2 Color"} />
        <img src={Lab2Colorblind} alt={"Lab 2 Colorblind"} />
        <p className={"tw-text-center tw-text-sm tw-italic"}>
          In the initial activity of Lab 2, there is circle in the middle of a
          green screen, along with 3 circles on the bottom, colored red, tan,
          and green, that are meant to display the colors of which you should
          click and should not click. The goal is to click the center circle
          when it is red, and not when it is tan or green.
        </p>
        <p className={"tw-text-center tw-text-sm tw-italic"}>
          In the second activity of Lab 2, you are faced with the game, however
          the circles now appear to be the exact same shade of grey green,
          driving home the point of the importance of color contrasting.
        </p>
      </div>
      <p>
        Participants are then prompted to fix the activity by updating the color
        palette in a code block to improve the color contrasting, therefore
        improving the experience for those who suffer from color blindness, as
        well as showing the ease with which one can make these changes that make
        a major difference for users.
      </p>
      <div className={"tw-flex tw-flex-col tw-items-center tw-gap-3 tw-py-6 "}>
        <img
          className={"tw-w-1/2"}
          src={Lab2Codeblock}
          alt={"Lab 2 Code Block"}
        />
        <p className={"tw-text-center tw-text-sm tw-italic"}>
          {" "}
          Lab 2 Code Block{" "}
        </p>
      </div>
      <p>
        Now its your turn to brainstorm and design an experiential exercise for
        the Accessibility to Focus Order lab that was selected for development
        in the previous exercise. Click the <strong> Next</strong> button to
        continue.
      </p>
      <div className={"tw-flex tw-justify-center tw-py-6"}>
        <LabButton label={"Next"} onClick={navToExercise} />
      </div>
    </div>
  );
};

export default ExperientialIntroduction;
