import React from "react";
import CodeLine from "../../../../all-components/CodeBlock/Components/CodeLine";
import SQLText from "../../../../all-components/CodeBlock/StyleComponents/SQLText";
import MultiTab from "../../../../all-components/CodeBlock/Components/MultiTab";
import CodeBlockInput from "../../../../all-components/CodeBlock/Components/CodeBlockInput";
import { PropTypes } from "prop-types";
import CommentText from "../../../../all-components/CodeBlock/StyleComponents/CommentText";
import DatabaseFormData from "../../../../../constants/lab12/DatabaseRepair";
const DatabaseRepairImplementation = (props) => {
  const { userInput } = props;
  return (
    <>
      <CodeLine>
        <SQLText>CREATE TABLE user_details (</SQLText>
      </CodeLine>
      {DatabaseFormData.constData.map((item) => (
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
      {DatabaseFormData.inputData
        .filter((item) => item.id === 0)
        .map((item, index) => (
          <CodeLine key={index}>
            <MultiTab numberOfTabs={2} />
            <SQLText>{item.variable}</SQLText>
            <MultiTab numberOfTabs={6} />
            <SQLText> enum (</SQLText>
            {item.userInput ? (
              <CodeBlockInput
                value={userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(event.target.value);
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
                    userInput(event.target.value);
                  },
                  name: item.variable,
                  type: "text",
                  placeholder: "Enter Answer Here",
                }}
              />
            )}
            <SQLText>)</SQLText>
          </CodeLine>
        ))}

      {/* Preferred Name Input */}
      <CodeLine>
        <MultiTab numberOfTabs={11} />
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <CommentText>// Enter &lsquo;varchar(255)&rsquo;</CommentText>
      </CodeLine>
      {DatabaseFormData.inputData
        .filter((item) => item.id === 1)
        .map((item, index) => (
          <CodeLine key={index}>
            <MultiTab numberOfTabs={2} />
            <SQLText>{item.variable}</SQLText>
            <MultiTab numberOfTabs={4} />
            &nbsp;
            {item.userInput ? (
              <CodeBlockInput
                value={userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(event.target.value);
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
                    userInput(event.target.value);
                  },
                  name: item.variable,
                  type: "text",
                  placeholder: "Enter Answer Here",
                }}
              />
            )}
          </CodeLine>
        ))}
      <CodeLine>
        <SQLText>);</SQLText>
      </CodeLine>
    </>
  );
};

DatabaseRepairImplementation.propTypes = {
  userInput: PropTypes.string,
};

export default DatabaseRepairImplementation;
