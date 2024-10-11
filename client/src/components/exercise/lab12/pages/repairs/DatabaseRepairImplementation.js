import React from "react";
import CodeLine from "../../../../all-components/CodeBlock/Components/CodeLine";
import SQLText from "../../../../all-components/CodeBlock/StyleComponents/SQLText";
import MultiTab from "../../../../all-components/CodeBlock/Components/MultiTab";
import CodeBlockInput from "../../../../all-components/CodeBlock/Components/CodeBlockInput";
import PropTypes from "prop-types";
import CommentText from "../../../../all-components/CodeBlock/StyleComponents/CommentText";
import ErrorText from "../../../../all-components/CodeBlock/StyleComponents/ErrorText";
import IdentityDatabaseData from "../../../../../constants/lab12/DatabaseRepair";
const DatabaseRepairImplementation = (props = {}) => {
  /**
   * DatabaseRepairImplementation is a component that is responsible for displaying the codeblock contents
   * and user inpunts where the participant will make their changes to the codebase and complete the repair section.
   * @param {props} identityData contains the data used for answer validation and display of it's contents
   * @param {props} userInput is a function that takes the user's input in each input and sends the data to the useDataService hook,
   * which then sends that to the useLabService hook
   * @param {props} isInputValid returns an array based on the number of correct and incorrect inputs of the user in the repair section
   * @param {props} isFirst returns a boolean value of whether or not this is the first time a user is viewing this repair section
   * @returns
   */

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
          // Enter &apos;he/him&apos;, &apos;she/her&apos;,
          &apos;they/them&apos;
        </CommentText>
      </CodeLine>
      {identityData
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
              <SQLText>)</SQLText>
            </CodeLine>
            {!isInputValid[index] && !isFirst && (
              <CodeLine>
                <MultiTab numberOfTabs={11} />
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
        <CommentText>// Enter varchar(255)</CommentText>
      </CodeLine>
      {identityData
        .filter((item) => item.id === 1)
        .map((item, index) => (
          <div key={index}>
            <CodeLine>
              <MultiTab numberOfTabs={2} />
              <SQLText>{item.variable}</SQLText>
              <MultiTab numberOfTabs={4} />
              &nbsp;
              {userInput ? (
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
                <MultiTab numberOfTabs={11} />
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
  userInput: PropTypes.func,
  isInputValid: PropTypes.array,
  isFirst: PropTypes.bool,
  identityData: PropTypes.array,
};

export default DatabaseRepairImplementation;
