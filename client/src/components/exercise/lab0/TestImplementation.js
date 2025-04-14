/* eslint-disable react/prop-types */

import React, { Fragment } from "react";
import CodeBlockInput from "src/components/all-components/CodeBlock/Components/CodeBlockInput";
import CodeLine from "src/components/all-components/CodeBlock/Components/CodeLine";
import ErrorText from "src/components/all-components/CodeBlock/StyleComponents/ErrorText";
import ReactText from "src/components/all-components/CodeBlock/StyleComponents/ReactText";

const TestImplementation = (props) => {
  const { inputs, userInput, validInputs, isFirst } = props;

  return (
    <>
      <ReactText>Testing 123</ReactText>
      {inputs.map((input) => (
        <Fragment key={input.id}>
          <CodeLine>
            <ReactText>Here is some input: </ReactText>
            {input.userInput ? (
              <CodeBlockInput
                value={input.userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(input.id, event.target.value);
                  },
                  type: "text",
                  placeholder: "Enter Answer Here",
                }}
              />
            ) : (
              <CodeBlockInput
                attributes={{
                  onChange: (event) => {
                    userInput(input.id, event.target.value);
                  },
                  type: "text",
                  placeholder: "Enter Answer Here",
                }}
              />
            )}
          </CodeLine>
          {!validInputs[input.id] && !isFirst && (
            <CodeLine>
              <ErrorText>
                Error in form submission. Please type &quot;
                {input.correct_expression}&quot; and resubmit.
              </ErrorText>
            </CodeLine>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default TestImplementation;
