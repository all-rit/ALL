import React from "react";
import CodeLine from "../../../../all-components/CodeBlock/Components/CodeLine";
import SQLText from "../../../../all-components/CodeBlock/StyleComponents/SQLText";
import MultiTab from "../../../../all-components/CodeBlock/Components/MultiTab";
import CodeBlockInput from "../../../../all-components/CodeBlock/Components/CodeBlockInput";
import { PropTypes } from "prop-types";
import CommentText from "../../../../all-components/CodeBlock/StyleComponents/CommentText";
import ErrorText from "../../../../all-components/CodeBlock/StyleComponents/ErrorText";
import IdentityDatabaseData from "../../../../../constants/lab12/DatabaseRepair";
const DatabaseRepairImplementation = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { identityData, userInput, isInputValid, isFirst } = props;
  return (
    <>
      <CodeLine>
        <SQLText>CREATE TABLE user_details (</SQLText>
      </CodeLine>
      {IdentityDatabaseData.constData.map((item) => (
        <CodeLine key={item.id}>
          <MultiTab numberOfTabs={2} />
          <SQLText> {item.variable} </SQLText>
          <MultiTab numberOfTabs={item.tabs} />
          {item.spaces}
          <SQLText> {item.dataType} </SQLText>
        </CodeLine>
      ))}

      {/* Pronouns Input */}
      <CodeLine>
        <MultiTab numberOfTabs={11} />
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <CommentText>
          // Enter &lsquo;he/him&rsquo;, &lsquo;she/her&rsquo;,
          &lsquo;they/them&rsquo;
        </CommentText>
      </CodeLine>
      {IdentityDatabaseData.inputData
        .filter((item) => item.id === 0)
        .map((item, index) => (
          <div key={index}>
            <CodeLine>
              <MultiTab numberOfTabs={2} />
              <SQLText>{item.variable}</SQLText>
              <MultiTab numberOfTabs={6} />
              <SQLText> enum (</SQLText>
              {item.userInput ? (
                <CodeBlockInput
                  value={item.userInput}
                  attributes={{
                    onChange: (event) => {
                      userInput(item.id, event.target.value);
                    },
                    name: item.variable,
                    type: "text",
                    placeholder: "Enter Answer Here",
                    className: "p-1 tw-w-[34rem] code_editor__input",
                  }}
                />
              ) : (
                <CodeBlockInput
                  attributes={{
                    onChange: (event) => {
                      userInput(item.id, event.target.value);
                    },
                    name: item.variable,
                    type: "text",
                    placeholder: "Enter Answer Here",
                    className: "p-1 tw-w-[21rem] code_editor__input",
                  }}
                />
              )}
              <SQLText>)</SQLText>
            </CodeLine>
            {!isInputValid[index] && !isFirst && (
              <CodeLine>
                <MultiTab numberOfTabs={3} />
                <ErrorText>
                  Error in form submission. Please enter &quot;
                  {item.correct_expression}&quot; and resubmit.
                </ErrorText>
              </CodeLine>
            )}
          </div>
        ))}

      {/* Preferred Name Input */}
      <CodeLine>
        <MultiTab numberOfTabs={11} />
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <CommentText>// Enter &lsquo;varchar(255)&rsquo;</CommentText>
      </CodeLine>
      {IdentityDatabaseData.inputData
        .filter((item) => item.id === 1)
        .map((item, index) => (
          <div key={index}>
            <CodeLine>
              <MultiTab numberOfTabs={2} />
              <SQLText>{item.variable}</SQLText>
              <MultiTab numberOfTabs={4} />
              &nbsp;
              {item.userInput ? (
                <CodeBlockInput
                  value={item.userInput}
                  attributes={{
                    onChange: (event) => {
                      userInput(item.id, event.target.value);
                    },
                    name: item.variable,
                    type: "text",
                    placeholder: "Enter Answer Here",
                  }}
                />
              ) : (
                <CodeBlockInput
                  attributes={{
                    onChange: (event) => {
                      userInput(item.id, event.target.value);
                    },
                    name: item.variable,
                    type: "text",
                    placeholder: "Enter Answer Here",
                  }}
                />
              )}
            </CodeLine>
            {!isInputValid[index] && !isFirst && (
              <CodeLine>
                <MultiTab numberOfTabs={3} />
                <ErrorText>
                  Error in form submission. Please enter &quot;
                  {item.correct_expression}&quot; and resubmit.
                </ErrorText>
              </CodeLine>
            )}
          </div>
        ))}
      <CodeLine>
        <SQLText>);</SQLText>
      </CodeLine>
    </>
  );
};

DatabaseRepairImplementation.propTypes = {
  userInput: PropTypes.string,
  isInputValid: PropTypes.array,
  isFirst: PropTypes.bool,
  identityData: PropTypes.array,
};

export default DatabaseRepairImplementation;
