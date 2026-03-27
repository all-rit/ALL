import NavigationPane from './NavigationPane';
import SiteAccessibilityButton from '../SiteAccessibilityButton';
import PropTypes from 'prop-types';
import LabFooter from '../../footer/LabFooter';

const LabWindow = (props) => {
  const {
    lab,
    title,
    context,
    quizCompleted,
    setQuizCompleted,
    isImagine,
    children,
    body,
  } = props;

  return (
    <div>
      <div
        className={'xs:tw-flex md:tw-hidden tw-col-span-12 tw-justify-center'}
      >
        <div className={'tw-px-4 tw-z-10 '}>
          <h1 className={'tw-title tw-text-xl'}>{props.title} </h1>
        </div>
      </div>
      <div>
        {/* Blue and Yellow stripes*/}
        <div
          className={
            'tw-fixed tw-grid tw-grid-cols-12 tw-w-lvw tw-gap-y-4 tw-inset-3 tw-grid-rows-6 tw-mt-32'
          }
        >
          <div
            className={
              'tw-mt-16 tw-row-start-1 tw-col-start-1 tw-row-span-2 tw-col-span-12 tw-bg-primary-yellow tw-rounded-bl-lg tw-flex shadow'
            }
          />
          <div
            className={
              'tw-row-span-8 tw-col-span-12 tw-col-start-1 tw-bg-primary-blue tw-rounded-bl-lg tw-flex shadow'
            }
          />
        </div>
        {/* Nav Pane and Lab Window */}
        <div
          className={
            'tw-grid tw-grid-cols-12 tw-row-span-6 tw-p-3 tw-gap-x-[1rem] tw-mb-2 tw-w-full'
          }
        >
          <div
            className={
              'tw-col-start-1 md:tw-col-span-3 xl:tw-col-span-2 tw-mx-2 tw-pt-8'
            }
          >
            <div className={'tw-sticky tw-top-[7.75rem]'}>
              <NavigationPane
                labID={lab}
                title={title}
                context={context}
                quizCompleted={quizCompleted}
                setQuizCompleted={setQuizCompleted}
                isImagine={isImagine}
              />
            </div>
            {body !== 2 && <SiteAccessibilityButton />}
          </div>
          <div
            className={
              'tw-flex tw-mt-[2rem] tw-min-h-[calc(100vh-15rem)] tw-z-10 tw-relative xs:tw-col-start-1 md:tw-col-start-4 xs:tw-col-span-12 tw-p-3 md:tw-col-span-9 xl:tw-col-start-3 xl:tw-col-span-10 tw-bg-white shadow tw-border-solid tw-border-b-0 tw-border-l-0 tw-rounded-tr-xl tw-rounded-bl-xl tw-border-t-primary-blue tw-border-r-primary-blue tw-border-[.5rem] tw-text-center'
            }
          >
            {children}
          </div>
          <div className={'xs:tw-flex md:tw-hidden tw-col-span-12 tw-p-3'}>
            <LabFooter
              context={props.context}
              quizCompleted={props.quizCompleted}
              setQuizCompleted={props.setQuizCompleted}
              isImagine={props.isImagine}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

LabWindow.propTypes = {
  lab: PropTypes.number,
  title: PropTypes.string,
  context: PropTypes.shape({}),
  quizCompleted: PropTypes.bool,
  setQuizCompleted: PropTypes.func,
  isImagine: PropTypes.bool,
  children: PropTypes.any,
  body: PropTypes.number,
};

export default LabWindow;
