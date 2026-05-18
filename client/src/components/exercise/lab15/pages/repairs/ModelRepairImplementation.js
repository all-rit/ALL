import React from "react";
import PropTypes from "prop-types";
import CodeLine from "src/components/all-components/CodeBlock/Components/CodeLine";
import CodeBlockInput from "src/components/all-components/CodeBlock/Components/CodeBlockInput";
import CommentText from "src/components/all-components/CodeBlock/StyleComponents/CommentText";
import ErrorText from "src/components/all-components/CodeBlock/StyleComponents/ErrorText";
import ReactText from "src/components/all-components/CodeBlock/StyleComponents/ReactText";
import MultiTab from "src/components/all-components/CodeBlock/Components/MultiTab";

const ModelRepairImplementation = (props = {}) => {
  const { inputs, userInput, validInputs, isFirst } = props;
  const repairVariableName = inputs[0]?.variableName;

  return (
    <>
      <CodeLine>
        <ReactText>
          const ALLeOutputConfig = (user_prompt) =&gt; &#123;
        </ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <CommentText>
          {
            "// Set this to True to enable ALL-IE to grade the prompts that are given to it."
          }
        </CommentText>
      </CodeLine>

      {inputs.map((item) => (
        <div key={item.id}>
          <CodeLine>
            <MultiTab numberOfTabs={2} />
            <ReactText>{item.variableName} = </ReactText>
            <CodeBlockInput
              value={item.userInput}
              attributes={{
                onChange: (event) => {
                  userInput(item.id, event.target.value);
                },
                name: item.variableName,
                type: "text",
                placeholder: "True or False",
              }}
            />
          </CodeLine>

          {!validInputs[item.id] && !isFirst && (
            <CodeLine>
              <MultiTab numberOfTabs={2} />
              <ErrorText>
                Error in form submission. Please enter &quot;
                {item.correct_expression}
                &quot; and resubmit.
              </ErrorText>
            </CodeLine>
          )}
        </div>
      ))}

      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <CommentText>
          {
            "// Return this flag so ALLe can grade prompt quality with its response."
          }
        </CommentText>
      </CodeLine>

      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <ReactText>{`return ${repairVariableName};`}</ReactText>
      </CodeLine>

      <CodeLine>
        <ReactText>{"}"}</ReactText>
      </CodeLine>
    </>
  );
};

ModelRepairImplementation.propTypes = {
  inputs: PropTypes.array,
  userInput: PropTypes.func,
  validInputs: PropTypes.array,
  isFirst: PropTypes.bool,
};

export default ModelRepairImplementation;
