/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Circle from '../components/circle';

/*
Component for displaying the instructions at the bottom of the page of the
individual.
*/
const Instructions = ({
  correctColor,
  incorrectColorOne,
  incorrectColorTwo,
}) => {
  return (
    <div>
      <div className="instruction tw-flex tw-flex-row tw-mx-3 tw-justify-between">
        <div
          className={
            'tw-flex tw-flex-row tw-gap-x-6 tw-align-middle tw-justify-start tw-items-center'
          }
        >
          <p className="tw-body-text tw-pl-6 tw-leading-snug tw-text-right tw-w-3/4">
            When this colored circle pops up, click it!
          </p>
          <div className="">
            <Circle color={correctColor} />
          </div>
        </div>
        <div
          className={
            'tw-flex tw-flex-row tw-align-middle tw-justify-end tw-items-center'
          }
        >
          <p className="tw-w-1/2 tw-body-text tw-leading-snug tw-text-right ">
            When either of these colored circles pop up, don't click them!
          </p>
          <div className="circles tw-p-6 tw-gap-x-4">
            <div className="">
              <Circle color={incorrectColorOne} />
            </div>
            <div className="">
              <Circle color={incorrectColorTwo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
