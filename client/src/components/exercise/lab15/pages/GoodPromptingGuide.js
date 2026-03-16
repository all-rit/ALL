import { navigate } from "@reach/router";
import LabButton from "src/components/all-components/LabButton";

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
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-4 tw-flex-1 tw-min-h-[50vh]">
        {gcse_content.map((item, index) => (
          <div key={item.letter} className="tw-relative tw-h-full">
            {/* Black dividers between the columns. First one is mobile, second is larger screen. */}
            {index > 0 && (
              <>
                <div className="lg:tw-hidden tw-absolute tw-left-8 tw-right-8 tw-top-0 tw-h-px tw-bg-black" />
                <div className="tw-hidden lg:tw-block tw-absolute tw-bottom-6 tw-left-0 tw-top-6 tw-w-px tw-bg-black" />
              </>
            )}
            <div className="tw-px-8 tw-py-6 lg:tw-py-0 tw-h-full">
              <div
                className={`tw-w-20 tw-h-20 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-3xl tw-font-bold tw-mb-4 tw-mx-auto tw-border-4 tw-border-solid ${circleStyles[index]}`}
              >
                {item.letter}
              </div>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <LabButton
        onClick={() => navigate("/Lab15/Exercise/model-repair")}
        key="goodPromptingNext"
        label="Next"
      ></LabButton>
    </div>
  );
};

export default GoodPromptingGuide;
