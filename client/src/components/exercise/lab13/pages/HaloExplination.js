import { React, useState } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";
// import ALLModal from "src/components/all-components/ALLModal";
import ALLModal from "src/components/all-components/ALLModal";

const HaloExplination = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
      <ALLModal
        show={modalOpen}
        setShow={setModalOpen}
        showHeader={true}
        customHeader={
          <div className="tw-text-base tw-font-medium tw-text-textGray tw-m-3 tw-">
            Rate each factor by it&apos;s influence on your trust.
          </div>
        }
        showFooter={false}
        customBody={<div>hi</div>}
        // timeOutTime={2}
      />
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default HaloExplination;
