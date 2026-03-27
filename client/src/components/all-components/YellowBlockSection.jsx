import React, { useRef } from 'react';
import ALLButton from './ALLButton';
import { navigate } from 'react-router-dom';
import LookingAtComputer from '../../assets/images/stockImages/WomanOnComputer.png';
import PropTypes from 'prop-types';

const YellowBlockSection = (props) => {
  const yellowBlock = useRef(null);
  const { title, body } = props;

  const handleNav = () => {
    navigate('/about-us');
  };

  return (
    <div className={'tw-h-[20rem] tw-w-full xs:tw-mb-[5rem] md:tw-mb-[20rem]'}>
      <div
        className={
          'tw-h-3/4 tw-border-t-[4rem] tw-border-r-[1.5rem] tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-yellow tw-bg-primary-yellow'
        }
      >
        <div
          className={
            'tw-h-full tw-flex tw-flex-row tw-justify-center tw-border-t-[.75rem] tw-border-r-[.75rem] tw-rounded-tr-lg tw-border-b-0 tw-border-l-0 tw-border-solid tw-border-primary-blue tw-bg-white'
          }
        >
          <div
            className={`tw-flex xs:tw-flex-col md:tw-flex-row tw-text-left xs:tw-w-full md:tw-w-1/2 md:tw-p-3 xs:tw-p-10 tw-min-h-[15rem]`}
          >
            <div
              className={
                'tw-flex tw-flex-col xs:tw-w-full lg:tw-w-3/4 tw-h-full tw-justify-center'
              }
            >
              <p
                className={
                  'tw-title xs:tw-text-xl md:tw-text-[2rem] tw-my-6 tw-font-poppins tw-leading-3'
                }
              >
                {' '}
                {title}
              </p>
              <p className={'tw-body-text tw-leading-snug'}> {body}</p>
            </div>
            <div
              className={
                'tw-h-full xs:tw-w-full md:tw-w-4/5 tw-flex tw-flex-col tw-items-end tw-justify-center tw-py-5 xs:tw-mt-5 md:tw-mt-0'
              }
            >
              <ALLButton label={'Learn More'} onClick={handleNav}></ALLButton>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          'tw-w-full tw-h-1/2 tw-flex-row tw-justify-center xs:tw-hidden md:tw-flex'
        }
      >
        <div
          ref={yellowBlock}
          className={
            'tw-bg-primary-yellow tw-w-1/2 xs:tw-h-1/2 md:tw-h-3/4 tw-my-[5rem] tw-relative'
          }
        >
          <img
            src={LookingAtComputer}
            aria-label={'Looking at Computer'}
            className={'tw-w-[20rem] tw-absolute tw-left-0 tw-top-0'}
          />
        </div>
      </div>
    </div>
  );
};

YellowBlockSection.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default YellowBlockSection;
