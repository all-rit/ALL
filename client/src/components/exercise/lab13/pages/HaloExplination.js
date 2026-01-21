import { React, useState } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
import RatingModal from "../components/RatingModal";

const HaloExplination = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toneRating, setToneRating] = useState("");
  const [confidenceRating, setConfidenceRating] = useState("");
  const [showTextModal, setShowTextModal] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/AIandSearchPanel");
  };

  return (
    <div>
      Halo Effect Explanation Page
      <button onClick={handleOpenModal}>Open Modal</button>
      <RatingModal
        show={modalOpen}
        setShow={setModalOpen}
        toneRating={toneRating}
        setToneRating={setToneRating}
        confidenceRating={confidenceRating}
        setConfidenceRating={setConfidenceRating}
        onSubmit={() => setShowTextModal(true)}
        showTextModal={showTextModal}
        setShowTextModal={setShowTextModal}
        textModalHeader={
          <div className="tw-text-xl tw-font-bold tw-text-textGray tw-m-3">
            Halo Effect Explanation
          </div>
        }
        textModalBody={
          <div className="tw-p-6 tw-text-center tw-text-base tw-min-h-[24rem] tw-flex tw-items-center tw-justify-center">
            When a single positive or appealing part of an AI system, whether it
            be its tone of voice, aesthetic appeal, or fluency creates a
            favorable emotional response to the user.
          </div>
        }
      />
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default HaloExplination;
