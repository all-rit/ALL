import { Tab } from "../../../../all-components/Tab/Tab";
import ProgressBar from "src/components/all-components/ProgressBar";
import AllPediaImage from "../AIPanel/AllPediaImage";
import PropTypes from "prop-types";
import { renderTextWithHighlight } from "../../functions/RenderTextWithHighlight";
import { getAnswerDataHighlights } from "../../functions/getAnswerDataHighlights";

const AllPediaTab = ({
  wikipediaContent,
  requireWikipedia,
  currentDisplayTime,
  currentAnswerData,
  currentQuestion,
  activeTopic,
}) => {
  return (
    <Tab label="ALLpedia">
      <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-bg-white tw-overflow-auto">
        {/* Header with Title and Timer */}
        <div className="tw-bg-gradient-to-r tw-from-blue-50 tw-to-blue-100 tw-p-6 tw-border-b tw-border-blue-200">
          <div className="tw-grid tw-grid-cols-3 tw-items-center tw-max-w-6xl tw-mx-auto tw-gap-4">
            {/* Left: Empty spacer for balance */}
            <div className="tw-w-full">{/* Empty div for grid balance */}</div>

            {/* Title */}
            <div className="tw-text-center">
              <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800">
                {wikipediaContent.title}
              </h1>
            </div>

            {/* Timer */}
            <div className="tw-flex tw-justify-end">
              {requireWikipedia && (
                <div className="tw-flex tw-flex-col tw-items-end">
                  {currentDisplayTime >= 15 ? (
                    <div className="tw-flex tw-items-center tw-gap-2">
                      <span className="tw-text-3xl tw-text-green-600">✓</span>
                      <span className="tw-text-lg tw-font-semibold tw-text-green-600">
                        Complete
                      </span>
                    </div>
                  ) : (
                    <ProgressBar
                      duration={15 - currentDisplayTime}
                      disableTitle
                      className="tw-w-36"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Text on left and image on right */}
        <div className="tw-flex-1 tw-p-8">
          <div className="tw-max-w-6xl tw-mx-auto tw-grid tw-grid-cols-2 tw-gap-8">
            {/* Left: Text Content */}
            <div className="tw-pr-4">
              <div className="tw-prose tw-prose-lg">
                {wikipediaContent.text.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="tw-text-gray-700 tw-leading-relaxed tw-mb-4 tw-text-left"
                  >
                    {renderTextWithHighlight(
                      paragraph,
                      getAnswerDataHighlights(
                        currentAnswerData,
                        currentQuestion,
                        activeTopic,
                      ),
                    )}
                  </p>
                ))}
              </div>
            </div>
            <AllPediaImage wikipediaContent={wikipediaContent} />
          </div>

          {/* Sources at bottom */}
          <div className="tw-max-w-6xl tw-mx-auto tw-mt-12 tw-pt-6 tw-border-t tw-border-gray-200">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mb-3">
              Sources:
            </h3>
            <ul className="tw-list-none tw-space-y-2">
              {wikipediaContent.sources.map((source, index) => (
                <li key={index}>
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-text-blue-600 hover:tw-text-blue-800 tw-underline tw-break-all"
                  >
                    {source}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Tab>
  );
};

AllPediaTab.propTypes = {
  wikipediaContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  requireWikipedia: PropTypes.bool.isRequired,
  currentDisplayTime: PropTypes.number.isRequired,
  currentAnswerData: PropTypes.object.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  activeTopic: PropTypes.string.isRequired,
};

export default AllPediaTab;
