import React from 'react';
import { Frame } from '../components/Frame';
import { navigate } from 'react-router-dom';
import ImagineHeader from '../components/ImagineHeader';

const GalagaInstructions = () => {
  // const fontSize = "xs:tw-text-md xl:tw-text-xl";
  return (
    <>
      <ImagineHeader title="Instructions" />
      {Frame(
        <div className="tw-grid tw-w-[20vw]">
          <p className="tw-body-text">
            You and your teammate will each compete against your chosen
            opponents for 1 minute. The team with the highest combined score
            wins!
          </p>
          <br />
          {/*&apos; is just a apostrophe --> " ' "*/}
          <p className="tw-body-text">
            You will be playing Galaga! Use arrow keys to move and space to
            shoot! Avoid enemy ships or lose points!
          </p>
        </div>,
        () => navigate('/Imagine2025/Galaga'),
        () => navigate('/Imagine2025/OpponentSelection'),
      )}
    </>
  );
};

export default GalagaInstructions;
