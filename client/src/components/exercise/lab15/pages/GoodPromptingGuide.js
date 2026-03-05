import { navigate } from "@reach/router";

/**
 * GCSE icon styles
 */
const circleStyles = [
  "tw-bg-white tw-border-primary-blue tw-text-primary-blue",
  "tw-bg-white tw-border-primary-yellow tw-text-primary-yellow",
  "tw-bg-primary-blue tw-text-white tw-border-primary-blue",
  "tw-bg-primary-yellow tw-text-white tw-border-primary-yellow",
];

/**
 * Mapping for each word of GCSE
 */
const gcse_content = [
  {
    letter: "G",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo nisi, rhoncus id mi tempor, ornare tincidunt felis. Sed vitae felis non augue malesuada accumsan. Morbi dui elit, cursus et justo sed, dictum dictum metus. Morbi eget lectus arcu. Suspendisse lectus libero, fringilla vitae rutrum ac, porta eu metus. Vivamus massa lectus, gravida at lectus vel, tincidunt gravida velit. Integer orci dolor, faucibus in venenatis quis, cursus quis lorem.",
  },
  {
    letter: "C",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo nisi, rhoncus id mi tempor, ornare tincidunt felis. Sed vitae felis non augue malesuada accumsan. Morbi dui elit, cursus et justo sed, dictum dictum metus. Morbi eget lectus arcu. Suspendisse lectus libero, fringilla vitae rutrum ac, porta eu metus. Vivamus massa lectus, gravida at lectus vel, tincidunt gravida velit. Integer orci dolor, faucibus in venenatis quis, cursus quis lorem.",
  },
  {
    letter: "S",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo nisi, rhoncus id mi tempor, ornare tincidunt felis. Sed vitae felis non augue malesuada accumsan. Morbi dui elit, cursus et justo sed, dictum dictum metus. Morbi eget lectus arcu. Suspendisse lectus libero, fringilla vitae rutrum ac, porta eu metus. Vivamus massa lectus, gravida at lectus vel, tincidunt gravida velit. Integer orci dolor, faucibus in venenatis quis, cursus quis lorem.",
  },
  {
    letter: "E",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo nisi, rhoncus id mi tempor, ornare tincidunt felis. Sed vitae felis non augue malesuada accumsan. Morbi dui elit, cursus et justo sed, dictum dictum metus. Morbi eget lectus arcu. Suspendisse lectus libero, fringilla vitae rutrum ac, porta eu metus. Vivamus massa lectus, gravida at lectus vel, tincidunt gravida velit. Integer orci dolor, faucibus in venenatis quis, cursus quis lorem.",
  },
];

const GoodPromptingGuide = () => {
  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <h1 className="tw-title tw-text-left">Exercise Start</h1>
        {/* Context about what the GCSE guide is */}
        <p className="tw-body-text tw-my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
      {/* Columns for each term in GCSE */}
      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-flex-1 tw-min-h-[50vh]">
        {gcse_content.map((item, index) => (
          <div
            key={item.letter}
            className="tw-flex tw-flex-col lg:tw-flex-row tw-flex-1"
          >
            <div className="tw-px-8 tw-py-6 lg:tw-py-0 tw-flex-1">
              <div
                className={`tw-w-20 tw-h-20 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-3xl tw-font-bold tw-mb-4 tw-mx-auto tw-border-4 tw-border-solid ${circleStyles[index]}`}
              >
                {item.letter}
              </div>
              {item.content}
            </div>
            {index < gcse_content.length - 1 && (
              <div className="tw-bg-black tw-h-[2px] tw-w-full lg:tw-h-auto lg:tw-w-[2px] tw-my-4 lg:tw-my-0 lg:tw-mx-4" />
            )}
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/Lab15/Exercise/model-repair")}>
        Next
      </button>
    </div>
  );
};

export default GoodPromptingGuide;
