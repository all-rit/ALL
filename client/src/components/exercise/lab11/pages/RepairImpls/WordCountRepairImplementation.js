/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ReactText from "../../../../all-components/CodeBlock/StyleComponents/ReactText";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CodeLine from "../../../../all-components/CodeBlock/Components/CodeLine";
import Tab from "../../../../all-components/CodeBlock/Components/Tab";
import CodeBlockInput from "../../../../all-components/CodeBlock/Components/CodeBlockInput";
import CommentText from "../../../../all-components/CodeBlock/StyleComponents/CommentText";

const WordCountRepairImplementation = (props = {}) => {
  const { fogIndexCalculationData, userInput } = props;

  return (
    <>
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
      {fogIndexCalculationData.map((input) => (
        <Fragment key={input.key}>
          <CodeLine>
            <Tab />
            <CommentText>{input.comment}</CommentText>
          </CodeLine>
          <CodeLine>
            <Tab /> <ReactText> let {input.variableName} = </ReactText>
            {input.userInput ? (
              <CodeBlockInput
                value={input.userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(input.id, event.target.value);
                  },
                  name: input.variableName,
                  type: "text",
                  placeholder: "Enter Word Count Impl Here",
                }}
              />
            ) : (
              <CodeBlockInput
                attributes={{
                  onChange: (event) => {
                    userInput(input.id, event.target.value);
                  },
                  name: input.variableName,
                  type: "text",
                  placeholder: "Enter Word Count Impl Here",
                }}
              />
            )}
            <ReactText>;</ReactText>
          </CodeLine>
        </Fragment>
      ))}
      <CodeLine>
        <Tab />{" "}
        <ReactText>
          let fogIndex = ( 0.4 * (words + 100 * (words))).toFixed(4);
        </ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> return &#123; words, fogIndex &#125;</ReactText>
      </CodeLine>
      <ReactText>&#125;</ReactText>
      <ReactText>export &#123; fogIndexCalculation &#125;</ReactText>
    </>
  );
};

WordCountRepairImplementation.propTypes = {
  userInput: PropTypes.func,
  fogIndexCalculationData: PropTypes.array,
};

export default WordCountRepairImplementation;
