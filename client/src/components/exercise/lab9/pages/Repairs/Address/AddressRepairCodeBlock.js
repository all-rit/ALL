import Tab from "../../../../../all-components/CodeBlock/Components/Tab";
import CodeLine from "../../../../../all-components/CodeBlock/Components/CodeLine";
import MultiTab from "../../../../../all-components/CodeBlock/Components/MultiTab";
import ReactText from "../../../../../all-components/CodeBlock/StyleComponents/ReactText";
import CommentText from "../../../../../all-components/CodeBlock/StyleComponents/CommentText";
import JSONText from "../../../../../all-components/CodeBlock/StyleComponents/JSONText";
import CodeBlockInput from "../../../../../all-components/CodeBlock/Components/CodeBlockInput";
import PropTypes from "prop-types";
import React from "react";
import ErrorText from "../../../../../all-components/CodeBlock/StyleComponents/ErrorText";

const AddressRepairCodeBlock = (props = {}) => {
  const { addressForms, userInput, isInputValid, isFirst } = props;

  return (
    <>
      <ReactText>const AddressFormats = (props) =&#62; &#123;</ReactText>
      {addressForms.map((country, index) => (
        <CodeLine key={index}>
          <Tab />{" "}
          <ReactText>
            {" "}
            const {country.countryVariable} = &ldquo;{country.countryName}
            &rdquo;{" "}
          </ReactText>
        </CodeLine>
      ))}

      <br />

      <CodeLine>
        <Tab /> <ReactText> const addressFormats = &#123; </ReactText>
      </CodeLine>

      {addressForms.map((country, index) => (
        <div key={index}>
          {/* line 1 */}
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText>
              {" "}
              &ldquo;{country.countryVariable}&rdquo; = &#123;
            </ReactText>
          </CodeLine>

          {/* line 2 */}
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <CommentText>{country.comment}</CommentText>
          </CodeLine>

          {/* line 3 */}
          <CodeLine>
            <MultiTab numberOfTabs={3} />
            <JSONText>&ldquo;addressFormat&rdquo; :</JSONText>
            <JSONText>&ldquo;</JSONText>
            {country.userInput ? (
              <CodeBlockInput
                value={country.userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(country.id, event.target.value);
                  },
                  name: country.countryName,
                  type: "text",
                  placeholder: "Enter Address Format Here",
                  // overwrite styling to make input wider
                  className: "p-1 tw-w-[34rem] code_editor__input",
                }}
              />
            ) : (
              <CodeBlockInput
                attributes={{
                  onChange: (event) => {
                    userInput(country.id, event.target.value);
                  },
                  name: country.countryName,
                  type: "text",
                  placeholder: "Enter Address Format Here",
                  className: "p-1 tw-w-[34rem] code_editor__input",
                }}
              />
            )}
            <JSONText>&rdquo;</JSONText>
          </CodeLine>
          {!isInputValid[index] && !isFirst && (
            <CodeLine>
              <MultiTab numberOfTabs={3} />
              <ErrorText>
                Error in form submission. Please type &quot;
                {country.correct_expression}&quot; and resubmit.
              </ErrorText>
            </CodeLine>
          )}

          {/* line 4 */}
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
      <ReactText>export default AddressFormats;</ReactText>
    </>
  );
};

AddressRepairCodeBlock.propTypes = {
  addressForms: PropTypes.array,
  isInputValid: PropTypes.array,
  userInput: PropTypes.func,
  isFirst: PropTypes.bool,
};

export default AddressRepairCodeBlock;
