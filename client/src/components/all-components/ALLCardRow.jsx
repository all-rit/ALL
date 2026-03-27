import PropTypes from 'prop-types';

/**
 * A standard ALL component that displays an image, a title, and a button in a row.
 * This component also adds a generic indicator level using circles that is shown
 * above the title. The component is displayed in a row in the following order, left to right:
 * image -> title and circles -> button.
 *
 * @param {any} props.children The content to be shown as secondary information below the row.
 * @param {string} props.title The title of this row, to be shown in the middle of the row.
 * @param {string} props.imageURL The relative path to an image to be shown at the start of the row.
 * @param {string} props.circlesLabel The text to be shown inline before the filled in circles.
 * @param {number} props.circles The number of total circles to display.
 * @param {number} props.circlesFilled The number of circles that are filled in. Must be less than {@link props.circles}.
 * @param {string} props.buttonLabel The text to be displayed within the button.
 * @param {string} props.buttonStyle Custom styling to apply to the default button look.
 * @param {function} props.onClick The function that should be called whenever the button is clicked.
 */
const ALLCardRow = (props) => {
  const {
    title,
    imageURL,
    circlesLabel,
    circles,
    circlesFilled,
    buttonLabel,
    buttonStyle,
    onClick,
  } = props;

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-my-3">
      <div className="tw-shadow-lg tw-w-full tw-h-[5rem] tw-flex tw-flex-row tw-rounded-lg tw-relative">
        {/* Left */}
        <image
          className="tw-w-1/12 tw-object-cover tw-rounded-l-lg tw-align-middle"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          alt={'Image of Wrench created by Google Gemini.'}
        />
        {/* Middle */}
        <div className="tw-p-5">
          <div className="tw-flex tw-flex-row tw-items-baseline tw-justify-start">
            <p className="tw-body-text">{circlesLabel}: </p>
            {new Array({ length: circles }).map((_, i) => {
              return (
                <div
                  key={i}
                  className={`tw-m-0.5 ${i < circlesFilled ? 'tw-bg-success tw-p-2 tw-mx-2' : 'tw-bg-primary-yellow'}`}
                />
              );
            })}
          </div>
          <p className={'tw-font-poppins tw-font-bold tw-text-md tw-text-left'}>
            {title}
          </p>
        </div>
        {/* Right */}
        <div className="tw-absolute tw-right-0 tw-top-5">
          <button type="button" className={buttonStyle} onClick={onClick}>
            {buttonLabel}
          </button>
        </div>
      </div>
      {/* Child Components */}
      <div className="tw-w-full tw-bg-white tw-shadow-lg tw-shadow-t-none tw-overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};

ALLCardRow.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  imageURL: PropTypes.string,
  circlesLabel: PropTypes.string,
  circles: PropTypes.number,
  circlesFilled: PropTypes.number,
  buttonLabel: PropTypes.string,
  buttonStyle: PropTypes.string,
  onClick: PropTypes.func,
};

export default ALLCardRow;
