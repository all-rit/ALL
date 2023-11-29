/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ReactText from "../../../../all-components/CodeBlock/StyleComponents/ReactText";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CodeLine from "../../../../all-components/CodeBlock/Components/CodeLine";
import Tab from "../../../../all-components/CodeBlock/Components/Tab";
import CodeBlockInput from "../../../../all-components/CodeBlock/Components/CodeBlockInput";
import CommentText from "../../../../all-components/CodeBlock/StyleComponents/CommentText";

const ComplexWordCountRepairImplementation = (props = {}) => {
  const { fogIndexCalculationData, userInput } = props;

  return (
    <>
      {/* Syllable Count Calc Function */}
      <CodeLine>
        <CommentText>
          {`// This function counts the number of syllables in a word.`}
        </CommentText>
      </CodeLine>
      <ReactText>const countSyllables = ( word ) =&#62; &#123;</ReactText>
      <CodeLine>
        <Tab /> <ReactText> let syllableCount = 0;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab />{" "}
        <ReactText>
          {" "}
          const vowels = new Set(&#91;&#39;a&#39;, &#39;e&#39;, &#39;i&#39;,
          &#39;o&#39;, &#39;u&#39;, &#39;y&#39;&#93;);
        </ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> if (vowels.has(word&#91;0&#93;)) &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <Tab /> <ReactText> syllableCount++;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> &#125;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab />{" "}
        <ReactText> for (let i = 1; i &#60; word.length; i++) &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <Tab />{" "}
        <ReactText>
          {" "}
          if (vowels.has(word&#91;i&#93;) && !vowels.has(word&#91;i - 1&#93;))
          &#123;
        </ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <Tab /> <Tab /> <ReactText> syllableCount++;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <Tab /> <ReactText> &#125;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> &#125;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> if (word.endsWith(&#39;e&#39;)) &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <Tab /> <ReactText> syllableCount--;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> &#125;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab />{" "}
        <ReactText>
          {" "}
          if (word.endsWith(&#39;le&#39;) && word.length &#62; 2 &&
          !vowels.has(word&#91;word.length - 3&#93;)) &#123;
        </ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <Tab /> <ReactText> syllableCount++;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> &#125;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> if (syllableCount === 0) &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <Tab /> <ReactText> syllableCount++;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> &#125;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab /> <ReactText> return syllableCount;</ReactText>
      </CodeLine>
      <ReactText>&#125;;</ReactText>
      {/* Fog Index Calc Function */}
      <CodeLine>
        <CommentText>
          {`// This function calculates the fog index of a given letter.`}
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
      <CodeLine>
        <Tab />{" "}
        <ReactText>
          {" "}
          let sentenceCount = letterContent.split(&#39;.&#39;).length;
        </ReactText>
      </CodeLine>
      {fogIndexCalculationData.map((input) => (
        <Fragment key={input.key}>
          <CodeLine>
            <Tab />
            <CommentText>{input.comment}</CommentText>
          </CodeLine>
          <CodeLine>
            <Tab />{" "}
            <ReactText>
              {" "}
              let {input.variableName} = letterContent.split(&#39;
              &#39;).filter((word) =&#62;
            </ReactText>
            {input.userInput ? (
              <CodeBlockInput
                value={input.userInput}
                attributes={{
                  onChange: (event) => {
                    userInput(input.id, event.target.value);
                  },
                  name: input.variableName,
                  type: "text",
                  placeholder: "Enter Complex Word Count Impl Here",
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
                  placeholder: "Enter Complex Word Count Impl Here",
                }}
              />
            )}
            <ReactText>).length;</ReactText>
          </CodeLine>
        </Fragment>
      ))}
      <CodeLine>
        <Tab />{" "}
        <ReactText>
          let fogIndex = ( 0.4 * (wordCount / sentenceCount + 100 *
          (complexWordCount / wordCount))).toFixed(4);
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

ComplexWordCountRepairImplementation.propTypes = {
  userInput: PropTypes.func,
  fogIndexCalculationData: PropTypes.array,
};

export default ComplexWordCountRepairImplementation;
