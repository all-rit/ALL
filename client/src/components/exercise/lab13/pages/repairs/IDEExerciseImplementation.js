import React from "react";
import CodeLine from "../../../../../components/all-components/CodeBlock/Components/CodeLine";
import CodeBlockInput from "../../../../../components/all-components/CodeBlock/Components/CodeBlockInput";
import MultiTab from "../../../../../components/all-components/CodeBlock/Components/MultiTab";
import PropTypes from "prop-types";
import ReactText from "../../../../../components/all-components/CodeBlock/StyleComponents/ReactText";
import CommentText from "../../../../../components/all-components/CodeBlock/StyleComponents/CommentText";
import ErrorText from "../../../../../components/all-components/CodeBlock/StyleComponents/ErrorText";

/**
 * IDEExerciseImplementation is a component that is responsible for displaying the codeblock contents
 * and user inputs where the participant will make their changes to the codebase and complete the IDE exercise section.
 * @param {props} inputs contains the data used for answer validation and display of its contents
 * @param {props} userInput is a function that takes the user's input in each input and sends the data to the useDataService hook,
 * which then sends that to the useLabService hook
 * @param {props} validInputs returns an object based on the number of correct and incorrect inputs of the user in the exercise section
 * @param {props} isFirst returns a boolean value of whether or not this is the first time a user is viewing this exercise section
 * @returns
 */

const IDEExerciseImplementation = (props = {}) => {
  const { inputs, userInput, validInputs, isFirst } = props;

  return (
    <>
      <CodeLine>
        <ReactText>const addDisclaimers = &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <CommentText>{`// Enter a disclaimer of at least 20 characters, including the words "verify" and "output".`}</CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <ReactText>disclaimerText = </ReactText>
        <ReactText>{'"'}</ReactText>
        <CodeBlockInput
          value={inputs.find((i) => i.id === "disclaimer")?.value || ""}
          attributes={{
            type: "text",
            onChange: (e) => userInput("disclaimer", e.target.value),
            placeholder: "Enter Answer Here",
          }}
        />
        <ReactText>{'"'}</ReactText>
        <ReactText>;</ReactText>
        {validInputs.disclaimer === false && !isFirst && (
          <CodeLine>
            <MultiTab numberOfTabs={1} />
            <ErrorText>Please enter the correct disclaimer.</ErrorText>
          </CodeLine>
        )}
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <CommentText>{`// Enter 'true' below:`}</CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <ReactText>showConfidenceScores = </ReactText>
        <CodeBlockInput
          value={inputs.find((i) => i.id === "confidence")?.value || ""}
          attributes={{
            type: "text",
            onChange: (e) => userInput("confidence", e.target.value),
            placeholder: "Enter Answer Here",
          }}
        />
        <ReactText>;</ReactText>
        {validInputs.confidence === false && !isFirst && (
          <ErrorText>Please enter {'"true"'}.</ErrorText>
        )}
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <CommentText>{`// Enter 'true' below:`}</CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <ReactText>showCitations = </ReactText>
        <CodeBlockInput
          value={inputs.find((i) => i.id === "citations")?.value || ""}
          attributes={{
            type: "text",
            onChange: (e) => userInput("citations", e.target.value),
            placeholder: "Enter Answer Here",
          }}
        />
        <ReactText>;</ReactText>
        {validInputs.citations === false && !isFirst && (
          <ErrorText>Please enter {'"true"'}.</ErrorText>
        )}
      </CodeLine>
      <CodeLine>
        <ReactText>&#125;</ReactText>
      </CodeLine>
    </>
  );
};

IDEExerciseImplementation.propTypes = {
  inputs: PropTypes.array.isRequired,
  userInput: PropTypes.func.isRequired,
  validInputs: PropTypes.object.isRequired,
  isFirst: PropTypes.bool.isRequired,
};

export default IDEExerciseImplementation;
