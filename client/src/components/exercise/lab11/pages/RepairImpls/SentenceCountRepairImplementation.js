import ReactText from "../../../../all-components/CodeBlock/StyleComponents/ReactText";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CodeLine from "../../../../all-components/CodeBlock/Components/CodeLine";
import Tab from "../../../../all-components/CodeBlock/Components/Tab";
import CodeBlockInput from "../../../../all-components/CodeBlock/Components/CodeBlockInput";
import CommentText from "../../../../all-components/CodeBlock/StyleComponents/CommentText";
import MultiTab from "src/components/all-components/CodeBlock/Components/MultiTab";
import ErrorText from "src/components/all-components/CodeBlock/StyleComponents/ErrorText";

const SentenceCountRepairImplementation = (props) => {
  const { inputs, userInput, validInputs, isFirst } = props;

  return (
    <>
      {/* Fog Index Calc Function */}
      <CodeLine>
        <CommentText>
          {`// This function calculates the Fog Index of a given letter.`}
        </CommentText>
      </CodeLine>
      <ReactText>
        const fogIndexCalculation = ( letterContent ) =&#62; &#123;
      </ReactText>
      <CodeLine>
        <Tab />{" "}
        <ReactText>
          {" "}
          let wordCount = letterContent.split(&#39; &#39;).length;
        </ReactText>
      </CodeLine>
      {inputs.map((input) => (
        <Fragment key={input.key}>
          <CodeLine>
            <Tab />
            <CommentText>{input.comment}</CommentText>
          </CodeLine>
          <CodeLine>
            <Tab /> <ReactText> let {input.variableName} = </ReactText>
            <CodeBlockInput
              value={input.userInput}
              attributes={{
                onChange: (event) => {
                  userInput(input.id, event.target.value);
                },
                name: input.variableName,
                type: "text",
                placeholder: "Enter Answer Here",
              }}
            />
            <ReactText>;</ReactText>
          </CodeLine>
          {!validInputs[input.id] && !isFirst && (
            <CodeLine>
              <MultiTab numberOfTabs={3} />
              <ErrorText>
                Error in form submission. Please type &quot;
                {input.correct_expression}&quot; and resubmit.
              </ErrorText>
            </CodeLine>
          )}
        </Fragment>
      ))}
      <CodeLine>
        <Tab />{" "}
        <ReactText>
          let fogIndex = ( 0.4 * (wordCount / sentenceCount + 100 *
          (wordCount))).toFixed(4);
        </ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> return &#123; words, fogIndex &#125;;</ReactText>
      </CodeLine>
      <ReactText>&#125;;</ReactText>
      <ReactText>export &#123; fogIndexCalculation &#125;;</ReactText>
    </>
  );
};

SentenceCountRepairImplementation.propTypes = {
  inputs: PropTypes.array,
  userInput: PropTypes.func,
  validInputs: PropTypes.array,
  isFirst: PropTypes.bool,
};

export default SentenceCountRepairImplementation;
