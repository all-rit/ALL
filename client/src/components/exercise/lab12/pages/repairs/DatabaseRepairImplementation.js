import React from "react";
import CodeLine from "../../../../all-components/CodeBlock/Components/CodeLine";
import SQLText from "../../../../all-components/CodeBlock/StyleComponents/SQLText";
import MultiTab from "../../../../all-components/CodeBlock/Components/MultiTab";
import CodeBlockInput from "../../../../all-components/CodeBlock/Components/CodeBlockInput";
import { PropTypes } from "prop-types";
import CommentText from "../../../../all-components/CodeBlock/StyleComponents/CommentText";

const DatabaseRepairImplementation = (props) => {
  const { userInput } = props;
  return (
    <>
      <CodeLine>
        <SQLText>CREATE TABLE user_details (</SQLText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <SQLText> id </SQLText>
        <MultiTab numberOfTabs={8} />
        <SQLText> serial </SQLText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <SQLText> firstName </SQLText>
        <MultiTab numberOfTabs={5} />
        &nbsp;&nbsp;
        <SQLText> varchar(255) </SQLText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <SQLText> lastName </SQLText>
        <MultiTab numberOfTabs={6} />
        <SQLText> varchar(255) </SQLText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <SQLText> college </SQLText>
        <MultiTab numberOfTabs={6} />
        &nbsp;
        <SQLText> varchar(255) </SQLText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <SQLText> major </SQLText>
        <MultiTab numberOfTabs={7} />
        <SQLText> varchar(255) </SQLText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <SQLText> graduationTerm </SQLText>
        <MultiTab numberOfTabs={4} />
        <SQLText> varchar(255) </SQLText>
      </CodeLine>
      {/* Pronouns Input */}
      <CodeLine>
        <MultiTab numberOfTabs={11} />
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <CommentText>
          // Enter &lsquo;he/him&rsquo;, &lsquo;she/her&rsquo;,
          &lsquo;they/them&rsquo;
        </CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <SQLText>pronouns</SQLText>
        <MultiTab numberOfTabs={6} />
        <SQLText> enum (</SQLText>
        {userInput ? (
          <CodeBlockInput
            value={userInput}
            attributes={{
              onChange: (event) => {
                userInput(event.target.value);
              },
              // name: item.variableName,
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
              // name: item.input,
              type: "text",
              placeholder: "Enter Answer Here",
            }}
          />
        )}
        <SQLText>)</SQLText>
      </CodeLine>

      {/* Preferred Name Input */}
      <CodeLine>
        <MultiTab numberOfTabs={11} />
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <CommentText>// Enter &lsquo;varchar(255)&rsquo;</CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <SQLText>preferredName</SQLText>
        <MultiTab numberOfTabs={4} />
        &nbsp;
        {userInput ? (
          <CodeBlockInput
            value={userInput}
            attributes={{
              onChange: (event) => {
                userInput(event.target.value);
              },
              // name: item.variableName,
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
              // name: item.input,
              type: "text",
              placeholder: "Enter Answer Here",
            }}
          />
        )}
      </CodeLine>
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
