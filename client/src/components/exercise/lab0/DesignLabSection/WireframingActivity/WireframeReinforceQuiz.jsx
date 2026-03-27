import React, { useContext } from "react";
import FauxFigma from "../../../../all-components/FauxFigma";
import ReinforcementFigma from "../../../../../assets/images/lab0/Lab0-ReinforcementFigma.PNG";
import QuizFigma from "../../../../../assets/images/lab0/Lab0-QuizFigma.PNG";
import LabButton from "../../../../all-components/LabButton";
import lab0Context from "../../Lab0Context";

const WireframeReinforceQuiz = () => {
  const { handleNav } = useContext(lab0Context);

  const navigateNext = () => {
    handleNav("WireframeComponents");
  };

  return (
    <div className={"tw-text-left"}>
      <h3 className="tw-text-2xl tw-font-bold tw-pt-4">Reinforcement</h3>
      <p className={"tw-body-text tw-pt-2"}>
        The <strong>Reinforcement</strong> section is a recap of the topic with
        the opportunity to provide additional supplemental material. Additional
        readings and multimedia can be used.
      </p>
      <h3 className="tw-text-2xl tw-font-bold tw-pt-4">Quiz</h3>
      <p className={"tw-body-text tw-pt-2"}>
        The <strong>Quiz</strong> section is a chance to test the user on the
        topic of the lab. It typically involves 4-7 multiple answer questions
        related to the topic, which the user must choose one or multiple
        answers. Once the user has submitted their answers, they will receive
        their results and a certificate of completion for the lab.
      </p>
      <FauxFigma>
        <div className={"tw-w-full tw-grid tw-grid-cols-2 tw-gap-3"}>
          <img
            className={"tw-flex"}
            src={ReinforcementFigma}
            alt={"Reinforcement Figma Design"}
          />
          <img
            className={"tw-flex"}
            src={QuizFigma}
            alt={"Quiz Figma Design"}
          />
        </div>
      </FauxFigma>
      <p className="tw-body-text tw-justify-self-center">
        Click the <strong> Next</strong> button to continue.
      </p>
      <div className={"tw-flex tw-justify-center tw-py-6"}>
        <LabButton label={"Next"} onClick={navigateNext} />
      </div>
    </div>
  );
};

export default WireframeReinforceQuiz;
