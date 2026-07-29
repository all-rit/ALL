import PropTypes from "prop-types";

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

  const difSquares = [];

  let i = 0;
  while (i < circles) {
    if (i < circlesFilled) {
      difSquares.push(
        <div key={i} className="tw-m-0.5 tw-bg-success tw-p-2 tw-mx-2"></div>,
      );
    } else {
      difSquares.push(
        <div key={i} className="tw-m-0.5 tw-bg-primary-yellow"></div>,
      );
    }
    i++;
  }

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-my-3">
      <div className="tw-shadow-lg tw-w-full tw-flex tw-flex-row tw-rounded-lg tw-relative">
        {/* Left */}
        <img // image was an unrecognized tag in the browser
          src={imageURL}
          className="tw-w-1/12 tw-object-cover tw-rounded-l-lg tw-align-middle"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          alt="Image of Wrench created by Google Gemini"
        />
        <div className="tw-flex-row tw-space-y-5 tw-p-5 sm:tw-space-y-0">
          <div className="tw-flex tw-flex-row tw-items-baseline tw-justify-start">
            <p className="tw-body-text">{circlesLabel}: </p>
            {difSquares}
          </div>
          <p className={"tw-font-poppins tw-font-bold tw-text-md tw-text-left"}>
            {title}
          </p>
        </div>
        <div className="tw-absolute tw-right-0 tw-top-10 sm:tw-top-5">
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
