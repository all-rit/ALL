import PropTypes from 'prop-types';
import {
  Add,
  Edit,
  InterestsOutlined,
  KeyboardArrowDown,
  Numbers,
  Search,
  SelectAll,
  SquareOutlined,
  TitleRounded,
} from '@mui/icons-material';

const FauxFigma = (props) => {
  const { children } = props;

  return (
    <div className={'tw-w-full tw-text-white tw-py-6'}>
      <div className={'tw-grid tw-grid-cols-10 tw-h-full tw-overflow-hidden'}>
        <div
          className={
            'tw-flex tw-col-span-2 tw-bg-[rgb(44,44,44)] tw-rounded-l-lg tw-border-[rgb(68,68,68)] tw-border-solid tw-border-[0.5px] tw-h-[30rem] tw-flex-col tw-justify-center'
          }
        >
          <div
            className={
              'tw-border-b-[rgb(68,68,68)] tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-[0.5px] tw-p-3'
            }
          >
            <div className={'tw-flex tw-title tw-text-sm'}>
              {' '}
              Amgif <KeyboardArrowDown className={'tw-text-[1.125rem]'} />
            </div>
            <div className={'tw-flex tw-title tw-text-xs'}>
              {' '}
              Lab 14 Exercise <KeyboardArrowDown className={'tw-text-[1rem]'} />
            </div>
            <div className={'tw-text-darkLine tw-body-text tw-text-xs'}>
              Drafts
            </div>
          </div>
          <div
            className={
              'tw-border-b-[rgb(68,68,68)] tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-[0.5px] tw-p-3 tw-flex tw-justify-between tw-items-center'
            }
          >
            <div className={'tw-flex tw-gap-x-2'}>
              <div className={'tw-flex tw-title tw-text-xs'}> File</div>
              <div className={'tw-flex tw-title tw-text-xs tw-text-darkLine'}>
                {' '}
                Assets
              </div>
            </div>
            <div className={'tw-text-darkLine tw-body-text'}>
              <Search />
            </div>
          </div>
          <div
            className={
              'tw-border-b-[rgb(68,68,68)] tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-[0.5px] tw-p-3'
            }
          >
            <div
              className={'tw-flex tw-justify-between tw-py-2 tw-items-center'}
            >
              <div className={'tw-flex tw-title tw-text-sm'}> Pages</div>
              <div className={'tw-text-darkLine tw-body-text'}>
                <Add className={'tw-text-[1.125rem] tw-text-white'} />
              </div>
            </div>
            <div
              className={
                'tw-flex tw-flex-col tw-gap-y-1 tw-title tw-text-xs tw-font-normal'
              }
            >
              <div>About</div>
              <div className={'tw-bg-[rgb(56,56,56)] tw-rounded-md'}>
                Reading
              </div>
              <div>Exercise</div>
              <div>Reinforcement</div>
              <div>Quiz</div>
            </div>
          </div>
          <div className={''}>
            <div
              className={
                'tw-flex tw-flex-col tw-border-b-[rgb(68,68,68)] tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-[0.5px] tw-p-3'
              }
            >
              <div className={'tw-flex tw-title tw-text-xs tw-py-2'}>
                {' '}
                Layers
              </div>
              <div className={'tw-text-xs tw-flex tw-items-center tw-gap-x-2'}>
                <Numbers className={'tw-title tw-text-[1rem]'} />
                Reading Section
              </div>
            </div>
            <div
              className={
                'tw-flex tw-flex-col tw-gap-y-1 tw-title tw-text-sm tw-font-normal tw-p-3'
              }
            >
              <div className={'tw-flex tw-justify-around'}>
                <div className={'tw-text-darkLine'}> T</div>
                <div className={'tw-text-xs'}> Reading Header</div>
              </div>
              <div className={'tw-flex tw-justify-around'}>
                <div className={'tw-text-darkLine'}> T</div>
                <div className={'tw-text-xs'}>Intro Paragraph</div>
              </div>
              <div className={'tw-flex tw-justify-around'}>
                <div className={'tw-text-darkLine'}> T</div>
                <div className={'tw-text-xs'}> Body Paragraph</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            'tw-flex tw-col-span-8 tw-bg-[rgb(30,30,30)] tw-border-l-0 tw-rounded-r-lg tw-p-3 tw-border-[rgb(68,68,68)] tw-border-solid tw-border-[0.5px] tw-h-[30rem] tw-relative'
          }
        >
          {children}
          <div
            className={
              'tw-bg-[rgb(44,44,44)] tw-w-1/2 tw-absolute tw-bottom-5 tw-left-[25%] tw-p-3 tw-rounded-xl tw-border-[rgb(68,68,68)] tw-border-solid tw-border-[0.5px] tw-shadow-xl tw-shadow-[rgb(10,10,10)] tw-flex tw-justify-between'
            }
          >
            <div>
              <SelectAll />
              <KeyboardArrowDown className={'tw-text-sm'} />
            </div>
            <div>
              <Numbers />
              <KeyboardArrowDown className={'tw-text-sm'} />
            </div>
            <div>
              <SquareOutlined />
              <KeyboardArrowDown className={'tw-text-sm'} />
            </div>
            <div>
              <Edit />
              <KeyboardArrowDown className={'tw-text-sm'} />
            </div>
            <TitleRounded />
            <InterestsOutlined />
          </div>
        </div>
      </div>
      <p className={'tw-text-xs tw-text-black tw-text-center tw-italic'}>
        A UI/UX editor interface with all of the sections of a typical ALL lab
        page. The examples shown is of Lab 14 the Accessibility to Focus Order.
      </p>
    </div>
  );
};

FauxFigma.propTypes = {
  children: PropTypes.any,
};

export default FauxFigma;
