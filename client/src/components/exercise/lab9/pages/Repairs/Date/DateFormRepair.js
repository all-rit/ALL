import ReactText from "../../../../../all-components/CodeBlock/StyleComponents/ReactText";
import CodeLine from "../../../../../all-components/CodeBlock/Components/CodeLine";
import Tab from "../../../../../all-components/CodeBlock/Components/Tab";
import CommentText from "../../../../../all-components/CodeBlock/StyleComponents/CommentText";
import JSONText from "../../../../../all-components/CodeBlock/StyleComponents/JSONText";
import CodeBlockInput from "../../../../../all-components/CodeBlock/Components/CodeBlockInput";
import MultiTab from "../../../../../all-components/CodeBlock/Components/MultiTab";
import React from "react";
import PropTypes from "prop-types";
import ErrorText from "../../../../../all-components/CodeBlock/StyleComponents/ErrorText";

const DateFormRepair = (props = {}) => {
  const { dateForms, userInput, isInputValid, isFirst } = props;
  return (
    <>
      <ReactText>const DateForm = (props) =&#62; &#123;</ReactText>
      {dateForms.map((country, index) => (
        <CodeLine key={index}>
          <Tab />{" "}
          <ReactText>
            {" "}
            const {country.countryVariable} = &ldquo;{country.countryName}
            &rdquo;{" "}
          </ReactText>
        </CodeLine>
      ))}

      <CodeLine>
        <Tab /> <ReactText> const dates = &#123; </ReactText>
      </CodeLine>

      {dateForms.map((country, index) => (
        <div key={index}>
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText>
              {" "}
              &ldquo;{country.countryVariable}&rdquo; = &#123;
            </ReactText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <CommentText>{country.comment}</CommentText>
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <JSONText> &ldquo;dateform&rdquo; : </JSONText>
            {country.userInput ? (
              <CodeBlockInput
                value={country.userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(country.id, event.target.value);
                  },
                  name: country.name,
                  type: "text",
                  placeholder: "Enter Dateform Here",
                }}
              />
            ) : (
              <CodeBlockInput
                attributes={{
                  onChange: (event) => {
                    userInput(country.id, event.target.value);
                  },
                  name: country.name,
                  type: "text",
                  placeholder: "Enter Dateform Here",
                }}
              />
            )}
          </CodeLine>
          {!isInputValid[index] && !isFirst && (
            <CodeLine>
              <MultiTab numberOfTabs={3} />
              <ErrorText>
                Error in form submission. Please enter &quot;
                {country.correct_expression}&quot; and resubmit.
              </ErrorText>
            </CodeLine>
          )}
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText> &#125;, </ReactText>
          </CodeLine>
        </div>
      ))}
      <CodeLine>
        <Tab />
        <ReactText> &#125; </ReactText>
      </CodeLine>
      <ReactText>&#125;</ReactText>
      <ReactText>export default DateForm;</ReactText>
    </>
  );
};
DateFormRepair.propTypes = {
  userInput: PropTypes.func,
  dateForms: PropTypes.array,
  isInputValid: PropTypes.array,
  isFirst: PropTypes.bool,
};

export default DateFormRepair;
